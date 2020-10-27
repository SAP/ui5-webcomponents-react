import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { BarDesign } from '@ui5/webcomponents-react/lib/BarDesign';
import React, { FC, forwardRef, ReactNode, Ref } from 'react';
import styles from './Bar.jss';

export interface BarPropTypes extends CommonProps {
  /**
   * Represents the left content area.
   */
  contentLeft?: ReactNode | ReactNode[];
  /**
   * Represents the middle content area.
   */
  contentMiddle?: ReactNode | ReactNode[];
  /**
   * Represents the right content area.
   */
  contentRight?: ReactNode | ReactNode[];
  /**
   * Determines the design of the `Bar`.
   */
  design?: BarDesign;
}

const useStyles = createComponentStyles(styles, { name: 'Bar' });

/**
 * The `Bar` is a container which is primarily used to hold titles, button and input controls. It consists of three areas left, middle and right. The Bar design and functionality is the basis for Page headers and footers, as well ass toolbars and title bars.
 * With the use of the `design` prop, you can set the style of the `Bar` to appear as a header, sub-header and footer.
 */
const Bar: FC<BarPropTypes> = forwardRef((props: BarPropTypes, ref: Ref<HTMLDivElement>) => {
  const { className, style, tooltip, slot, design, contentLeft, contentMiddle, contentRight } = props;

  const classes = useStyles();

  const cssClasses = StyleClassHelper.of(classes.bar);
  switch (design) {
    case BarDesign.Footer:
      cssClasses.put(classes.footer);
      break;
    case BarDesign.SubHeader:
      cssClasses.put(classes.subHeader);
      break;
    case BarDesign.FloatingFooter:
      cssClasses.put(classes.floatingFooter);
      break;
    case BarDesign.Header:
    case BarDesign.Auto:
    default:
      cssClasses.put(classes.auto);
  }
  if (className) {
    cssClasses.put(className);
  }

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div
      data-bar-part="Root"
      className={cssClasses.toString()}
      style={style}
      title={tooltip}
      slot={slot}
      ref={ref}
      {...passThroughProps}
    >
      <div data-bar-part="Left" className={classes.left}>
        {contentLeft}
      </div>
      <div data-bar-part="Center" className={classes.center}>
        <div className={classes.inner}>{contentMiddle}</div>
      </div>
      <div data-bar-part="Right" className={classes.right}>
        {contentRight}
      </div>
    </div>
  );
});

Bar.displayName = 'Bar';
Bar.defaultProps = {
  design: BarDesign.Auto
};

export { Bar };
