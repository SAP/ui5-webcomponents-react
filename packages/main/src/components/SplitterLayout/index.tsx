import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
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
  width: string | number;
  height?: string | number;
  orientation?: 'horizontal' | 'vertical';
}

export interface SplitterLayoutPropTypes extends CommonProps {
  /**
   * Controls the width of the `SplitterLayout` container.<br />
   */
  width?: number | string;
  /**
   * Controls the height of the `SplitterLayout` container.<br />
   */
  height?: string | number;
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
  const { width, height, orientation, children, slot, tooltip, style, className } = props;

  const classes = useStyles(props);

  const splitterLayoutClasses = clsx({ [classes.splitterLayout]: !className, [className]: className });

  const passThroughProps = usePassThroughHtmlProps(props);

  const layoutElements = useConcatSplitterElements(children ?? [], width, height, orientation);

  return (
    <ThemeContext.Provider value={{ width, height, orientation }}>
      <div
        style={style}
        title={tooltip}
        slot={slot}
        {...passThroughProps}
        className={splitterLayoutClasses.valueOf()}
        ref={ref}
      >
        {layoutElements}
      </div>
    </ThemeContext.Provider>
  );
});

SplitterLayout.defaultProps = {
  orientation: 'horizontal'
};
SplitterLayout.displayName = 'SplitterLayout';

export { SplitterLayout };
