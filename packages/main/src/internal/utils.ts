import { getEffectiveScopingSuffixForTag, getScopedVarName } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import type { ReactNode } from 'react';
import { Children, cloneElement, Fragment } from 'react';

export function flattenFragments(children: ReactNode | ReactNode[], depth = 1): ReactNode[] {
  const flatChildren = [];
  const removeFragments = (element, level = 0, key = []) => {
    if (!element) {
      return;
    }
    if (Array.isArray(element)) {
      Children.toArray(element).forEach((child, index) => {
        removeFragments(child, level + 1, [...key, index]);
      });
      return;
    }
    if (element.type === Fragment && level <= depth) {
      Children.toArray(element.props?.children).forEach((item, index) => {
        removeFragments(item, level + 1, [...key, index]);
      });
    } else if (typeof element === 'string' || typeof element === 'number') {
      flatChildren.push(element);
    } else {
      flatChildren.push(cloneElement(element, { key: key.join('.') }));
    }
  };
  removeFragments(children);

  return flatChildren;
}

export const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const lowercaseFirstLetter = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
export const camelToKebabCase = (s: string) => s.replace(/([A-Z])/g, (a, b: string) => `-${b.toLowerCase()}`);
export const kebabToCamelCase = (str: string) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

export function getUi5TagWithSuffix(baseTagName) {
  const tagNameSuffix: string = getEffectiveScopingSuffixForTag(baseTagName);
  return tagNameSuffix ? `${baseTagName}-${tagNameSuffix}` : baseTagName;
}

export const isSSR = () => typeof window === 'undefined';

export function trimAndRemoveSpaces(value) {
  return value.trim().replace(/\s\s+/g, ' ');
}

export const cssVarVersionInfoPrefix = getScopedVarName('--_ui5_').replace('--_ui5_', '');
