/**
 * SEO Types
 * 
 * Type definitions for SEO-related functionality.
 */

import type { Metadata } from 'next';

/**
 * Extended metadata options for pages
 */
export interface ExtendedMetadata extends Metadata {
  structuredData?: Record<string, unknown>;
}

/**
 * Breadcrumb item for structured data
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Product structured data (for future boat listings)
 */
export interface ProductStructuredData {
  name: string;
  description: string;
  image: string | string[];
  brand?: string;
  price?: {
    amount: number;
    currency: string;
  };
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  condition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
}

/**
 * Local business structured data (for future marina/dealer pages)
 */
export interface LocalBusinessStructuredData {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}

