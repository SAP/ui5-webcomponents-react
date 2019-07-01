import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '../../lib/ContentDensity';

const styles = ({ contentDensity, parameters }: JSSTheme) => ({
  toolbarRoot: {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    alignItems: 'center',
    boxSizing: 'border-box',
    background: 'transparent',
    height: ContentDensity.Compact === contentDensity ? '2rem' : '3rem',
    '&:focus': {
      outline: 0
    },
    '& :first-child': {
      marginLeft: '0.25rem'
    },
    '& > *': {
      marginRight: '0.5rem !important' // we need the !important here because otherwise e.g. the SearchField has no border
    }
  },
  toolbarAlignStart: {
    justifyContent: 'flex-start'
  },

  toolbarAlignEnd: {
    justifyContent: 'flex-end'
  },

  toolbarAlignMiddle: {
    justifyContent: 'center'
  },

  toolbarAlignSpaceBetween: {
    justifyContent: 'space-between'
  },
  pageFooter: {
    background: parameters.sapUiPageFooterBackground,
    borderTop: `1px solid ${parameters.sapUiPageFooterBorderColor}`
  },

  containerBar: {
    background: parameters.sapUiGroupContentBackground
    // borderBottom: null
  },

  contentBar: {
    background: parameters.sapUiListHeaderBackground,
    borderBottom: `1px solid ${parameters.sapUiListHeaderBorderColor}`
  },

  contentBarTransparent: {
    background: parameters.sapUiToolbarBackground,
    borderBottom: `1px solid ${parameters.sapUiGroupTitleBorderColor}`
  }
});

export default styles;
