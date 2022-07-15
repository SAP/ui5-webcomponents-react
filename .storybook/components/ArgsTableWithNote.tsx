import { ArgsTable } from '@storybook/addon-docs';
import { MessageStrip, MessageStripDesign } from '@ui5/webcomponents-react';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tableContainer: {
    marginTop: '25px',
    '& table': {
      marginTop: '0 !important'
    }
  },
  strip: { marginBottom: '10px' }
});

interface ArgsTableWithNoteProptypes {
  hideHTMLPropsNote?: boolean;
}

export const ArgsTableWithNote = (args: ArgsTableWithNoteProptypes & React.ComponentProps<typeof ArgsTable>) => {
  const { hideHTMLPropsNote, ...rest } = args;
  const classes = useStyles();
  if (hideHTMLPropsNote) {
    return <ArgsTable {...rest} />;
  }
  return (
    <div className={classes.tableContainer}>
      <MessageStrip design={MessageStripDesign.Information} hideCloseButton className={classes.strip}>
        This component supports all HTML attributes.
      </MessageStrip>
      <ArgsTable {...rest} />
    </div>
  );
};

ArgsTableWithNote.displayName = 'ArgsTableWithNote';
