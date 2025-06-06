import { Card, FlexBox } from '@ui5/webcomponents-react';
import { forwardRef, type ReactNode } from 'react';

export const SelectionAssistantContainer = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => {
  return (
    <Card>
      <FlexBox
        ref={ref}
        style={{
          padding: '1rem',
          position: 'relative', // This makes children (like Button) positioned relative to this FlexBox
        }}
        direction="Column"
      >
        {children}
      </FlexBox>
    </Card>
  );
});

SelectionAssistantContainer.displayName = 'SelectionAssistantContainer';
