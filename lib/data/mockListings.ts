/**
 * Mock Listing Data
 * 
 * Sample data for development and testing.
 */

import type { ListingSummary, ListingDetail, ListingSeller } from '@/types/listing';

const mockSeller: ListingSeller = {
  id: 'seller-1',
  name: 'Marina Bay Yachts',
  type: 'dealer',
  location: 'Miami, FL',
  phone: '+1 (305) 555-0123',
  email: 'sales@marinabay.com',
  responseTime: 'Usually responds within 1 hour',
};

export const mockListings: ListingSummary[] = [
  {
    id: '1',
    title: 'Sea Ray Sundancer 320',
    brand: 'Sea Ray',
    model: 'Sundancer 320',
    year: 2021,
    price: 189000,
    currency: 'USD',
    location: 'Miami, FL',
    length: 32,
    lengthUnit: 'ft',
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    boatType: 'Cruiser',
    condition: 'used',
    featured: true,
  },
  {
    id: '2',
    title: 'Boston Whaler 280 Outrage',
    brand: 'Boston Whaler',
    model: '280 Outrage',
    year: 2022,
    price: 245000,
    currency: 'USD',
    location: 'Fort Lauderdale, FL',
    length: 28,
    lengthUnit: 'ft',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    boatType: 'Center Console',
    condition: 'used',
  },
  {
    id: '3',
    title: 'Beneteau Oceanis 40.1',
    brand: 'Beneteau',
    model: 'Oceanis 40.1',
    year: 2023,
    price: 325000,
    currency: 'USD',
    location: 'San Diego, CA',
    length: 40,
    lengthUnit: 'ft',
    imageUrl: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
    boatType: 'Sailboat',
    condition: 'new',
    featured: true,
  },
  {
    id: '4',
    title: 'Grady-White Freedom 285',
    brand: 'Grady-White',
    model: 'Freedom 285',
    year: 2020,
    price: 175000,
    currency: 'USD',
    location: 'Charleston, SC',
    length: 28,
    lengthUnit: 'ft',
    imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
    boatType: 'Dual Console',
    condition: 'used',
  },
  {
    id: '5',
    title: 'Azimut 50 Flybridge',
    brand: 'Azimut',
    model: '50 Flybridge',
    year: 2019,
    price: 895000,
    currency: 'USD',
    location: 'Newport Beach, CA',
    length: 50,
    lengthUnit: 'ft',
    imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80',
    boatType: 'Motor Yacht',
    condition: 'used',
    featured: true,
  },
  {
    id: '6',
    title: 'Jeanneau Sun Odyssey 440',
    brand: 'Jeanneau',
    model: 'Sun Odyssey 440',
    year: 2022,
    price: 385000,
    currency: 'USD',
    location: 'Annapolis, MD',
    length: 44,
    lengthUnit: 'ft',
    imageUrl: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80',
    boatType: 'Sailboat',
    condition: 'used',
  },
];

export const mockListingDetail: ListingDetail = {
  id: '1',
  title: 'Sea Ray Sundancer 320',
  brand: 'Sea Ray',
  model: 'Sundancer 320',
  year: 2021,
  price: 189000,
  currency: 'USD',
  location: 'Miami, FL',
  length: 32,
  lengthUnit: 'ft',
  imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
  boatType: 'Cruiser',
  condition: 'used',
  featured: true,
  description: `This beautifully maintained Sea Ray Sundancer 320 is the perfect blend of performance and luxury. With only 180 engine hours, this vessel has been meticulously cared for and is ready for its next adventure.

The spacious cockpit features ample seating, a wet bar, and a retractable sunshade. Below deck, you'll find a comfortable cabin with a full galley, private head with shower, and sleeping accommodations for up to 6 guests.

Recent upgrades include new canvas, updated electronics, and fresh bottom paint. Don't miss this opportunity to own one of the most popular express cruisers on the market.`,
  images: [
    'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
  ],
  specs: {
    length: 32,
    beam: 10.5,
    draft: 3.3,
    displacement: 12500,
    fuelCapacity: 200,
    waterCapacity: 40,
    engineType: 'Twin Mercury 350hp',
    enginePower: '700 HP Total',
    maxSpeed: 38,
    cruisingSpeed: 28,
    hull: 'Fiberglass',
    cabins: 1,
    berths: 4,
    heads: 1,
  },
  seller: mockSeller,
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-02-20T14:30:00Z',
};

export function getListingById(id: string): ListingDetail | undefined {
  const summary = mockListings.find(l => l.id === id);
  if (!summary) return undefined;
  
  return {
    ...mockListingDetail,
    ...summary,
    description: mockListingDetail.description,
    images: mockListingDetail.images,
    specs: mockListingDetail.specs,
    seller: mockSeller,
    createdAt: mockListingDetail.createdAt,
    updatedAt: mockListingDetail.updatedAt,
  };
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

