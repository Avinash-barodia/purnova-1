"use client";

import { MotionConfig } from "framer-motion";

import { LeadCapturePopup } from "@/components/LeadCapturePopup";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LeadCapturePopup />
      {children}
    </MotionConfig>
  );
}
