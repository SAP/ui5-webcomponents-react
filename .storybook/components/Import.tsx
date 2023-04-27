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
  packageName: string;
}

export const ImportStatement = ({ moduleName, packageName }: ImportStatementPropTypes) => {
  return (
    <pre
      style={{
        display: 'contents',
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
        <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>import</span>
        <span style={{ fontSize: '14px' }}>
          {' '}
          {'{'} {moduleName} {'}'}{' '}
        </span>
        <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>from</span>
        <span> </span>
        <span style={{ color: 'rgb(0, 136, 0)', fontSize: '14px' }}>{packageName}</span>
        <span style={{ fontSize: '14px' }}>;</span>
      </code>
    </pre>
  );
};

export const Import = () => {
  const context = useContext(DocsContext);
  const isChart = context.componentStories().at(0).id.startsWith('charts-');
  const groups = context.componentStories().at(0).kind.split('/');
  const moduleName = groups[groups.length - 1].replace('(experimental)', '').trim();

  return (
    <ImportStatement moduleName={moduleName} packageName={`'@ui5/webcomponents-react${isChart ? '-charts' : ''}'`} />
  );
};

Import.displayName = 'Import';
