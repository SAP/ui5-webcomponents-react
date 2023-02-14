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

interface ArgsTableWithNotePropTypes {
  hideHTMLPropsNote?: boolean;
  /**
   * Customize the text of the note above the table.
   *
   * Defaults to: "This component supports all HTML attributes."
   */
  noteText?: ReactNode | ReactNode[];
  /**
   * Hides the tab-container of the table.
   */
  hideTabContainer?: boolean;
}

export const ArgsTableWithNote = (args: ArgsTableWithNotePropTypes & ComponentProps<typeof Controls>) => {
  const { hideHTMLPropsNote, noteText, hideTabContainer, ...rest } = args;
  const classes = useStyles();
  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabContainer = tableContainerRef.current?.querySelector('#panel-tab-content')
      ?.previousElementSibling as HTMLDivElement;
    if (hideTabContainer && tabContainer) {
      tabContainer.style.display = 'none';
    }
  }, []);

  if (hideHTMLPropsNote) {
    return <Controls {...rest} />;
  }
  return (
    <div className={classes.tableContainer} ref={tableContainerRef}>
      <MessageStrip design={MessageStripDesign.Information} hideCloseButton className={classes.strip}>
        {noteText ?? 'This component supports all HTML attributes.'}
      </MessageStrip>
      <Controls {...rest} />
    </div>
  );
};

ArgsTableWithNote.displayName = 'ArgsTableWithNote';
