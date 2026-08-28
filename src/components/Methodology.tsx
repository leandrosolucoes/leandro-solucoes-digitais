import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ShieldAlert, Sparkles, Layers, Sliders } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/content';

export const Methodology: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <section id="metodologia" className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>03 // O PROCESSO EM 6 ETAPAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Metodologia Estruturada:{' '}
            <span className="text-zinc-400 font-normal">
              da escuta atenta à transformação.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
            Não pulamos etapas. Cada fase constrói a base sólida para a próxima, garantindo que qualquer investimento em tecnologia tenha propósito claro.
          </p>
        </div>

        {/* 6 Steps Interactive Progress Bar & Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const isCompleted = activeStepIndex > idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white flex flex-col justify-between ${
                  isActive
                    ? 'bg-white text-zinc-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                    : isCompleted
                    ? 'bg-zinc-900/80 text-zinc-200 border-zinc-700 hover:border-zinc-500'
                    : 'bg-zinc-900/30 text-zinc-400 border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-300'
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-mono text-xs font-bold">{step.number}</span>
                  {isCompleted && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
                </div>
                <span className="font-display text-xs sm:text-sm font-bold tracking-tight uppercase line-clamp-1">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Step Deep Dive View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-10 lg:p-12 relative overflow-hidden glow-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-white px-3 py-1 rounded bg-zinc-800 border border-zinc-700">
                    ETAPA {activeStep.number}
                  </span>
                  <span className="text-sm font-mono text-zinc-400">
                    // {activeStep.badge?.text}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                    {activeStep.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 font-light mt-1">
                    "{activeStep.tagline}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                  {activeStep.description}
                </p>

                {/* Specific Step 04 Priority Explainer if active */}
                {activeStep.number === '04' && (
                  <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2.5">
                    <span className="text-xs font-mono text-zinc-400 uppercase">
                      Classificação Semafórica de Prioridades:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2 rounded bg-red-950/30 border border-red-900/50 text-red-300 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
                        <span className="font-mono font-semibold">🔴 Alta Prioridade</span>
                      </div>
                      <div className="p-2 rounded bg-amber-950/30 border border-amber-900/50 text-amber-300 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                        <span className="font-mono font-semibold">🟡 Média Prioridade</span>
                      </div>
                      <div className="p-2 rounded bg-emerald-950/30 border border-emerald-900/50 text-emerald-300 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                        <span className="font-mono font-semibold">🟢 Baixa Prioridade</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action items */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Ações Práticas Desta Etapa:
                  </span>
                  {activeStep.actionItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-300 shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Deliverable Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                    Entregável Concreto da Etapa
                  </span>
                  <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-4">
                    {activeStep.deliverable}
                  </h4>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-2">
                    <p className="font-mono text-zinc-400">
                      // Garantia de Rigor:
                    </p>
                    <p>
                      Você e sua equipe acompanham cada descoberta com total transparência antes de avançar para a próxima fase.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : 0))}
                    disabled={activeStepIndex === 0}
                    className="px-3 py-1.5 rounded-lg border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                  >
                    ← Etapa Anterior
                  </button>
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) =>
                        prev < METHODOLOGY_STEPS.length - 1 ? prev + 1 : prev
                      )
                    }
                    disabled={activeStepIndex === METHODOLOGY_STEPS.length - 1}
                    className="px-4 py-1.5 rounded-lg bg-white text-zinc-950 text-xs font-mono font-semibold hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                  >
                    <span>Próxima Etapa</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
