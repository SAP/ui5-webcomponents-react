import '@ui5/webcomponents/dist/Tag.js';
import type Tag from '@ui5/webcomponents/dist/Tag.js';
// with sb 9.1.2 the explicit React import is required for components used in manager.tsx - not sure if this is a bug
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

declare global {
  interface JSX {
    IntrinsicElements: {
      'ui5-tag': Tag;
    };
  }
}

const TAGS = {
  deprecated: { design: 'Set1', colorScheme: '3', title: 'Deprecated', label: 'Depr' },
  custom: { design: 'Set2', colorScheme: '6', title: 'No / Limited Design', label: 'Custom' },
  experimental: { design: 'Set1', colorScheme: '8', title: 'Experimental', label: 'Exp' },
};

function Badge({ type }: { type: 'deprecated' | 'custom' | 'experimental' }) {
  return (
    <ui5-tag
      design={TAGS[type].design}
      color-scheme={TAGS[type].colorScheme}
      class="side-nav-badge"
      title={TAGS[type].title}
    >
      {TAGS[type].label}
    </ui5-tag>
  );
}

Badge.displayName = 'Badge';
export { Badge };
