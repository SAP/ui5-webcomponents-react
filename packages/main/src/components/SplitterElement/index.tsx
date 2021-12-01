import { SplitterLayoutContext } from '@ui5/webcomponents-react/dist/SplitterLayoutContext';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import clsx from 'clsx';
import React, { forwardRef, ReactElement, RefObject, useContext } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    splitterElement: {
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      willChange: 'flex-basis',
      flex: '0 0 auto'
    }
  },
  { name: 'SplitterElement' }
);

export interface SplitterElementPropTypes extends CommonProps {
  /**
   * Defines wether a resizer element is displayed.<br />
   * If the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this
   * `SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.<br />
   */
  resizable?: boolean;
  /**
   * Defines the initial size of the `SplitterElement`.<br />
   */
  size?: string;
  /**
   * Defines the minimum size of the `SplitterElement`. The resize element stops when the minimum size is reached.<br />
   */
  minSize?: string;
  /**
   * Defines the maximum size of the `SplitterElement`. The resize element stops when the maximum size is reached.<br />
   */
  maxSize?: string;
  /**
   * Defines the content which is shown inside the `SplitterElement`.<br />
   */
  children?: ReactElement | ReactElement[];
}

const SplitterElement = forwardRef((props: SplitterElementPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, style, tooltip, className, minSize = 0, maxSize, size, resizable, ...rest } = props;

  const { orientation } = useContext(SplitterLayoutContext);

  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={clsx(classes.splitterElement, classes[orientation], className)}
      title={tooltip}
      style={{
        minHeight: orientation === 'horizontal' ? minSize : undefined,
        maxHeight: orientation === 'horizontal' ? maxSize : undefined,
        minWidth: orientation === 'vertical' ? minSize : undefined,
        maxWidth: orientation === 'vertical' ? maxSize : undefined,
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
