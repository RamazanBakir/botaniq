'use client';

import type { ListingSpecs as ListingSpecsType } from '@/types/listing';

export interface ListingSpecsProps {
  specs: ListingSpecsType;
}

interface SpecItem {
  label: string;
  value: string | number | undefined;
  unit?: string;
}

export function ListingSpecs({ specs }: ListingSpecsProps) {
  const specItems: SpecItem[] = [
    { label: 'Length', value: specs.length, unit: 'ft' },
    { label: 'Beam', value: specs.beam, unit: 'ft' },
    { label: 'Draft', value: specs.draft, unit: 'ft' },
    { label: 'Hull Material', value: specs.hull },
    { label: 'Engine', value: specs.engineType },
    { label: 'Power', value: specs.enginePower },
    { label: 'Max Speed', value: specs.maxSpeed, unit: 'knots' },
    { label: 'Cruising Speed', value: specs.cruisingSpeed, unit: 'knots' },
    { label: 'Fuel Capacity', value: specs.fuelCapacity, unit: 'gal' },
    { label: 'Water Capacity', value: specs.waterCapacity, unit: 'gal' },
    { label: 'Cabins', value: specs.cabins },
    { label: 'Berths', value: specs.berths },
    { label: 'Heads', value: specs.heads },
  ].filter(item => item.value !== undefined);

  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
        Specifications
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {specItems.map((item) => (
          <div key={item.label} className="space-y-1">
            <dt className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">
              {item.label}
            </dt>
            <dd className="text-sm font-semibold text-[var(--color-text-primary)]">
              {item.value}
              {item.unit && <span className="text-[var(--color-text-secondary)] font-normal"> {item.unit}</span>}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingSpecs;

