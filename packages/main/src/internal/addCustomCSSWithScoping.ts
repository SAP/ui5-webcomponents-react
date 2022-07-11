import { boot } from '@ui5/webcomponents-base/dist/Boot.js';
import { getEffectiveScopingSuffixForTag } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming.js';

export const addCustomCSSWithScoping = (baseTagName: string, customCSS: string) => {
  boot().then(() => {
    const tagNameSuffix: string = getEffectiveScopingSuffixForTag(baseTagName);
    const finalTag: string = tagNameSuffix ? `${baseTagName}-${tagNameSuffix}` : baseTagName;
    addCustomCSS(finalTag, customCSS);
  });
};
