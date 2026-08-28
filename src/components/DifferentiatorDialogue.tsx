import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, CheckCircle2, XCircle, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface Pathway {
  id: string;
  name: string;
  verdict: 'recommended' | 'alternative' | 'reject';
  description: string;
  exampleScenario: string;
}

export const DifferentiatorDialogue: React.FC = () => {
  const [selectedPathway, setSelectedPathway] = useState<string>('nada-disso');

  const pathways: Pathway[] = [
    {
      id: 'nada-disso',
      name: 'NADA DISSO (Apenas ajuste de rotina)',
      verdict: 'reject',
      description: 'O cliente não precisa gastar R$ 20.000 em software. Uma simples reorganização de processo no WhatsApp e no papel resolveu 100% da dor.',
      exampleScenario: 'O verdadeiro diferencial da Leandro: nós temos a coragem de dizer quando você NÃO precisa de tecnologia.',
    },
    {
      id: 'automacao',
      name: 'AUTOMAÇÃO SIMPLES',
      verdict: 'recommended',
      description: 'Em vez de um app complexo, bastou integrar o WhatsApp a uma planilha Google automatizada com lembretes para os clientes.',
      exampleScenario: 'Custo 90% menor, entrega em 48h e adoção imediata sem atrito para os clientes.',
    },
    {
      id: 'ia',
      name: 'IA & TRIAGEM INTELIGENTE',
      verdict: 'recommended',
      description: 'Um agente treinado nas dúvidas frequentes que qualifica o lead e passa para o atendente humano apenas o fechamento.',
      exampleScenario: 'Eliminou 3 horas de digitação manual diária do proprietário.',
    },
    {
      id: 'sistema',
      name: 'SISTEMA INTERNO SOB MEDIDA',
      verdict: 'alternative',
      description: 'Painel web simples acessado pelo navegador, sem necessidade de app nas lojas do Google e Apple.',
      exampleScenario: 'Ideal para controle de ordens de serviço e estoque interno.',
    },
    {
      id: 'aplicativo',
      name: 'APLICATIVO NATIVO',
      verdict: 'alternative',
      description: 'Apenas quando há uso offline em campo, GPS contínuo ou interação diária indispensável do consumidor final.',
      exampleScenario: 'Recomendado somente após comprovar viabilidade e ROI seguro.',
    },
    {
      id: 'site',
      name: 'SITE / LANDING PAGE',
      verdict: 'alternative',
      description: 'Página de alta autoridade para transmitir credibilidade e canalizar contatos para o time comercial.',
      exampleScenario: 'Resolve quando a dor real é falta de confiança e posicionamento digital fraco.',
    },
  ];

  const currentPathway = pathways.find((p) => p.id === selectedPathway) || pathways[0];

  return (
    <section className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>05 // O VERDADEIRO DIFERENCIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Não vendemos o que é fácil de vender.{' '}
            <span className="text-zinc-400 font-normal">
              Indicamos o que resolve.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
            Muitas empresas chegam pedindo uma ferramenta específica porque ouviram na internet. Nosso papel é descobrir se aquela ferramenta realmente faz sentido.
          </p>
        </div>

        {/* Real Dialogue Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Conversational Interaction Mock */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                Simulação de Abordagem Real
              </span>

              {/* Speech bubble 1: Client */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-300 shrink-0">
                  CLI
                </div>
                <div className="p-4 rounded-2xl rounded-tl-sm bg-zinc-800/80 border border-zinc-700 text-zinc-200 text-sm max-w-md">
                  <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                    Cliente:
                  </span>
                  "Quero um aplicativo para minha empresa."
                </div>
              </div>

              {/* Speech bubble 2: Leandro */}
              <div className="flex items-start gap-3 justify-end">
                <div className="p-4 rounded-2xl rounded-tr-sm bg-white text-zinc-950 text-sm max-w-md shadow-xl">
                  <span className="text-[11px] font-mono text-zinc-600 block mb-1 font-semibold">
                    Leandro | Soluções Digitais:
                  </span>
                  "Vamos entender primeiro por que você precisa dele. Qual problema estamos tentando resolver?"
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-mono text-zinc-950 font-bold shrink-0">
                  LSD
                </div>
              </div>

              {/* Resulting Decision Tree Selector */}
              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                  Possíveis Caminhos Após o Diagnóstico:
                </span>
                <div className="flex flex-wrap gap-2">
                  {pathways.map((item) => {
                    const isSelected = selectedPathway === item.id;
                    const isNadaDisso = item.id === 'nada-disso';
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedPathway(item.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          isSelected
                            ? isNadaDisso
                              ? 'bg-emerald-400 text-zinc-950 font-bold ring-2 ring-emerald-300'
                              : 'bg-white text-zinc-950 font-bold'
                            : isNadaDisso
                            ? 'bg-emerald-950/40 border border-emerald-800 text-emerald-300 hover:bg-emerald-900/50'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pathway Outcome Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPathway.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`p-6 sm:p-8 rounded-3xl border ${
                  currentPathway.id === 'nada-disso'
                    ? 'bg-emerald-950/20 border-emerald-500/40 glow-card'
                    : 'bg-zinc-900/80 border-zinc-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                    Resultado do Diagnóstico
                  </span>
                  {currentPathway.id === 'nada-disso' ? (
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      COMPROMISSO ÉTICO
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-zinc-400">
                      Solução Técnica Viável
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  {currentPathway.name}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-light">
                  {currentPathway.description}
                </p>

                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs sm:text-sm text-zinc-200">
                  <span className="font-mono text-zinc-400 block mb-1 uppercase text-[11px]">
                    Impacto Real no Negócio:
                  </span>
                  <p>{currentPathway.exampleScenario}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
