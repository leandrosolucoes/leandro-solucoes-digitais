import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Cpu, Layers, Milestone, ArrowRight, Shield } from 'lucide-react';

export const AboutCompany: React.FC = () => {
  const futurePlatformPhases = [
    { step: '01', title: 'CADASTRO & MATRIZ', desc: 'Entrada dos dados fundamentais e rotinas operacionais da empresa.' },
    { step: '02', title: 'QUESTIONÁRIO DIRIGIDO', desc: 'Perguntas estratégicas formuladas para expor gargalos de tempo e custo.' },
    { step: '03', title: 'AUDITORIA DE DADOS', desc: 'Cruzamento de canais digitais, WhatsApp, avaliações e sistemas atuais.' },
    { step: '04', title: 'IA ESPECIALIZADA', desc: 'Processamento contextual treinado na metodologia proprietária Leandro.' },
    { step: '05', title: 'DIAGNÓSTICO & MAPA', desc: 'Geração do relatório semafórico com prioridades claras de evolução.' },
    { step: '06', title: 'PLANO & ACOMPANHAMENTO', desc: 'Roteiro de projetos com monitoramento contínuo de resultados reais.' },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Story & Manifesto */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>08 // SOBRE A LEANDRO</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-8">
            Uma empresa construída{' '}
            <span className="text-zinc-400 font-normal">para fazer diferente.</span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            <p>
              A <strong className="text-white font-medium">Leandro | Soluções Digitais</strong> nasceu de uma ideia simples: tecnologia pode fazer muito mais quando primeiro entendemos o problema que precisa ser resolvido.
            </p>
            <p>
              Em vez de começar oferecendo ferramentas, começamos fazendo perguntas. Em vez de encaixar uma empresa em uma solução pronta de mercado, procuramos adaptar a solução à realidade e ao momento do negócio.
            </p>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-3">
            <Shield className="w-5 h-5 text-white shrink-0" />
            <p className="text-xs sm:text-sm text-zinc-300 font-mono">
              Postura de transparência radical: sem promessas infladas, sem falsos cases e com foco absoluto na verdade operacional do seu negócio.
            </p>
          </div>
        </div>

        {/* Future Vision & Proprietary Platform Architecture */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-10 lg:p-12 glow-card">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              NOSSO HORIZONTE // VISÃO FUTURA
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Estamos começando agora.{' '}
              <span className="block text-zinc-400 font-normal">
                Mas não estamos pensando pequeno.
              </span>
            </h3>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              A visão é consolidar uma metodologia proprietária, desenvolver tecnologia própria e construir a <strong className="text-white">Plataforma Leandro</strong> — um ecossistema inteligente capaz de tornar o diagnóstico e a evolução empresarial cada vez mais acessíveis e precisos para empresas de todo o Brasil.
            </p>
          </div>

          {/* Step Sequence: METODOLOGIA → PLATAFORMA → INTELIGÊNCIA → EVOLUÇÃO */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Passo 1</span>
              <span className="text-sm font-display font-bold text-white uppercase tracking-wider">METODOLOGIA</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Passo 2</span>
              <span className="text-sm font-display font-bold text-white uppercase tracking-wider">PLATAFORMA</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Passo 3</span>
              <span className="text-sm font-display font-bold text-white uppercase tracking-wider">INTELIGÊNCIA</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Passo 4</span>
              <span className="text-sm font-display font-bold text-white uppercase tracking-wider">EVOLUÇÃO</span>
            </div>
          </div>

          {/* Future Platform Architecture Schema */}
          <div className="border-t border-zinc-800/80 pt-8">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-6">
              // Arquitetura Futura da Plataforma Leandro de Diagnóstico:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {futurePlatformPhases.map((phase) => (
                <div
                  key={phase.step}
                  className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block mb-1">
                      {phase.step}
                    </span>
                    <h4 className="text-xs font-mono font-bold text-white tracking-wide uppercase mb-1">
                      {phase.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
