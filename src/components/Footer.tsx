import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onScheduleClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScheduleClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 relative text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white font-mono text-xs font-bold">
                LSD
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white tracking-wider block">
                  LEANDRO
                </span>
                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                  Soluções Digitais
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-300 font-light max-w-md leading-relaxed">
              Analisamos empresas e encontramos oportunidades onde tecnologia, automação e software podem gerar melhorias reais.
            </p>

            <div className="pt-2 text-xs font-mono text-white">
              // Entender antes de transformar.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest block mb-2">
              Navegação
            </span>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest block mb-2">
              Próximo Passo
            </span>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Pronto para descobrir onde sua empresa pode evoluir?
            </p>
            <button
              onClick={onScheduleClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-zinc-950 text-xs font-mono font-bold hover:bg-zinc-200 transition-colors shadow-md"
            >
              <span>Agendar Conversa</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Leandro | Soluções Digitais. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-400">Modernizar sem descaracterizar.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
