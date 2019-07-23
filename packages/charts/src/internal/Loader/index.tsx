import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { LoaderStyles } from './Loader.jss';

const useStyles = createUseStyles(LoaderStyles, { name: 'Loader' });

const Loader = React.forwardRef((props, ref: React.RefObject<HTMLDivElement>) => {
  const classes = useStyles();
  return (
    <div ref={ref} className={`${classes.loader} ${classes.loaderLight}`}>
      Loading...
    </div>
  );
});

export { Loader };
