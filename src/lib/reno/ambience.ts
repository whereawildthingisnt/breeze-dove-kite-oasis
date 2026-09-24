type Ambience = {
  unlock: () => void;
  setNight: (night: boolean) => void;
  setLevel: (level: number) => void;
  dispose: () => void;
};

function noiseBuffer(ctx: AudioContext, seconds = 2): AudioBuffer {
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1;
    last = last * 0.96 + white * 0.04;
    data[i] = last;
  }
  return buf;
}

function loopNoise(ctx: AudioContext, buf: AudioBuffer, dest: AudioNode, type: BiquadFilterType, freq: number, gain: number) {
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = type;
  filter.frequency.value = freq;
  filter.Q.value = 0.7;
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
  master.connect(ctx.destination);
  const dayBus = ctx.createGain();
  const nightBus = ctx.createGain();
  dayBus.gain.value = 1;
  nightBus.gain.value = 0;
  dayBus.connect(master);
  nightBus.connect(master);

  const bed = noiseBuffer(ctx, 3);
  const dayBed = loopNoise(ctx, bed, dayBus, "lowpass", 240, 0.55);
  const nightBed = loopNoise(ctx, bed, nightBus, "lowpass", 140, 0.28);
  const murmur = loopNoise(ctx, bed, dayBus, "bandpass", 900, 0.08);
  murmur.filter.Q.value = 0.4;

  const buzz = ctx.createOscillator();
  buzz.type = "sawtooth";
  buzz.frequency.value = 58;
  const buzzFilter = ctx.createBiquadFilter();
  buzzFilter.type = "lowpass";
  buzzFilter.frequency.value = 160;
  const buzzGain = ctx.createGain();
  buzzGain.gain.value = 0.045;
  buzz.connect(buzzFilter);
  buzzFilter.connect(buzzGain);
  buzzGain.connect(nightBus);
  buzz.start();

  const barA = ctx.createOscillator();
  const barB = ctx.createOscillator();
  barA.type = "triangle";
  barB.type = "triangle";
  barA.frequency.value = 196;
  barB.frequency.value = 247;
  const barGain = ctx.createGain();
  barGain.gain.value = 0.03;
  barA.connect(barGain);
  barB.connect(barGain);
  barGain.connect(nightBus);
  barA.start();
  barB.start();

  let dead = false;
  let nightOn = false;
  let timer = 0;

  const blip = (freq: number, dur: number, vol: number, dest: GainNode, type: OscillatorType = "square") => {
    if (dead || ctx.state !== "running") return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(vol, ctx.currentTime + 0.02);
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

  const whoosh = (dest: GainNode) => {
    if (dead || ctx.state !== "running") return;
    const src = ctx.createBufferSource();
    src.buffer = bed;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 1.2;
    filter.frequency.setValueAtTime(180, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.7);
    filter.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 1.5);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    const pan = ctx.createStereoPanner();
    pan.pan.setValueAtTime(Math.random() > 0.5 ? -0.7 : 0.7, ctx.currentTime);
    src.connect(filter);
    filter.connect(g);
    g.connect(pan);
    pan.connect(dest);
    src.start();
    src.stop(ctx.currentTime + 1.6);
    src.onended = () => {
      src.disconnect();
      filter.disconnect();
      g.disconnect();
      pan.disconnect();
    };
  };

  const tick = () => {
    if (dead) return;
    if (nightOn) {
      blip(3800 + Math.random() * 800, 0.05, 0.012, nightBus, "sine");
      if (Math.random() < 0.25) blip(4200 + Math.random() * 400, 0.04, 0.01, nightBus, "sine");
      if (Math.random() < 0.18) whoosh(nightBus);
      timer = window.setTimeout(tick, 380 + Math.random() * 900);
    } else {
      if (Math.random() < 0.45) whoosh(dayBus);
      if (Math.random() < 0.28) {
        blip(392, 0.18, 0.04, dayBus);
        blip(494, 0.16, 0.03, dayBus);
      }
      dayBed.filter.frequency.setTargetAtTime(180 + Math.random() * 220, ctx.currentTime, 0.4);
      timer = window.setTimeout(tick, 2400 + Math.random() * 4200);
    }
  };

  return {
    unlock() {
      if (ctx.state === "suspended") void ctx.resume();
      master.gain.setTargetAtTime(0.42, ctx.currentTime, 0.08);
      if (!timer) tick();
    },
    setNight(night: boolean) {
      nightOn = night;
      const t = ctx.currentTime;
      dayBus.gain.setTargetAtTime(night ? 0.08 : 1, t, 0.6);
      nightBus.gain.setTargetAtTime(night ? 1 : 0.04, t, 0.6);
    },
    setLevel(level: number) {
      master.gain.setTargetAtTime(Math.max(0, Math.min(1, level)) * 0.42, ctx.currentTime, 0.15);
    },
    dispose() {
      dead = true;
      window.clearTimeout(timer);
      buzz.stop();
      barA.stop();
      barB.stop();
      dayBed.src.stop();
      nightBed.src.stop();
      murmur.src.stop();
      void ctx.close();
    },
  };
}
