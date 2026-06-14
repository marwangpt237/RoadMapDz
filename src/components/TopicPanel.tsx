import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { RoadmapNodeData } from '../data/types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ExternalLink, GraduationCap, Sparkles, AlertCircle } from 'lucide-react';

interface TopicPanelProps {
  node: RoadmapNodeData | null;
  onClose: () => void;
}

export default function TopicPanel({ node, onClose }: TopicPanelProps) {
  const { lang, t } = useApp();
  const [isMobile, setIsMobile] = useState(false);

  // Monitor layout sizes for interactive responsive drawer animation offsets
  useEffect(() => {
    const checkViewportSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewportSize();
    window.addEventListener('resize', checkViewportSize);
    return () => window.removeEventListener('resize', checkViewportSize);
  }, []);

  // Escape key handler to toggle drawer state close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!node) return null;

  const isCore = node.status === 'core';
  const nodeTitle = lang === 'en' ? node.title.en : node.title.ar;
  const nodeDesc = lang === 'en' ? node.description.en : node.description.ar;
  const algDevsUrl = node.algdevsQuery
    ? `https://algdevs.marwan-naili.me/?q=${encodeURIComponent(node.algdevsQuery)}`
    : null;

  // Responsive Drawer Motion Parameters
  const getMotionProps = () => {
    if (isMobile) {
      return {
        initial: { y: '100%', opacity: 1 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 1 },
        transition: { type: 'spring', damping: 25, stiffness: 220 },
      };
    }
    // Desktop layout slides right for English (LTR) and left for Arabic (RTL)
    const slideDirection = lang === 'ar' ? '-100%' : '100%';
    return {
      initial: { x: slideDirection, opacity: 0.95 },
      animate: { x: 0, opacity: 1 },
      exit: { x: slideDirection, opacity: 0.95 },
      transition: { type: 'tween', duration: 0.32, ease: 'easeOut' },
    };
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex justify-end rtl:justify-start" id="drawer-container">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          id="drawer-backdrop"
        />

        {/* Sliding card shell */}
        <motion.div
          {...getMotionProps()}
          className={`absolute flex flex-col bg-white dark:bg-zinc-900 shadow-2xl border-zinc-200 dark:border-zinc-800 ${
            isMobile
              ? 'bottom-0 left-0 right-0 h-[82vh] rounded-t-3xl border-t'
              : 'top-0 bottom-0 w-full sm:w-[440px] h-full border-l rtl:border-l-0 rtl:border-r'
          }`}
          id="drawer-content-card"
        >
          {/* Header section */}
          <div className="flex items-center justify-between p-5 border-b border-zinc-100 dark:border-zinc-805">
            <div className="flex flex-col gap-1">
              {/* Badge */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                    isCore
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {isCore ? t('Core Stage', 'مرحلة أساسية') : t('Recommended Phase', 'مسار مستحسن')}
                </span>
                {node.algdevsQuery && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-rose-500/10 text-rose-500 border border-rose-500/10">
                    <Sparkles className="w-2.5 h-2.5" />
                    {t('AlgDevs Connected', 'متصل بـ AlgDevs')}
                  </span>
                )}
              </div>
            </div>

            {/* Close button icon */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-805 transition-all duration-200"
              aria-label="Close panel"
              id="drawer-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Panel Main Body - Scrollable content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                {nodeTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-350 bg-zinc-50 dark:bg-zinc-805/30 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                {nodeDesc}
              </p>
            </div>

            {/* Deep-link to AlgDevs query component */}
            {algDevsUrl && (
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-rose-500 dark:text-rose-400">
                  {t('Explore Resources on AlgDevs', 'تصفح المصادر التعليمية في AlgDevs')}
                </h3>
                <div className="p-4 bg-rose-50/40 dark:bg-rose-950/15 rounded-xl border border-rose-100/60 dark:border-rose-900/20">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {t(
                      'This core topic bridges directly to curated tutorials, Algerian workspace documents, videos, and books stored on AlgDevs.',
                      'يرتبط هذا الموضوع مباشرة بالدروس المنسقة، والوثائق الجزائرية، ومقاطع الفيديو، والكتب المتوفرة على AlgDevs.'
                    )}
                  </p>
                  <a
                    href={algDevsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm shadow-md shadow-rose-500/10 hover:shadow-lg hover:shadow-rose-500/15 hover:scale-[1.01] transition-all duration-200"
                    id="drawer-algdevs-btn"
                  >
                    <Search className="w-4.5 h-4.5" />
                    <span>{t('Search on AlgDevs', 'تصفح الموارد في AlgDevs')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* Auxiliary/External references */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-550">
                {t('Recommended Guidelines', 'المراجع ومصادر التعلم الإضافية')}
              </h3>

              {node.externalLinks && node.externalLinks.length > 0 ? (
                <div className="space-y-2">
                  {node.externalLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-805 bg-white dark:bg-zinc-805 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <GraduationCap className="w-4.5 h-4.5 text-rose-500 dark:text-rose-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                          {lang === 'en' ? link.label.en : link.label.ar}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-805 bg-zinc-50/50 dark:bg-zinc-900/20 text-zinc-400 dark:text-zinc-550">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-xs">
                    {t(
                      'Auxiliary direct links will appear here. Utilize the primary AlgDevs button to view custom materials.',
                      'ستظهر الروابط الإضافية هنا. اضغط على الزر الرئيسي للذهاب إلى AlgDevs مباشرة وتصفح الموارد.'
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Fixed Footer with umbrella brand mention */}
          <div className="p-4 border-t border-zinc-100 dark:border-zinc-805 bg-zinc-50/60 dark:bg-zinc-900/60 text-center text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
            {t('Roadmap - Pilot Program', 'خريطة الطريق - البرنامج التجريبي')}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
