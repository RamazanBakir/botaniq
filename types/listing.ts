/**
 * Listing Types
 * 
 * Type definitions for boat listings.
 */

export interface ListingSummary {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  location: string;
  length: number;
  lengthUnit: 'ft' | 'm';
  imageUrl: string;
  boatType: string;
  condition: 'new' | 'used';
  featured?: boolean;
}

export interface ListingDetail extends ListingSummary {
  description: string;
  images: string[];
  specs: ListingSpecs;
  seller: ListingSeller;
  createdAt: string;
  updatedAt: string;
}

export interface ListingSpecs {
  length: number;
  beam: number;
  draft: number;
  displacement?: number;
  fuelCapacity?: number;
  waterCapacity?: number;
  engineType?: string;
  enginePower?: string;
  maxSpeed?: number;
  cruisingSpeed?: number;
  hull: string;
  cabins?: number;
  berths?: number;
  heads?: number;
}

export interface ListingSeller {
  id: string;
  name: string;
  type: 'private' | 'dealer' | 'broker';
  location: string;
  phone?: string;
  email?: string;
  avatarUrl?: string;
  responseTime?: string;
}

export type BoatType = 
  | 'sailboat'
  | 'motorboat'
  | 'yacht'
  | 'catamaran'
  | 'fishing'
  | 'pontoon'
  | 'jet-ski'
  | 'other';

export interface ListingFilters {
  boatType?: BoatType;
  minPrice?: number;
  maxPrice?: number;
  minLength?: number;
  maxLength?: number;
  minYear?: number;
  maxYear?: number;
  condition?: 'new' | 'used' | 'all';
  location?: string;
}

