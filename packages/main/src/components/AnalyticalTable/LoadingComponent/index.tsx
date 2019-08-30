import React from 'react';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorType } from '@ui5/webcomponents-react/lib/BusyIndicatorType';

const LoadingComponent = () => {
  return (
    <tr>
      <td
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
        <BusyIndicator size={BusyIndicatorType.Medium} active style={{ backgroundColor: 'transparent' }} />
      </td>
    </tr>
  );
};

LoadingComponent.displayName = 'LoadingComponent';

export { LoadingComponent };
