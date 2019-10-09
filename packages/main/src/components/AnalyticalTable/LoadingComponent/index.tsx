import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import React from 'react';

const LoadingComponent = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(247,247,247,0.72)' // TODO is there a theming parameter available?
      }}
    >
      <BusyIndicator size={BusyIndicatorSize.Medium} active style={{ backgroundColor: 'transparent' }} />
    </div>
  );
};

LoadingComponent.displayName = 'LoadingComponent';

export { LoadingComponent };
