import { fonts } from '@fiori-for-react/styles';
import { ContentDensity } from '../../../enums/ContentDensity';
import { JSSTheme } from '../../../interfaces/JSSTheme';

const styles = ({ parameters, contentDensity }: JSSTheme) => ({
  tHead: {
    boxShadow: 'none !important',
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '3rem'}`,
    borderBottom: `1px solid ${parameters.sapUiListVerticalBorderColor} !important`,
    borderTop: `1px solid ${parameters.sapUiListVerticalBorderColor} !important`
  },

  tr: {
    background: parameters.sapUiListBackground,
    borderBottom: `1px solid ${parameters.sapUiListVerticalBorderColor} !important`,
    '& >:first-child': {
      paddingLeft: '1rem !important'
    },
    '& >:not(:first-child)': {
      paddingLeft: '0.5rem'
    }
  },
  trGroup: {
    border: 'none!important'
  },
  td: {
    // borderRight: `1px solid ${parameters.sapUiListVerticalBorderColor} !important`,
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '3rem'}`,
    display: 'flex',
    alignItems: 'center',
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    // backgroundColor: parameters.sapUiListBackground,
    color: parameters.sapUiListTextColor,
    paddingRight: '0.5rem !important'
  },
  tBody: {
    boxShadow: 'none !important'
  },
  table: {
    // border: `1px solid ${parameters.sapList_BorderColor} !important`
  }
});

export default styles;
