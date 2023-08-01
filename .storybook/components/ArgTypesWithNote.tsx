import { ArgTypes } from '@storybook/blocks';
import { MessageStrip, MessageStripDesign } from '@ui5/webcomponents-react';
import React, { ComponentProps, ReactNode, useEffect, useRef } from 'react';
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

interface ArgTypesWithNotePropTypes {
  hideHTMLPropsNote?: boolean;
  /**
   * Customize the text of the note above the table.
   *
   * Defaults to: "This component supports all HTML attributes."
   */
  noteText?: ReactNode | ReactNode[];
}

export function ArgTypesWithNote(props: ComponentProps<typeof ArgTypes> & ArgTypesWithNotePropTypes) {
  const { hideHTMLPropsNote, noteText, ...rest } = props;
  const classes = useStyles();

  if (hideHTMLPropsNote) {
    console.log(rest);
    return <ArgTypes {...rest} />;
  }
  return (
    <div className={classes.tableContainer}>
      <MessageStrip design={MessageStripDesign.Information} hideCloseButton className={classes.strip}>
        {noteText ?? 'This component supports all HTML attributes.'}
      </MessageStrip>
      <ArgTypes {...rest} />
    </div>
  );
}
