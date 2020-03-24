const getWidthForSpan = (width, hSpace = 0) => {
  return {
    width: `calc(${(width * 100) / 12}% - ${hSpace}rem)`
  };
};

const getIndentForSpan = (width, hSpace = 0) => {
  return {
    marginLeft: `calc(${(width * 100) / 12}% + ${hSpace / 2}rem)`
  };
};

const getSpansForSpace = (hSpace = 0) => ({
  '&$gridSpan1': getWidthForSpan(1, hSpace),
  '&$gridSpan2': getWidthForSpan(2, hSpace),
  '&$gridSpan3': getWidthForSpan(3, hSpace),
  '&$gridSpan4': getWidthForSpan(4, hSpace),
  '&$gridSpan5': getWidthForSpan(5, hSpace),
  '&$gridSpan6': getWidthForSpan(6, hSpace),
  '&$gridSpan7': getWidthForSpan(7, hSpace),
  '&$gridSpan8': getWidthForSpan(8, hSpace),
  '&$gridSpan9': getWidthForSpan(9, hSpace),
  '&$gridSpan10': getWidthForSpan(10, hSpace),
  '&$gridSpan11': getWidthForSpan(11, hSpace),
  '&$gridSpan12': getWidthForSpan(12, hSpace)
});

const getIndentsForSpace = (hSpace) => ({
  '&$gridIndent1': getIndentForSpan(1, hSpace),
  '&$gridIndent2': getIndentForSpan(2, hSpace),
  '&$gridIndent3': getIndentForSpan(3, hSpace),
  '&$gridIndent4': getIndentForSpan(4, hSpace),
  '&$gridIndent5': getIndentForSpan(5, hSpace),
  '&$gridIndent6': getIndentForSpan(6, hSpace),
  '&$gridIndent7': getIndentForSpan(7, hSpace),
  '&$gridIndent8': getIndentForSpan(8, hSpace),
  '&$gridIndent9': getIndentForSpan(9, hSpace),
  '&$gridIndent10': getIndentForSpan(10, hSpace),
  '&$gridIndent11': getIndentForSpan(11, hSpace),
  '&$gridIndent12': getIndentForSpan(12, hSpace)
});

export const styles = {
  '@global html': {
    '--_ui5wcr_Grid_float': 'left'
  },
  '@global [dir="rtl"]': {
    '--_ui5wcr_Grid_float': 'right'
  },
  grid: {
    '& $gridSpan': { ...getSpansForSpace(0), ...getIndentsForSpace(0) },
    '&$gridHSpace05': {
      padding: '0 0.25rem',
      '& > div': {
        margin: '0 0.25rem'
      },
      '& $gridSpan': { ...getSpansForSpace(0.5), ...getIndentsForSpace(0.5) }
    },
    '&$gridHSpace1': {
      padding: '0 0.5rem',
      '& > div': {
        margin: '0 0.5rem'
      },
      '& $gridSpan': { ...getSpansForSpace(1), ...getIndentsForSpace(1) }
    },
    '&$gridHSpace2': {
      padding: '0 1rem',
      '& > div': {
        margin: '0 1rem'
      },
      '& $gridSpan': { ...getSpansForSpace(2), ...getIndentsForSpace(2) }
    },
    '&$gridVSpace0 > $gridSpan': {
      marginBottom: 0
    },
    '&$gridVSpace05 > $gridSpan': {
      marginBottom: '0.5rem'
    },
    '&$gridVSpace1 > $gridSpan': {
      marginBottom: '1rem'
    },
    '&$gridVSpace2 > $gridSpan': {
      marginBottom: '2rem'
    },
    '& > div': {
      float: 'var(--_ui5wcr_Grid_float)',
      overflow: 'hidden',
      minHeight: '1px'
    },
    '&$gridPositionCenter': {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '&$gridPositionRight': {
      marginLeft: 'auto',
      marginRight: 0
    },
    '&:after, & > div:after': {
      clear: 'both',
      content: '" "',
      display: 'block',
      fontSize: 0,
      height: 0,
      visibility: 'hidden'
    }
  },
  gridHSpace05: {},
  gridHSpace1: {},
  gridHSpace2: {},
  gridVSpace0: {},
  gridVSpace05: {},
  gridVSpace1: {},
  gridVSpace2: {},
  gridPositionCenter: {},
  gridPositionRight: {},
  // small spans
  gridSpan: {},
  gridSpan1: {},
  gridSpan2: {},
  gridSpan3: {},
  gridSpan4: {},
  gridSpan5: {},
  gridSpan6: {},
  gridSpan7: {},
  gridSpan8: {},
  gridSpan9: {},
  gridSpan10: {},
  gridSpan11: {},
  gridSpan12: {},
  gridIndent1: {},
  gridIndent2: {},
  gridIndent3: {},
  gridIndent4: {},
  gridIndent5: {},
  gridIndent6: {},
  gridIndent7: {},
  gridIndent8: {},
  gridIndent9: {},
  gridIndent10: {},
  gridIndent11: {},
  gridIndent12: {}
};
