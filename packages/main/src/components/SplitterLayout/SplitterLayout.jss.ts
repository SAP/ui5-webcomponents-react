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
      left: props.orientation === 'vertical' ? null : 'calc(50% - 8px)',
      top: 'calc(50% - 8px)',
      '&:hover': {
        '&:before': {
          height: props.orientation === 'vertical' ? `calc(${props.height} / 2 - 14px)` : null,
          width: props.orientation === 'vertical' ? null : `calc(${props.height} / 2 - 14px)`,
          transition: 'width 0.15s ease-in'
        },
        '&:after': {
          height: props.orientation === 'vertical' ? `calc(${props.height} / 2 - 16px)` : null,
          width: props.orientation === 'vertical' ? null : `calc(${props.height} / 2 - 16px)`,
          transition: 'width 0.15s ease-in'
        }
      },
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        height: props.orientation === 'vertical' ? '4rem' : '0.0625rem',
        width: props.orientation === 'vertical' ? '0.0625rem' : '4rem'
      },
      '&:before': {
        top: props.orientation === 'vertical' ? '130%' : 'calc(50%)',
        left: props.orientation === 'vertical' ? 'calc(50%)' : '130%',
        backgroundImage: `linear-gradient(to ${props.orientation === 'vertical' ? 'bottom' : 'right'}, ${
          ThemingParameters.sapHighlightColor
        }, rgba(8,84,160,0))`
      },
      '&:after': {
        bottom: props.orientation === 'vertical' ? '130%' : 'calc(50%)',
        right: props.orientation === 'vertical' ? 'calc(50%)' : '130%',
        backgroundImage: `linear-gradient(to ${props.orientation === 'vertical' ? 'top' : 'left'}, ${
          ThemingParameters.sapHighlightColor
        }, rgba(8,84,160,0))`
      }
    }),
    '@global': {
      'body.reflex-col-resize': {
        cursor: 'col-resize'
      },
      'body.reflex-row-resize': {
        cursor: 'row-resize'
      },
      '.reflex-container': {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        display: 'flex',
        position: 'relative',
        height: '100%',
        width: '100%'
      },
      '.reflex-container.horizontal': {
        flexDirection: 'column',
        minHeight: '1px'
      },
      '.reflex-container.vertical': {
        flexDirection: 'row',
        minWidth: '1px'
      },
      '.reflex-container > .reflex-element': {
        position: 'relative',
        overflow: 'auto',
        height: '100%',
        width: '100%'
      },
      '.reflex-container.reflex-resizing > .reflex-element': {
        pointerEvents: 'none',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      },
      '.reflex-container > .reflex-element > .reflex-size-aware': {
        height: '100%',
        width: '100%'
      },
      '.reflex-container > .reflex-splitter': {
        backgroundColor: '#eeeeee',
        zIndex: '100'
      },
      '.reflex-container > .reflex-splitter.active, .reflex-container > .reflex-splitter:hover': {
        backgroundColor: '#c6c6c6',
        transition: 'all 1s ease'
      },
      '.horizontal > .reflex-splitter': {
        borderBottom: '1px solid #c6c6c6',
        borderTop: '1px solid #c6c6c6',
        cursor: 'row-resize',
        width: '100%',
        height: '2px'
      },
      '.reflex-element.horizontal .reflex-handle': {
        cursor: 'row-resize',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      },
      '.reflex-container.horizontal > .reflex-splitter:hover, .reflex-container.horizontal > .reflex-splitter.active': {
        borderBottom: '1px solid #eeeeee',
        borderTop: '1px solid #eeeeee'
      },
      '.reflex-container.vertical > .reflex-splitter': {
        borderRight: '1px solid #c6c6c6',
        borderLeft: '1px solid #c6c6c6',
        cursor: 'col-resize',
        height: '100%',
        width: '2px'
      },
      '.reflex-element.vertical .reflex-handle': {
        cursor: 'col-resize',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      },
      '.reflex-container.vertical > .reflex-splitter:hover, .reflex-container.vertical > .reflex-splitter.active': {
        borderRight: '1px solid #eeeeee',
        borderLeft: '1px solid #eeeeee'
      },
      '.reflex-container > .reflex-splitter.reflex-thin': {
        boxSizing: 'border-box',
        mozBackgroundClip: 'padding',
        webkitBackgroundClip: 'padding',
        backgroundClip: 'padding-box',
        opacity: '0.2',
        zIndex: '100'
      },
      '.reflex-container > .reflex-splitter.reflex-thin.active\n.reflex-container > .reflex-splitter.reflex-thin:hover':
        {
          transition: 'all 1.5s ease',
          opacity: '0.5'
        },
      '.reflex-container.horizontal > .reflex-splitter.reflex-thin': {
        borderBottom: '8px solid rgba(255, 255, 255, 0)',
        borderTop: '8px solid rgba(255, 255, 255, 0)',
        height: '17px !important',
        cursor: 'row-resize',
        margin: '-8px 0',
        width: '100%'
      },
      '.reflex-container.horizontal > .reflex-splitter.reflex-thin.active, .reflex-container.horizontal > .reflex-splitter.reflex-thin:hover':
        {
          borderBottom: '8px solid #e4e4e4',
          borderTop: '8px solid #e4e4e4'
        },
      '.reflex-container.vertical > .reflex-splitter.reflex-thin': {
        borderRight: '8px solid rgba(255, 255, 255, 0)',
        borderLeft: '8px solid rgba(255, 255, 255, 0)',
        width: '17px !important',
        cursor: 'col-resize',
        margin: '0 -8px',
        height: '100%'
      },
      '.reflex-container.vertical > .reflex-splitter.reflex-thin.active, .reflex-container.vertical > .reflex-splitter.reflex-thin:hover':
        {
          borderRight: '8px solid #e4e4e4',
          borderLeft: '8px solid #e4e4e4'
        }
    }
  };
};

export { styles };
