import { Controls } from '@storybook/blocks';
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

interface ControlsWithNotePropTypes {
  hideHTMLPropsNote?: boolean;
  /**
   * Customize the text of the note above the table.
   *
   * Defaults to: "This component supports all HTML attributes."
   */
  noteText?: ReactNode | ReactNode[];
}

export function ControlsWithNote(props: ComponentProps<typeof Controls> & ControlsWithNotePropTypes) {
  const { hideHTMLPropsNote, noteText, ...rest } = props;
  const classes = useStyles();

  if (hideHTMLPropsNote) {
    return <Controls {...rest} />;
  }
  return (
    <div className={classes.tableContainer}>
      <MessageStrip design={MessageStripDesign.Information} hideCloseButton className={classes.strip}>
        {noteText ?? 'This component supports all HTML attributes.'}
      </MessageStrip>
      <Controls {...rest} />
    </div>
  );
}
