import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import React from 'react';

export const VerticalScrollbar = (props) => {
  const { internalRowHeight, tableRef, minRows, rows, handleVerticalScrollBarScroll, verticalScrollBarRef } = props;
  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <div
        style={{
          height: `${internalRowHeight}px`,
          boxSizing: 'border-box',
          borderLeft: 'none',
          border: `1px solid ${ThemingParameters.sapList_BorderColor}`,
          backgroundColor: ThemingParameters.sapList_HeaderBackground
        }}
      />
      <div
        ref={verticalScrollBarRef}
        style={{
          overflowY: 'auto',
          height: tableRef.current ? `${tableRef.current.clientHeight - internalRowHeight}px` : '0',
          border: `1px solid ${ThemingParameters.sapList_BorderColor}`,
          borderTop: 'none',
          borderLeft: 'none',
          boxSizing: 'border-box',
          width: '0.8rem'
        }}
        onScroll={handleVerticalScrollBarScroll}
        className={GlobalStyleClasses.sapScrollBar}
      >
        <div style={{ height: `${Math.max(minRows, rows.length) * internalRowHeight}px`, width: '1px' }} />
      </div>
    </FlexBox>
  );
};
