import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>09 // DÚVIDAS FREQUENTES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Perguntas & Respostas{' '}
            <span className="text-zinc-400 font-normal">transparentes.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light">
            Tudo o que você precisa saber sobre nosso formato de trabalho e diagnóstico.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-bold text-white pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-white text-zinc-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-t border-zinc-800/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
