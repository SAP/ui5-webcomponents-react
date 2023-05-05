import { attachBoot } from '@ui5/webcomponents-base/dist/Boot.js';
import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming.js';
import { getUi5TagWithSuffix } from './utils.js';

export const addCustomCSSWithScoping = (baseTagName: string, customCSS: string) => {
  attachBoot(() => {
    const finalTag = getUi5TagWithSuffix(baseTagName);
    void addCustomCSS(finalTag, customCSS);
  });
};
