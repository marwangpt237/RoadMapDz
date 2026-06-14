import { RoadmapDefinition } from './types';
import { fullStackRoadmap } from './full-stack';

// We can define other future roadmaps here or use placeholders for them to show the generic indexing card rendering
export const roadmaps: RoadmapDefinition[] = [
  fullStackRoadmap,
  {
    id: 'frontend',
    title: { en: 'Frontend Engineering', ar: 'هندسة الواجهات الأمامية (Frontend)' },
    description: {
      en: 'Master React, Vue, Svelte, build performance, client-side tooling, and visual animations.',
      ar: 'احتراف واجهات المستخدم (React, Vue, Svelte)، وتحسين الأداء، وبناء التطبيقات التفاعلية.',
    },
    nodes: [
      {
        id: 'html-css',
        title: { en: 'Advanced HTML & CSS', ar: 'HTML و CSS متقدم' },
        description: { en: 'Flexbox, Grid, custom properties, animations.', ar: 'تخطيطات متقدمة، الحركات وتغيير الخصائص.' },
        status: 'core',
        algdevsQuery: 'css',
      },
      {
        id: 'modern-js',
        title: { en: 'Modern JavaScript & TypeScript', ar: 'جافاسكريبت وتايب سكريبت الحديثة' },
        description: { en: 'ESNext features, static typing, and modular architectures.', ar: 'ميزات اللغة الحديثة وبرمجة الكائن ونظام الأنواع.' },
        status: 'core',
        algdevsQuery: 'typescript',
      }
    ],
    edges: [
      { source: 'html-css', target: 'modern-js' }
    ]
  },
  {
    id: 'backend',
    title: { en: 'Backend Engineering', ar: 'هندسة الخوادم والأنظمة (Backend)' },
    description: {
      en: 'System design, database tuning, architectural patterns, background workers, and APIs in depth.',
      ar: 'تصميم الأنظمة، قواعد البيانات، الأمان، بناء خوادم سحابية قوية ونقاط النهاية المعقدة.',
    },
    nodes: [
      {
        id: 'sys-design',
        title: { en: 'System Design Basics', ar: 'أساسيات تصميم الأنظمة' },
        description: { en: 'Scalability, caching, load balancing, and distributed flows.', ar: 'القدرة على التوسع، كاش، موازنة الأحمال والأنظمة الموزعة.' },
        status: 'core',
        algdevsQuery: 'architecture',
      }
    ],
    edges: []
  },
  {
    id: 'cybersecurity',
    title: { en: 'Cybersecurity Analyst', ar: 'محلل الأمن السيبراني' },
    description: {
      en: 'Networking security, ethical hacking, digital forensics, pentesting, and identity access control.',
      ar: 'أمن الشبكات، الاختراق الأخلاقي، التحقيق الجنائي الرقمي، واختبار الاختراق وإدارة الهويات والوصول.',
    },
    nodes: [
      {
        id: 'net-sec',
        title: { en: 'Network Security Principles', ar: 'مبادئ أمن الشبكات' },
        description: { en: 'Firewalls, VPNs, subnets, and packet analysis.', ar: 'تكوين جدران الحماية، الشبكات الافتراضية والتحليل الأمني للحزم.' },
        status: 'core',
        algdevsQuery: 'security',
      }
    ],
    edges: []
  }
];

export * from './types';
