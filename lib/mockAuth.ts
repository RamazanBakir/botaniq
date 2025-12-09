/**
 * Mock Authentication Utilities
 * 
 * Mock authentication for development/testing purposes.
 * In production, this would be replaced with real API calls.
 */

import type { User, UserRole, PrimaryUsage } from '@/types/user';

/**
 * Mock users database
 * Email format: {role}@botaniq.app
 * Password: "password" (for all mock users)
 */
export const MOCK_USERS: Record<string, Omit<User, 'id' | 'createdAt' | 'updatedAt'>> = {
  // Member (Boat Enthusiast)
  'member@botaniq.app': {
    email: 'member@botaniq.app',
    name: 'John Enthusiast',
    role: 'member',
    onboardingCompleted: true,
    profile: {
      primaryUsage: 'enthusiast',
      country: 'US',
      experienceLevel: 'intermediate',
    },
  },

  // Owner
  'owner@botaniq.app': {
    email: 'owner@botaniq.app',
    name: 'Sarah Owner',
    role: 'owner',
    onboardingCompleted: true,
    profile: {
      primaryUsage: 'owner',
      country: 'TR',
      ownsBoat: true,
      boatCount: 1,
      boatLocationCountry: 'TR',
      planToList: 'sale',
    },
  },

  // Broker
  'broker@botaniq.app': {
    email: 'broker@botaniq.app',
    name: 'Michael Broker',
    role: 'broker',
    onboardingCompleted: true,
    profile: {
      primaryUsage: 'broker',
      country: 'UK',
      companyName: 'Elite Yacht Sales',
      companyWebsite: 'https://eliteyachts.com',
      portfolioSize: 'large',
      operatingRegions: ['mediterranean', 'caribbean'],
    },
  },

  // Charter
  'charter@botaniq.app': {
    email: 'charter@botaniq.app',
    name: 'Maria Charter',
    role: 'charter',
    onboardingCompleted: true,
    profile: {
      primaryUsage: 'charter',
      country: 'GR',
      fleetSize: '4-10',
      charterRegion: 'mediterranean',
      usesOtherPlatforms: true,
      otherPlatforms: 'Click&Boat, Nautal',
    },
  },

  // Admin
  'admin@botaniq.app': {
    email: 'admin@botaniq.app',
    name: 'Admin User',
    role: 'admin',
    onboardingCompleted: true,
    profile: {},
  },
};

/**
 * Mock authentication function
 * 
 * @param email User email
 * @param password User password
 * @returns User object if credentials are valid, null otherwise
 */
export function mockLogin(email: string, password: string): User | null {
  // For mock users, password is always "password"
  if (password !== 'password') {
    return null;
  }

  const userData = MOCK_USERS[email.toLowerCase()];
  if (!userData) {
    return null;
  }

  // Return user with generated ID and timestamps
  return {
    ...userData,
    id: `user-${email.toLowerCase().replace('@', '-').replace('.', '-')}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Get mock user credentials for testing
 */
export function getMockUserCredentials(role: UserRole): { email: string; password: string } {
  const email = `${role}@botaniq.app`;
  return {
    email,
    password: 'password',
  };
}

/**
 * List all available mock users (for development/testing UI)
 */
export function getAllMockUsers(): Array<{ role: UserRole; email: string; name: string }> {
  return Object.entries(MOCK_USERS).map(([email, user]) => ({
    role: user.role!,
    email,
    name: user.name || email,
  }));
}

