'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/UserContext';
import { OnboardingModal } from '@/components/onboarding';
import { RoleAwareDashboard } from '@/components/dashboard';
import { createMockUser } from '@/types/user';

/**
 * Dashboard Page
 * 
 * Main dashboard entry point after login.
 * Shows onboarding modal for new users, then renders role-specific dashboard.
 */
export default function DashboardPage() {
  const { user, setUser, isLoading } = useUser();
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Check if we need to show onboarding
  useEffect(() => {
    // If no user exists (demo mode), create a mock user
    if (!isLoading && !user) {
      const mockUser = createMockUser({
        name: 'Demo User',
        email: 'demo@botaniq.app',
        onboardingCompleted: false,
      });
      setUser(mockUser);
    }
  }, [isLoading, user, setUser]);

  // Show onboarding modal for users who haven't completed it
  useEffect(() => {
    if (user && !user.onboardingCompleted && user.role !== 'admin') {
      setShowOnboarding(true);
    }
  }, [user]);

  // Handle onboarding completion
  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  return (
    <>
      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={showOnboarding}
        onComplete={handleOnboardingComplete}
      />

      {/* Role-aware Dashboard */}
      <RoleAwareDashboard />
    </>
  );
}
