import type { ReactElement } from 'react';
import type { CommonProps } from '../../types/index.js';

export interface FilterGroupItemPropTypes extends CommonProps {
  /**
   * The mandatory key each `FilterGroupItem` needs to implement.
   *
   * __Note:__ `filterKey` needs to be unique for each `FilterGroupItem` per `FilterBar`.
   *
   * __Note:__ Whitespaces are not supported!
   */
  filterKey: string | number;
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
   * Defines whether the filter is hidden.
   *
   */
  hidden?: boolean;
  /**
   * Defines whether the filter is hidden in the `FilterBar` or only in the filter configuration dialog.
   */
  hiddenInFilterBar?: boolean;
  /**
   * Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.
   */
  considerGroupName?: boolean;
  /**
   * Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.
   */
  active?: boolean;
}

export interface FilterGroupItemInternalProps extends FilterGroupItemPropTypes {
  /**
   * @private
   */
  'data-index'?: number;
}
