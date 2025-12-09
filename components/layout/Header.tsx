'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher';

export function Header() {
  const t = useTranslations('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold text-xl text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors"
            onClick={closeMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-8 h-8"
              fill="none"
            >
              <circle cx="16" cy="16" r="14" fill="currentColor" />
              <path
                d="M8 19c1.5-3 5-5 8-5s6.5 2 8 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11 16c.75-2.25 2.5-4 5-4s4.25 1.75 5 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="16" cy="10" r="1.5" fill="white" />
            </svg>
            {t('brand')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/explore"
              className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
            >
              {t('nav.explore')}
            </Link>
            <Link
              href="/snap"
              className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
            >
              {t('nav.snap')}
            </Link>
            <Link
              href="/listings/new"
              className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
            >
              {t('nav.sellBoat')}
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            
            {/* Desktop Auth Links */}
            <Link
              href="/login"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
            >
              Sign in
            </Link>
            
            {/* Desktop CTA */}
            <Link
              href="/listings/new"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              {t('nav.createListing')}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
            <nav className="px-4 py-4 space-y-1">
              {/* Mobile Navigation Links */}
              <Link
                href="/explore"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary-600)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
              >
                {t('nav.explore')}
              </Link>
              <Link
                href="/snap"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary-600)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
              >
                {t('nav.snap')}
              </Link>
              <Link
                href="/listings/new"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary-600)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
              >
                {t('nav.sellBoat')}
              </Link>

              {/* Divider */}
              <div className="my-3 border-t border-[var(--color-border-default)]" />

              {/* Mobile Auth & Actions */}
              <div className="space-y-2">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary-600)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/listings/new"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  {t('nav.createListing')}
                </Link>
              </div>

              {/* Mobile Language Switcher */}
              <div className="mt-4 pt-4 border-t border-[var(--color-border-default)]">
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

