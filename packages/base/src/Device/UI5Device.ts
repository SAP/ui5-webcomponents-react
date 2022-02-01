// TODO this file mimics the UI5 Device - remove this as soon as the UI5 Web Components support type definitions
import * as UI5Device from '@ui5/webcomponents-base/dist/Device.js';

export const supportsTouch = (): boolean => {
  return UI5Device.supportsTouch();
};
export const isIE = (): boolean => {
  return UI5Device.isIE();
};
export const isSafari = (): boolean => {
  return UI5Device.isSafari();
};
export const isChrome = (): boolean => {
  return UI5Device.isChrome();
};
export const isPhone = (): boolean => {
  return UI5Device.isPhone();
};
export const isTablet = (): boolean => {
  return UI5Device.isTablet();
};
export const isDesktop = (): boolean => {
  return UI5Device.isDesktop();
};
export const isCombi = (): boolean => {
  return UI5Device.isCombi();
};
export const isIOS = (): boolean => {
  return UI5Device.isIOS();
};
