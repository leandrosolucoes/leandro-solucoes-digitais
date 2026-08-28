import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, AlertTriangle, ArrowRight, Zap, Target, Search } from 'lucide-react';
import { FRICTION_AREAS } from '../data/content';
import { FrictionArea } from '../types';

export const FrictionMatrix: React.FC = () => {
  const [activeArea, setActiveArea] = useState<FrictionArea>(FRICTION_AREAS[0]);

  return (
    <section className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
              <span>02 // ONDE MORA O DESPERDÍCIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Nem todo problema aparece no balanço.{' '}
              <span className="block text-zinc-400 font-normal">
                Alguns aparecem no tempo perdido.
              </span>
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-light">
            Empresas perdem milhares de reais todos os meses em tarefas manuais, clientes sem resposta no WhatsApp e sistemas que ninguém usa.
          </p>
        </div>

        {/* Interactive Analysis Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: 8 Areas Selector */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {FRICTION_AREAS.map((area, idx) => {
              const isSelected = activeArea.id === area.id;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-zinc-900 border-white/40 shadow-lg text-white'
                      : 'bg-zinc-900/30 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/50'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-400">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="font-display text-sm sm:text-base font-bold tracking-wide block">
                        {area.title}
                      </span>
                      <span className="text-[11px] text-zinc-400 line-clamp-1">
                        {area.subtitle}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Diagnostic Inspector Box */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden glow-card"
              >
                {/* Decorative corner tag */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Raio-X de Fricção Operacional
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-white">
                    Impacto Estimado: {activeArea.impactScore}/10
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    Área Analisada
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {activeArea.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    {activeArea.subtitle}
                  </p>
                </div>

                {/* Problem vs Opportunity Block */}
                <div className="space-y-4">
                  {/* The Hidden Loss */}
                  <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-red-950/40 relative">
                    <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>ONDE VOCÊ PERDE HOJE:</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed font-light">
                      {activeArea.hiddenLoss}
                    </p>
                  </div>

                  {/* The Actionable Opportunity */}
                  <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-emerald-950/40 relative">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                      <Zap className="w-3.5 h-3.5" />
                      <span>OPORTUNIDADE DE EVOLUÇÃO:</span>
                    </div>
                    <p className="text-sm text-zinc-200 leading-relaxed">
                      {activeArea.opportunity}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 mr-2">
                    Focos no Diagnóstico:
                  </span>
                  {activeArea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
