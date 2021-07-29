import React, { MouseEventHandler } from 'react';

interface ActionsSpacerProps {
  onClick: MouseEventHandler<HTMLElement>;
  noHover?: boolean;
}

export const ActionsSpacer = ({ onClick, noHover }: ActionsSpacerProps) => {
  return (
    <span
      style={{ flexGrow: 1, height: '100%', cursor: noHover ? 'auto' : 'pointer' }}
      className="spacer"
      onClick={onClick}
    />
  );
};

// The Toolbar only recognizes spacers with the 'ToolbarSpacer' displayName
ActionsSpacer.displayName = 'ToolbarSpacer';
