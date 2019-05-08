import { withStyles } from '@fiori-for-react/core/utils/withStyles';
import * as React from 'react';
import { LoaderStyles } from './Loader.jss';

export const Loader = withStyles(LoaderStyles)(({ classes }) => (
  <div className={`${classes.loader} ${classes.loaderLight}`}>Loading...</div>
));
