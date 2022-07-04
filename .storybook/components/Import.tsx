import { DocsContext } from '@storybook/addon-docs';
import React, { useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const ImportStatement = ({ children }: { children: string }) => {
  return (
    <SyntaxHighlighter
      customStyle={{ whiteSpace: 'pre-wrap', fontSize: 14, padding: 0, margin: 0 }}
      language="javascript"
      style={googlecode}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export const Import = () => {
  const context = useContext(DocsContext);
  const isChart = context.id.startsWith('charts-');
  const groups = context.kind.split('/');
  const moduleName = groups[groups.length - 1].trim();

  return (
    <ImportStatement>
      {`import { ${moduleName} } from '@ui5/webcomponents-react${isChart ? '-charts' : ''}';`}
    </ImportStatement>
  );
};

Import.displayName = 'Import';
