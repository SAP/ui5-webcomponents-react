interface ImportStatementPropTypes {
  /**
   * Name of module/component (e.g. "Button")
   */
  moduleName?: string;
  /**
   * Package name (e.g. "@ui5/webcomponents-react")
   */
  packageName: string;
  /**
   * Defines if it's a named or default import.
   *
   * __Note:__ If `true`, only a single `moduleName` is supported.
   */
  defaultImport?: boolean;
}
interface DeepPath {
  path: string;
  moduleName: string;
}
interface FromPathPropTypes extends Pick<ImportStatementPropTypes, 'packageName'> {
  deepPath?: null | undefined | DeepPath;
}

function FromPath({ packageName }: FromPathPropTypes) {
  return (
    <>
      <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>from</span>
      <span> </span>
      <span style={{ color: 'rgb(0, 136, 0)', fontSize: '14px' }}>{packageName}</span>
      <span style={{ fontSize: '14px' }}>;</span>
    </>
  );
}

FromPath.displayName = 'FromPath';

export const ImportStatement = ({ moduleName, packageName, defaultImport }: ImportStatementPropTypes) => {
  if (!moduleName) {
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
        margin: '0px',
      }}
    >
      <code style={{ whiteSpace: 'pre' }}>
        <span style={{ color: 'rgb(0, 0, 136)', fontSize: '14px' }}>import</span>
        <span style={{ fontSize: '14px' }}>
          {!defaultImport && ' {'}
          <>
            &nbsp;&nbsp;
            {moduleName}{' '}
          </>
          {!defaultImport && '} '}
        </span>
        <FromPath packageName={packageName} />
      </code>
    </pre>
  );
};

ImportStatement.displayName = 'ImportStatement';

interface ImportProps {
  /**
   * Names of module/component (e.g. "Button")
   */
  moduleName: ImportStatementPropTypes['moduleName'];
  componentId: string;
}

export const Import = (props: ImportProps) => {
  const { componentId, moduleName } = props;
  const isChart = componentId.startsWith('charts-');
  const isCompat = componentId.startsWith('legacy-');

  return (
    <ImportStatement
      moduleName={moduleName}
      packageName={`'@ui5/webcomponents-react${isChart ? '-charts' : isCompat ? '-compat' : ''}/${moduleName}'`}
    />
  );
};

Import.displayName = 'Import';
