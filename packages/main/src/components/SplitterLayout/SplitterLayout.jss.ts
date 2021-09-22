import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';

const styles = {
  splitterLayout: {
    display: 'flex'
  },
  flexBoxDirectionvertical: {
    flexDirection: 'column'
  },
  flexBoxDirectionhorizontal: {
    flexDirection: 'row'
  },
  gripIcon: {
    position: 'relative',
    top: 'calc(50% - 8px)',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      height: '4rem',
      top: '50%',
      width: '0.0625rem'
    },
    '&:before': {
      top: '130%',
      left: 'calc(50% - 0.03125rem)',
      backgroundImage: `linear-gradient(to bottom, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
    },
    '&:after': {
      top: '-440%',
      left: 'calc(50% - 0.0625rem)',
      backgroundImage: `linear-gradient(to top, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
    }
  }
};

export { styles };
