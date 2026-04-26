import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "../../images/hero-illustration.svg";

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
  const heroWords = "360 degree technology for climate, energy, and resilience outcomes.".split(" ");

  const handleHeroMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setHeroMouse({ x, y });
  };

  return (
    <section id="top" className="relative grid items-center gap-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] px-4 py-14 backdrop-blur-sm lg:grid-cols-2 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.2),transparent_35%),linear-gradient(110deg,rgba(59,130,246,0.11),rgba(15,23,42,0))]" />
      {[0, 1, 2, 3].map((particle) => (
        <motion.span
          key={particle}
          aria-hidden="true"
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70"
          style={{ left: `${18 + particle * 20}%`, top: `${20 + (particle % 2) * 30}%`, willChange: "transform, opacity" }}
          animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.8 + particle, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}
      <motion.div {...fadeInUp}>
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
          <Sparkles size={14} />
          AI-Powered Sustainability Intelligence
        </p>
        <motion.h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl">
          {heroWords.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.03 }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
          We design premium enterprise software products that turn operations into measurable impact with clear reporting, modern UX, and intelligent automation.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate("products")}
            className="btn-premium rounded-xl bg-brand-gradient px-6 py-3 font-medium text-white shadow-glow transition duration-200 hover:scale-[1.03]"
          >
            Explore Products
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="btn-premium rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-slate-100 backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
          >
            Contact Team
          </button>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-8 grid gap-3 sm:grid-cols-3">
          {trustStats.map((item) => (
            <motion.div key={item.title} variants={staggerItem} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
              <p className="text-sm font-semibold text-cyan-200">{item.title}</p>
              <p className="mt-1 text-xs text-slate-300">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div onMouseMove={handleHeroMouseMove} onMouseLeave={() => setHeroMouse({ x: 0, y: 0 })} style={{ y: heroY }} className="relative">
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          style={{ x: heroParallaxX, rotateY: heroMouse.x * 8, rotateX: heroMouse.y * -8, willChange: "transform" }}
          className="rounded-3xl border border-cyan-300/20 bg-white/5 p-3 shadow-glow backdrop-blur-xl"
        >
          <img src={heroImage} alt="Dashboard preview of SustainableSolution360 platform" className="w-full rounded-2xl object-cover" loading="eager" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
