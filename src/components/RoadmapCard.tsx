import React from 'react';
import { RoadmapDefinition } from '../data/types';
import { useApp } from '../context/AppContext';
import { Map, ArrowRight, ArrowLeft, Star, Clock } from 'lucide-react';

interface RoadmapCardProps {
  key?: string | number;
  roadmap: RoadmapDefinition;
  onSelect: (id: string) => void;
  isComingSoon?: boolean;
}

export default function RoadmapCard({ roadmap, onSelect, isComingSoon = false }: RoadmapCardProps) {
  const { lang, t } = useApp();
  const nodeCount = roadmap.nodes.length;
  const coreCount = roadmap.nodes.filter(n => n.status === 'core').length;

  const handleCardClick = () => {
    if (!isComingSoon) {
      onSelect(roadmap.id);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative flex flex-col justify-between h-full p-6 rounded-2xl border transition-all duration-300 ${
        isComingSoon
          ? 'border-zinc-200 dark:border-zinc-850 bg-zinc-50/50 dark:bg-zinc-900/30 opacity-75'
          : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-xl hover:border-rose-500/50 dark:hover:border-rose-500/50 hover:-translate-y-1 cursor-pointer group'
      }`}
      id={`roadmap-card-${roadmap.id}`}
    >
      {/* Accent Indicator on Top/Corner */}
      {!isComingSoon && (
        <span className="absolute top-4 right-4 rtl:right-auto rtl:left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
          <Star className="w-3 h-3 fill-current" />
          {t('Active Pilot', 'المسار التجريبي')}
        </span>
      )}
      {isComingSoon && (
        <span className="absolute top-4 right-4 rtl:right-auto rtl:left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-zinc-500/10 text-zinc-500 dark:text-zinc-400 border border-zinc-500/20">
          <Clock className="w-3 h-3" />
          {t('Coming Soon', 'قريباً')}
        </span>
      )}

      <div>
        {/* Category Symbol Icon */}
        <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
          isComingSoon 
            ? 'bg-zinc-100 dark:bg-zinc-805 text-zinc-400' 
            : 'bg-rose-50 dark:bg-rose-950/40 text-rose-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300'
        }`}>
          <Map className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-sans text-zinc-850 dark:text-zinc-50 leading-tight mb-2.5">
          {lang === 'en' ? roadmap.title.en : roadmap.title.ar}
        </h3>

        {/* Description */}
        <p className="text-sm font-sans text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
          {lang === 'en' ? roadmap.description.en : roadmap.description.ar}
        </p>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-805 mt-auto">
        <div className="flex flex-col">
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-505">
            {t('Topics & Milestones', 'المواضيع والمراحل')}
          </span>
          <span className="text-sm font-bold font-sans text-zinc-700 dark:text-zinc-200 mt-0.5">
            {isComingSoon 
              ? '--' 
              : t(`${nodeCount} Topics (${coreCount} Core)`, `${nodeCount} موضوع (${coreCount} أساسي)`)
            }
          </span>
        </div>

        {!isComingSoon && (
          <div className="flex items-center gap-1 text-sm font-bold text-rose-500 dark:text-rose-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all duration-300">
            <span>{t('Explore', 'ابدأ الآن')}</span>
            {lang === 'en' ? (
              <ArrowRight className="w-4 h-4 ml-0.5" />
            ) : (
              <ArrowLeft className="w-4 h-4 mr-0.5" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
