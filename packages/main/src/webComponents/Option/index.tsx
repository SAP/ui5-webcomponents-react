import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Option from '@ui5/webcomponents/dist/Option';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface OptionPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  icon?: string; // @generated
  value?: string; // @generated
}

/**
 * <code>import { Option } from '@ui5/webcomponents-react/lib/Option';</code>
 */
const Option: FC<OptionPropTypes> = withWebComponent<OptionPropTypes>(UI5Option);

Option.displayName = 'Option';

Option.defaultProps = {
  icon: null // @generated
};

export { Option };
