'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type ListingStatus = 'pending' | 'approved' | 'rejected';

interface AdminListing {
  id: string;
  title: string;
  owner: string;
  status: ListingStatus;
  date: string;
  imageUrl: string;
}

const MOCK_ADMIN_LISTINGS: AdminListing[] = [
  {
    id: '1',
    title: 'Azimut Flybridge 60',
    owner: 'John Smith',
    status: 'pending',
    date: '2024-01-15',
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    title: 'Princess V55',
    owner: 'Maria Garcia',
    status: 'pending',
    date: '2024-01-14',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    title: 'Sunseeker Manhattan 52',
    owner: 'James Wilson',
    status: 'approved',
    date: '2024-01-12',
    imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    title: 'Ferretti 550',
    owner: 'Sarah Brown',
    status: 'rejected',
    date: '2024-01-10',
    imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=100&h=100&fit=crop',
  },
];

function StatusBadge({ status }: { status: ListingStatus }) {
  const t = useTranslations('admin.listings.status');
  
  const styles = {
    pending: 'bg-[var(--color-warning-100)] text-[var(--color-warning-700)]',
    approved: 'bg-[var(--color-success-100)] text-[var(--color-success-700)]',
    rejected: 'bg-[var(--color-error-100)] text-[var(--color-error-700)]',
  };

  return (
    <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${styles[status]}`}>
      {t(status)}
    </span>
  );
}

export default function AdminListingsPage() {
  const t = useTranslations('admin.listings');
  const [listings, setListings] = useState(MOCK_ADMIN_LISTINGS);

  const stats = {
    total: listings.length,
    pending: listings.filter((l) => l.status === 'pending').length,
    approved: listings.filter((l) => l.status === 'approved').length,
    rejected: listings.filter((l) => l.status === 'rejected').length,
  };

  const handleApprove = (id: string) => {
    setListings((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: 'approved' as ListingStatus } : l))
    );
  };

  const handleReject = (id: string) => {
    setListings((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: 'rejected' as ListingStatus } : l))
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                {t('title')}
              </h1>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-5">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">{t('stats.total')}</p>
            <p className="text-2xl font-bold text-[var(--color-text-primary)]">{stats.total}</p>
          </div>
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-5">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">{t('stats.pending')}</p>
            <p className="text-2xl font-bold text-[var(--color-warning-600)]">{stats.pending}</p>
          </div>
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-5">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">{t('stats.approved')}</p>
            <p className="text-2xl font-bold text-[var(--color-success-600)]">{stats.approved}</p>
          </div>
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-5">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">{t('stats.rejected')}</p>
            <p className="text-2xl font-bold text-[var(--color-error-600)]">{stats.rejected}</p>
          </div>
        </div>

        {/* Listings Table - Desktop */}
        <div className="hidden lg:block bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-muted)]">
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  {t('table.title')}
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  {t('table.owner')}
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  {t('table.status')}
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  {t('table.date')}
                </th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  {t('table.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-default)]">
              {listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-[var(--color-bg-muted)] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={listing.imageUrl}
                        alt={listing.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-[var(--color-text-primary)]">{listing.title}</p>
                        <p className="text-sm text-[var(--color-text-tertiary)]">ID: {listing.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">{listing.owner}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={listing.status} />
                  </td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">{listing.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {listing.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(listing.id)}
                            className="px-3 py-1.5 text-sm font-medium text-[var(--color-success-700)] bg-[var(--color-success-100)] hover:bg-[var(--color-success-200)] rounded-lg transition-colors"
                          >
                            {t('actions.approve')}
                          </button>
                          <button
                            onClick={() => handleReject(listing.id)}
                            className="px-3 py-1.5 text-sm font-medium text-[var(--color-error-700)] bg-[var(--color-error-100)] hover:bg-[var(--color-error-200)] rounded-lg transition-colors"
                          >
                            {t('actions.reject')}
                          </button>
                        </>
                      )}
                      <Link
                        href={`/listings/${listing.id}`}
                        className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-lg transition-colors"
                      >
                        {t('actions.view')}
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Listings Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4"
            >
              <div className="flex items-start gap-4">
                <img
                  src={listing.imageUrl}
                  alt={listing.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)] truncate">{listing.title}</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">{listing.owner}</p>
                    </div>
                    <StatusBadge status={listing.status} />
                  </div>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-2">{listing.date}</p>
                </div>
              </div>
              {listing.status === 'pending' && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--color-border-default)]">
                  <button
                    onClick={() => handleApprove(listing.id)}
                    className="flex-1 py-2 text-sm font-medium text-[var(--color-success-700)] bg-[var(--color-success-100)] hover:bg-[var(--color-success-200)] rounded-lg transition-colors"
                  >
                    {t('actions.approve')}
                  </button>
                  <button
                    onClick={() => handleReject(listing.id)}
                    className="flex-1 py-2 text-sm font-medium text-[var(--color-error-700)] bg-[var(--color-error-100)] hover:bg-[var(--color-error-200)] rounded-lg transition-colors"
                  >
                    {t('actions.reject')}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

