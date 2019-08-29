import { BusyIndicatorType } from '@ui5/webcomponents-react/lib/BusyIndicatorType';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import React from 'react';

const LoadingComponent = (props) => {
  if (!props.loading) {
    return null;
  }
  let className = '-loading -active';
  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BusyIndicator size={BusyIndicatorType.Medium} active style={{ backgroundColor: 'transparent' }} />
    </div>
  );
};

LoadingComponent.displayName = 'LoadingComponent';

export { LoadingComponent };
