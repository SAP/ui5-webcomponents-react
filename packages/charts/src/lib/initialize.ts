import { getOrLoadTheme } from '../themes/themeMap';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';

const CSS_ELEMENT_ID = 'data-ui5-webcomponents-react-charts-theme-properties';

let domElementToInsert = document.querySelector(`#${CSS_ELEMENT_ID}`);

let isInitialized = false;

export const useInitialize = () => {
  const theme = getTheme();
  const themeMap = getOrLoadTheme(theme);

  if (isInitialized) return;

  if (!domElementToInsert) {
    domElementToInsert = document.querySelector(`style[${CSS_ELEMENT_ID}]`);

    if (!domElementToInsert) {
      domElementToInsert = document.createElement('style');
      domElementToInsert.setAttribute(CSS_ELEMENT_ID, '');
      document.head.appendChild(domElementToInsert);
    }
  }

  const sequentialColors = Object.entries(themeMap.sequentialColors)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n');
  const semanticColors = Object.entries(themeMap.semanticColors)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n');
  requestAnimationFrame(() => {
    domElementToInsert.textContent = `
:root {
  ${sequentialColors}
  ${semanticColors}
}
`;
    isInitialized = true;
  });
};
