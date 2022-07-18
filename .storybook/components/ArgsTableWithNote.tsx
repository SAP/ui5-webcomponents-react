import { ArgsTable } from '@storybook/addon-docs';
import { MessageStrip, MessageStripDesign } from '@ui5/webcomponents-react';
import React, { ReactNode } from 'react';
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

interface ArgsTableWithNotePropTypes {
  hideHTMLPropsNote?: boolean;
  /**
   * Customize the text of the note above the table.
   *
   * Defaults to: "This component supports all HTML attributes."
   */
  noteText?: ReactNode | ReactNode[];
}

export const ArgsTableWithNote = (args: ArgsTableWithNotePropTypes & React.ComponentProps<typeof ArgsTable>) => {
  const { hideHTMLPropsNote, noteText, ...rest } = args;
  const classes = useStyles();
  if (hideHTMLPropsNote) {
    return <ArgsTable {...rest} />;
  }
  return (
    <div className={classes.tableContainer}>
      <MessageStrip design={MessageStripDesign.Information} hideCloseButton className={classes.strip}>
        {noteText ?? 'This component supports all HTML attributes.'}
      </MessageStrip>
      <ArgsTable {...rest} />
    </div>
  );
};

ArgsTableWithNote.displayName = 'ArgsTableWithNote';
