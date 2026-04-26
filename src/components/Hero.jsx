import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const trustStats = [
  { title: "10+ Projects", subtitle: "Climate & sustainability initiatives" },
  { title: "AI Powered", subtitle: "Smart decision workflows" },
  { title: "Enterprise Ready", subtitle: "Secure and scalable architecture" },
];

function Hero({ onNavigate }) {
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroParallaxX = useTransform(scrollY, [0, 600], [0, 8]);
  const heroTitle = "360° Technology for Climate, Energy & Resilience";

  const handleHeroMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setHeroMouse({ x, y });
  };

  const chartPoints = "10,88 45,74 80,68 115,58 150,51 185,45 220,39 255,34 290,28";

  return (
    <section id="top" className="relative grid w-full items-center gap-12 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-blue-50/90 via-white to-cyan-50/70 px-6 py-12 shadow-[0_10px_24px_rgba(148,163,184,0.16)] transition-colors duration-300 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:shadow-none lg:grid-cols-2 lg:gap-16 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(37,99,235,0.08),rgba(255,255,255,0))] transition-colors duration-300 dark:bg-[linear-gradient(120deg,rgba(59,130,246,0.12),rgba(15,23,42,0))]" />
      <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-100/60 px-4 py-1 text-sm text-cyan-700 transition-colors duration-300 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-200">
          <Sparkles size={14} />
          AI-Powered Sustainability Intelligence
        </p>
        <h1 className="mt-5 text-[clamp(30px,5vw,50px)] font-bold leading-[1.16] tracking-tight text-slate-900 transition-colors duration-300 dark:text-white">
          {heroTitle}
        </h1>
        <p className="mt-4 max-w-xl text-[clamp(15px,1.8vw,18px)] leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-300 lg:max-w-2xl">
          We build AI-powered platforms that transform climate and infrastructure data into actionable insights.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:inline-flex sm:flex-wrap">
          <button
            onClick={() => onNavigate("/products")}
            className="btn-premium inline-flex h-11 items-center justify-center rounded-xl bg-brand-gradient px-6 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:scale-105"
          >
            Explore Products
          </button>
          <button
            onClick={() => onNavigate("/contact")}
            className="btn-premium inline-flex h-11 items-center justify-center rounded-xl border border-cyan-200 bg-white px-6 py-3 font-medium text-slate-700 transition-all duration-200 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-50 dark:border-cyan-300/30 dark:bg-white/5 dark:text-slate-100 dark:hover:border-cyan-300/60 dark:hover:bg-cyan-300/10"
          >
            Contact Us
          </button>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {trustStats.map((item) => (
            <motion.div key={item.title} variants={staggerItem} className="rounded-xl bg-white/70 p-3 text-left shadow-sm transition-colors duration-300 dark:bg-slate-800/60">
              <p className="text-sm font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">{item.title}</p>
              <p className="mt-1 text-xs text-slate-600 transition-colors duration-300 dark:text-slate-300">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div onMouseMove={handleHeroMouseMove} onMouseLeave={() => setHeroMouse({ x: 0, y: 0 })} style={{ y: heroY }} className="relative">
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          style={{ x: heroParallaxX, rotateY: heroMouse.x * 8, rotateX: heroMouse.y * -8, willChange: "transform" }}
          className="rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_14px_30px_rgba(148,163,184,0.2)] transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/50 dark:shadow-[0_14px_30px_rgba(2,6,23,0.35)]"
        >
          <div className="rounded-2xl border border-white/40 bg-gradient-to-br from-white/85 via-blue-50/80 to-cyan-100/70 p-4 shadow-[0_10px_35px_rgba(56,189,248,0.18)] transition-colors duration-300 dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/70 dark:to-cyan-950/30">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Climate & Infrastructure Intelligence Dashboard</h3>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:bg-emerald-300/15 dark:text-emerald-200">
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
                className="col-span-2 rounded-xl border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/70"
              >
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Climate Risk Trend</p>
                <svg viewBox="0 0 300 100" className="mt-2 h-24 w-full">
                  <defs>
                    <linearGradient id="riskStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <polyline fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="1" points="0,90 300,90" />
                  <motion.polyline
                    fill="none"
                    stroke="url(#riskStroke)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    points={chartPoints}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="rounded-xl border border-slate-200/70 bg-white/75 p-3 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/70"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">Infrastructure Health</p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">82%</p>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="rounded-xl border border-slate-200/70 bg-white/75 p-3 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/70"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">Energy Optimization</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">Energy Saved: 18%</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">CO₂ Reduced: 12%</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.25 }}
                className="rounded-xl border border-slate-200/70 bg-white/75 p-3 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/70"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">Sustainability Score</p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">ESG Score: 74/100</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                className="rounded-xl border border-slate-200/70 bg-white/75 p-3 shadow-sm dark:border-slate-700/70 dark:bg-slate-800/70"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">Alerts Panel</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-200">
                  <li>Flood Alert - KP</li>
                  <li>Structural Risk - Bridge</li>
                  <li>Heatwave Warning - City</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
