import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import React, { forwardRef, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './SplitterLayout.jss';
import 'react-reflex/styles.css';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import content from '*.md';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

export interface SplitterLayoutPropTypes extends CommonProps {
  /**
   * Controls the width of the `SplitterLayout` container.<br />
   */
  width: number;
  /**
   * Controls the height of the `SplitterLayout` container.<br />
   */
  height: string | number;
  /**
   * Controls the `width` / `height` of the layout elements in the container.
   */
  contentAreaProps?: [
    {
      size?: number;
      resizable?: boolean;
    }
  ];
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
  children: ReactNode | ReactNodeArray;
}

const SplitterLayout = forwardRef((props: SplitterLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const { orientation, width, height, contentAreaProps, justifyContent, children, slot, tooltip, style, className } =
    props;

  const classes = useStyles();

  const splitterLayoutClasses = StyleClassHelper.of(classes.splitterLayout);

  if (className) {
    splitterLayoutClasses.put(className);
  }
  const passThroughProps = usePassThroughHtmlProps(props);

  const layoutElements = useMemo(() => {
    if (React.isValidElement(children)) {
      return children;
    }

    const elements = [];
    (children as ReactNodeArray).forEach((child, index) => {
      elements.push(
        <ReflexElement
          key={index}
          size={contentAreaProps?.[index]?.size}
          style={{
            maxHeight: height,
            backgroundColor: ThemingParameters.sapBackgroundColor
          }}
        >
          {child}
        </ReflexElement>
      );

      if ((children as ReactNodeArray).length - 1 > index && contentAreaProps?.[index]?.resizable) {
        elements.push(
          <ReflexSplitter key={`splitter${index}`} style={{ width: '15px', height, backgroundColor: 'black' }} />
        );
      } else if (index > 0 && !contentAreaProps?.[index]?.resizable) {
        const indexOfSplitter = elements.findIndex((element) => element.key === `${index}`) - 1;

        if (elements[indexOfSplitter].key.startsWith('splitter')) {
          elements.splice(indexOfSplitter, 1);
        }
      }
    });
    return elements;
  }, [children]);

  return (
    <div
      style={style}
      title={tooltip}
      slot={slot}
      {...passThroughProps}
      className={splitterLayoutClasses.valueOf()}
      ref={ref}
    >
      <ReflexContainer style={{ width, height }} orientation="vertical">
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
