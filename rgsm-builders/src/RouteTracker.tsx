import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-YWWTRFHJ9S", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null; // nothing visible
}
