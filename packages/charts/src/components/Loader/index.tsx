import { withStyles } from '@ui5-webcomponents-react/base';
import * as React from 'react';
import { LoaderStyles } from './Loader.jss';

export const Loader = withStyles(LoaderStyles)(({ classes }) => (
  <div className={`${classes.loader} ${classes.loaderLight}`}>Loading...</div>
));
