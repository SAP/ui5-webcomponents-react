import { DocsContext } from '@storybook/addon-docs';
import { Fragment, useContext } from 'react';

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
interface DeepPath {
  path: string;
  moduleName: string;
}
interface FromPathPropTypes extends Pick<ImportStatementPropTypes, 'packageName'> {
  deepPath?: null | undefined | DeepPath;
}

function FromPath({ packageName, deepPath }: FromPathPropTypes) {
  return (
    <>
      <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>from</span>
      <span> </span>
      <span style={{ color: 'rgb(0, 136, 0)', fontSize: '14px' }}>
        {deepPath ? packageName.slice(0, -1) : packageName}
        {deepPath && deepPath.path}
        {deepPath && "'"}
      </span>
      <span style={{ fontSize: '14px' }}>;</span>
      {deepPath && <br />}
    </>
  );
}

export const ImportStatement = ({ moduleNames, packageName }: ImportStatementPropTypes) => {
  if (!moduleNames) {
    return null;
  }
  const isCompat = packageName.includes('compat');
  const paths = isCompat
    ? moduleNames.map((item) => {
        return { path: `/dist/components/${item}/index.js`, moduleName: item };
      })
    : [null];

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
        {!paths[0] && <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>import</span>}
        {paths.map((deepPath) => {
          if (!deepPath) {
            return (
              <span style={{ fontSize: '14px' }}>
                {' '}
                {'{'}
                {moduleNames.length > 2 ? (
                  <>
                    {moduleNames.map((item) => {
                      return (
                        <Fragment key={item}>
                          <br />
                          &nbsp;&nbsp;
                          {item},
                        </Fragment>
                      );
                    })}
                    <br />
                  </>
                ) : (
                  <>&nbsp;{moduleNames.join(', ')}&nbsp;</>
                )}
                {'}'}{' '}
              </span>
            );
          } else {
            return (
              <>
                <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>import</span>
                <span style={{ fontSize: '14px' }}>
                  {' '}
                  {'{'}&nbsp;{deepPath.moduleName}&nbsp;{'}'}{' '}
                </span>
                <FromPath packageName={packageName} deepPath={deepPath} />
              </>
            );
          }
        })}
        {!paths[0] && <FromPath packageName={packageName} />}
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
  const isCompat = context.componentStories().at(0).id.startsWith('legacy-');
  const groups = context.componentStories().at(0).kind.split('/');
  const module = groups[groups.length - 1].replace('(experimental)', '').trim();
  const moduleNames = props.moduleNames ?? [module];

  return (
    <ImportStatement
      moduleNames={moduleNames}
      packageName={`'@ui5/webcomponents-react${isChart ? '-charts' : isCompat ? '-compat' : ''}'`}
    />
  );
};

Import.displayName = 'Import';
