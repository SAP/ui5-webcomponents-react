import React from 'react';
import { Event, fonts, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';

const anchorButtonStyles = ({ parameters }: JSSTheme) => ({
  button: {
    color: parameters.sapUiContentLabelColor,
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize
  },
  selected: {
    color: parameters.sapUiSelected,
    minWidth: '2rem',
    textAlign: 'center',
    '&:after': {
      content: '""',
      borderBottom: `0.188rem solid ${parameters.sapUiSelected}`,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0
    }
  }
});

export const AnchorButton = withStyles(anchorButtonStyles)(({ onClick, children, classes, selected }) => {
  const classNames = StyleClassHelper.of(classes.button);
  if (selected) {
    classNames.put(classes.selected);
  }

  const eventWrapper = (e) => {
    onClick(Event.of(null, e, { text: true }));
  };

  return (
    <span onClick={eventWrapper} className={classNames.valueOf()}>
      {children}
    </span>
  );
});
