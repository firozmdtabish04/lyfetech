import { useEffect, useState } from "react";


  // Dynamic rotation every 8 seconds
  export default function NewsTicker({
  news = [],
  speed = 25,
  reverse = false,
  label = "Latest",
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 border-y border-yellow-300 shadow-md group">

      {/* Animated Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black/20">
        <div className="h-full w-1/3 bg-black animate-glow-line"></div>
      </div>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-yellow-400 via-yellow-400/90 to-transparent z-20 pointer-events-none"></div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-yellow-400 via-yellow-400/90 to-transparent z-20 pointer-events-none"></div>

      {/* Label */}
      <div className="absolute left-0 top-0 h-full bg-black text-yellow-400 px-8 flex items-center font-bold uppercase tracking-widest z-30 text-xs sm:text-sm">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          {label}
        </span>
      </div>

      {/* Marquee */}
      <div className="marquee-wrapper py-3 pl-40">
        <div
          className="marquee-content text-black text-sm sm:text-base font-semibold tracking-wide group-hover:[animation-play-state:paused]"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {/* Duplicate once for seamless infinite loop */}
          {[...news, ...news].map((item, index) => (
            <span
              key={index}
              className="marquee-item flex items-center gap-4"
            >
              <span className="opacity-80">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Shine Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] animate-shine"></div>
    </div>
  );
}