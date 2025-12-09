'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type {
  User,
  UserContextValue,
  UserRole,
  UserProfile,
} from '@/types/user';

// Storage key for persisting user
const USER_STORAGE_KEY = 'botaniq_user';

// Create context with default value
const UserContext = createContext<UserContextValue | undefined>(undefined);

/**
 * UserProvider Props
 */
interface UserProviderProps {
  children: ReactNode;
  /** Initial user for SSR/testing */
  initialUser?: User | null;
}

/**
 * UserProvider
 * 
 * Provides user state and methods throughout the app.
 * Persists user data to localStorage for demo purposes.
 * In production, this would integrate with a real auth system.
 */
export function UserProvider({ children, initialUser = null }: UserProviderProps) {
  const [user, setUserState] = useState<User | null>(initialUser);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(USER_STORAGE_KEY);
      if (stored) {
        const parsedUser = JSON.parse(stored) as User;
        setUserState(parsedUser);
      }
    } catch (error) {
      console.error('Failed to load user from storage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Persist user to storage when it changes
  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } catch (error) {
        console.error('Failed to save user to storage:', error);
      }
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  // Set user directly
  const setUser = useCallback((newUser: User | null) => {
    setUserState(newUser);
  }, []);

  // Update user with partial updates
  const updateUser = useCallback((updates: Partial<User>) => {
    setUserState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        ...updates,
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  // Update user profile
  const updateProfile = useCallback((profileUpdates: Partial<UserProfile>) => {
    setUserState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        profile: {
          ...prev.profile,
          ...profileUpdates,
        },
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  // Complete onboarding
  const completeOnboarding = useCallback(
    (role: UserRole, profileData: Partial<UserProfile>) => {
      setUserState((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          role,
          onboardingCompleted: true,
          profile: {
            ...prev.profile,
            ...profileData,
          },
          updatedAt: new Date().toISOString(),
        };
      });
    },
    []
  );

  // Logout
  const logout = useCallback(() => {
    setUserState(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  }, []);

  const value: UserContextValue = {
    user,
    isLoading,
    setUser,
    updateUser,
    updateProfile,
    completeOnboarding,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

/**
 * useUser hook
 * 
 * Access user context from any component.
 * Must be used within a UserProvider.
 */
export function useUser(): UserContextValue {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserContext;

