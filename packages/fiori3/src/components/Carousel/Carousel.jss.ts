import { JSSTheme } from '@fiori-for-react/core/types/JSSTheme';
import { fonts } from '@fiori-for-react/styles';

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    touchAction: 'pan-y',
    minWidth: '15.5rem',
    fontFamily: fonts.sapUiFontFamily,
    '&:hover': {
      '& [data-value="paginationArrow"]': {
        opacity: 1
      }
    }
  },
  carouselInner: {
    height: '100%',
    position: 'relative',
    whiteSpace: 'nowrap',
    textAlign: 'start',
    fontSize: '0',
    backgroundColor: parameters.sapUiBaseBG,
    '& > *': {
      transitionProperty: 'transform',
      transitionTimingFunction: 'cubic-bezier(0.46, 0, 0.44, 1)',
      transitionDuration: '0.5s',
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'normal',
      fontSize: '1rem',
      backgroundColor: parameters.sapUiBaseBG
    }
  },
  carouselItem: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  carouselItemContentIndicator: {
    padding: '0 4rem',
    width: 'calc(100% - 8rem)'
  }
});

export default styles;
