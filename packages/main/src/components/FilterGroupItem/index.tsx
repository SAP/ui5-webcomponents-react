'use client';

import circleTask2Icon from '@ui5/webcomponents-icons/dist/circle-task-2.js';
import { clsx } from 'clsx';
import React, { forwardRef, ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxDirection } from '../../enums';
import { BusyIndicatorSize } from '../../enums/BusyIndicatorSize';
import { CommonProps } from '../../interfaces/CommonProps';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping';
import { Icon, TableCell, TableRow } from '../../webComponents';
import { BusyIndicator } from '../../webComponents/BusyIndicator';
import { Label } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';
import styles from './FilterGroupItem.jss';

addCustomCSSWithScoping(
  'ui5-table-row',
  `
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 width: 0;
}
`
);

const useStyles = createUseStyles(styles, { name: 'FilterGroupItem' });

export interface FilterGroupItemPropTypes extends CommonProps {
  /**
   * Content of the `FilterGroupItem`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.
   */
  children: ReactElement;
  /**
   * Defines the label of the `FilterGroupItem`.<br />
   * __Note:__ This label is used for the search in the filter configuration dialog.
   */
  label?: string;
  /**
   * Defines the group name of the filter.<br />
   * __Note:__ If no `groupName` is set, the name defaults to "Basic".
   */
  groupName?: string;
  /**
   * Defines the tooltip of the label.<br />
   * __Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.
   */
  labelTooltip?: string;
  /**
   * Defines whether a loading indicator should be shown in the `FilterGroupItem`.
   */
  loading?: boolean;
  /**
   * Defines whether the filter is required.<br />
   * __Note:__ Required filters cannot be removed from the `FilterBar`.
   */
  required?: boolean;
  /**
   * Defines whether the filter is visible.
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
}

/**
 * Represents a filter belonging to the `FilterBar`.
 */
export const FilterGroupItem = forwardRef<HTMLDivElement, FilterGroupItemPropTypes>((props, ref) => {
  const classes = useStyles();
  const {
    groupName,
    considerGroupName,
    label,
    labelTooltip,
    required,
    visible,
    visibleInFilterBar,
    children,
    loading,
    className,
    slot,
    active,
    ...rest
  } = props;

  const inFB = props['data-in-fb'];
  const withValues = props['data-with-values'];
  const selected = props['data-selected'];

  if (!required && (!visible || (inFB && !visibleInFilterBar))) return null;

  // todo use context instead of data attributes
  if (!inFB) {
    return (
      //todo: disable selection for required fields when it's possible, or the table is fully controllable (https://github.com/SAP/ui5-webcomponents/issues/5662)
      <TableRow
        data-react-key={props['data-react-key']}
        selected={selected}
        data-required={required}
        data-component-name="FilterBarDialogTableRow"
      >
        <TableCell>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Label className={classes.dialogCellLabel} title={labelTooltip ?? label} required={required}>
              {label}
            </Label>
            {withValues && children}
          </FlexBox>
        </TableCell>
        {!withValues && (
          <TableCell className={classes.dialogActiveCell}>
            {active && <Icon name={circleTask2Icon} className={classes.dialogActiveIcon} />}
          </TableCell>
        )}
      </TableRow>
    );
  }

  return (
    <div ref={ref} slot={slot} {...rest} className={clsx(classes.filterItem, className)}>
      <div className={inFB ? classes.innerFilterItemContainer : classes.innerFilterItemContainerDialog}>
        <FlexBox>
          <Label title={labelTooltip ?? label} required={required}>
            {`${considerGroupName && groupName !== 'default' ? `${groupName}: ` : ''}
          ${label}`}
          </Label>
        </FlexBox>
        {loading ? (
          <BusyIndicator className={classes.loadingContainer} active size={BusyIndicatorSize.Small} />
        ) : (
          children
        )}
      </div>
    </div>
  );
});

FilterGroupItem.displayName = 'FilterGroupItem';

FilterGroupItem.defaultProps = {
  groupName: 'default',
  visible: true,
  required: false,
  label: ''
};
