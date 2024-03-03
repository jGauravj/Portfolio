"use client";

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
  attribute: string;
}

export function Providers({ children, attribute }: ProvidersProps) {
  return <ThemeProvider attribute={attribute}>{children}</ThemeProvider>;
}
