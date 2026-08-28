import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Shield, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { CompanyMindMap } from './CompanyMindMap';

interface HeroProps {
  onScheduleClick: () => void;
  onExploreApproach: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick, onExploreApproach }) => {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Precision Ambient Light (Black/White/Graphite glow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-white/[0.035] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Micro Badge */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-widest uppercase mb-6 glow-subtle"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>TECNOLOGIA COM PROPÓSITO</span>
          </motion.div>

          {/* Master Semantic Headline H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl"
          >
            Sua empresa não precisa de mais tecnologia.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 mt-1 sm:mt-2">
              Precisa da tecnologia certa.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed font-light"
          >
            Antes de propor uma IA, um aplicativo, um site ou qualquer outra solução,
            nós buscamos entender como sua empresa realmente funciona.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-primary-cta"
              onClick={onScheduleClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg bg-white text-zinc-950 font-semibold text-sm sm:text-base hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(255,255,255,0.35)]"
            >
              <span>Agendar uma conversa</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onExploreApproach}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900/90 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-600 font-medium text-sm sm:text-base transition-colors"
            >
              <Compass className="w-4 h-4 text-zinc-400" />
              <span>Conhecer nossa abordagem</span>
            </button>
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3.5 text-xs text-zinc-400 font-mono tracking-wide"
          >
            Sem compromisso. Primeiro, entendemos.
          </motion.p>
        </div>

        {/* Bespoke Interactive Company Mind Map Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 sm:mt-12 max-w-5xl mx-auto"
        >
          <CompanyMindMap />
        </motion.div>
      </div>
    </section>
  );
};
