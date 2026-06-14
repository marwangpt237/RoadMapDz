import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import RoadmapCard from './components/RoadmapCard';
import RoadmapCanvas from './components/RoadmapCanvas';
import TopicPanel from './components/TopicPanel';
import { roadmaps } from './data';
import { RoadmapNodeData } from './data/types';
import {
  MapPin,
  GitBranch,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Mouse
} from 'lucide-react';

// Custom lightweight HashRouter hook for 100% iframe & subpath safety
function useSimpleRouter() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      return hash.replace('#', '');
    }
    return '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#/')) {
        setCurrentRoute(hash.replace('#', ''));
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = `#${path}`;
    setCurrentRoute(path);
    // Auto-scroll to top of page on route shifts
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return { currentRoute, navigate };
}

function AppContent() {
  const { lang, t } = useApp();
  const { currentRoute, navigate } = useSimpleRouter();
  const [selectedNode, setSelectedNode] = useState<RoadmapNodeData | null>(null);

  // Derive active roadmapId (e.g., matching "/full-stack" -> "full-stack")
  const roadmapId = currentRoute !== '/' ? currentRoute.replace('/', '') : null;
  const matchedRoadmap = roadmaps.find((r) => r.id === roadmapId);

  // Close details drawer panel if active roadmap gets changed
  useEffect(() => {
    setSelectedNode(null);
  }, [currentRoute]);

  // If in a roadmap view, display Canvas. Otherwise, show Dashboard.
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-200" id="main-layout-root">
      {/* Brand Navigation Core Header */}
      <Header
        onBackToHome={() => navigate('/')}
        isHome={currentRoute === '/'}
      />

      {currentRoute === '/' ? (
        /* ================== HOME DIRECTORY SCREEN ================== */
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full animate-fade-in">
          {/* Main Hero Jumbotron Banner section */}
          <div className="relative text-center max-w-3xl mx-auto space-y-6" id="welcome-heading">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 dark:bg-rose-500/10 rounded-full text-rose-600 dark:text-rose-400 border border-rose-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="text-xs font-semibold font-mono uppercase tracking-widest leading-none">
                {t('Algerian Personal Portfolio Project', 'مشروع المعرض الشخصي بالجزائر')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              {t('Interactive Developer', 'خرائط تفاعلية')} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
                {t('Learning Roadmaps', 'لمسارات تعلم البرمجة')}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t(
                'Visually trace core topics from first principles to professional frameworks. Select a roadmap below, analyze the node graph, and deep-link directly to curated Algerian references on AlgDevs.',
                'تتبع المواضيع البرمجية بصرياً من الأساسيات إلى الإطارات المتقدمة. اختر خريطة طريق أدناه، تفقد تفرعاتها، واعبر بضغطة زر إلى الدروس والملفات المنسقة من الجزائر وغيرها في منصة AlgDevs.'
              )}
            </p>
          </div>

          {/* Responsive Roadmap Cards Grid Container */}
          <div className="space-y-4" id="roadmaps-grid">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-550 border-b border-zinc-100 dark:border-zinc-850 pb-2">
              {t('Available Pathways', 'خرائط الطريق المتوفرة')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Live pilot roadmap */}
              <RoadmapCard
                roadmap={roadmaps[0]}
                onSelect={(id) => navigate('/' + id)}
              />

              {/* Dynamic coming soon placeholders */}
              {roadmaps.slice(1).map((rm) => (
                <RoadmapCard
                  key={rm.id}
                  roadmap={rm}
                  onSelect={(id) => navigate('/' + id)}
                  isComingSoon={true}
                />
              ))}
            </div>
          </div>

        </main>
      ) : matchedRoadmap ? (
        /* ================== ROADMAP DETAILED VIEW SCREEN ================== */
        <main className="flex-grow flex flex-col w-full h-[calc(100vh-64px)] overflow-hidden" id="canvas-view-container">
          {/* Detailed View Breadcrumbs & Stats bar */}
          <div className="w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-gray-850 px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Go Back button */}
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center p-2 rounded-xl text-zinc-500 hover:text-rose-500 hover:bg-zinc-100 dark:hover:bg-zinc-805 transition-all duration-200 cursor-pointer"
                title={t('Back to Roadmaps Directory', 'الرجوع إلى الفهرس')}
                id="back-to-home-btn"
              >
                {lang === 'en' ? (
                  <ArrowLeft className="w-4.5 h-4.5" />
                ) : (
                  <ArrowRight className="w-4.5 h-4.5" />
                )}
              </button>
              
              <div className="border-l border-zinc-200 dark:border-zinc-800 h-6 pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3">
                <h2 className="font-bold text-base text-zinc-900 dark:text-zinc-50 leading-tight">
                  {lang === 'en' ? matchedRoadmap.title.en : matchedRoadmap.title.ar}
                </h2>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 line-clamp-1 max-w-md sm:max-w-xl">
                  {lang === 'en' ? matchedRoadmap.description.en : matchedRoadmap.description.ar}
                </p>
              </div>
            </div>

            {/* Quick Stats Pillar */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-emerald-500" />
                <div>
                  <span className="text-zinc-400">{t('Core Topics: ', 'العناصر الأساسية: ')}</span>
                  <span className="font-bold text-emerald-500">
                    {matchedRoadmap.nodes.filter(n => n.status === 'core').length}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border-l border-zinc-200 dark:border-zinc-800 pl-3.5 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3.5">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                <div>
                  <span className="text-zinc-400">{t('Total Miles: ', 'مجموع العناصر: ')}</span>
                  <span className="font-bold text-zinc-700 dark:text-zinc-200">{matchedRoadmap.nodes.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Canvas Component Stage */}
          <div className="flex-1 min-h-[50vh] sm:h-[70vh] bg-zinc-50 dark:bg-zinc-950 canvas-wrapper relative">
            {/* Visual Guide floating card on Canvas Top Right */}
            <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10 pointer-events-none hidden sm:block">
              <div className="p-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 text-[10px] space-y-1.5 select-none text-zinc-500 dark:text-zinc-400 font-mono shadow-xs">
                <span className="block font-bold text-[9px] text-zinc-400 dark:text-zinc-550 uppercase tracking-widest">{t('Graph Key', 'دليل الرموز')}</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/10 border border-emerald-500"></span>
                  <span>{t('Solid / Emerald = Core Path', 'مستمر / أخضر = مسار أساسي')}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-300 dark:border-zinc-700 border-dashed"></span>
                  <span>{t('Dashed / Gray = Optional Route', 'متقطع / رمادي = مسار اختياري')}</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Mouse className="w-3.5 h-3.5 opacity-70" />
                  <span>{t('Scroll to zoom • Drag to pan', 'العجل للتقريب • الإمساك للسحب')}</span>
                </span>
              </div>
            </div>

            <RoadmapCanvas
              roadmap={matchedRoadmap}
              onNodeSelect={(node) => setSelectedNode(node)}
              selectedNodeId={selectedNode?.id}
            />
          </div>

          {/* Info Side Drawer / Modal Mobile Panel Sheet */}
          <TopicPanel
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
          />
        </main>
      ) : (
        /* ================== PAGE NOT FOUND (404 ERR) SCREEN ================== */
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-5 animate-fade-in" id="404-container">
          <div className="w-16 h-16 rounded-3xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
            <MapPin className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 leading-tight">
              {t('Roadmap Not Found', 'لم يتم العثور على خريطة الطريق')}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm">
              {t(
                'The specified roadmap pathway is not part of the active program indexing list yet.',
                'مسار التعلم المحدد ليس معرّفاً ضمن الفهرس البرمجي النشط بعد.'
              )}
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm transition-colors cursor-pointer"
            id="notfound-btn"
          >
            {lang === 'en' ? (
              <ArrowLeft className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
            <span>{t('Return to Directory', 'العودة إلى الفهرس الرئيسي')}</span>
          </button>
        </main>
      )}

      {/* Footer Branding Trademark Section */}
      <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-850 py-5 sm:py-6 text-center text-xs text-zinc-400 font-mono transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {t('roadmap.marwan-naili.me • Learning Path Applet', 'منصة خرائط طريق المطورين')}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="https://marwan-naili.me" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">
              {t('Portfolio', 'المعرض الشخصي')}
            </a>
            <span>•</span>
            <a href="https://algdevs.marwan-naili.me" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">
              {t('AlgDevs Platform', 'منصة AlgDevs')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
