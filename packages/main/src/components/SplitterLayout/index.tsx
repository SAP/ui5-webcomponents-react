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

/**
 * A layout that contains several content areas. The content that is added to the `SplitterLayout` should be wrapped
 * into 0-n `SplitterElements` which define the size and size constraints of the content area.
 * The orientation of the `SplitterLayout` can be set to horizontal (default) or vertical. All content areas of the
 * layout will be arranged in that way. In order to split vertically and horizontally at the same time, splitters need
 * to be nested.
 * By adding or changing `SplitterElements` to the controls that make up the content areas, the size can be changed
 * programmatically. Additionally the content areas can be made non-resizable individually and a minimal size (in px)
 * can be set.
 * The splitter bars are focusable to enable resizing of the content areas via keyboard. The size of the content areas
 * can be manipulated when the splitter bar is focused and Left/Down/Right/Up are pressed.
 * The splitter bars used for resizing the content areas by the user can be set to different widths (or heights in
 * vertical mode) and the splitter will automatically resize the other content areas accordingly.
 */
const SplitterLayout = forwardRef((props: SplitterLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const { vertical = false, children, title, tooltip, style, className, ...rest } = props;
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
