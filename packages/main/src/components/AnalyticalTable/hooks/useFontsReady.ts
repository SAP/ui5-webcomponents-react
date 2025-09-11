import { useState, useEffect } from 'react';

// If reused, think about implementing the behavior via useSyncExternalStore

/**
 * Hook that returns whether the fonts are loaded and ready to use.
 *
 * @returns boolean
 */
export function useFontsReady(): boolean {
  const [fontsReady, setFontsReady] = useState(document.fonts?.status === 'loaded');
  useEffect(() => {
    if (!document.fonts) return;

    if (document.fonts.status === 'loading') {
      let mounted = true;

      void document.fonts.ready.then(() => {
        if (mounted) {
          setFontsReady(true);
        }
      });

      return () => {
        mounted = false;
      };
    }
  }, []);

  return fontsReady;
}
