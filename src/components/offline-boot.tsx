import { useEffect } from "react";
import { registerOffline } from "@/lib/offline";

export function OfflineBoot() {
  useEffect(() => {
    registerOffline();
  }, []);
  return null;
}
