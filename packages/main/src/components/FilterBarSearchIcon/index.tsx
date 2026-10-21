'use client';

import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { forwardRef } from 'react';
import { SEARCH } from '../../i18n/i18n-defaults.js';
import type { InputIconDomRef, InputIconPropTypes } from '../../webComponents/InputIcon/index.js';
import { InputIcon } from '../../webComponents/InputIcon/index.js';

export interface FilterBarSearchIconPropTypes extends Omit<InputIconPropTypes, 'name' | 'accessibleName'> {
  /**
   * Defines the accessible name of the icon.
   *
   * **Note:** This property is used for accessibility purposes and will be announced by screen readers.
   * When set, it is also rendered as a native `title` tooltip.
   * @default the translated "Search" text
   */
  accessibleName?: InputIconPropTypes['accessibleName'];
}

/**
 * The `FilterBarSearchIcon` is an interactive search icon intended to be passed to the `icon` prop of the `FilterBar`'s `search` input.
 *
 * Unlike the default decorative search icon, it offers button-like behavior, which allows the search to be triggered by activating the icon. This is required when the "Go" button is displayed.
 */
const FilterBarSearchIcon = forwardRef<InputIconDomRef, FilterBarSearchIconPropTypes>((props, ref) => {
  const { accessibleName, ...rest } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  return (
    <InputIcon ref={ref} accessibleName={accessibleName || i18nBundle.getText(SEARCH)} {...rest} name={searchIcon} />
  );
});

FilterBarSearchIcon.displayName = 'FilterBarSearchIcon';

export { FilterBarSearchIcon };
