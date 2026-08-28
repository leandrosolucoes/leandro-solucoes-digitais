import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Workflow, Code, Smartphone, Globe, BarChart, Network, Check, X, ArrowUpRight } from 'lucide-react';
import { SOLUTIONS_LIST } from '../data/content';

export const SolutionsGrid: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(SOLUTIONS_LIST[0].id);

  const selectedSolution = SOLUTIONS_LIST.find((s) => s.id === selectedSolutionId) || SOLUTIONS_LIST[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'ia': return Bot;
      case 'automacao': return Workflow;
      case 'software': return Code;
      case 'apps': return Smartphone;
      case 'sites': return Globe;
      case 'dashboards': return BarChart;
      case 'integracoes': return Network;
      default: return Code;
    }
  };

  return (
    <section id="solucoes" className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>07 // CAPACIDADE DE CONSTRUÇÃO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Quando a solução certa aparece,{' '}
            <span className="text-zinc-400 font-normal">
              nós podemos construí-la.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Não somos apenas teóricos. Desenvolvemos, integramos e colocamos no ar as soluções tecnológicas identificadas no diagnóstico.
          </p>
        </div>

        {/* Editorial Composition: Left Menu, Right Deep Spec */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector Index */}
          <div className="lg:col-span-5 space-y-2">
            {SOLUTIONS_LIST.map((sol, idx) => {
              const isSelected = sol.id === selectedSolutionId;
              const IconComp = getIcon(sol.id);
              return (
                <button
                  key={sol.id}
                  onClick={() => setSelectedSolutionId(sol.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white text-zinc-950 border-white shadow-[0_0_25px_rgba(255,255,255,0.2)]'
                      : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900/80'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-zinc-950 text-white' : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm block">
                        {sol.title}
                      </span>
                      <span
                        className={`text-[11px] font-mono ${
                          isSelected ? 'text-zinc-600' : 'text-zinc-400'
                        }`}
                      >
                        {sol.tag}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs opacity-60">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Rich Editorial Specification Card */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSolution.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-10 backdrop-blur-md glow-card"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 uppercase">
                    {selectedSolution.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Solução Desenvolvida Sob Medida
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                  {selectedSolution.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light mb-6">
                  {selectedSolution.description}
                </p>

                {/* Practical Assessment: When It Makes Sense vs When to Avoid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* When it makes sense */}
                  <div className="p-4 rounded-xl bg-zinc-950/90 border border-emerald-950/50">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      <span>QUANDO FAZ SENTIDO:</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light">
                      {selectedSolution.whenItMakesSense}
                    </p>
                  </div>

                  {/* When NOT to use */}
                  <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-2">
                      <X className="w-3.5 h-3.5 text-zinc-400" />
                      <span>QUANDO NÃO USAR:</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {selectedSolution.whenNotToUse}
                    </p>
                  </div>
                </div>

                {/* Real Implementation Examples */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                    Exemplos de Aplicações Práticas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedSolution.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-200"
                      >
                        ✓ {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
