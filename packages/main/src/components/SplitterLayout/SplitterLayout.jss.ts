import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';

const styles = () => {
  return {
    splitterLayout: (props) => ({
      display: 'flex',
      flexDirection: props.orientation === 'vertical' ? FlexBoxDirection.Row : FlexBoxDirection.Column,
      flex: `0 0 ${props.orientation === 'vertical' ? props.width : props.height}`,
      width: props.orientation === 'vertical' ? props.width : props.height,
      height: props.orientation === 'vertical' ? props.height : props.width
    }),
    splitterElementVertical: (props) => ({
      justifyContent: props.justifyContent,
      backgroundColor: ThemingParameters.sapBackgroundColor,
      height: props.containerHeight,
      flex: !!props.size && props.size !== 'auto' ? `0 0 ${props.size}` : '1 0 auto',
      minWidth: props.minSize ?? 0,
      maxWidth: props.maxSize
    }),
    splitterElementHorizontal: (props) => ({
      justifyContent: props.justifyContent,
      backgroundColor: ThemingParameters.sapBackgroundColor,
      width: props.containerWidth,
      flex: !!props.size || props.size === 'auto' ? `0 0 ${props.size}` : '1 0 auto',
      minHeight: props.minSize ?? 0,
      maxHeight: props.maxSize
    }),
    splitterVertical: (props) => ({
      position: 'absolute',
      display: 'inline-block',
      willChange: 'transform',
      cursor: 'col-resize',
      zIndex: 20,
      width: '16px',
      height: props.height,
      border: 'none',
      backgroundColor: ThemingParameters.sapShell_Background
    }),
    splitterHorizontal: (props) => ({
      width: props.width,
      height: '16px',
      border: 'none',
      backgroundColor: ThemingParameters.sapShell_Background
    }),
    gripIconVertical: (props) => ({
      position: 'relative',
      top: 'calc(50% - 8px)',
      '&:hover': {
        '&:before': {
          height: `calc(${props.height} / 2 - 14px)`,
          transition: 'width 0.15s ease-in'
        },
        '&:after': {
          height: `calc(${props.height} / 2 - 16px)`,
          transition: 'width 0.15s ease-in'
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
      },
      '&:after': {
        bottom: '130%',
        right: 'calc(50%)',
        backgroundImage: `linear-gradient(to top, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
      }
    }),
    gripIconHorizontal: (props) => ({
      position: 'relative',
      left: 'calc(50% - 8px)',
      top: 'calc(50% - 8px)',
      '&:hover': {
        '&:before': {
          width: `calc(${props.height} / 2 - 14px)`,
          transition: 'width 0.15s ease-in'
        },
        '&:after': {
          width: `calc(${props.height} / 2 - 16px)`,
          transition: 'width 0.15s ease-in'
        }
      },
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        height: '0.0625rem',
        width: '4rem'
      },
      '&:before': {
        top: props.orientation === 'vertical' ? '130%' : 'calc(50%)',
        left: props.orientation === 'vertical' ? 'calc(50%)' : '130%',
        backgroundImage: `linear-gradient(to right, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
      },
      '&:after': {
        bottom: 'calc(50%)',
        right: '130%',
        backgroundImage: `linear-gradient(to left, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
      }
    })
  };
};

export { styles };
