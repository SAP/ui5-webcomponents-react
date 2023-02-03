import { boot } from '@ui5/webcomponents-base/dist/Boot.js';
import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming.js';
import { getUi5TagWithSuffix } from './utils';

export const addCustomCSSWithScoping = (baseTagName: string, customCSS: string) => {
  boot().then(() => {
    const finalTag = getUi5TagWithSuffix(baseTagName);
    addCustomCSS(finalTag, customCSS);
  });
};
