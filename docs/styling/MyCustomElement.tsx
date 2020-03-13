import { JSSTheme } from '@ui5/webcomponents-react/interfaces/JSSTheme';
import React from 'react';
import { createUseStyles } from 'react-jss';

const styles = ({ parameters }: JSSTheme) => ({
  container: {
    backgroundColor: parameters.sapBackgroundColor,
    fontFamily: parameters.sapFontFamily,
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: parameters.sapNegativeTextColor,
    fontSize: parameters.sapFontLargeSize
  }
});

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles);

export const MyCustomElement = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.text}>My Text</span>
    </div>
  );
};
