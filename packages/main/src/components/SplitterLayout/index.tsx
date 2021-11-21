import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import React, { forwardRef, ReactElement, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './SplitterLayout.jss';
import '@ui5/webcomponents-icons/dist/vertical-grip.js';
import '@ui5/webcomponents-icons/dist/horizontal-grip.js';
import { useConcatSplitterElements } from './useConcatSplitterElements';
import clsx from 'clsx';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

interface ThemeContextType {
  containerWidth: string | number;
  containerHeight?: string | number;
  orientation?: 'horizontal' | 'vertical';
}

export interface SplitterLayoutPropTypes extends CommonProps {
  /**
   * Controls the width of the `SplitterLayout` container.<br />
   */
  width?: string;
  /**
   * Controls the height of the `SplitterLayout` container.<br />
   */
  height?: string;
  /**
   * Controls if the `SplitterLayout` is displayed `horizontal` or `vertical`.<br />
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Content of the `SplitterLayout`.
   */
  children: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[];
}

export const ThemeContext = React.createContext({} as ThemeContextType);

const SplitterLayout = forwardRef((props: SplitterLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const { width, height, orientation, children, title, tooltip, style, className, ...rest } = props;

  const classes = useStyles(props);

  const splitterLayoutClasses = clsx(classes.splitterLayout, className);

  const layoutElements = useConcatSplitterElements(children ?? [], width, height, orientation);

  return (
    <ThemeContext.Provider value={{ containerWidth: width, containerHeight: height, orientation }}>
      <div style={style} title={title ?? tooltip} {...rest} className={splitterLayoutClasses} ref={ref}>
        {layoutElements}
      </div>
    </ThemeContext.Provider>
  );
});

SplitterLayout.defaultProps = {
  orientation: 'vertical'
};
SplitterLayout.displayName = 'SplitterLayout';

export { SplitterLayout };
