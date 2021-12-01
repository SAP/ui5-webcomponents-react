import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import { SplitterLayoutContext } from '@ui5/webcomponents-react/dist/SplitterLayoutContext';
import React, { CSSProperties, forwardRef, ReactElement, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './SplitterLayout.jss';
import '@ui5/webcomponents-icons/dist/vertical-grip.js';
import '@ui5/webcomponents-icons/dist/horizontal-grip.js';
import { useConcatSplitterElements } from './useConcatSplitterElements';
import clsx from 'clsx';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

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

const SplitterLayout = forwardRef((props: SplitterLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const { width, height, orientation, children, title, tooltip, style, className, ...rest } = props;

  const classes = useStyles();

  const splitterLayoutClasses = clsx(classes.splitterLayout, className);

  const layoutElements = useConcatSplitterElements(children ?? [], width, height, orientation);

  return (
    <SplitterLayoutContext.Provider value={{ orientation }}>
      <div
        style={
          {
            width,
            height,
            ...style
          } as CSSProperties
        }
        title={title ?? tooltip}
        {...rest}
        className={splitterLayoutClasses}
        ref={ref}
        data-splitter-orientation={orientation}
      >
        {layoutElements}
      </div>
    </SplitterLayoutContext.Provider>
  );
});

SplitterLayout.defaultProps = {
  orientation: 'vertical'
};
SplitterLayout.displayName = 'SplitterLayout';

export { SplitterLayout };
