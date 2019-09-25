import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import React, { CSSProperties, FC, forwardRef, RefObject, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import { styles } from './Loader.jss';
import { JSSTheme } from '../../interfaces/JSSTheme';

export interface LoaderProps extends CommonProps {
  type?: LoaderType;
  progress?: CSSProperties['width'];
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Loader' });

const Loader: FC<LoaderProps> = forwardRef((props: LoaderProps, ref: RefObject<HTMLDivElement>) => {
  const { className, type, progress, tooltip, slot, style } = props;
  const classes = useStyles(props);

  const loaderClasses = StyleClassHelper.of(classes.loader);
  if (className) {
    loaderClasses.put(className);
  }
  loaderClasses.put(classes[`loader${type}`]);

  const backgroundSize = useMemo(() => {
    return type !== LoaderType.Determinate ? '40%' : progress;
  }, [progress]);

  return (
    <div
      ref={ref}
      className={loaderClasses.valueOf()}
      data-component-name="Loader"
      aria-busy="true"
      role="progressbar"
      title={tooltip || 'Please wait'}
      slot={slot}
      style={{ ...style, backgroundSize }}
    />
  );
});

Loader.defaultProps = {
  type: LoaderType.Indeterminate,
  progress: '0px'
};

Loader.displayName = 'Loader';

export { Loader };
