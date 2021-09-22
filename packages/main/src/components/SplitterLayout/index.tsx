import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import React, { forwardRef, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './SplitterLayout.jss';
import 'react-reflex/styles.css';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

export interface SplitterLayoutPropTypes extends CommonProps {
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
  const { orientation, justifyContent, children, slot, tooltip, style, className } = props;

  const classes = useStyles();

  const splitterLayoutClasses = StyleClassHelper.of(classes.splitterLayout);
  // direction
  splitterLayoutClasses.put(classes[`flexBoxDirection${orientation}`]);
  // justify content
  splitterLayoutClasses.put(classes[`justifyContent${justifyContent}`]);

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
          style={{ display: 'flex', justifyContent, height: '200px', backgroundColor: 'lightgrey' }}
        >
          {child}
        </ReflexElement>
      );

      if ((children as ReactNodeArray).length - 1 > index) {
        elements.push(
          <ReflexSplitter
            key={`splitter${index}`}
            style={{ width: '15px', height: '200px', backgroundColor: 'black' }}
          />
        );
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
      <ReflexContainer orientation="vertical">{layoutElements}</ReflexContainer>
    </div>
  );
});

SplitterLayout.defaultProps = {
  orientation: 'horizontal'
};
SplitterLayout.displayName = 'SplitterLayout';

export { SplitterLayout };
