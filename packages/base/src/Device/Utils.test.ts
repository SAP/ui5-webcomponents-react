import { changeRootCSSClass, convertToPx, matchLegacyBySize } from './utils';

describe('Device - Utils', () => {
  test('convertToPx', () => {
    expect(convertToPx(20, 'em')).toBe(320);
    expect(convertToPx(20, 'rem')).toBe(320);
    expect(convertToPx(20)).toBe(20);

    // const computedStyle = window.getComputedStyle;
    // delete window.getComputedStyle;
    // Object.defineProperty(document.documentElement, 'fontSize', { value: '16px'});
    // expect(media.convertToPx(20, 'rem')).toBe(320);
    // window.getComputedStyle = computedStyle;
  });

  test('match legacy by size', () => {
    expect(matchLegacyBySize(20, 40, 'rem', [30])).toBe(false);
    expect(matchLegacyBySize(-20, 40, 'rem', [5])).toBe(true);
    expect(matchLegacyBySize(20, -40, 'rem', [5])).toBe(false);
    expect(matchLegacyBySize(19, 20, 'rem', [319])).toBe(true);
  });

  test('change css root classes', () => {
    changeRootCSSClass('sapUiMedia-Std', false);
    expect(document.documentElement.className).toBe('sapUiMedia-Std');
    changeRootCSSClass('sapUiMedia-StdExt-Phone', false);
    expect(document.documentElement.className).toBe('sapUiMedia-Std sapUiMedia-StdExt-Phone');
    changeRootCSSClass('sapUiMedia-StdExt-Desktop', false, 'sapUiMedia-StdExt-');
    expect(document.documentElement.className).toBe('sapUiMedia-Std sapUiMedia-StdExt-Desktop');
    changeRootCSSClass('sapUiMedia-StdExt-Desktop', true);
    expect(document.documentElement.className).toBe('sapUiMedia-Std ');
  });
});
