"use client";

import { useEffect, useRef, useState } from "react";

type LazyAutoplayVideoProps = {
  className?: string;
  src: string;
  label: string;
};

export function LazyAutoplayVideo({
  className,
  src,
  label
}: LazyAutoplayVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );

    loadObserver.observe(wrapper);
    return () => loadObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Browsers may block autoplay in edge cases; controls remain available.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [shouldLoad]);

  return (
    <div className="lazy-video-shell" ref={wrapperRef}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={className}
          src={src}
          controls
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={label}
        />
      ) : (
        <div className={`${className ?? ""} lazy-video-placeholder`} role="img" aria-label={label}>
          <span />
        </div>
      )}
    </div>
  );
}
