import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import { SplitterLayoutContext } from '@ui5/webcomponents-react/dist/SplitterLayoutContext';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { CSSProperties, forwardRef, ReactElement, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from './SplitterLayout.jss';
import '@ui5/webcomponents-icons/dist/vertical-grip.js';
import '@ui5/webcomponents-icons/dist/horizontal-grip.js';
import { useConcatSplitterElements } from './useConcatSplitterElements';
import clsx from 'clsx';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

export interface SplitterLayoutPropTypes extends CommonProps {
  /**
   * Controls if a vertical or horizontal `SplitterLayout` is rendered.
   */
  vertical?: boolean;
  /**
   * The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.
   */
  children?: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[];
}

const SplitterLayout = forwardRef((props: SplitterLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const { vertical, children, title, tooltip, style, className, ...rest } = props;
  const classes = useStyles();

  const layoutElements = useConcatSplitterElements(children ?? [], style?.width, style?.height, vertical);

  return (
    <SplitterLayoutContext.Provider value={{ vertical }}>
      <div
        style={
          {
            flexDirection: vertical ? 'row' : 'column',
            ...style
          } as CSSProperties
        }
        title={title ?? tooltip}
        {...rest}
        className={clsx(classes.splitterLayout, className)}
        ref={ref}
        data-splitter-vertical={vertical}
      >
        {layoutElements}
      </div>
    </SplitterLayoutContext.Provider>
  );
});

SplitterLayout.displayName = 'SplitterLayout';

export { SplitterLayout };
