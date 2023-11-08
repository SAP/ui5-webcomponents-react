import type { CSSProperties } from 'react';

export const styles = {
  flexBox: {
    display: 'flex',

    gap: ({ gap }: { gap: CSSProperties['gap'] }) => (typeof gap === 'number' ? `${gap}rem` : gap),

    [`&:where($fitContainer)`]: { width: '100%', height: '100%' },

    // justify
    [`&:where($justifyContentStart)`]: {
      justifyContent: 'flex-start'
    },
    [`&:where($justifyContentEnd)`]: {
      justifyContent: 'flex-end'
    },
    [`&:where($justifyContentCenter)`]: {
      justifyContent: 'center'
    },
    [`&:where($justifyContentSpaceAround)`]: {
      justifyContent: 'space-around'
    },
    [`&:where($justifyContentSpaceBetween)`]: {
      justifyContent: 'space-between'
    },

    // align
    [`&:where($alignItemsStart)`]: {
      alignItems: 'flex-start'
    },
    [`&:where($alignItemsEnd)`]: {
      alignItems: 'flex-end'
    },
    [`&:where($alignItemsCenter)`]: {
      alignItems: 'center'
    },
    [`&:where($alignItemsStretch)`]: {
      alignItems: 'stretch'
    },
    [`&:where($alignItemsBaseline)`]: {
      alignItems: 'baseline'
    }
  },
  flexBoxDisplayInline: {
    display: 'inline-flex'
  },

  fitContainer: {},

  justifyContentStart: {},
  justifyContentEnd: {},
  justifyContentCenter: {},
  justifyContentSpaceAround: {},
  justifyContentSpaceBetween: {},

  alignItemsStart: {},
  alignItemsEnd: {},
  alignItemsCenter: {},
  alignItemsStretch: {},
  alignItemsBaseline: {},

  flexBoxDirectionColumn: {
    flexDirection: 'column'
  },
  flexBoxDirectionColumnReverse: {
    flexDirection: 'column-reverse'
  },
  flexBoxDirectionRow: {
    flexDirection: 'row'
  },
  flexBoxDirectionRowReverse: {
    flexDirection: 'row-reverse'
  },

  flexWrapNoWrap: {
    flexWrap: 'nowrap'
  },
  flexWrapWrap: {
    flexWrap: 'wrap'
  },
  flexWrapWrapReverse: {
    flexWrap: 'wrap-reverse'
  }
};
