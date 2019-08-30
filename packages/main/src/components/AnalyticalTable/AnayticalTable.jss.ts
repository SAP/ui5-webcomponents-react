import { fonts } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';

const styles = ({ parameters, contentDensity }: JSSTheme) => ({
  tHead: {
    boxShadow: 'none !important',
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem'}`
  },

  th: {
    backgroundColor: parameters.sapUiListHeaderBackground,
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem'}`,
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListHeaderTextColor,
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`,
    borderRight: `1px solid ${parameters.sapUiListVerticalBorderColor}`,
    textAlign: 'start',
    width: '100%',
    boxSizing: 'border-box'
  },

  tableHeaderRow: {},

  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${parameters.sapUiListTableGroupHeaderBackground} !important`,
      border: `1px solid ${parameters.sapUiListTableGroupHeaderBorderColor}`,
      color: parameters.sapUiListTextColor
    }
  },

  tableGroupExpandCollapseIcon: {
    color: parameters.sapUiContentIconColor,
    height: '2rem',
    width: '2rem',
    fontSize: '0.75rem'
  },

  tbody: {
    position: 'relative',
    '& $tr': {
      backgroundColor: parameters.sapUiListBackground,
      borderBottom: `1px solid ${parameters.sapUiListVerticalBorderColor}`,
      '&:hover': {
        backgroundColor: parameters.sapUiListHoverBackground
      },
      '&:active': {
        backgroundColor: parameters.sapUiListActiveBackground,
        color: parameters.sapUiListActiveTextColor
      }
    }
  },

  tr: {},

  td: {
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem'}`,
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListTextColor,
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`,
    borderRight: `1px solid ${parameters.sapUiListVerticalBorderColor}`,
    display: 'table-cell',
    padding: '0 0.5rem'
  },
  tBody: {
    boxShadow: 'none !important'
  },
  table: {
    borderSpacing: 0,
    position: 'relative'
  }
});

export default styles;
