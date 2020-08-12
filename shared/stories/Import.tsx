import { DocsContext } from '@storybook/addon-docs/blocks';
import React, { useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Import = () => {
  const context = useContext(DocsContext);
  const isChart = context.id.startsWith('charts-');
  const groups = context.kind.split('/');
  const moduleName = groups[groups.length - 1].trim();

  return (
    <SyntaxHighlighter
      customStyle={{ padding: '10px 0', whiteSpace: 'pre-wrap', fontSize: 14 }}
      language="javascript"
      style={googlecode}
    >
      {`import { ${moduleName} } from '@ui5/webcomponents-react${isChart ? '-charts' : ''}/lib/${moduleName}';`}
    </SyntaxHighlighter>
  );
};

Import.displayName = 'Import';
