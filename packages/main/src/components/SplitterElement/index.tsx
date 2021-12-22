import { SplitterLayoutContext } from '@ui5/webcomponents-react/dist/SplitterLayoutContext';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import clsx from 'clsx';
import React, { CSSProperties, forwardRef, ReactElement, RefObject, useContext } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    splitterElement: {
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      willChange: 'flex-basis',
      flex: '0 0 auto',
      minWidth: '0px',
      minHeight: '0px'
    }
  },
  { name: 'SplitterElement' }
);

export interface SplitterElementPropTypes extends CommonProps {
  /**
   * Defines whether a resizer element is displayed.<br />
   * If the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this
   * `SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.<br />
   */
  resizable?: boolean;
  /**
   * Defines the initial size of the `SplitterElement`.<br />
   */
  size?: CSSProperties['width'] | CSSProperties['height'];
  /**
   * Defines the minimum size of the `SplitterElement`. The resize element stops when the minimum size is reached.<br />
   */
  minSize?: number;

  /**
   * Defines the content which is shown inside the `SplitterElement`.<br />
   */
  children?: ReactElement | ReactElement[];
}

const SplitterElement = forwardRef((props: SplitterElementPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, style, tooltip, className, minSize = 0, size, resizable, ...rest } = props;

  const { vertical } = useContext(SplitterLayoutContext);

  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={clsx(classes.splitterElement, classes[vertical ? 'vertical' : 'horizontal'], className)}
      title={tooltip}
      style={{
        minHeight: !vertical && minSize ? `${minSize}px` : undefined,
        minWidth: vertical && minSize ? `${minSize}px` : undefined,
        flexBasis: size,
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

SplitterElement.displayName = 'SplitterElement';

export { SplitterElement };
