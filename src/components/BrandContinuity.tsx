import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, History, Sparkles, Milestone } from 'lucide-react';

export const BrandContinuity: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>06 // CONTINUIDADE & IDENTIDADE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Sua empresa pode evoluir{' '}
            <span className="block text-zinc-400 font-normal">
              sem deixar de ser quem é.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Modernizar não significa apagar o que veio antes. O valor construído ao longo dos anos é exatamente o que sustenta o seu crescimento futuro.
          </p>
        </div>

        {/* Visual Timeline Connector: PASSADO → PRESENTE → FUTURO */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-900/40 border border-zinc-800 p-6 sm:p-10 lg:p-12 glow-card relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* PASSADO */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                  01 // A RAIZ
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  PASSADO
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  A história, a confiança conquistada no bairro ou setor, a reputação com clientes fiéis e a essência do fundador.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                // Preservar e honrar
              </div>
            </div>

            {/* PRESENTE */}
            <div className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-700 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-mono text-white uppercase tracking-widest block mb-2">
                  02 // O DIAGNÓSTICO
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  PRESENTE
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Identificação lúcida de gargalos, rotinas que cansam a equipe e ferramentas que podem aliviar a carga operacional hoje.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-white">
                // Organizar e destravar
              </div>
            </div>

            {/* FUTURO */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                  03 // A ESCALA
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  FUTURO
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  Tecnologia proprietária, automação inteligente e processos fluidos que permitem o negócio crescer de forma sustentável.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                // Evoluir com segurança
              </div>
            </div>
          </div>

          {/* Core Signature Callout */}
          <div className="mt-12 text-center pt-8 border-t border-zinc-800/80">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              Princípio Central
            </span>
            <p className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
              Modernizar sem descaracterizar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
