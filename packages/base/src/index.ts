import * as Device from './Device/index.js';
import VersionInfo from './generated/VersionInfo.js';
import * as hooks from './hooks/index.js';
import { I18nStore } from './stores/I18nStore.js';
import { StyleStore } from './stores/StyleStore.js';
import { ThemingParameters } from './styling/ThemingParameters.js';
import { withWebComponent } from './wrapper/withWebComponent.js';
import type { WithWebComponentPropTypes } from './wrapper/withWebComponent.js';

export * from './styling/CssSizeVariables.js';
export * from './utils/index.js';
export * from './hooks/index.js';
export type * from './types/index.js';

export { I18nStore, StyleStore, ThemingParameters, Device, hooks, withWebComponent };
export type { WithWebComponentPropTypes };
export const version = VersionInfo.version;
