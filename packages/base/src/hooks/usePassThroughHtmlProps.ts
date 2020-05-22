import { useMemo } from 'react';

const PROP_WHITELIST = /^(aria-|data-|id$|on[A-Z])/;

export const usePassThroughHtmlProps = (props, propBlackList: string[] = []) => {
  const componentPropBlacklist = new Set(propBlackList);
  const passThroughPropNames = Object.keys(props).filter(
    (name) => PROP_WHITELIST.test(name) && !componentPropBlacklist.has(name)
  );

  return useMemo(
    () => {
      return passThroughPropNames.reduce(
        (acc, val) => ({
          ...acc,
          [val]: props[val]
        }),
        {}
      );
    },
    passThroughPropNames.map((name) => props[name])
  );
};
