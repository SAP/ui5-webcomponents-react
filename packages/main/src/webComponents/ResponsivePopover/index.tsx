import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5ResponsivePopover from '@ui5/webcomponents/dist/ResponsivePopover';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ResponsivePopoverPropTypes extends WithWebComponentPropTypes {}

/**
 * <code>import { ResponsivePopover } from '@ui5/webcomponents-react/lib/ResponsivePopover';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ResponsivePopover" target="_blank">UI5 Web Components Playground</a>
 */
const ResponsivePopover: FC<ResponsivePopoverPropTypes> = withWebComponent<ResponsivePopoverPropTypes>(
  UI5ResponsivePopover
);

ResponsivePopover.displayName = 'ResponsivePopover';

ResponsivePopover.defaultProps = {};

export { ResponsivePopover };
