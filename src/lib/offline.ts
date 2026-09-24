export function isOffline(): boolean {
  return typeof navigator !== "undefined" && navigator.onLine === false;
}

export function registerOffline(): void {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  void navigator.serviceWorker.register("/sw.js").catch(() => {});
}
