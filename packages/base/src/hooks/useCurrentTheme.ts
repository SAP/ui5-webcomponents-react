'use client';

import { attachThemeLoaded, detachThemeLoaded, getTheme } from '@ui5/webcomponents-base';
import { useEffect, useState } from 'react';

export function useCurrentTheme(): string {
  const [theme, setLocalTheme] = useState(getTheme());

  useEffect(() => {
    const onThemeSwitch = (newTheme: string) => {
      setLocalTheme(newTheme);
    };
    attachThemeLoaded(onThemeSwitch);
    return () => {
      detachThemeLoaded(onThemeSwitch);
    };
  }, []);

  return theme;
}
