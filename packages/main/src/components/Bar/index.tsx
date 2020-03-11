import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, Ref } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
import { BarDesign } from '../../lib/BarDesign';
import styles from './Bar.jss';

export interface BarPropTypes extends CommonProps {
  renderContentLeft?: () => JSX.Element;
  renderContentMiddle?: () => JSX.Element;
  renderContentRight?: () => JSX.Element;
  design?: BarDesign;
}

const useStyles = createComponentStyles(styles, { name: 'Bar' });

/**
 * <code>import { Bar } from '@ui5/webcomponents-react/lib/Bar';</code>
 */
const Bar: FC<BarPropTypes> = forwardRef((props: BarPropTypes, ref: Ref<HTMLDivElement>) => {
  const { renderContentLeft, renderContentMiddle, renderContentRight, className, style, tooltip, slot, design } = props;

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
        {renderContentLeft()}
      </div>
      <div data-bar-part="Center" className={classes.center}>
        <div className={classes.inner}>{renderContentMiddle()}</div>
      </div>
      <div data-bar-part="Right" className={classes.right}>
        {renderContentRight()}
      </div>
    </div>
  );
});

Bar.displayName = 'Bar';
Bar.defaultProps = {
  design: BarDesign.Auto,
  renderContentLeft: () => null,
  renderContentMiddle: () => null,
  renderContentRight: () => null
};

export { Bar };
