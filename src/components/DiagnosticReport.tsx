import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, FileText, CheckCircle2, AlertCircle, ArrowUpRight, Sparkles, Shield, BarChart3 } from 'lucide-react';

export const DiagnosticReport: React.FC = () => {
  const [activeReportTab, setActiveReportTab] = useState<'estrutura' | 'gargalos' | 'prioridades' | 'cenarios'>('estrutura');

  const reportItems = [
    { id: '1', title: 'ESTADO ATUAL', desc: 'Radiografia honesta de como a empresa funciona hoje, sem filtros.' },
    { id: '2', title: 'PONTOS FORTES', desc: 'O que o seu negócio já faz com maestria e precisa ser preservado.' },
    { id: '3', title: 'PONTOS FRACOS', desc: 'Onde ocorrem falhas de processo, esquecimentos e atrito operacional.' },
    { id: '4', title: 'GARGALOS', desc: 'Onde o trabalho trava e empaca o crescimento do faturamento.' },
    { id: '5', title: 'OPORTUNIDADES', desc: 'Onde pequenas melhorias geram grandes saltos de produtividade.' },
    { id: '6', title: 'PRIORIDADES', desc: 'Classificação semafórica (Alta, Média e Baixa) do que atacar primeiro.' },
    { id: '7', title: 'RISCOS', desc: 'Análise de impacto em equipe, clientes e custos antes de qualquer mudança.' },
    { id: '8', title: 'CENÁRIOS', desc: 'Projeção de cenários realistas (mínimo viável, ideal e expansão).' },
    { id: '9', title: 'PLANO DE AÇÃO', desc: 'Passo a passo com responsáveis, prazos e métricas de sucesso.' },
    { id: '10', title: 'SOLUÇÕES', desc: 'Recomendações pontuais (software, IA, automação ou apenas processo).' },
  ];

  return (
    <section id="diagnostico" className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
              <span>04 // O PRINCIPAL SERVIÇO</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Diagnóstico Tecnológico{' '}
              <span className="block text-zinc-400">e Estratégico</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Uma análise profunda da sua empresa para descobrir onde tecnologia pode realmente gerar evolução.
            </p>
          </div>

          {/* Duration Badge */}
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 shrink-0 glow-subtle">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase mb-1">
              <Clock className="w-4 h-4 text-white" />
              <span>Duração Estimada:</span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              3 DIAS <span className="text-zinc-500 font-light text-xl">→</span> 1 SEMANA
            </div>
            <p className="text-[11px] font-mono text-zinc-400 mt-1">
              Dependendo da complexidade do negócio
            </p>
          </div>
        </div>

        {/* Big Delivery Proposition Headline */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white">
              Você não recebe uma lista de serviços.{' '}
              <span className="text-zinc-400">Recebe um caminho.</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light">
              Um relatório executivo completo, desenhado para os tomadores de decisão da empresa.
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-mono text-white whitespace-nowrap">
            10 Seções de Análise Estratégica
          </span>
        </div>

        {/* Digital Report Mockup / Blueprint UI */}
        <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md glow-card">
          {/* Report Window Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Documento de Entrega Oficial
                </span>
                <span className="text-sm sm:text-base font-display font-bold text-white">
                  Dossiê de Diagnóstico Tecnológico e Estratégico
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-800/60 text-emerald-300">
                ● 100% Personalizado
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">
                Confidencial
              </span>
            </div>
          </div>

          {/* 10 Report Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {reportItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-600 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-zinc-400">
                      0{item.id.padStart(2, '0')}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-white transition-colors" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-display font-bold text-white tracking-wide uppercase mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-zinc-800/40 text-[10px] font-mono text-zinc-400">
                  Incluído no Relatório
                </div>
              </div>
            ))}
          </div>

          {/* Report Footer Notice */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
            <span>
              Realizado principalmente com o proprietário/responsável.
            </span>
            <span className="text-zinc-400">
              *Conversas com clientes podem ocorrer dependendo do escopo do projeto.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
