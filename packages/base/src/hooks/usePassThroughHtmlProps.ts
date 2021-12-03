import { useEffect } from 'react';
import { deprecationNotice } from '@ui5/webcomponents-react-base/dist/Utils';

const PROP_INCLUDELIST = /^(aria-|data-|id$|on[A-Z]|slot$|role$)/;

/**
 * @deprecated please use rest/spread syntax instead. `{ propA, propB, ...rest } = props`
 */
export const usePassThroughHtmlProps = (props: Record<string, any>, propExcludeList: string[] = []) => {
  const componentPropExcludelist = new Set(propExcludeList);

  useEffect(() => {
    deprecationNotice(
      'usePassThroughHtmlProps',
      `\`usePassThroughHtmlProps\` is deprecated. Please use rest/spread syntax instead. \`{ propA, propB, ...rest } = props\``
    );
  }, []);

  const returnVal: Record<string, unknown> = {};
  for (const name in props) {
    if (PROP_INCLUDELIST.test(name) && !componentPropExcludelist.has(name)) {
      returnVal[name] = props[name];
    }
  }

  return returnVal;
};
