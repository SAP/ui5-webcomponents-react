import { ArgTypes } from '@storybook/blocks';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import { MessageStrip } from '@ui5/webcomponents-react';
import React, { ComponentProps, ReactNode } from 'react';
import classes from './ArgTypesWithNote.module.css';

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

  if (hideHTMLPropsNote) {
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
