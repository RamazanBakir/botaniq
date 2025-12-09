import type { Metadata } from 'next';

/**
 * SEO Helpers
 * 
 * Utilities for generating consistent metadata across pages.
 * Uses Next.js App Router metadata API.
 */

/**
 * Base site configuration
 */
export const siteConfig = {
  name: 'Botaniq',
  description: 'AI-powered boat discovery and marketplace. Find your perfect vessel with intelligent search, detailed specifications, and seamless transactions.',
  url: 'https://botaniq.app',
  ogImage: 'https://botaniq.app/og-image.jpg',
  twitterHandle: '@botaniq',
  locale: 'en_US',
} as const;

/**
 * Base metadata used across all pages
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – AI-powered boat discovery and marketplace`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'boats',
    'yachts',
    'boat marketplace',
    'boat discovery',
    'AI boat search',
    'buy boats',
    'sell boats',
    'boat listings',
    'marine marketplace',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – AI-powered boat discovery and marketplace`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Discover your perfect boat`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} – AI-powered boat discovery and marketplace`,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

/**
 * Options for generating page-specific metadata
 */
export interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Generate page-specific metadata by merging with base metadata
 * 
 * @example
 * ```ts
 * export const metadata = generatePageMetadata({
 *   title: 'Search Boats',
 *   description: 'Search thousands of boats with AI-powered filters.',
 *   path: '/search',
 * });
 * ```
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const pageUrl = `${siteConfig.url}${path}`;
  const pageDescription = description || siteConfig.description;
  const pageOgImage = ogImage || siteConfig.ogImage;

  return {
    title,
    description: pageDescription,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    openGraph: {
      title,
      description: pageDescription,
      url: pageUrl,
      images: [
        {
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description: pageDescription,
      images: [pageOgImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

/**
 * JSON-LD structured data for organization
 * 
 * Usage: Add to page as <script type="application/ld+json">
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    // Add social media URLs when available
  ],
  description: siteConfig.description,
};

/**
 * JSON-LD structured data for website
 */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

