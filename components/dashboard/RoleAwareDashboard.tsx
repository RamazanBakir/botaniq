'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useUser } from '@/contexts/UserContext';
import { MemberDashboard } from './MemberDashboard';
import { OwnerDashboard } from './OwnerDashboard';
import { BrokerDashboard } from './BrokerDashboard';
import { CharterDashboard } from './CharterDashboard';

/**
 * RoleAwareDashboard
 * 
 * Renders the appropriate dashboard based on user role.
 * Handles loading, unauthenticated, and admin cases.
 */
export function RoleAwareDashboard() {
  const { user, isLoading } = useUser();
  const t = useTranslations('dashboard');

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[var(--color-brand-primary-500)] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {t('loading')}
          </p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[var(--color-text-tertiary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            {t('notAuthenticated.title')}
          </h1>
          <p className="text-[var(--color-text-secondary)] mb-6">
            {t('notAuthenticated.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
            >
              {t('notAuthenticated.login')}
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors"
            >
              {t('notAuthenticated.register')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Admin user - redirect to admin panel
  if (user.role === 'admin') {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-brand-primary-100)] flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[var(--color-brand-primary-600)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            {t('adminRedirect.title')}
          </h1>
          <p className="text-[var(--color-text-secondary)] mb-6">
            {t('adminRedirect.description')}
          </p>
          <Link
            href="/admin/listings"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
          >
            {t('adminRedirect.cta')}
          </Link>
        </div>
      </div>
    );
  }

  // User needs onboarding (no role set)
  if (!user.onboardingCompleted || !user.role) {
    // This case should be handled by the onboarding modal in the parent component
    // But we provide a fallback just in case
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-10 h-10 border-4 border-[var(--color-brand-primary-500)] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {t('settingUp')}
          </p>
        </div>
      </div>
    );
  }

  // Get user name and company info
  const userName = user.name;
  const companyName = user.profile?.companyName;

  // Render role-specific dashboard
  switch (user.role) {
    case 'member':
      return <MemberDashboard userName={userName} />;
    case 'owner':
      return <OwnerDashboard userName={userName} />;
    case 'broker':
      return <BrokerDashboard userName={userName} companyName={companyName} />;
    case 'charter':
      return <CharterDashboard userName={userName} companyName={companyName} />;
    default:
      // Fallback to member dashboard for unknown roles
      return <MemberDashboard userName={userName} />;
  }
}

export default RoleAwareDashboard;

