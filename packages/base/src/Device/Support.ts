export const supportPointerEvents = () => {
  return 'onpointerdown' in window;
};

export const supportInputPlaceholder = () => {
  return 'placeholder' in document.createElement('input') && 'placeholder' in document.createElement('textarea');
};

export const supportWebSocket = () => {
  let isSupported = false;
  try {
    isSupported = 'WebSocket' in window && window.WebSocket.CLOSING === 2;
  } catch (e) {
    // do nothing
  }
  return isSupported;
};

export const supportMatchMedia = () => {
  return 'matchMedia' in window;
};

export const supportMatchMediaListener = () => {
  return !!(supportMatchMedia() && window.matchMedia('all and (max-width:0px)'));
};

export const supportOrientation = () => {
  return 'DeviceOrientationEvent' in window;
};

export const supportRetina = () => {
  return (window as any).retina || window.devicePixelRatio >= 2;
};
