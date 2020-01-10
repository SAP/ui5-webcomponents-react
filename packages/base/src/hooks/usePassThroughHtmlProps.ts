import { useMemo } from 'react';

const PROP_WHITELIST = /^(aria-|data-|id$)/;

export const usePassThroughHtmlProps = (props) => {
  const passThroughPropNames = Object.keys(props).filter((name) => PROP_WHITELIST.test(name));

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
