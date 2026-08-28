import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black/60 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
          aria-label="Leandro Soluções Digitais - Início"
        >
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white font-bold tracking-tight shadow-inner group-hover:border-zinc-500 transition-colors">
            <span className="font-mono text-xs">LSD</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold tracking-wider text-white flex items-center gap-1.5">
              LEANDRO
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-normal tracking-normal hidden sm:inline-block">
                B2B
              </span>
            </span>
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
              Soluções Digitais
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white rounded-md hover:bg-zinc-900/60 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Trust tag */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-cta-button"
            onClick={onOpenSchedule}
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:scale-[0.98] rounded-md transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Agendar conversa</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-zinc-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Agendar conversa com especialista</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-zinc-400 text-center mt-2 font-mono">
                Sem compromisso. Primeiro, entendemos.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
