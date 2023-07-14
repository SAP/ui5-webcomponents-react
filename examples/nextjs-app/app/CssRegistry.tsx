'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss';

export function CssRegistry({ children }: { children: React.ReactNode }) {
  const [registry] = useState(() => new SheetsRegistry());
  const generateId = createGenerateId();

  useServerInsertedHTML(() => {
    return (
      <>
        <style id="server-side-styles">{registry.toString()}</style>
      </>
    );
  });

  useEffect(() => {
    const style = document.getElementById('server-side-styles');
    if (style) {
      style.parentNode?.removeChild(style);
    }
  }, []);

  return (
    <JssProvider registry={registry} generateId={generateId}>
      {children}
    </JssProvider>
  );
}
