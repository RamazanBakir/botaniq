'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="currentColor"
            >
              <circle cx="16" cy="16" r="14" />
            </svg>
            <span className="text-sm">{t('footer.copyright', { year: currentYear })}</span>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-tertiary)]">
            <Link href="/explore" className="hover:text-[var(--color-text-primary)] transition-colors">
              {t('nav.explore')}
            </Link>
            <Link href="/snap" className="hover:text-[var(--color-text-primary)] transition-colors">
              {t('nav.snap')}
            </Link>
            <Link href="/listings/new" className="hover:text-[var(--color-text-primary)] transition-colors">
              {t('nav.sellBoat')}
            </Link>
            <span className="cursor-default">{t('footer.privacy')}</span>
            <span className="cursor-default">{t('footer.terms')}</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}

