import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, CircleDot } from 'lucide-react';

export default memo(function TopicNode({ data, selected }: any) {
  const { lang, t } = useApp();
  const isCore = data.status === 'core';
  const title = lang === 'en' ? data.title.en : data.title.ar;

  return (
    <div className={`relative px-4 py-3 rounded-xl text-center min-w-[200px] max-w-[245px] border transition-all duration-350 select-none ${
      selected
        ? 'border-rose-500 bg-rose-50/90 dark:bg-rose-950/45 scale-105 shadow-md shadow-rose-500/10 ring-2 ring-rose-500/25'
        : isCore
          ? 'border-emerald-500/85 dark:border-emerald-600/70 bg-gradient-to-b from-emerald-50/30 to-emerald-50/10 dark:from-emerald-950/15 dark:to-emerald-950/5 hover:border-emerald-500 hover:scale-102 hover:shadow-lg hover:shadow-emerald-500/5'
          : 'border-zinc-300 dark:border-zinc-750 bg-white/70 dark:bg-zinc-900/40 border-dashed hover:border-zinc-400 dark:hover:border-zinc-600 hover:scale-102 hover:shadow-md'
    }`}
    id={`node-${data.id}`}
    >
      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Top}
        className="!w-2.5 !h-2.5 !bg-zinc-300 dark:!bg-zinc-700 !border-2 !border-white dark:!border-zinc-900 hover:!bg-rose-500 transition-colors cursor-crosshair"
      />

      <div className="flex flex-col items-center justify-center py-0.5">
        {/* Progress Tracker Pill */}
        <div className="flex items-center gap-1 mb-1.5">
          {isCore ? (
            <span className="flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3 h-3 text-emerald-500 inline-block" />
              {t('Core Focus', 'تركيز أساسي')}
            </span>
          ) : (
            <span className="flex items-center gap-0.5 text-[9px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              <CircleDot className="w-3 h-3 text-zinc-400 dark:text-zinc-600 inline-block" />
              {t('Optional Track', 'مسار اختياري')}
            </span>
          )}
        </div>

        {/* Node Title */}
        <div className="text-sm font-bold font-sans tracking-tight text-zinc-850 dark:text-zinc-200 leading-snug">
          {title}
        </div>
      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-2.5 !h-2.5 !bg-zinc-300 dark:!bg-zinc-700 !border-2 !border-white dark:!border-zinc-900 hover:!bg-rose-500 transition-colors cursor-crosshair"
      />
    </div>
  );
});
