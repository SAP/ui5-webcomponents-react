import { CssSizeVariables } from '@ui5/webcomponents-react-base/dist/CssSizeVariables';
import { Loader } from '@ui5/webcomponents-react/dist/Loader';
import React from 'react';
import { createUseStyles } from 'react-jss';

const styles = {
  loader: {
    position: 'absolute',
    top: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    left: 0,
    right: 0,
    zIndex: 1
  }
};
const useStyles = createUseStyles(styles, { name: 'LoadingComponent' });

const DefaultLoadingComponent = ({ style }) => {
  const classes = useStyles();
  return <Loader delay={500} style={style} className={classes.loader} />;
};

DefaultLoadingComponent.displayName = 'DefaultLoadingComponent';

export { DefaultLoadingComponent };
