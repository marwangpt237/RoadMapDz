import React from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Globe, ExternalLink, Compass } from 'lucide-react';

interface HeaderProps {
  onBackToHome?: () => void;
  isHome?: boolean;
}

export default function Header({ onBackToHome, isHome = true }: HeaderProps) {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-850 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Brand Name & Logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2.5 group text-left transition-all duration-200"
            id="brand-logo-btn"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-500 hover:bg-rose-600 text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-all duration-200">
              <Compass className="w-5.5 h-5.5 animate-pulse" />
            </div>
            <div>
              <span className="block font-sans font-bold text-lg leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
                {t('Dev Roadmaps', 'خرائط طريق المطورين')}
              </span>
              <span className="block text-[11px] text-rose-500 font-medium font-mono uppercase tracking-widest leading-none mt-0.5">
                {t('Full Stack umbrella', 'مظلة المطورين')}
              </span>
            </div>
          </button>
        </div>

        {/* Right Side: External Links & Toggles */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Portfolio & AlgDevs links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://marwan-naili.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-rose-500 dark:hover:text-rose-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
              id="portfolio-header-link"
            >
              <span>{t('Portfolio', 'المعرض الشخصي')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="https://algdevs.marwan-naili.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 hover:bg-rose-100/50 transition-all duration-200"
              id="algdevs-header-link"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>{t('AlgDevs', 'منصة AlgDevs')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-1.5 border-l border-zinc-200 dark:border-zinc-800 pl-2 sm:pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-2 sm:rtl:pr-4 rtl:space-x-reverse">
            {/* Minimal External links for Mobile */}
            <a
              href="https://algdevs.marwan-naili.me"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              title={t('AlgDevs', 'منصة AlgDevs')}
              id="algdevs-mobile-link"
            >
              <Compass className="w-5 h-5" />
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-105 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-200"
              title={t('Switch to Arabic', 'التبديل إلى الإنجليزية')}
              id="lang-toggle-btn"
            >
              <Globe className="w-4 h-4 text-zinc-400" />
              <span className="text-xs uppercase font-bold tracking-wider">
                {lang === 'en' ? 'AR' : 'EN'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
              title={theme === 'light' ? t('Dark Mode', 'الوضع المظلم') : t('Light Mode', 'الوضع المضيء')}
              id="theme-toggle-btn"
            >
              {theme === 'light' ? (
                <Moon className="w-4.5 h-4.5 text-rose-600 dark:text-amber-400" />
              ) : (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
