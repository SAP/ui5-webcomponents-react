import React, { forwardRef, ReactNode, RefObject } from 'react';
// @ts-ignore
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';

const objectPageContentStyles = ({ parameters }: JSSTheme) => ({
  sectionsContainer: {
    '&:before': {
      display: 'table',
      content: '""'
    },
    '& :first-child > div[role="heading"]': {
      display: 'none'
    },
    position: 'relative',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: parameters.sapUiBaseBG,
    '&:after': {
      clear: 'both',
      display: 'table',
      content: '""'
    }
  }
});

interface Props {
  children: ReactNode | ReactNode[];
  fillerRef: RefObject<any>;
}

const useStyles = createUseStyles(objectPageContentStyles);

export const ObjectPageContent = forwardRef(({ children, fillerRef }: Props, ref: RefObject<HTMLElement>) => {
  const classes = useStyles();
  return (
    <section ref={ref} id="ObjectPageSections" className={classes.sectionsContainer}>
      {children}
      <div ref={fillerRef} />
    </section>
  );
});
