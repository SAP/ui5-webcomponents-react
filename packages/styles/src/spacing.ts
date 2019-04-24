const TINY_SPACE = '0.5rem';
const SMALL_SPACE = '1rem';
const MEDIUM_SPACE = '2rem';
const LARGE_SPACE = '3rem';

/*
 * ###################################################
 * Margin Classes
 * ###################################################
 */

// All Around Margins
export const sapUiTinyMargin = {
  margin: TINY_SPACE
};
export const sapUiSmallMargin = {
  margin: SMALL_SPACE
};
export const sapUiMediumMargin = {
  margin: MEDIUM_SPACE
};
export const sapUiLargeMargin = {
  margin: LARGE_SPACE
};

// Single Side Margins
// Tiny
export const sapUiTinyMarginTop = {
  marginTop: TINY_SPACE
};
export const sapUiTinyMarginBottom = {
  marginBottom: TINY_SPACE
};
export const sapUiTinyMarginBegin = {
  marginLeft: TINY_SPACE
};
export const sapUiTinyMarginEnd = {
  marginRight: TINY_SPACE
};

// Small
export const sapUiSmallMarginTop = {
  marginTop: SMALL_SPACE
};
export const sapUiSmallMarginBottom = {
  marginBottom: SMALL_SPACE
};
export const sapUiSmallMarginBegin = {
  marginLeft: SMALL_SPACE
};
export const sapUiSmallMarginEnd = {
  marginRight: SMALL_SPACE
};

// Medium
export const sapUiMediumMarginTop = {
  marginTop: MEDIUM_SPACE
};
export const sapUiMediumMarginBottom = {
  marginBottom: MEDIUM_SPACE
};
export const sapUiMediumMarginBegin = {
  marginLeft: MEDIUM_SPACE
};
export const sapUiMediumMarginEnd = {
  marginRight: MEDIUM_SPACE
};

// Large
export const sapUiLargeMarginTop = {
  marginTop: LARGE_SPACE
};
export const sapUiLargeMarginBottom = {
  marginBottom: LARGE_SPACE
};
export const sapUiLargeMarginBegin = {
  marginLeft: LARGE_SPACE
};
export const sapUiLargeMarginEnd = {
  marginRight: LARGE_SPACE
};

// Two Sided Margin
// Tiny
export const sapUiTinyMarginBeginEnd = {
  ...sapUiTinyMarginBegin,
  ...sapUiTinyMarginEnd
};
export const sapUiTinyMarginTopBottom = {
  ...sapUiTinyMarginTop,
  ...sapUiTinyMarginBottom
};

// Small
export const sapUiSmallMarginBeginEnd = {
  ...sapUiSmallMarginBegin,
  ...sapUiSmallMarginEnd
};
export const sapUiSmallMarginTopBottom = {
  ...sapUiSmallMarginTop,
  ...sapUiSmallMarginBottom
};

// Medium
export const sapUiMediumMarginBeginEnd = {
  ...sapUiMediumMarginBegin,
  ...sapUiMediumMarginEnd
};
export const sapUiMediumMarginTopBottom = {
  ...sapUiMediumMarginTop,
  ...sapUiMediumMarginBottom
};

// Large
export const sapUiLargeMarginBeginEnd = {
  ...sapUiLargeMarginBegin,
  ...sapUiLargeMarginEnd
};
export const sapUiLargeMarginTopBottom = {
  ...sapUiLargeMarginTop,
  ...sapUiLargeMarginBottom
};

// Remove Margins
export const sapUiNoMargin = {
  margin: '0 !important'
};

// Remove Single Side Margins
export const sapUiNoMarginTop = {
  marginTop: '0 !important'
};
export const sapUiNoMarginBottom = {
  marginBottom: '0 !important'
};
export const sapUiNoMarginBegin = {
  marginBegin: '0 !important'
};
export const sapUiNoMarginEnd = {
  marginEnd: '0 !important'
};

// Force Auto Width
export const sapUiForceWidthAuto = {
  width: 'auto !important'
};

export const sapUiResponsiveMargin = {
  '@media(max-width:599px)': {
    margin: '0 0 1rem 0'
  },
  '@media (min-width:600px) and (max-width:1023px)': {
    margin: '1rem !important'
  },
  '@media (min-width:1024px)': {
    margin: '1rem 2rem !important'
  }
};

/*
 * ###################################################
 * Padding Classes
 * ###################################################
 */

export const sapUiNoContentPadding = {
  padding: '0 !important'
};

export const sapUiContentPadding = {
  padding: '1rem'
};

export const sapUiResponsiveContentPadding = {
  '@media(max-width:599px)': {
    padding: '0'
  },
  '@media (min-width:600px) and (max-width:1023px)': {
    padding: '1rem'
  },
  '@media (min-width:1024px)': {
    padding: '1rem 2rem !important'
  }
};
