"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_TRACKING_ID } from "../../../lib/gtag";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag && GA_TRACKING_ID) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
}
