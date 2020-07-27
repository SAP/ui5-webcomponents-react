const PROP_WHITELIST = /^(aria-|data-|id$|on[A-Z])/;

export const usePassThroughHtmlProps = (props: Record<string, unknown>, propBlackList: string[] = []) => {
  const componentPropBlacklist = new Set(propBlackList);

  const returnVal = {};
  for (const name in props) {
    if (PROP_WHITELIST.test(name) && !componentPropBlacklist.has(name)) {
      returnVal[name] = props[name];
    }
  }

  return returnVal;
};
