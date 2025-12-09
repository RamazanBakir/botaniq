'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

// Icons
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function BoatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M8 6l1-1M16 6l-1-1M4 17l2.5-2.5M20 17l-2.5-2.5M3 22h18M6 17l6-5 6 5M6 17v5h12v-5" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  );
}

// Mock fleet data
const MOCK_FLEET = [
  {
    id: '1',
    name: 'Bavaria Cruiser 46',
    type: 'Sailing Yacht',
    year: 2020,
    length: 46,
    cabins: 4,
    region: 'Aegean',
    status: 'available',
    pricePerWeek: 3500,
    nextBooking: '2024-03-15',
  },
  {
    id: '2',
    name: 'Jeanneau Sun Odyssey 440',
    type: 'Sailing Yacht',
    year: 2021,
    length: 44,
    cabins: 3,
    region: 'Mediterranean',
    status: 'booked',
    pricePerWeek: 4200,
    nextBooking: '2024-03-08',
  },
  {
    id: '3',
    name: 'Beneteau Oceanis 51.1',
    type: 'Sailing Yacht',
    year: 2019,
    length: 51,
    cabins: 5,
    region: 'Adriatic',
    status: 'available',
    pricePerWeek: 5000,
    nextBooking: null,
  },
  {
    id: '4',
    name: 'Lagoon 42',
    type: 'Catamaran',
    year: 2022,
    length: 42,
    cabins: 4,
    region: 'Caribbean',
    status: 'maintenance',
    pricePerWeek: 6500,
    nextBooking: '2024-04-01',
  },
];

/**
 * Fleet Management Page
 * 
 * Shows charter fleet with management options.
 */
export default function FleetPage() {
  const t = useTranslations('fleet');
  const tCommon = useTranslations('dashboard.common');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
              {t('title')}
            </h1>
            <p className="mt-1 text-[var(--color-text-secondary)]">
              {t('subtitle', { count: MOCK_FLEET.length })}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/calendar"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors"
            >
              <CalendarIcon className="w-5 h-5" />
              {t('viewCalendar')}
            </Link>
            <Link
              href="/listings/new"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              {t('addBoat')}
            </Link>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {MOCK_FLEET.map((boat) => (
            <div
              key={boat.id}
              className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-40 bg-[var(--color-bg-muted)] flex items-center justify-center">
                <BoatIcon className="w-12 h-12 text-[var(--color-text-tertiary)]" />
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {boat.name}
                  </h2>
                  <span
                    className={`
                      inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0
                      ${boat.status === 'available'
                        ? 'bg-[var(--color-success-100)] text-[var(--color-success-700)]'
                        : boat.status === 'booked'
                        ? 'bg-[var(--color-warning-100)] text-[var(--color-warning-700)]'
                        : 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]'
                      }
                    `}
                  >
                    {tCommon(`status.${boat.status}`)}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  {boat.type} · {boat.year} · {boat.length} ft · {boat.cabins} cabins
                </p>

                <div className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)] mb-3">
                  <MapPinIcon className="w-4 h-4" />
                  {boat.region}
                </div>

                <p className="text-lg font-bold text-[var(--color-brand-primary-600)] mb-4">
                  €{boat.pricePerWeek.toLocaleString()}/week
                </p>

                {boat.nextBooking && (
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    {t('nextBooking')}: {new Date(boat.nextBooking).toLocaleDateString()}
                  </p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/fleet/${boat.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-bg-muted)] hover:bg-[var(--color-border-default)] rounded-lg transition-colors"
                  >
                    {t('actions.view')}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <Link
                    href={`/calendar?boat=${boat.id}`}
                    className="inline-flex items-center justify-center p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
                  >
                    <CalendarIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

