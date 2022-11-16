// Copied from https://github.com/jashkenas/underscore/blob/master/modules/debounce.js (31th May 2021)

const now = Date.now || (() => new Date().getTime());

type DebouncedFunction = (...args: any[]) => void | any;
/**
 * When a sequence of calls of the returned function ends, the argument
 * function is triggered. The end of a sequence is defined by the `wait`
 * parameter.
 */
const debounce = (func: DebouncedFunction, wait: number) => {
  let timeout;
  let previous;
  let args;
  let result;
  let context;

  const later = () => {
    const passed = now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      result = func.apply(context, args);
      // This check is needed because `func` can recursively invoke `debounced`.
      if (!timeout) args = context = null;
    }
  };

  const debounced = function (..._args: unknown[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    context = this;
    args = _args;
    previous = now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
};

export { debounce };
