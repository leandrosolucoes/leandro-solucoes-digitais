import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { MIND_MAP_NODES } from '../data/content';
import { MindMapNode } from '../types';

export const CompanyMindMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<MindMapNode>(MIND_MAP_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<MindMapNode | null>(null);

  const activeNode = hoveredNode || selectedNode;

  // Center node coords
  const centerNode = MIND_MAP_NODES.find((n) => n.id === 'empresa') || MIND_MAP_NODES[0];
  const perimeterNodes = MIND_MAP_NODES.filter((n) => n.id !== 'empresa');

  return (
    <div className="w-full relative rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 sm:p-6 lg:p-8 backdrop-blur-sm overflow-hidden glow-card">
      {/* Background Subtle Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Header Info of the Visualizer */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-zinc-800/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
            Mapa de Diagnóstico Holístico da Empresa
          </span>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">
          Passe o mouse ou toque nos nós para inspecionar
        </span>
      </div>

      {/* The Visual Stage */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[520px] select-none flex items-center justify-center">
        {/* SVG Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Grid Concentric Guides */}
          <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

          {/* Lines connecting center to each node */}
          {perimeterNodes.map((node) => {
            const isConnectedToActive = activeNode.id === node.id || activeNode.id === 'empresa';
            return (
              <g key={`line-${node.id}`}>
                <line
                  x1={centerNode.x}
                  y1={centerNode.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={isConnectedToActive ? 'url(#activeLineGrad)' : 'url(#lineGrad)'}
                  strokeWidth={isConnectedToActive ? '0.4' : '0.2'}
                  strokeDasharray={isConnectedToActive ? 'none' : '0.8 0.8'}
                  className="transition-all duration-300"
                />
                {/* Luminous flowing pulse dot along line */}
                {isConnectedToActive && (
                  <circle r="0.4" fill="#ffffff">
                    <animateMotion
                      path={`M ${centerNode.x} ${centerNode.y} L ${node.x} ${node.y}`}
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Node: SUA EMPRESA */}
        <motion.button
          onClick={() => setSelectedNode(centerNode)}
          onMouseEnter={() => setHoveredNode(centerNode)}
          onMouseLeave={() => setHoveredNode(null)}
          className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 sm:p-5 flex flex-col items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
            activeNode.id === 'empresa'
              ? 'bg-white text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.45)] scale-105 ring-4 ring-white/20'
              : 'bg-zinc-900 border-2 border-white/40 text-white shadow-xl hover:border-white'
          }`}
          style={{ left: `${centerNode.x}%`, top: `${centerNode.y}%` }}
          aria-label="Núcleo: Sua Empresa"
        >
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase opacity-80 mb-0.5">
            Núcleo
          </span>
          <span className="text-xs sm:text-sm font-display font-extrabold tracking-wider whitespace-nowrap">
            SUA EMPRESA
          </span>
          <span className="text-[8px] sm:text-[9px] font-mono mt-1 px-1.5 py-0.2 rounded bg-zinc-800/60 text-zinc-300">
            Ponto de Partida
          </span>
        </motion.button>

        {/* Orbital Peripheral Nodes */}
        {perimeterNodes.map((node) => {
          const isActive = activeNode.id === node.id;
          return (
            <motion.button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white flex items-center gap-1.5 text-left ${
                isActive
                  ? 'bg-zinc-800 text-white border border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-110 z-30'
                  : 'bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white'
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              aria-label={`Inspecionar dimensão: ${node.label}`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-zinc-600'
                }`}
              />
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-tight whitespace-nowrap">
                {node.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Real-time Diagnostic Inspector Detail Box */}
      <div className="relative z-10 mt-4 pt-4 border-t border-zinc-800/80 bg-zinc-900/60 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-white font-semibold">
              Dimensão: {activeNode.label}
            </span>
            <span className="text-[11px] text-zinc-400 font-mono">
              Foco do Diagnóstico (3 a 7 dias)
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline-block">
            Diagnóstico Semafórico Leandro
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-2">
          {activeNode.description}
        </p>

        <div className="flex items-start gap-2 bg-zinc-950/80 border border-zinc-800/90 rounded-lg p-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-zinc-200">
            <strong className="text-white font-medium">O que investigamos:</strong>{' '}
            {activeNode.diagnosticFocus}
          </div>
        </div>
      </div>
    </div>
  );
};
