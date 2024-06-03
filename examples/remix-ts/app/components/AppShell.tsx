import '@ui5/webcomponents-react/dist/Assets.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { ReactNode } from 'react';
import { AppShellBar } from './AppShellBar';

interface AppShellProps {
  children?: ReactNode | ReactNode[];
}

export function AppShell({ children }: AppShellProps) {
  return (
    <ThemeProvider>
      <AppShellBar />
      <div className="appScrollContainer">{children}</div>
    </ThemeProvider>
  );
}
