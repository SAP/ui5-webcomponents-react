import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';

const styles = () => {
  return {
    splitterLayout: {
      display: 'flex'
    },
    test: {
      height: '200px'
    },
    flexBoxDirectionvertical: {
      flexDirection: 'column'
    },
    flexBoxDirectionhorizontal: {
      flexDirection: 'row'
    },
    gripIcon: (props) => ({
      position: 'relative',
      top: 'calc(50% - 8px)',
      '&:hover': {
        '&:before': {
          height: `calc(${props.height} / 2 - 14px)`,
          transition: 'height 0.15s ease-in'
        },
        '&:after': {
          height: `calc(${props.height} / 2 - 16px)`,
          transition: 'height 0.15s ease-in'
        }
      },
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        height: '4rem',
        width: '0.0625rem'
      },
      '&:before': {
        top: '130%',
        left: 'calc(50%)',
        backgroundImage: `linear-gradient(to bottom, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
        // '&:hover': {
        //   height: `calc(${props.height} / 2 - 14px)`,
        //   transition: 'height 0.15s ease-in'
        // }
      },
      '&:after': {
        bottom: '130%',
        left: 'calc(50%)',
        backgroundImage: `linear-gradient(to top, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
      }
    })
  };
};

export { styles };
