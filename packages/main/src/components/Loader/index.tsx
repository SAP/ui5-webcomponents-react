import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import React, { forwardRef, RefObject, FC, CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import { styles } from './Loader.jss';

export interface LoaderProps extends CommonProps {
  type?: LoaderType;
  progressBarWidth?: CSSProperties['width'];
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Loader' });

const Loader: FC<LoaderProps> = forwardRef((props: LoaderProps, ref: RefObject<HTMLDivElement>) => {
  const { className, type, progressBarWidth, tooltip, slot, style } = props;
  const classes = useStyles(props);

  const loaderClasses = StyleClassHelper.of(classes.loader);
  if (className) {
    loaderClasses.put(className);
  }
  loaderClasses.put(classes[`loader${type}`]);

  return (
    <div
      ref={ref}
      className={loaderClasses.valueOf()}
      data-component-name="Loader"
      aria-busy="true"
      role="progressbar"
      title={tooltip || 'Please wait'}
      slot={slot}
      style={style}
    />
  );
});

Loader.defaultProps = {
  type: LoaderType.Indeterminate,
  progressBarWidth: '0px'
};

Loader.displayName = 'Loader';

export { Loader };
