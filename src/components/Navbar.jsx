import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "products", label: "Products" },
  { id: "about", label: "Who We Are" },
  { id: "how-it-works", label: "How It Works" },
  { id: "contact", label: "Contact" },
];

function Navbar({ menuOpen, setMenuOpen, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate("top")} className="text-lg font-semibold tracking-tight text-white">
          SustainableSolution360
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)} className="nav-link text-sm text-slate-300">
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate("contact")}
            className="rounded-lg bg-brand-gradient px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:scale-[1.04]"
          >
            Request Demo
          </button>
        </nav>
        <button onClick={() => setMenuOpen((v) => !v)} className="rounded-lg border border-white/20 p-2 text-white md:hidden">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/10 bg-slate-950/95 p-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-slate-200 transition hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
