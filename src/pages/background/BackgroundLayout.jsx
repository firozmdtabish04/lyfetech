import { motion } from "framer-motion";

export default function BackgroundLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* ================= GRID BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Grid */}
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
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-200/30 via-slate-200/30 to-blue-200/20 blur-[100px] sm:h-[380px] sm:w-[380px] md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[550px] xl:h-[750px] xl:w-[750px]" />
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <main className="relative z-10">{children}</main>

      {/* ================= WATERMARK ================= */}
      <div className="fixed inset-0 z-20 flex items-center justify-center overflow-hidden pointer-events-none px-4">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: { duration: 1.2, ease: "easeOut" },
            y: {
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          className="relative text-center select-none"
        >
          {/* Outline Text */}
          <h1
            className="
              whitespace-nowrap
              font-black
              uppercase
              leading-none
              tracking-tight
              text-transparent
            text-[clamp(3rem,10vw,17rem)]
            "
            style={{
              WebkitTextStroke: "1px rgba(15,23,42,.05)",
            }}
          >
            LYFETECH
          </h1>

          {/* Gradient Text */}
          <h1
            className="
              absolute inset-0
              whitespace-nowrap
              font-black
              uppercase
              leading-none
              tracking-tight
          text-[clamp(3rem,10vw,17rem)]
              bg-gradient-to-br
              from-slate-900/20
              via-amber-900/5
              to-slate-900/20
              bg-clip-text
              text-transparent
            "
          >
            LYFETECH
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-1
              text-center
              font-bold
              uppercase
              tracking-[0.25em]
              text-amber-500/20
              text-[clamp(0.5rem,1.1vw,1rem)]
              sm:tracking-[0.35em]
              md:tracking-[0.45em]
            "
          >
            ENGINEERING • INNOVATION • EXCELLENCE
          </p>
        </motion.div>
      </div>
    </div>
  );
}
