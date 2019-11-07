const prodClassPrefix = 'ui5wcr';
const globalPackageName = '@ui5/webcomponents-react-base';

export const createGenerateClassName = () => {
  if (!window[globalPackageName]) {
    window[globalPackageName] = { jssRuleCounter: 0 };
  } else if (!!window[globalPackageName].jssRuleCounter === false) {
    Object.assign(window[globalPackageName], { jssRuleCounter: 0 });
  }

  const internals = window[globalPackageName];
  return (rule, sheet) => {
    internals.jssRuleCounter++;

    let prefix = '';
    let jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix;
      if (sheet.options.jss.id != null) {
        jssId += sheet.options.jss.id;
      }
    }

    if (process.env.NODE_ENV === 'production') {
      return `${prodClassPrefix}-${prefix}${jssId}-${internals.jssRuleCounter}`;
    }

    return `${prefix}-${rule.key}-${jssId && `-${jssId}`}-${internals.jssRuleCounter}`;
  };
};
