import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { forwardRef, ReactElement, RefObject, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { ThemeContext } from '../SplitterLayout';
import { styles } from '../SplitterLayout/SplitterLayout.jss';

const useStyles = createUseStyles(styles, { name: 'SplitterElement' });

export interface SplitterElementPropTypes extends CommonProps {
  resizable?: boolean;
  size?: string;
  minSize?: string;
  maxSize?: string;
  children?: ReactElement | ReactElement[];
}

const SplitterElement = forwardRef((props: SplitterElementPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, style, tooltip, className, minSize, maxSize, size, resizable, ...rest } = props;

  const containerContext = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...containerContext });
  const splitterElementClass =
    containerContext?.orientation === 'vertical' ? classes.splitterElementVertical : classes.splitterElementHorizontal;

  return (
    <div ref={ref} className={className ?? splitterElementClass} title={tooltip} style={style} {...rest}>
      {children}
    </div>
  );
});

SplitterElement.displayName = 'SplitterElement';

export { SplitterElement };
