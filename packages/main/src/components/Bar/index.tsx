import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './Bar.jss';

export interface BarPropTypes extends CommonProps {
  renderContentLeft?: () => JSX.Element;
  renderContentMiddle?: () => JSX.Element;
  renderContentRight?: () => JSX.Element;
}

const useStyles = createUseStyles(styles, { name: 'Bar' });

/**
 * <code>import { Bar } from '@ui5/webcomponents-react/lib/Bar';</code>
 */
const Bar: FC<BarPropTypes> = forwardRef((props: BarPropTypes, ref: Ref<HTMLDivElement>) => {
  const { renderContentLeft, renderContentMiddle, renderContentRight, className, style, tooltip, slot } = props;

  const classes = useStyles();

  const cssClasses = StyleClassHelper.of(classes.bar);
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
  renderContentLeft: () => null,
  renderContentMiddle: () => null,
  renderContentRight: () => null
};

export { Bar };
