import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Check, X } from 'lucide-react';

export const ImpactStatement: React.FC = () => {
  return (
    <section className="py-28 sm:py-40 relative bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive Impact Typography Block */}
        <div className="text-center max-w-5xl mx-auto mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-6 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
              NOSSA POSTURA
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[1.05] text-white">
              Tecnologia pela tecnologia{' '}
              <span className="block text-zinc-400">
                não serve para nada.
              </span>
            </h2>
            <p className="mt-8 text-lg sm:text-2xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
              O objetivo não é colocar mais ferramentas na sua empresa.{' '}
              <strong className="text-white font-medium">
                É encontrar as ferramentas certas.
              </strong>
            </p>
          </motion.div>
        </div>

        {/* Philosophy Card / Anti-Hype Commitments */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 sm:p-12 lg:p-16 backdrop-blur-md glow-card">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              FILOSOFIA DA LEANDRO
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
              A tecnologia deve se adaptar à empresa.{' '}
              <span className="block text-zinc-400">
                Não a empresa à tecnologia.
              </span>
            </h3>
          </div>

          {/* Direct Stances */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase">
                <X className="w-4 h-4 text-zinc-400" />
                <span>O QUE NÃO ACREDITAMOS:</span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed font-light">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-mono mt-0.5">•</span>
                  <span>Não acreditamos que toda empresa precise de inteligência artificial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-mono mt-0.5">•</span>
                  <span>Não acreditamos que toda empresa precise de um aplicativo no celular.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-mono mt-0.5">•</span>
                  <span>Não acreditamos que toda empresa precise trocar todos os seus sistemas.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-700/80 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-white text-xs font-mono uppercase">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>O QUE DEFENDEMOS:</span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-200 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-white font-mono mt-0.5">✓</span>
                  <span>Cada negócio possui uma história, margem e momento únicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-mono mt-0.5">✓</span>
                  <span>A tecnologia deve gerar lucro real, economia de tempo ou clareza.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-mono mt-0.5">✓</span>
                  <span>Se a recomendação for não gastar nada com software novo, nós diremos.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center pt-6 border-t border-zinc-800/80">
            <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wider">
              Assinatura: "Modernizar sem descaracterizar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
