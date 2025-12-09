/**
 * User Types
 * 
 * Type definitions for user model and related concepts.
 */

/**
 * User role types
 */
export type UserRole = 'member' | 'owner' | 'broker' | 'charter' | 'admin';

/**
 * Primary usage type (for onboarding)
 */
export type PrimaryUsage = 'enthusiast' | 'owner' | 'broker' | 'charter';

/**
 * Experience level for members
 */
export type ExperienceLevel = 'beginner' | 'intermediate' | 'expert';

/**
 * Portfolio size for brokers
 */
export type PortfolioSize = 'small' | 'medium' | 'large';

/**
 * Fleet size for charter companies
 */
export type FleetSize = '1-3' | '4-10' | '10+';

/**
 * User profile - role-specific fields
 */
export interface UserProfile {
  // Common fields
  country?: string;
  primaryUsage?: PrimaryUsage;
  
  // Member fields
  experienceLevel?: ExperienceLevel;
  
  // Owner fields
  ownsBoat?: boolean;
  boatCount?: number;
  boatLocationCountry?: string;
  planToList?: 'sale' | 'charter' | 'both' | 'none';
  
  // Broker fields
  companyName?: string;
  companyWebsite?: string;
  portfolioSize?: PortfolioSize;
  operatingRegions?: string[];
  
  // Charter fields
  fleetSize?: FleetSize;
  charterRegion?: string;
  usesOtherPlatforms?: boolean;
  otherPlatforms?: string;
}

/**
 * User model
 */
export interface User {
  id: string;
  email: string;
  name?: string;
  role?: UserRole;
  onboardingCompleted: boolean;
  profile: UserProfile;
  createdAt: string;
  updatedAt: string;
}

/**
 * User context value type
 */
export interface UserContextValue {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  updateUser: (updates: Partial<User>) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completeOnboarding: (role: UserRole, profile: Partial<UserProfile>) => void;
  logout: () => void;
}

/**
 * Mock user for testing
 */
export const createMockUser = (overrides?: Partial<User>): User => ({
  id: 'mock-user-1',
  email: 'user@example.com',
  name: 'Test User',
  role: undefined,
  onboardingCompleted: false,
  profile: {},
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  ...overrides,
});

