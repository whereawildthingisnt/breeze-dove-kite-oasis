const FALLBACK = "special-forge-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(FALLBACK);
      let files = ["/offline-manifest.json", "/fonts/fonts.css", "/favicon.svg"];
      try {
        const res = await fetch("/offline-manifest.json");
        if (res.ok) {
          const body = await res.json();
          if (Array.isArray(body.files)) files = body.files;
        }
      } catch {
        /* manifest is optional; runtime cache still fills */
      }
      await Promise.all(
        files.map(async (url) => {
          try {
            await cache.add(url);
          } catch {
            /* a missing route must not fail the install */
          }
        }),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== FALLBACK).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  const baked =
    url.pathname.startsWith("/reno/") ||
    url.pathname.startsWith("/fonts/") ||
    url.pathname.startsWith("/mascot/") ||
    url.pathname.startsWith("/__grok/") ||
    url.pathname === "/favicon.svg" ||
    url.pathname === "/offline-manifest.json";

  event.respondWith(
    (async () => {
      const cache = await caches.open(FALLBACK);
      const hit = await cache.match(req);
      if (baked && hit) return hit;
      try {
        const res = await fetch(req);
        if (res.ok && (baked || url.pathname.startsWith("/assets/") || req.mode === "navigate")) {
          await cache.put(req, res.clone());
        }
        return res;
      } catch {
        if (hit) return hit;
        if (req.mode === "navigate") {
          const shell = await cache.match("/");
          if (shell) return shell;
        }
        return new Response("offline", { status: 503, headers: { "content-type": "text/plain" } });
      }
    })(),
  );
});
