'use client';

import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { attachThemeLoaded, detachThemeLoaded } from '@ui5/webcomponents-base/dist/Theming.js';
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
