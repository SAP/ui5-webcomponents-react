import './bootstrap';
import { ExtendedWindow } from '../interfaces/ExtendedWindow';

const env = process.env.NODE_ENV;
const prodClassPrefix = 'f4r';

const extractClassNamePrefix = (className) => {
  const match = className.match && className.match(/WithStyles\((.*)\)/);
  return (match && match[1].replace(/\$/g, '')) || className;
};

export const createGenerateClassName = () => {
  const defaultPrefix = env === 'production' ? prodClassPrefix : '';
  if (!!(window as ExtendedWindow).Fiori4React.__SECRET_INTERNALS_DO_NOT_USE.jssRuleCounter === false) {
    Object.assign((window as ExtendedWindow).Fiori4React.__SECRET_INTERNALS_DO_NOT_USE, { jssRuleCounter: 0 });
  }
  const internals = (window as ExtendedWindow).Fiori4React.__SECRET_INTERNALS_DO_NOT_USE;
  return (rule, sheet) => {
    internals.jssRuleCounter++;

    let prefix = defaultPrefix;
    let jssId = '';

    if (sheet) {
      prefix = env === 'production' ? defaultPrefix : extractClassNamePrefix(sheet.options.classNamePrefix);
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return `${prefix}${jssId}${internals.jssRuleCounter}`;
    }

    return `${prefix}-${rule.key}-${jssId && `-${jssId}`}-${internals.jssRuleCounter}`;
  };
};
