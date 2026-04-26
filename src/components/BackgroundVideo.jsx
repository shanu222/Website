import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPreferences = () => {
      setIsMobile(mediaQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    };

    applyPreferences();
    mediaQuery.addEventListener("change", applyPreferences);
    motionQuery.addEventListener("change", applyPreferences);

    return () => {
      mediaQuery.removeEventListener("change", applyPreferences);
      motionQuery.removeEventListener("change", applyPreferences);
    };
  }, []);

  const shouldRenderVideo = !isMobile && !prefersReducedMotion;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800" />

      {shouldRenderVideo && (
        <video
          className="h-full w-full object-cover"
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      )}

      <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70 transition-colors duration-300" />
    </div>
  );
}
