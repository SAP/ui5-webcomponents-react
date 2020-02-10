const defaultEasing = (x) => {
  if (x < 0.5) {
    return Math.pow(x * 2, 2) / 2;
  }
  return 1 - Math.pow((1 - x) * 2, 2) / 2;
};

const cancelEvents = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];
const subscribeCancelEvent = (cancelEvent) =>
  typeof document !== 'undefined' && cancelEvents.forEach((event) => document.addEventListener(event, cancelEvent));

const events = {
  registered: {},
  scrollEvent: {
    register: (evtName, callback) => {
      events.registered[evtName] = callback;
    },
    remove: (evtName) => {
      events.registered[evtName] = null;
    }
  }
};

const functionWrapper = (value) => (typeof value === 'function' ? value : () => value);

const makeData = () => ({
  currentPositionY: 0,
  startPositionY: 0,
  targetPositionY: 0,
  progress: 0,
  duration: 400,
  cancel: false,
  target: null,
  scrollContainer: null,
  to: null,
  start: null,
  deltaTop: null,
  percent: null,
  delayTimeout: null
});

const animateScroll = (easing, options, timestamp) => {
  const data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    // @ts-ignore
    if (events.registered.end) {
      // @ts-ignore
      events.registered.end(data.to, data.target, data.currentPositionY);
    }
    return;
  }

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  const { scrollContainer } = options;
  // @ts-ignore
  if (
    scrollContainer &&
    scrollContainer.current &&
    scrollContainer.current !== document &&
    scrollContainer.current !== document.body
  ) {
    // @ts-ignore
    scrollContainer.current.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    const easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrame(easedAnimate);
    return;
  }

  // @ts-ignore
  if (events.registered.end) {
    // @ts-ignore
    events.registered.end(data.to, data.target, data.currentPositionY);
  }
};

const animateTopScroll = (y, options, to, target) => {
  options.data = options.data || makeData();
  const { scrollContainer } = options;

  subscribeCancelEvent(() => {
    options.data.cancel = true;
  });

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = scrollContainer.current.scrollTop;
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    // @ts-ignore
    if (events.registered.end) {
      // @ts-ignore
      events.registered.end(options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 400 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  const easedAnimate = animateScroll.bind(null, defaultEasing, options);

  // @ts-ignore
  if (events.registered.begin) {
    // @ts-ignore
    events.registered.begin(options.data.to, options.data.target);
  }
  requestAnimationFrame(easedAnimate);
};

export const scrollTo = (toY, options, to, target) => {
  animateTopScroll(toY, options, to, target);
};
