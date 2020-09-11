/* eslint-disable no-undef */
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

// Opera 8.0+
export function isOpera() {
  return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
}

// Firefox 1.0+
export function isFirefox() {
  return typeof InstallTrigger !== 'undefined';
}

// Safari 3.0+ "[object HTMLElementConstructor]"
export function isSafari() {
  return (
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))
  );
}

// Internet Explorer 6-11
export function isIE() {
  return /*@cc_on!@*/ false || !!document.documentMode;
}

// Edge 20+
export function isEdge() {
  return !isIE && !!window.StyleMedia;
}

// Chrome 1 - 79
export function isChrome() {
  return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
}

// Edge (based on chromium) detection
export function isEdgeChromium() {
  return isChrome && navigator.userAgent.indexOf('Edg') != -1;
}

// Blink engine detection
export function isBlink() {
  return (isChrome || isOpera) && !!window.CSS;
}
