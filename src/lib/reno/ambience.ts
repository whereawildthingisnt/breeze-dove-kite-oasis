import type { Weather } from "./weather";

type Ambience = {
  unlock: () => void;
  setNight: (night: boolean) => void;
  setLevel: (level: number) => void;
  setWeather: (weather: Weather) => void;
  dispose: () => void;
};

function pinkBuffer(ctx: AudioContext, seconds = 4): AudioBuffer {
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buf.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.969 * b2 + white * 0.153852;
    b3 = 0.8665 * b3 + white * 0.3104856;
    b4 = 0.55 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.016898;
    const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    b6 = white * 0.115926;
    data[i] = pink * 0.11;
  }
  return buf;
}

function loop(
  ctx: AudioContext,
  buf: AudioBuffer,
  dest: AudioNode,
  type: BiquadFilterType,
  freq: number,
  q: number,
  gain: number,
) {
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = type;
  filter.frequency.value = freq;
  filter.Q.value = q;
  const g = ctx.createGain();
  g.gain.value = gain;
  src.connect(filter);
  filter.connect(g);
  g.connect(dest);
  src.start();
  return { src, filter, gain: g };
}

export function createCityAmbience(): Ambience {
  const ctx = new AudioContext();
  const master = ctx.createGain();
  master.gain.value = 0;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -18;
  comp.knee.value = 18;
  comp.ratio.value = 2.4;
  comp.attack.value = 0.02;
  comp.release.value = 0.25;
  master.connect(comp);
  comp.connect(ctx.destination);

  const dayBus = ctx.createGain();
  const nightBus = ctx.createGain();
  const rainBus = ctx.createGain();
  const windBus = ctx.createGain();
  dayBus.gain.value = 1;
  nightBus.gain.value = 0;
  rainBus.gain.value = 0;
  windBus.gain.value = 0.03;
  dayBus.connect(master);
  nightBus.connect(master);
  rainBus.connect(master);
  windBus.connect(master);

  const bed = pinkBuffer(ctx, 4);
  const rumble = loop(ctx, bed, dayBus, "lowpass", 110, 0.7, 0.34);
  const mid = loop(ctx, bed, dayBus, "bandpass", 420, 0.45, 0.07);
  const air = loop(ctx, bed, dayBus, "highpass", 1800, 0.5, 0.012);
  const nightRumble = loop(ctx, bed, nightBus, "lowpass", 80, 0.6, 0.22);
  const rain = loop(ctx, bed, rainBus, "highpass", 1400, 0.4, 0.55);
  const wind = loop(ctx, bed, windBus, "bandpass", 260, 0.35, 0.4);

  const hum = ctx.createOscillator();
  hum.type = "sine";
  hum.frequency.value = 60;
  const hum2 = ctx.createOscillator();
  hum2.type = "sine";
  hum2.frequency.value = 120;
  const humGain = ctx.createGain();
  humGain.gain.value = 0.012;
  hum.connect(humGain);
  hum2.connect(humGain);
  humGain.connect(nightBus);
  hum.start();
  hum2.start();

  let dead = false;
  let nightOn = false;
  let timer = 0;
  let dripTimer = 0;
  let wx: Weather = "clear";
  let rainLevel = 0;
  let windLevel = 0.06;

  const tone = (freq: number, dur: number, vol: number, dest: AudioNode, type: OscillatorType = "sine") => {
    if (dead || ctx.state !== "running") return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.92), ctx.currentTime + dur);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    osc.connect(g);
    g.connect(dest);
    osc.start();
    osc.stop(ctx.currentTime + dur + 0.02);
    osc.onended = () => {
      osc.disconnect();
      g.disconnect();
    };
  };

  const passBy = (dest: AudioNode) => {
    if (dead || ctx.state !== "running") return;
    const src = ctx.createBufferSource();
    src.buffer = bed;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.8;
    const now = ctx.currentTime;
    filter.frequency.setValueAtTime(180, now);
    filter.frequency.exponentialRampToValueAtTime(900, now + 1.1);
    filter.frequency.exponentialRampToValueAtTime(160, now + 2.4);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.09, now + 0.9);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
    const pan = ctx.createStereoPanner();
    const side = Math.random() > 0.5 ? 1 : -1;
    pan.pan.setValueAtTime(side * -0.85, now);
    pan.pan.linearRampToValueAtTime(side * 0.85, now + 2.2);
    src.connect(filter);
    filter.connect(g);
    g.connect(pan);
    pan.connect(dest);
    src.start();
    src.stop(now + 2.5);
    src.onended = () => {
      src.disconnect();
      filter.disconnect();
      g.disconnect();
      pan.disconnect();
    };
  };

  const drip = () => {
    if (dead || rainLevel < 0.15 || ctx.state !== "running") return;
    const bursts = wx === "storm" ? 5 : 3;
    for (let i = 0; i < bursts; i++) {
      const src = ctx.createBufferSource();
      src.buffer = bed;
      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 1800 + Math.random() * 3200;
      const g = ctx.createGain();
      const now = ctx.currentTime + Math.random() * 0.18;
      const dur = 0.035 + Math.random() * 0.05;
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.035 * rainLevel, now + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      const pan = ctx.createStereoPanner();
      pan.pan.value = Math.random() * 1.7 - 0.85;
      src.connect(filter);
      filter.connect(g);
      g.connect(pan);
      pan.connect(master);
      src.start(now);
      src.stop(now + dur + 0.02);
      src.onended = () => {
        src.disconnect();
        filter.disconnect();
        g.disconnect();
        pan.disconnect();
      };
    }
  };

  const tick = () => {
    if (dead) return;
    const dest = nightOn ? nightBus : dayBus;
    if (Math.random() < (nightOn ? 0.42 : 0.62)) passBy(dest);
    if (Math.random() < (nightOn ? 0.28 : 0.16)) {
      tone(280 + Math.random() * 50, 0.42, 0.018, dest, "triangle");
      tone(360 + Math.random() * 40, 0.3, 0.01, dest);
    }
    if (nightOn && Math.random() < 0.08) {
      tone(740, 0.55, 0.012, nightBus, "sine");
      tone(880, 0.7, 0.008, nightBus, "sine");
    }
    if (windLevel > 0.08) {
      windBus.gain.setTargetAtTime(windLevel * (0.55 + Math.random() * 0.9), ctx.currentTime, 0.45);
      wind.filter.frequency.setTargetAtTime(wx === "dust" ? 140 + Math.random() * 80 : 240 + Math.random() * 160, ctx.currentTime, 0.4);
    }
    rumble.gain.gain.setTargetAtTime(0.28 + Math.random() * 0.12, ctx.currentTime, 1.1);
    mid.gain.gain.setTargetAtTime(0.045 + Math.random() * 0.035, ctx.currentTime, 0.8);
    timer = window.setTimeout(tick, 2800 + Math.random() * 4200);
  };

  const dripLoop = () => {
    if (dead) return;
    drip();
    dripTimer = window.setTimeout(dripLoop, wx === "storm" ? 180 : 320);
  };

  return {
    unlock() {
      if (ctx.state === "suspended") void ctx.resume();
      master.gain.setTargetAtTime(0.55, ctx.currentTime, 0.12);
      if (!timer) tick();
      if (!dripTimer) dripLoop();
    },
    setNight(night: boolean) {
      nightOn = night;
      const t = ctx.currentTime;
      dayBus.gain.setTargetAtTime(night ? 0.15 : 1, t, 0.8);
      nightBus.gain.setTargetAtTime(night ? 1 : 0.05, t, 0.8);
    },
    setWeather(weather: Weather) {
      wx = weather;
      const t = ctx.currentTime;
      rainLevel = weather === "storm" ? 0.9 : weather === "rain" ? 0.58 : 0;
      windLevel = weather === "storm" ? 0.72 : weather === "wind" ? 0.48 : weather === "dust" ? 0.32 : 0.05;
      rainBus.gain.setTargetAtTime(rainLevel, t, 0.6);
      windBus.gain.setTargetAtTime(windLevel, t, 0.6);
      wind.filter.frequency.setTargetAtTime(weather === "dust" ? 160 : 300, t, 0.5);
      air.gain.gain.setTargetAtTime(weather === "clear" ? 0.016 : 0.008, t, 0.5);
    },
    setLevel(level: number) {
      master.gain.setTargetAtTime(Math.max(0, Math.min(1, level)) * 0.5, ctx.currentTime, 0.15);
    },
    dispose() {
      dead = true;
      window.clearTimeout(timer);
      window.clearTimeout(dripTimer);
      hum.stop();
      hum2.stop();
      rumble.src.stop();
      mid.src.stop();
      air.src.stop();
      nightRumble.src.stop();
      rain.src.stop();
      wind.src.stop();
      void ctx.close();
    },
  };
}
