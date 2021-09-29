import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import React, { forwardRef, ReactElement, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { ReflexContainer } from 'react-reflex';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './SplitterLayout.jss';
import '@ui5/webcomponents-icons/dist/vertical-grip.js';
import '@ui5/webcomponents-icons/dist/horizontal-grip.js';
import { useConcatSplitterElements } from './useConcatSplitterElements';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

export interface SplitterLayoutPropTypes extends CommonProps {
  /**
   * Controls the width of the `SplitterLayout` container.<br />
   */
  width: number | string;
  /**
   * Controls the height of the `SplitterLayout` container.<br />
   */
  height: string | number;
  /**
   * Controls if the `SplitterLayout` is displayed `horizontal` or `vertical`.<br />
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Defines how the browser distributes space between and around items along the main-axis.<br />
   * <b>Note:</b> Corresponds to `justify-content`.
   */
  justifyContent?: FlexBoxJustifyContent | keyof typeof FlexBoxJustifyContent;
  /**
   * Content of the `SplitterLayout`.
   */
  children: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[];
}

const SplitterLayout = forwardRef((props: SplitterLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const { orientation, width, height, justifyContent, children, slot, tooltip, style, className } = props;

  const classes = useStyles(props);

  const splitterLayoutClasses = StyleClassHelper.of(classes.splitterLayout);
  // direction
  splitterLayoutClasses.put(classes[`flexBoxDirection${orientation}`]);
  // justify content
  splitterLayoutClasses.put(classes[`justifyContent${justifyContent}`]);

  if (className) {
    splitterLayoutClasses.put(className);
  }
  const passThroughProps = usePassThroughHtmlProps(props);

  const layoutElements = useConcatSplitterElements(children, height, orientation);

  return (
    <div
      style={style}
      title={tooltip}
      slot={slot}
      {...passThroughProps}
      className={splitterLayoutClasses.valueOf()}
      ref={ref}
    >
      <ReflexContainer style={{ width: height, height: width }} orientation={orientation}>
        {layoutElements}
      </ReflexContainer>
    </div>
  );
});

SplitterLayout.defaultProps = {
  orientation: 'horizontal'
};
SplitterLayout.displayName = 'SplitterLayout';

export { SplitterLayout };
