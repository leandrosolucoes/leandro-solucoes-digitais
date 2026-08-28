export interface MindMapNode {
  id: string;
  label: string;
  category: 'core' | 'internal' | 'market' | 'future';
  description: string;
  diagnosticFocus: string;
  x: number; // percentage coordinates 0-100
  y: number;
}

export interface FrictionArea {
  id: string;
  title: string;
  subtitle: string;
  hiddenLoss: string;
  opportunity: string;
  impactScore: number; // 1-10
  tags: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  actionItems: string[];
  deliverable: string;
  badge?: {
    text: string;
    variant: 'neutral' | 'high' | 'medium' | 'low';
  };
}

export interface DiagnosticSection {
  title: string;
  description: string;
  items: {
    label: string;
    value: string;
    badge?: string;
    variant?: 'danger' | 'warning' | 'success' | 'neutral';
  }[];
}

export interface DiagnosticFormData {
  name: string;
  companyName: string;
  companySegment: string;
  whatsapp: string;
  email: string;
  businessDescription: string;
  primaryMotivation: string;
  urgentPains?: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  whenItMakesSense: string;
  whenNotToUse: string;
  examples: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
