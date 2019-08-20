import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    touchAction: 'pan-y',
    minWidth: '15.5rem',
    fontFamily: parameters.sapUiFontFamily,
    backgroundColor: parameters.sapUiBaseBG,
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
    transition: 'transform 0.5s cubic-bezier(0.46, 0, 0.44, 1)'
  },
  carouselItem: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'top',
    whiteSpace: 'normal',
    fontSize: '1rem',
    visibility: 'hidden'
  },
  carouselItemContentIndicator: {
    padding: '0 4rem',
    width: 'calc(100% - 8rem)'
  }
});

export default styles;
