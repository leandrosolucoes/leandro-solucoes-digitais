import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, HeartHandshake, Workflow, Compass, ArrowDown } from 'lucide-react';

export const CorePillars: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Sua História',
      description: 'Como o negócio nasceu, superou crises e construiu reputação e respeito no mercado.',
    },
    {
      icon: Users,
      title: 'As Pessoas',
      description: 'Quem acorda cedo para fazer a operação girar — seus hábitos, dificuldades e talentos.',
    },
    {
      icon: HeartHandshake,
      title: 'Os Clientes',
      description: 'Quem confia na sua entrega, por que escolhe você e o que espera da experiência.',
    },
    {
      icon: Workflow,
      title: 'Os Processos',
      description: 'As rotinas práticas, planilhas e métodos construídos e aprimorados ao longo do tempo.',
    },
    {
      icon: Compass,
      title: 'A Visão de Futuro',
      description: 'Onde o negócio quer chegar e como a liderança enxerga os próximos anos de evolução.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 sm:py-32 relative overflow-hidden border-t border-zinc-900">
      {/* Subtle background ambient line */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>01 // PRINCÍPIO FUNDAMENTAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Antes de transformar uma empresa,{' '}
            <span className="text-zinc-400 block sm:inline">é preciso conhecê-la.</span>
          </h2>

          <div className="mt-6 space-y-3 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed">
            <p>Uma empresa não é apenas o que ela vende.</p>
            <p className="text-zinc-400">É sua história. As pessoas que fazem tudo acontecer. Os clientes que confiam nela. Os processos construídos ao longo do tempo. E a visão de onde ela quer chegar.</p>
          </div>
        </div>

        {/* Five Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white mb-4 group-hover:border-zinc-600 transition-colors">
                    <IconComponent className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 block mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Diagnóstico</span>
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Auditar →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Closing Punchline */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center max-w-4xl mx-auto glow-card">
          <p className="text-base sm:text-lg md:text-xl text-white font-medium">
            "É isso que precisamos entender antes de propor qualquer transformação."
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-2">
            Nenhuma solução pré-fabricada. Nenhum pacote genérico empurrado.
          </p>
        </div>
      </div>
    </section>
  );
};
