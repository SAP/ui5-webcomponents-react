import { deprecationNotice } from '@ui5/webcomponents-react-base/dist/Utils';
import { useEffect } from 'react';

export const useDeprecationNoticeForTooltip = (component, tooltip) => {
  useEffect(() => {
    if (tooltip) {
      deprecationNotice(component, '`tooltip` has been deprecated, please use the native `title` attribute instead.');
    }
  }, [tooltip]);
};
