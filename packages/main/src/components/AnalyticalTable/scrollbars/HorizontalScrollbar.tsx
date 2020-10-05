import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import React from 'react';

export const HorizontalScrollbar = (props) => {
  const { scrollBarRef, handleHorizontalScrollBarScroll, totalColumnsWidth } = props;
  return (
    <div
      ref={scrollBarRef}
      style={{
        overflowX: 'auto',
        height: '0.8rem',
        border: `1px solid ${ThemingParameters.sapList_BorderColor}`,
        borderTop: 'none',
        boxSizing: 'border-box',
        width: '100%'
      }}
      onScroll={handleHorizontalScrollBarScroll}
      className={GlobalStyleClasses.sapScrollBar}
    >
      <div style={{ width: `${totalColumnsWidth}px`, height: '1px' }} />
    </div>
  );
};
