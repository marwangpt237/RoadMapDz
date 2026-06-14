import { RoadmapDefinition } from './types';

export const fullStackRoadmap: RoadmapDefinition = {
  id: 'full-stack',
  title: { en: 'Full Stack Development', ar: 'تطوير الويب الشامل (Full Stack)' },
  description: {
    en: 'A practical path from web fundamentals to building and deploying complete applications.',
    ar: 'مسار عملي من أساسيات الويب إلى بناء ونشر تطبيقات كاملة.',
  },
  nodes: [
    {
      id: 'internet-basics',
      title: { en: 'How the Web Works', ar: 'كيف يعمل الويب' },
      description: {
        en: 'HTTP, DNS, domains, hosting, and browsers — the foundation everything else builds on.',
        ar: 'بروتوكول HTTP ونظام DNS والنطاقات والاستضافة والمتصفحات — الأساس الذي يُبنى عليه كل شيء آخر.',
      },
      status: 'core',
      algdevsQuery: 'hosting',
    },
    {
      id: 'html-css',
      title: { en: 'HTML & CSS Fundamentals', ar: 'أساسيات HTML و CSS' },
      description: {
        en: 'Structure and style web pages — the building blocks of every website.',
        ar: 'بناء وتنسيق صفحات الويب — اللبنات الأساسية لكل موقع.',
      },
      status: 'core',
      algdevsQuery: 'css',
    },
    {
      id: 'javascript-basics',
      title: { en: 'JavaScript Fundamentals', ar: 'أساسيات جافاسكريبت' },
      description: {
        en: 'Variables, functions, DOM manipulation, and async basics — the language of the web.',
        ar: 'المتغيرات والدوال والتعامل مع DOM وأساسيات البرمجة غير المتزامنة — لغة الويب.',
      },
      status: 'core',
      algdevsQuery: 'javascript',
    },
    {
      id: 'git-github',
      title: { en: 'Version Control with Git & GitHub', ar: 'التحكم في الإصدارات: Git و GitHub' },
      description: {
        en: 'Track changes, collaborate, and showcase your work — essential for any developer.',
        ar: 'تتبع التغييرات والتعاون وعرض أعمالك — ضروري لكل مطور.',
      },
      status: 'core',
      algdevsQuery: 'git',
    },
    {
      id: 'package-managers',
      title: { en: 'Package Managers (npm / pnpm)', ar: 'مدراء الحزم (npm / pnpm)' },
      description: {
        en: 'Install, manage, and share code dependencies for your projects.',
        ar: 'تثبيت وإدارة ومشاركة الاعتماديات (Dependencies) في مشاريعك.',
      },
      status: 'core',
      algdevsQuery: 'npm',
    },
    {
      id: 'frontend-framework',
      title: { en: 'Frontend Framework (React)', ar: 'إطار عمل الواجهة الأمامية (React)' },
      description: {
        en: 'Build interactive user interfaces with components and state.',
        ar: 'بناء واجهات مستخدم تفاعلية باستخدام المكوّنات (Components) والحالة (State).',
      },
      status: 'core',
      algdevsQuery: 'react',
    },
    {
      id: 'css-framework',
      title: { en: 'CSS Framework (Tailwind)', ar: 'إطار عمل CSS (Tailwind)' },
      description: {
        en: 'Style faster with utility classes instead of writing CSS from scratch.',
        ar: 'تنسيق أسرع باستخدام الأصناف الجاهزة (Utility Classes) بدل كتابة CSS من الصفر.',
      },
      status: 'optional',
      algdevsQuery: 'tailwind',
    },
    {
      id: 'build-tools',
      title: { en: 'Build Tools (Vite)', ar: 'أدوات البناء (Vite)' },
      description: {
        en: 'Bundle, optimize, and run your project efficiently during development and production.',
        ar: 'تجميع وتحسين وتشغيل مشروعك بكفاءة خلال التطوير والإنتاج.',
      },
      status: 'optional',
      algdevsQuery: 'vite',
    },
    {
      id: 'state-management',
      title: { en: 'State Management', ar: 'إدارة الحالة (State Management)' },
      description: {
        en: 'Share and update data across components in larger applications.',
        ar: 'مشاركة وتحديث البيانات بين المكوّنات في التطبيقات الكبيرة.',
      },
      status: 'optional',
      algdevsQuery: 'redux',
    },
    {
      id: 'frontend-testing',
      title: { en: 'Frontend Testing', ar: 'اختبار الواجهة الأمامية' },
      description: {
        en: 'Catch bugs early by testing components and user interactions.',
        ar: 'اكتشاف الأخطاء مبكراً عبر اختبار المكوّنات وتفاعلات المستخدم.',
      },
      status: 'optional',
      algdevsQuery: 'testing',
    },
    {
      id: 'backend-language',
      title: { en: 'Backend Language (Node.js / Python)', ar: 'لغة الخادم (Node.js / Python)' },
      description: {
        en: 'Write the server-side logic that powers your application.',
        ar: 'كتابة منطق الخادم الذي يُشغّل تطبيقك.',
      },
      status: 'core',
      algdevsQuery: 'node',
    },
    {
      id: 'backend-framework',
      title: { en: 'Backend Framework (Express / FastAPI)', ar: 'إطار عمل الخادم (Express / FastAPI)' },
      description: {
        en: 'Structure your server, routes, and business logic efficiently.',
        ar: 'تنظيم الخادم والمسارات (Routes) ومنطق العمل بكفاءة.',
      },
      status: 'core',
      algdevsQuery: 'express',
    },
    {
      id: 'rest-apis',
      title: { en: 'REST APIs', ar: 'واجهات REST API' },
      description: {
        en: 'Design endpoints that let the frontend and other services talk to your backend.',
        ar: 'تصميم نقاط نهاية (Endpoints) تتيح للواجهة الأمامية والخدمات الأخرى التواصل مع الخادم.',
      },
      status: 'core',
      algdevsQuery: 'api',
    },
    {
      id: 'databases-sql',
      title: { en: 'Relational Databases (SQL)', ar: 'قواعد البيانات العلائقية (SQL)' },
      description: {
        en: 'Store and query structured data — the backbone of most applications.',
        ar: 'تخزين والاستعلام عن البيانات المنظمة — أساس معظم التطبيقات.',
      },
      status: 'core',
      algdevsQuery: 'database',
    },
    {
      id: 'databases-nosql',
      title: { en: 'NoSQL Databases', ar: 'قواعد بيانات NoSQL' },
      description: {
        en: 'Flexible data storage for unstructured or fast-changing data.',
        ar: 'تخزين بيانات مرن للبيانات غير المنظمة أو سريعة التغيّر.',
      },
      status: 'optional',
      algdevsQuery: 'mongodb',
    },
    {
      id: 'orms',
      title: { en: 'ORMs (Prisma, etc.)', ar: 'أدوات ORM (مثل Prisma)' },
      description: {
        en: 'Work with your database using code instead of raw SQL queries.',
        ar: 'التعامل مع قاعدة البيانات بالكود بدل كتابة استعلامات SQL مباشرة.',
      },
      status: 'optional',
      algdevsQuery: 'prisma',
    },
    {
      id: 'authentication',
      title: { en: 'Authentication & Authorization', ar: 'المصادقة والتفويض (Auth)' },
      description: {
        en: 'Securely manage logins, sessions, and permissions.',
        ar: 'إدارة تسجيل الدخول والجلسات والصلاحيات بشكل آمن.',
      },
      status: 'core',
      algdevsQuery: 'auth',
    },
    {
      id: 'backend-testing',
      title: { en: 'Backend Testing', ar: 'اختبار الخادم' },
      description: {
        en: 'Verify your APIs and business logic work as expected.',
        ar: 'التأكد من أن واجهات API ومنطق العمل تعمل كما هو متوقع.',
      },
      status: 'optional',
      algdevsQuery: 'testing',
    },
    {
      id: 'connecting-fullstack',
      title: { en: 'Connecting Frontend & Backend', ar: 'ربط الواجهة الأمامية بالخادم' },
      description: {
        en: 'Wire up your UI to real data — requests, environment variables, and error handling.',
        ar: 'ربط واجهتك ببيانات حقيقية — الطلبات، متغيرات البيئة، ومعالجة الأخطاء.',
      },
      status: 'core',
      algdevsQuery: 'fullstack',
    },
    {
      id: 'deployment',
      title: { en: 'Deployment & Hosting', ar: 'النشر والاستضافة' },
      description: {
        en: 'Put your application online using free, reliable hosting platforms.',
        ar: 'نشر تطبيقك على الإنترنت عبر منصات استضافة مجانية وموثوقة.',
      },
      status: 'core',
      algdevsQuery: 'hosting',
    },
    {
      id: 'cicd',
      title: { en: 'CI/CD Basics', ar: 'أساسيات CI/CD' },
      description: {
        en: 'Automatically test and deploy your code on every change.',
        ar: 'اختبار ونشر الكود تلقائياً مع كل تغيير.',
      },
      status: 'optional',
      algdevsQuery: 'github actions',
    },
    {
      id: 'docker-basics',
      title: { en: 'Docker Basics', ar: 'أساسيات Docker' },
      description: {
        en: 'Package your application so it runs the same everywhere.',
        ar: 'تغليف تطبيقك ليعمل بنفس الطريقة في كل مكان.',
      },
      status: 'optional',
      algdevsQuery: 'docker',
    },
    {
      id: 'ai-assisted-dev',
      title: { en: 'AI-Assisted Development', ar: 'التطوير بمساعدة الذكاء الاصطناعي' },
      description: {
        en: 'Use AI tools to write, debug, and learn faster.',
        ar: 'استخدام أدوات الذكاء الاصطناعي للكتابة والتصحيح والتعلم بشكل أسرع.',
      },
      status: 'optional',
      algdevsQuery: 'ai',
    },
    {
      id: 'freelancing-portfolio',
      title: { en: 'Freelancing & Building a Portfolio', ar: 'العمل الحر وبناء معرض أعمال' },
      description: {
        en: 'Turn your skills into income — portfolios, platforms, and getting paid in Algeria.',
        ar: 'تحويل مهاراتك إلى دخل — معارض الأعمال، المنصات، واستلام الأموال في الجزائر.',
      },
      status: 'optional',
      algdevsQuery: 'freelance',
    },
    {
      id: 'open-source',
      title: { en: 'Contributing to Open Source', ar: 'المساهمة في المصادر المفتوحة' },
      description: {
        en: 'Build real-world experience and visibility by contributing to public projects.',
        ar: 'اكتساب خبرة حقيقية وظهور أكبر من خلال المساهمة في مشاريع مفتوحة المصدر.',
      },
      status: 'optional',
      algdevsQuery: 'github',
    },
  ],
  edges: [
    { source: 'internet-basics', target: 'html-css' },
    { source: 'html-css', target: 'javascript-basics' },
    { source: 'javascript-basics', target: 'git-github' },
    { source: 'git-github', target: 'package-managers' },
    { source: 'package-managers', target: 'frontend-framework' },
    { source: 'package-managers', target: 'backend-language' },
    { source: 'frontend-framework', target: 'css-framework' },
    { source: 'css-framework', target: 'build-tools' },
    { source: 'build-tools', target: 'state-management' },
    { source: 'state-management', target: 'frontend-testing' },
    { source: 'backend-language', target: 'backend-framework' },
    { source: 'backend-framework', target: 'rest-apis' },
    { source: 'backend-framework', target: 'orms' },
    { source: 'rest-apis', target: 'databases-sql' },
    { source: 'databases-sql', target: 'databases-nosql' },
    { source: 'databases-sql', target: 'authentication' },
    { source: 'authentication', target: 'backend-testing' },
    { source: 'frontend-testing', target: 'connecting-fullstack' },
    { source: 'backend-testing', target: 'connecting-fullstack' },
    { source: 'connecting-fullstack', target: 'deployment' },
    { source: 'deployment', target: 'cicd' },
    { source: 'deployment', target: 'docker-basics' },
    { source: 'internet-basics', target: 'ai-assisted-dev' },
    { source: 'connecting-fullstack', target: 'freelancing-portfolio' },
    { source: 'freelancing-portfolio', target: 'open-source' },
  ],
};
