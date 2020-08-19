import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, ReactNode, Ref } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
import { BarDesign } from '../../lib/BarDesign';
import styles from './Bar.jss';

export interface BarPropTypes extends CommonProps {
  contentLeft?: ReactNode | ReactNode[];
  contentMiddle?: ReactNode | ReactNode[];
  contentRight?: ReactNode | ReactNode[];
  design?: BarDesign;
}

const useStyles = createComponentStyles(styles, { name: 'Bar' });

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
