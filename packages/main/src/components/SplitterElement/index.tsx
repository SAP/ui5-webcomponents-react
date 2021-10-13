import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/hooks';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { forwardRef, ReactNode, ReactNodeArray, RefObject, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { ThemeContext } from '../SplitterLayout';
import { styles } from '../SplitterLayout/SplitterLayout.jss';

const useStyles = createUseStyles(styles, { name: 'ObjectPageSection' });

export interface SplitterElementPropTypes extends CommonProps {
  resizable?: boolean;
  size?: number | string;
  minSize?: number | string;
  maxSize?: number | string;
  justifyContent?: FlexBoxJustifyContent | keyof typeof FlexBoxJustifyContent;
  children?: ReactNode | ReactNodeArray;
}

const SplitterElement = forwardRef((props: SplitterElementPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, style, tooltip, className } = props;

  const passThroughProps = usePassThroughHtmlProps(props);
  const containerContext = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...containerContext });
  const splitterElementClass =
    containerContext.orientation === 'vertical' ? classes.splitterElementVertical : classes.splitterElementHorizontal;

  return (
    <div ref={ref} className={className ?? splitterElementClass} title={tooltip} style={style} {...passThroughProps}>
      {children}
    </div>
  );
});

SplitterElement.displayName = 'SplitterElement';

export { SplitterElement };
