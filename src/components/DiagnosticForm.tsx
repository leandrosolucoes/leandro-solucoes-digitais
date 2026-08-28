import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageCircle, RefreshCw, User, Building, Phone, Mail, FileEdit, HelpCircle } from 'lucide-react';
import { DiagnosticFormData } from '../types';

// =========================================================================
// CONFIGURAÇÃO DO WHATSAPP
// Substitua o número abaixo pelo número desejado (DDI + DDD + NÚMERO, apenas dígitos)
// Exemplo: '5519987611229'
// =========================================================================
export const WHATSAPP_CONTACT_NUMBER = '5519987611229';

export const DiagnosticForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<DiagnosticFormData>({
    name: '',
    companyName: '',
    companySegment: '',
    whatsapp: '',
    email: '',
    businessDescription: '',
    primaryMotivation: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const motivationOptions = [
    'Quero modernizar minha empresa',
    'Quero entender como IA poderia ajudar',
    'Tenho processos que consomem muito tempo',
    'Quero melhorar minha presença digital',
    'Quero desenvolver uma solução',
    'Ainda não sei exatamente',
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Por favor, informe seu nome.';
    } else if (step === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Informe o nome da sua empresa.';
    } else if (step === 3) {
      if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
        newErrors.whatsapp = 'Informe um número de WhatsApp válido com DDD.';
      }
    } else if (step === 4) {
      if (!formData.email.trim() || !formData.email.includes('@')) {
        newErrors.email = 'Informe um e-mail válido para contato.';
      }
    } else if (step === 5) {
      if (!formData.businessDescription.trim()) {
        newErrors.businessDescription = 'Conte em poucas palavras o que sua empresa faz.';
      }
    } else if (step === 6) {
      if (!formData.primaryMotivation) {
        newErrors.primaryMotivation = 'Selecione a opção que mais se aproxima do seu momento.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      if (currentStep < 6) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      companyName: '',
      companySegment: '',
      whatsapp: '',
      email: '',
      businessDescription: '',
      primaryMotivation: '',
    });
    setCurrentStep(1);
    setIsSubmitted(false);
    setErrors({});
  };

  // Montagem da mensagem estruturada para envio via WhatsApp
  const generateWhatsAppMessage = (): string => {
    const lines = [
      'NOVO DIAGNÓSTICO — LEANDRO | SOLUÇÕES DIGITAIS',
      '',
      'INFORMAÇÕES DA EMPRESA',
      `Nome: ${formData.name}`,
      `Empresa: ${formData.companyName}`,
      `Segmento: ${formData.companySegment || 'Não informado'}`,
      `Contato: ${formData.whatsapp}`,
      `E-mail: ${formData.email}`,
      '',
      'DIAGNÓSTICO & CONTEXTO',
      `Descrição da empresa: ${formData.businessDescription}`,
      '',
      'OBJETIVOS & PRINCIPAIS NECESSIDADES',
      `Motivação principal: ${formData.primaryMotivation}`,
    ];
    return lines.join('\n');
  };

  const encodedWhatsAppUrl = `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <section id="contato" className="py-24 sm:py-36 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      {/* Background Soft Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-white/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>PRIMEIRO PASSO // SEM CUSTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            Sua empresa vem primeiro.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 mt-1">
              A tecnologia vem depois.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Conte um pouco sobre sua empresa, seu momento e o que você gostaria de melhorar. A primeira conversa existe para entender — não para empurrar uma solução.
          </p>

          <p className="mt-2 text-xs font-mono text-zinc-400">
            Sem compromisso. Primeiro, entendemos.
          </p>
        </div>

        {/* Stepped Form Card */}
        <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md glow-card max-w-2xl mx-auto">
          {!isSubmitted ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span>ETAPA {currentStep} DE 6</span>
                  <span>{Math.round((currentStep / 6) * 100)}% COMPLETO</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300 shadow-[0_0_10px_#ffffff]"
                    style={{ width: `${(currentStep / 6) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleNext}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Name */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <User className="w-4 h-4 text-zinc-300" />
                        <span>IDENTIFICAÇÃO</span>
                      </div>
                      <label htmlFor="user-name" className="block text-xl sm:text-2xl font-display font-bold text-white">
                        1. Como podemos chamar você?
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        placeholder="Ex: Leandro Silva, Ana Costa..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base"
                        autoFocus
                      />
                      {errors.name && <p className="text-xs text-red-400 font-mono">{errors.name}</p>}
                    </motion.div>
                  )}

                  {/* Step 2: Company */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <Building className="w-4 h-4 text-zinc-300" />
                        <span>EMPRESA</span>
                      </div>
                      <label htmlFor="company-name" className="block text-xl sm:text-2xl font-display font-bold text-white">
                        2. Qual é o nome da sua empresa?
                      </label>
                      <input
                        id="company-name"
                        type="text"
                        placeholder="Ex: Barbearia Vintage, Oficina Progresso..."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base"
                        autoFocus
                      />
                      <input
                        id="company-segment"
                        type="text"
                        placeholder="Ramo/Segmento (ex: Comércio, Barbearia, Serviços, Loja de Roupas...)"
                        value={formData.companySegment}
                        onChange={(e) => setFormData({ ...formData, companySegment: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all"
                      />
                      {errors.companyName && <p className="text-xs text-red-400 font-mono">{errors.companyName}</p>}
                    </motion.div>
                  )}

                  {/* Step 3: WhatsApp */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <Phone className="w-4 h-4 text-zinc-300" />
                        <span>CONTATO DIRETO</span>
                      </div>
                      <label htmlFor="whatsapp-number" className="block text-xl sm:text-2xl font-display font-bold text-white">
                        3. Qual é o seu WhatsApp?
                      </label>
                      <input
                        id="whatsapp-number"
                        type="tel"
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base font-mono"
                        autoFocus
                      />
                      <p className="text-xs text-zinc-400">
                        Usaremos apenas para agendar e alinhar a conversa diagnóstica.
                      </p>
                      {errors.whatsapp && <p className="text-xs text-red-400 font-mono">{errors.whatsapp}</p>}
                    </motion.div>
                  )}

                  {/* Step 4: Email */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <Mail className="w-4 h-4 text-zinc-300" />
                        <span>E-MAIL</span>
                      </div>
                      <label htmlFor="user-email" className="block text-xl sm:text-2xl font-display font-bold text-white">
                        4. E o seu e-mail de contato?
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        placeholder="Ex: contato@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-base font-mono"
                        autoFocus
                      />
                      {errors.email && <p className="text-xs text-red-400 font-mono">{errors.email}</p>}
                    </motion.div>
                  )}

                  {/* Step 5: Business Story */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <FileEdit className="w-4 h-4 text-zinc-300" />
                        <span>CONTEXTO</span>
                      </div>
                      <label htmlFor="business-desc" className="block text-xl sm:text-2xl font-display font-bold text-white">
                        5. Conte um pouco sobre sua empresa.
                      </label>
                      <textarea
                        id="business-desc"
                        rows={4}
                        placeholder="O que você vende, quem são seus clientes principais e como é a rotina atual..."
                        value={formData.businessDescription}
                        onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm leading-relaxed"
                        autoFocus
                      />
                      {errors.businessDescription && <p className="text-xs text-red-400 font-mono">{errors.businessDescription}</p>}
                    </motion.div>
                  )}

                  {/* Step 6: Motivation */}
                  {currentStep === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <HelpCircle className="w-4 h-4 text-zinc-300" />
                        <span>OBJETIVO</span>
                      </div>
                      <label className="block text-xl sm:text-2xl font-display font-bold text-white">
                        6. O que fez você procurar ajuda agora?
                      </label>

                      <div className="space-y-2">
                        {motivationOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, primaryMotivation: opt });
                              setErrors({});
                            }}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                              formData.primaryMotivation === opt
                                ? 'bg-white text-zinc-950 border-white font-bold shadow-md'
                                : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-600'
                            }`}
                          >
                            <span>{opt}</span>
                            {formData.primaryMotivation === opt && (
                              <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0" />
                            )}
                          </button>
                        ))}
                      </div>

                      {errors.primaryMotivation && (
                        <p className="text-xs text-red-400 font-mono">{errors.primaryMotivation}</p>
                      )}

                      <div className="pt-2 text-center">
                        <span className="text-xs font-mono text-zinc-400">
                          Vamos entender sua empresa.
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Buttons */}
                <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 rounded-lg border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white"
                    >
                      ← Voltar
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <span>{currentStep === 6 ? 'Finalizar e Preparar Diagnóstico' : 'Continuar'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Submission / Ready for WhatsApp View */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-6"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  Pronto para Envio
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Diagnóstico preparado com sucesso.
                </h3>
                <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto font-light leading-relaxed">
                  Suas respostas estão prontas para serem enviadas diretamente para nossa equipe pelo WhatsApp.
                </p>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Não é necessário criar uma conta.
                </p>
              </div>

              {/* Summary Preview Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-left text-xs font-mono space-y-2">
                <div className="text-zinc-300 font-bold border-b border-zinc-900 pb-1.5 flex items-center justify-between">
                  <span>RESUMO DO DIAGNÓSTICO</span>
                  <span className="text-emerald-400 font-normal">Pronto</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 pt-1">
                  <div><span className="text-zinc-400">Nome:</span> {formData.name}</div>
                  <div><span className="text-zinc-400">Empresa:</span> {formData.companyName} {formData.companySegment ? `(${formData.companySegment})` : ''}</div>
                  <div><span className="text-zinc-400">WhatsApp:</span> {formData.whatsapp}</div>
                  <div><span className="text-zinc-400">E-mail:</span> {formData.email}</div>
                </div>
                <div className="border-t border-zinc-900 pt-2 text-zinc-300">
                  <span className="text-zinc-400 block mb-0.5">Objetivo:</span>
                  <span>{formData.primaryMotivation}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={encodedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-500 text-zinc-950 font-bold text-sm hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar diagnóstico pelo WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Fazer outro diagnóstico</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
