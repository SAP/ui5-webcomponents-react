export const sapUiFontFamily = "'72', Arial, Helvetica, sans-serif";
export const sapUiFontHeaderFamily = sapUiFontFamily;

export const sapMFontSmallSize = '12px';
export const sapMFontMediumSize = '14px';
export const sapMFontLargeSize = '16px';

export const sapMFontHeader6Size = '14px';
export const sapMFontHeader5Size = '16px';
export const sapMFontHeader4Size = '18px';
export const sapMFontHeader3Size = '20px';
export const sapMFontHeader2Size = '22px';
export const sapMFontHeader1Size = '26px';

export const sapUiFontHeaderWeight = 'normal';

const headerBasic = {
  fontFamily: sapUiFontHeaderFamily,
  fontWeight: sapUiFontHeaderWeight
};

export default {
  smallText: {
    fontFamily: sapUiFontFamily,
    fontSize: sapMFontSmallSize
  },

  mediumText: {
    fontFamily: sapUiFontFamily,
    fontSize: sapMFontMediumSize,
    lineHeight: 1.4
  },

  largeText: {
    fontFamily: sapUiFontFamily,
    fontSize: sapMFontLargeSize,
    lineHeight: 1.4
  },

  header6: {
    ...headerBasic,
    fontSize: sapMFontHeader6Size
  },

  header5: {
    ...headerBasic,
    fontSize: sapMFontHeader5Size
  },

  header4: {
    ...headerBasic,
    fontSize: sapMFontHeader4Size
  },

  header3: {
    ...headerBasic,
    fontSize: sapMFontHeader3Size
  },

  header2: {
    ...headerBasic,
    fontSize: sapMFontHeader2Size
  },

  header1: {
    ...headerBasic,
    fontSize: sapMFontHeader1Size
  }
};
