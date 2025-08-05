import { DomRefTable } from '@sb/components/DomRefTable.js';
import { ArgTypes } from '@storybook/blocks';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import { MessageStrip } from '@ui5/webcomponents-react';
import type { ComponentProps, ReactNode } from 'react';
import classes from './ArgTypesWithNote.module.css';

interface ArgTypesWithNotePropTypes {
  hideHTMLPropsNote?: boolean;
  /**
   * Customize the text of the note above the table.
   *
   * Defaults to: "This component supports all HTML attributes."
   */
  noteText?: ReactNode | ReactNode[];
  /**
   * If `true` all headings are rendered as `Heading`s instead of `Subheading`s.
   */
  isHeading?: boolean;
}

export function ArgTypesWithNote(props: ComponentProps<typeof ArgTypes> & ArgTypesWithNotePropTypes) {
  const { hideHTMLPropsNote, noteText, isHeading, ...rest } = props;

  if (hideHTMLPropsNote) {
    return (
      <>
        <ArgTypes {...rest} />
        <DomRefTable of={rest.of} isSubheading={!isHeading} />
      </>
    );
  }
  return (
    <div className={classes.tableContainer}>
      <MessageStrip design={MessageStripDesign.Information} hideCloseButton className={classes.strip}>
        {noteText ?? 'This component supports all HTML attributes.'}
      </MessageStrip>
      <ArgTypes {...rest} />
      <DomRefTable of={rest.of} isSubheading={!isHeading} />
    </div>
  );
}
