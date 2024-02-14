import { DocsContext } from '@storybook/addon-docs';
import React, { useContext } from 'react';
import { useGetCem, useGetSubComponentsOfModule } from '../utils';

interface ImportStatementPropTypes {
  /**
   * Names of module/component (e.g. "Button")
   */
  moduleNames?: string[];
  /**
   * Package name (e.g. "@ui5/webcomponents-react")
   */
  packageName: string;
}
export const ImportStatement = ({ moduleNames, packageName }: ImportStatementPropTypes) => {
  if (!moduleNames) {
    return null;
  }
  return (
    <pre
      data-import
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
          {'{'}
          {moduleNames.length > 2 ? (
            <>
              {moduleNames.map((item) => {
                return (
                  <React.Fragment key={item}>
                    <br />
                    &nbsp;&nbsp;
                    {item},
                  </React.Fragment>
                );
              })}
              <br />
            </>
          ) : (
            <>&nbsp;{moduleNames.join(', ')}&nbsp;</>
          )}
          {'}'}{' '}
        </span>
        <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>from</span>
        <span> </span>
        <span style={{ color: 'rgb(0, 136, 0)', fontSize: '14px' }}>{packageName}</span>
        <span style={{ fontSize: '14px' }}>;</span>
      </code>
    </pre>
  );
};

interface ImportProps {
  /**
   * Names of module/component (e.g. "Button")
   */
  moduleNames?: ImportStatementPropTypes['moduleNames'];
}

export const Import = (props: ImportProps) => {
  const context = useContext(DocsContext);
  const isChart = context.componentStories().at(0).id.startsWith('charts-');
  const groups = context.componentStories().at(0).kind.split('/');
  const module = groups[groups.length - 1].replace('(experimental)', '').trim();
  const moduleNames = props.moduleNames ?? [module];

  return (
    <ImportStatement moduleNames={moduleNames} packageName={`'@ui5/webcomponents-react${isChart ? '-charts' : ''}'`} />
  );
};

Import.displayName = 'Import';
