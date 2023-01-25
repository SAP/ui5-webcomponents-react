import { DocsContext } from '@storybook/addon-docs';
import React, { useContext } from 'react';

interface ImportStatementPropTypes {
  /**
   * Name of module/component (e.g. "Button")
   */
  moduleName: string;
  /**
   * Package name (e.g. "@ui5/webcomponents-react")
   */
  packagePath: string;
}

export const ImportStatement = ({ moduleName, packagePath }: any) => {
  return (
    <pre
      style={{
        display: 'block',
        overflowX: 'auto',
        padding: '0px',
        background: 'white',
        color: 'black',
        whiteSpace: 'pre-wrap',
        fontSize: '14px',
        margin: '0px'
      }}
    >
      <code style={{ whiteSpace: 'pre' }}>
        <span style={{ color: 'rgb(0, 0, 136)' }}>import</span>
        <span>
          {' '}
          {'{'} {moduleName} {'}'}{' '}
        </span>
        <span style={{ color: 'rgb(0, 0, 136)' }}>from</span>
        <span> </span>
        <span style={{ color: 'rgb(0, 136, 0)' }}>{packagePath}</span>
        <span>;</span>
      </code>
    </pre>
  );
};

export const Import = () => {
  const context = useContext(DocsContext);
  const isChart = context.id.startsWith('charts-');
  const groups = context.kind.split('/');
  const moduleName = groups[groups.length - 1].trim();

  return (
    <ImportStatement moduleName={moduleName} packagePath={`'@ui5/webcomponents-react${isChart ? '-charts' : ''}'`} />
  );
};

Import.displayName = 'Import';
