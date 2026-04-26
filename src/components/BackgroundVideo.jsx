import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const attemptPlayback = async () => {
      try {
        await videoEl.play();
      } catch {
        setShowVideo(false);
      }
    };

    attemptPlayback();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800" />

      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="fixed inset-0 h-full w-full object-cover -z-10"
          onError={() => setShowVideo(false)}
        >
          <source src="/videos/bg-optimized.mp4" type="video/mp4" />
        </video>
      )}

      <div className="fixed inset-0 -z-10 bg-black/40 transition-colors duration-300 dark:bg-slate-900/60" />
    </div>
  );
}
