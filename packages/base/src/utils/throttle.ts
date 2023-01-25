// Copied from https://github.com/jashkenas/underscore/blob/master/modules/throttle.js (24th January 2023)

const now = Date.now || (() => new Date().getTime());

interface Cancelable {
  cancel(): void;
}

interface Options {
  leading?: boolean;
  trailing?: boolean;
}

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const throttle = <T extends Function>(
  func: T,
  wait: number,
  options: Options = { leading: true, trailing: true }
): T & Cancelable => {
  let timeout;
  let context;
  let args;
  let result;
  let previous = 0;
  if (!options) options = {};

  const later = () => {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function (...params: unknown[]) {
    const _now = now();
    if (!previous && options.leading === false) previous = _now;
    const remaining = wait - (_now - previous);
    // @ts-expect-error: copied - no need to infer types here
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    context = this;
    args = params;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = () => {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  // @ts-expect-error: copied - no need to infer types here
  return throttled;
};

export { throttle };
