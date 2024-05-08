import type { Key, ReactElement } from 'react';
import type { CommonProps } from '../../types/index.js';

export interface FilterGroupItemPropTypes extends CommonProps {
  /**
   * Content of the `FilterGroupItem`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.
   */
  children: ReactElement;
  /**
   * Defines the label of the `FilterGroupItem`.
   *
   * __Note:__ This label is used for the search in the filter configuration dialog.
   *
   * @default ""
   */
  label?: string;
  /**
   * Defines the group name of the filter.
   *
   *
   * @default "Basic"
   */
  groupName?: string;
  /**
   * Defines the tooltip of the label.
   *
   * __Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.
   */
  labelTooltip?: string;
  /**
   * Defines whether a loading indicator should be shown in the `FilterGroupItem`.
   */
  loading?: boolean;
  /**
   * Defines whether the filter is required.
   *
   * __Note:__ Required filters cannot be removed from the `FilterBar`.
   */
  required?: boolean;
  /**
   * Defines whether the filter is visible.
   *
   * @default true
   */
  visible?: boolean;
  /**
   * Defines whether the filter is visible in the `FilterBar` or only in the filter configuration dialog.
   */
  visibleInFilterBar?: boolean;
  /**
   * Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.
   */
  considerGroupName?: boolean;
  /**
   * Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.
   */
  active?: boolean;
  /**
   * Defines the unique id used to identify reordered filter items.
   *
   * __Note:__ This prop is mandatory if `enableReordering` is set to `true` on the `FilterBar`, otherwise it has no effect.
   *
   */
  orderId?: string;
}

export interface FilterGroupItemInternalProps extends FilterGroupItemPropTypes {
  'data-selected'?: boolean;
  'data-react-key'?: Key;
  'data-index'?: number;
}
