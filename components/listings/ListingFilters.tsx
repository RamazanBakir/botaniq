'use client';

import { useState } from 'react';

export interface ListingFiltersProps {
  onFilterChange?: (filters: FilterValues) => void;
}

interface FilterValues {
  boatType: string;
  priceRange: string;
  sortBy: string;
}

const boatTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'sailboat', label: 'Sailboat' },
  { value: 'motorboat', label: 'Motorboat' },
  { value: 'yacht', label: 'Yacht' },
  { value: 'fishing', label: 'Fishing' },
  { value: 'pontoon', label: 'Pontoon' },
];

const priceRanges = [
  { value: 'all', label: 'Any Price' },
  { value: '0-100000', label: 'Under $100K' },
  { value: '100000-250000', label: '$100K - $250K' },
  { value: '250000-500000', label: '$250K - $500K' },
  { value: '500000+', label: '$500K+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
];

export function ListingFilters({ onFilterChange }: ListingFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    boatType: 'all',
    priceRange: 'all',
    sortBy: 'featured',
  });

  const handleChange = (key: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Boat Type */}
        <select
          value={filters.boatType}
          onChange={(e) => handleChange('boatType', e.target.value)}
          className="
            h-10 px-3 pr-8
            text-sm font-medium
            bg-[var(--color-bg-muted)]
            border border-[var(--color-border-default)]
            rounded-lg
            text-[var(--color-text-primary)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent
            appearance-none
            bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]
            bg-[length:1.25rem_1.25rem]
            bg-[right_0.5rem_center]
            bg-no-repeat
          "
        >
          {boatTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        {/* Price Range */}
        <select
          value={filters.priceRange}
          onChange={(e) => handleChange('priceRange', e.target.value)}
          className="
            h-10 px-3 pr-8
            text-sm font-medium
            bg-[var(--color-bg-muted)]
            border border-[var(--color-border-default)]
            rounded-lg
            text-[var(--color-text-primary)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent
            appearance-none
            bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]
            bg-[length:1.25rem_1.25rem]
            bg-[right_0.5rem_center]
            bg-no-repeat
          "
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--color-text-secondary)] hidden sm:inline">Sort by:</span>
          <select
            value={filters.sortBy}
            onChange={(e) => handleChange('sortBy', e.target.value)}
            className="
              h-10 px-3 pr-8
              text-sm font-medium
              bg-[var(--color-bg-muted)]
              border border-[var(--color-border-default)]
              rounded-lg
              text-[var(--color-text-primary)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent
              appearance-none
              bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]
              bg-[length:1.25rem_1.25rem]
              bg-[right_0.5rem_center]
              bg-no-repeat
            "
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* More Filters Button */}
        <button
          className="
            h-10 px-4
            text-sm font-medium
            text-[var(--color-text-secondary)]
            hover:text-[var(--color-text-primary)]
            hover:bg-[var(--color-bg-muted)]
            rounded-lg
            transition-colors
            flex items-center gap-2
          "
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
          <span className="hidden sm:inline">More filters</span>
        </button>
      </div>
    </div>
  );
}

export default ListingFilters;

