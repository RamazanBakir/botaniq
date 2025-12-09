/**
 * Listing Wizard Types
 */

export interface ListingFormData {
  // Step 1: Boat Basics
  boatType: string;
  brand: string;
  model: string;
  year: number | '';
  length: number | '';
  lengthUnit: 'ft' | 'm';

  // Step 2: Location
  country: string;
  city: string;
  marina?: string;

  // Step 3: Photos
  photos: ListingPhoto[];

  // Step 4: Price & Conditions
  price: number | '';
  currency: string;
  saleType: 'sale' | 'charter';
  negotiable: boolean;
  notes?: string;
}

export interface ListingPhoto {
  id: string;
  file?: File;
  previewUrl: string;
  isPrimary?: boolean;
}

export const INITIAL_FORM_DATA: ListingFormData = {
  boatType: '',
  brand: '',
  model: '',
  year: '',
  length: '',
  lengthUnit: 'ft',
  country: '',
  city: '',
  marina: '',
  photos: [],
  price: '',
  currency: 'USD',
  saleType: 'sale',
  negotiable: false,
  notes: '',
};

export const BOAT_TYPES = [
  { value: 'sailboat', label: 'Sailboat' },
  { value: 'motorboat', label: 'Motorboat' },
  { value: 'yacht', label: 'Yacht' },
  { value: 'catamaran', label: 'Catamaran' },
  { value: 'fishing', label: 'Fishing Boat' },
  { value: 'pontoon', label: 'Pontoon' },
  { value: 'jet-ski', label: 'Jet Ski' },
  { value: 'other', label: 'Other' },
];

export const CURRENCIES = [
  { value: 'USD', label: 'USD ($)' },
  { value: 'EUR', label: 'EUR (€)' },
  { value: 'GBP', label: 'GBP (£)' },
  { value: 'TRY', label: 'TRY (₺)' },
];

export const COUNTRIES = [
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'FR', label: 'France' },
  { value: 'ES', label: 'Spain' },
  { value: 'IT', label: 'Italy' },
  { value: 'GR', label: 'Greece' },
  { value: 'TR', label: 'Turkey' },
  { value: 'HR', label: 'Croatia' },
  { value: 'PT', label: 'Portugal' },
  { value: 'OTHER', label: 'Other' },
];

