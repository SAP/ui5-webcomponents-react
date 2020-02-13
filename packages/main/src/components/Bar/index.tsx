import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { BarDesign } from '../../lib/BarDesign';
import styles from './Bar.jss';

export interface BarPropTypes extends CommonProps {
  renderContentLeft?: () => JSX.Element;
  renderContentMiddle?: () => JSX.Element;
  renderContentRight?: () => JSX.Element;
  design?: BarDesign;
}

const useStyles = createUseStyles(styles, { name: 'Bar' });

/**
 * <code>import { Bar } from '@ui5/webcomponents-react/lib/Bar';</code>
 */
const Bar: FC<BarPropTypes> = forwardRef((props: BarPropTypes, ref: Ref<HTMLDivElement>) => {
  const { renderContentLeft, renderContentMiddle, renderContentRight, className, style, tooltip, slot, design } = props;

  const classes = useStyles();

  const cssClasses = StyleClassHelper.of(classes.bar);
  const barDesignClass = () => {
    switch (design) {
      case BarDesign.Footer:
        return classes.footer;
      case BarDesign.SubHeader:
        return classes.subHeader;
      case BarDesign.FloatingFooter:
        return classes.floatingFooter;
      case BarDesign.Header:
      case BarDesign.Auto:
      default:
        return classes.auto;
    }
  };
  if (className) {
    cssClasses.put(className);
  }
  if (design) {
    cssClasses.put(barDesignClass());
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
        {renderContentMiddle()}
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
