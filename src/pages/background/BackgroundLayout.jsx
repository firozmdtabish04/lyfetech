import { motion } from "framer-motion";

export default function BackgroundLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* ================= GRID BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#e2e8f0 1px, transparent 1px),
              linear-gradient(90deg, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-200/30 via-slate-200/30 to-blue-200/20 blur-[150px]" />
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="relative z-10">{children}</div>

      {/* ================= GLOBAL WATERMARK ================= */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-12, -8, -12],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative select-none"
        >
          {/* Stroke */}
          <h1
            className="text-[clamp(5rem,18vw,24rem)] font-black uppercase tracking-tight whitespace-nowrap text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(15,23,42,.04)",
            }}
          >
            LYFETECH
          </h1>

          {/* Gradient */}
          <h1 className="absolute inset-0 text-[clamp(7rem,18vw,20rem)] font-black uppercase tracking-tight whitespace-nowrap bg-gradient-to-br from-slate-900/5 via-amber-900/1 to-slate-900/6 bg-clip-text text-transparent">
            LYFETECH
          </h1>

          {/* Subtitle */}
          <p className="mt-[-1vw] text-center text-[clamp(.65rem,1.2vw,1.1rem)] font-bold uppercase tracking-[0.45em] text-amber-500/20">
            ENGINEERING • INNOVATION • EXCELLENCE
          </p>
        </motion.div>
      </div>
    </div>
  );
}
