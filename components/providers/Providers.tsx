'use client';

import type { ReactNode } from 'react';
import { UserProvider } from '@/contexts/UserContext';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Providers component
 * 
 * Wraps the app with all necessary client-side providers.
 */
export function Providers({ children }: ProvidersProps) {
  return <UserProvider>{children}</UserProvider>;
}

export default Providers;

