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
        <motion.div className="relative select-none">
          {/* Stroke */}
          <h1
            className="
    text-[6rem]
    sm:text-[7rem]
    md:text-[9rem]
    lg:text-[12rem]
    xl:text-[14rem]
    2xl:text-[16rem]
    font-black
    uppercase
    tracking-tight
    whitespace-nowrap
    text-transparent
  "
            style={{
              WebkitTextStroke: "1px rgba(15,23,42,.04)",
            }}
          >
            LYFETECH
          </h1>

          {/* Gradient */}
          <h1
            className="
    absolute inset-0
    text-[6rem]
    sm:text-[7rem]
    md:text-[9rem]
    lg:text-[12rem]
    xl:text-[14rem]
    2xl:text-[16rem]
    font-black
    uppercase
    tracking-tight
    whitespace-nowrap
    bg-gradient-to-br
    from-slate-900/20
    via-amber-900/5
    to-slate-900/
    bg-clip-text
    text-transparent
  "
          >
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
