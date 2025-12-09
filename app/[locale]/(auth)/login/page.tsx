'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { useUser } from '@/contexts/UserContext';
import { mockLogin } from '@/lib/mockAuth';

export default function LoginPage() {
  const t = useTranslations('auth.login');
  const tErrors = useTranslations('auth.errors');
  const router = useRouter();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Mock authentication
      const user = mockLogin(email, password);

      if (!user) {
        setError(tErrors('invalidCredentials'));
        setIsLoading(false);
        return;
      }

      // Set user in context
      setUser(user);

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError(tErrors('invalidCredentials'));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-10 h-10 text-[var(--color-brand-primary-600)]"
              fill="none"
            >
              <circle cx="16" cy="16" r="14" fill="currentColor" />
              <path d="M8 19c1.5-3 5-5 8-5s6.5 2 8 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M11 16c.75-2.25 2.5-4 5-4s4.25 1.75 5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="16" cy="10" r="1.5" fill="white" />
            </svg>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            {t('title')}
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            {t('subtitle')}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-6 sm:p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-5 p-4 bg-[var(--color-error-50)] border border-[var(--color-error-200)] rounded-xl">
              <p className="text-sm text-[var(--color-error-700)]">{error}</p>
            </div>
          )}

          {/* Mock Users Info (Development Only) */}
          <div className="mb-5 p-4 bg-[var(--color-bg-muted)] border border-[var(--color-border-default)] rounded-xl">
            <p className="text-xs font-medium text-[var(--color-text-primary)] mb-2">
              🧪 Mock Users (for testing):
            </p>
            <div className="text-xs text-[var(--color-text-secondary)] space-y-1">
              <p>• member@botaniq.app / password</p>
              <p>• owner@botaniq.app / password</p>
              <p>• broker@botaniq.app / password</p>
              <p>• charter@botaniq.app / password</p>
              <p>• admin@botaniq.app / password</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                required
                className="w-full px-4 py-3 text-[var(--color-text-primary)] bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent transition-all placeholder:text-[var(--color-text-tertiary)]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                {t('password')}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('passwordPlaceholder')}
                required
                className="w-full px-4 py-3 text-[var(--color-text-primary)] bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent transition-all placeholder:text-[var(--color-text-tertiary)]"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[var(--color-border-default)] text-[var(--color-brand-primary-500)] focus:ring-[var(--color-brand-primary-500)]"
                />
                <span className="text-sm text-[var(--color-text-secondary)]">{t('rememberMe')}</span>
              </label>
              <Link href="/forgot-password" className="text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors">
                {t('forgotPassword')}
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 text-base font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                t('submit')
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-border-default)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-[var(--color-bg-surface)] text-[var(--color-text-tertiary)]">or</span>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-[var(--color-text-secondary)]">
            {t('noAccount')}{' '}
            <Link href="/register" className="font-semibold text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors">
              {t('register')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

