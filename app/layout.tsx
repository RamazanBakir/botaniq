import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import { baseMetadata, websiteJsonLd, organizationJsonLd } from '@/lib/seo';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`
          ${dmSans.variable} 
          ${jetbrainsMono.variable} 
          font-sans antialiased
          bg-[var(--color-bg-canvas)]
          text-[var(--color-text-primary)]
        `}
      >
        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-brand-primary-500)] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)]/95 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link 
                  href="/" 
                  className="flex items-center gap-2 font-bold text-xl text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors"
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
                  botaniq
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                  <Link
                    href="/explore"
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
                  >
                    Explore
                  </Link>
                  <Link
                    href="/snap"
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
                  >
                    Snap-to-ID
                  </Link>
                  <Link
                    href="/listings/new"
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
                  >
                    Sell a boat
                  </Link>
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/listings/new"
                    className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Create listing
                  </Link>
                  
                  {/* Mobile Menu Button */}
                  <button className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Footer */}
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
                  <span className="text-sm">© {new Date().getFullYear()} Botaniq</span>
                </div>
                
                {/* Links */}
                <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-tertiary)]">
                  <Link href="/explore" className="hover:text-[var(--color-text-primary)] transition-colors">
                    Explore
                  </Link>
                  <Link href="/snap" className="hover:text-[var(--color-text-primary)] transition-colors">
                    Snap-to-ID
                  </Link>
                  <Link href="/listings/new" className="hover:text-[var(--color-text-primary)] transition-colors">
                    Sell a boat
                  </Link>
                  <span className="cursor-default">Privacy</span>
                  <span className="cursor-default">Terms</span>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
