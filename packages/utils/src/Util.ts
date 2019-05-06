import Themes from './Themes';

type ThemeMap = { [theme in Themes]: object };

export const getThemeClassFor = (theme: Themes, themes: ThemeMap) => {
  if ({}.hasOwnProperty.call(themes, theme)) {
    return themes[theme];
  }
  throw new Error('Could not match theme to Theme Class!');
};

/**
 * Create a Theme Map for given styles
 * @param light {object} Belize Theme CSS Module
 * @param dark {object} Belize Deep Theme CSS Module
 * @param hcb {object} High Contrast Black Theme CSS Module
 * @return {ThemeMap} Theme Map
 */
export const createThemeMap = (light: object, dark: object, hcb: object = {}): ThemeMap => ({
  [Themes.sap_belize]: light,
  [Themes.sap_belize_plus]: dark,
  [Themes.sap_belize_hcb]: hcb
});

/**
 * Get overwrite theme class
 * @param {string} theme
 * @param {string} overwrite
 * @return {string} Theme String
 *
 */
export const getThemeOverwrite = (theme: Themes, overwrite: Themes): Themes => {
  if ((Object as any).values(Themes).includes(overwrite)) return overwrite;
  return theme;
};

export const deprecationNotice = (component: string, message: string) => {
  const value = `* fiori-for-react Deprecation Notice - ${component}`;
  const dots = '*'.padStart(value.length, '*');
  // eslint-disable-next-line no-console
  console.warn(`${dots}${value}${dots}${message}`);
};

export const pushElementBackInScreen = (elementRef, margin = 5) => {
  if (elementRef) {
    const viewportHeight = document.documentElement.clientHeight;
    const viewportWidth = document.documentElement.clientWidth;

    const boundingClientRect = elementRef.getBoundingClientRect();
    if (boundingClientRect.left < 0) {
      const offSet = boundingClientRect.left * -1 + margin;
      const left = parseInt(elementRef.style.left, 10) + offSet;
      elementRef.style.left = `${left}px`;
    }

    if (boundingClientRect.right > viewportWidth) {
      const offSet = boundingClientRect.right - viewportWidth;
      const left = parseInt(elementRef.style.left, 10) - offSet - margin;
      elementRef.style.left = `${left}px`;
    }

    if (boundingClientRect.top < 0) {
      const offSet = boundingClientRect.top * -1 + margin;
      const top = parseInt(elementRef.style.top, 10) + offSet;
      elementRef.style.top = `${top}px`;
    }

    if (boundingClientRect.bottom > viewportHeight) {
      const offSet = boundingClientRect.bottom - viewportHeight;
      const top = parseInt(elementRef.style.top, 10) - offSet;
      elementRef.style.top = `${top}px`;
    }
  }
};
