import sdk from '@stackblitz/sdk';
import { useEffect, useRef } from 'react';

interface EmbeddedStackBlitzProps {
  repoPath: string;
}

export function EmbeddedStackBlitz({ repoPath }: EmbeddedStackBlitzProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    sdk.embedGithubProject(container, repoPath, {
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
  }, [repoPath]);

  return <div ref={containerRef} />;
}

EmbeddedStackBlitz.displayName = 'EmbeddedStackBlitz';
