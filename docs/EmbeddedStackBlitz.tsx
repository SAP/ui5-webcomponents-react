import sdk from '@stackblitz/sdk';
import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';

interface EmbeddedStackBlitzProps {
  style?: CSSProperties;
  projectId: string;
}

export function EmbeddedStackBlitz({ style, projectId }: EmbeddedStackBlitzProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    sdk.embedProjectId(container, projectId, {
      openFile: 'src/App.tsx',
      view: 'editor',
      height: '90%',
      hideDevTools: true,
      terminalHeight: 0,
    });

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [projectId]);

  return <div ref={containerRef} data-where style={{ height: '80vh', ...style }} />;
}

EmbeddedStackBlitz.displayName = 'EmbeddedStackBlitz';
