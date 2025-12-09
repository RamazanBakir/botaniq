'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

// Icons
function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
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

// Mock booking data
const MOCK_BOOKINGS = [
  { id: '1', boatName: 'Bavaria Cruiser 46', startDate: '2024-03-15', endDate: '2024-03-22', guest: 'John Smith' },
  { id: '2', boatName: 'Jeanneau Sun Odyssey 440', startDate: '2024-03-08', endDate: '2024-03-15', guest: 'Maria Garcia' },
  { id: '3', boatName: 'Lagoon 42', startDate: '2024-04-01', endDate: '2024-04-08', guest: 'James Wilson' },
];

// Mock boats for filter
const MOCK_BOATS = [
  { id: '1', name: 'Bavaria Cruiser 46' },
  { id: '2', name: 'Jeanneau Sun Odyssey 440' },
  { id: '3', name: 'Beneteau Oceanis 51.1' },
  { id: '4', name: 'Lagoon 42' },
];

/**
 * Calendar Page
 * 
 * Shows charter availability calendar.
 */
export default function CalendarPage() {
  const t = useTranslations('calendar');
  const [selectedBoat, setSelectedBoat] = useState<string>('all');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Generate calendar days
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Check if a day has bookings
  const getBookingsForDay = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return MOCK_BOOKINGS.filter(booking => {
      const start = new Date(booking.startDate);
      const end = new Date(booking.endDate);
      const current = new Date(dateStr);
      return current >= start && current <= end;
    });
  };

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
              {t('subtitle')}
            </p>
          </div>
          <Link
            href="/fleet"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors"
          >
            <BoatIcon className="w-5 h-5" />
            {t('manageFleet')}
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
          {/* Calendar */}
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
              >
                <ChevronLeftIcon className="w-5 h-5 text-[var(--color-text-primary)]" />
              </button>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
              >
                <ChevronRightIcon className="w-5 h-5 text-[var(--color-text-primary)]" />
              </button>
            </div>

            {/* Boat Filter */}
            <div className="mb-4">
              <select
                value={selectedBoat}
                onChange={(e) => setSelectedBoat(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)]"
              >
                <option value="all">{t('allBoats')}</option>
                {MOCK_BOATS.map((boat) => (
                  <option key={boat.id} value={boat.id}>{boat.name}</option>
                ))}
              </select>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-[var(--color-text-secondary)] py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="h-16 sm:h-20" />;
                }

                const bookings = getBookingsForDay(day);
                const isToday =
                  new Date().toDateString() ===
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toDateString();

                return (
                  <div
                    key={day}
                    className={`
                      h-16 sm:h-20 p-1 border rounded-lg
                      ${isToday
                        ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-50)]'
                        : 'border-[var(--color-border-default)]'
                      }
                    `}
                  >
                    <span className={`
                      text-sm font-medium
                      ${isToday ? 'text-[var(--color-brand-primary-600)]' : 'text-[var(--color-text-primary)]'}
                    `}>
                      {day}
                    </span>
                    {bookings.length > 0 && (
                      <div className="mt-1">
                        {bookings.slice(0, 2).map((booking, idx) => (
                          <div
                            key={idx}
                            className="text-xs truncate px-1 py-0.5 rounded bg-[var(--color-warning-100)] text-[var(--color-warning-700)] mb-0.5"
                          >
                            {booking.boatName.split(' ')[0]}
                          </div>
                        ))}
                        {bookings.length > 2 && (
                          <span className="text-xs text-[var(--color-text-tertiary)]">
                            +{bookings.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Bookings Sidebar */}
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
              {t('upcomingBookings')}
            </h3>
            <div className="space-y-3">
              {MOCK_BOOKINGS.map((booking) => (
                <div
                  key={booking.id}
                  className="p-3 bg-[var(--color-bg-muted)] rounded-lg"
                >
                  <h4 className="font-medium text-[var(--color-text-primary)] text-sm">
                    {booking.boatName}
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
                    {booking.guest}
                  </p>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border-default)]">
              <h4 className="text-sm font-medium text-[var(--color-text-primary)] mb-2">
                {t('legend')}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded bg-[var(--color-warning-100)]" />
                  <span className="text-[var(--color-text-secondary)]">{t('booked')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)]" />
                  <span className="text-[var(--color-text-secondary)]">{t('available')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

