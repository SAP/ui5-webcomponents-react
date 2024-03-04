'use client';

import circleTask2Icon from '@ui5/webcomponents-icons/dist/circle-task-2.js';
import moveToTopIcon from '@ui5/webcomponents-icons/dist/collapse-group.js';
import moveToBottomIcon from '@ui5/webcomponents-icons/dist/expand-group.js';
import moveDownIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import moveUpIcon from '@ui5/webcomponents-icons/dist/navigation-up-arrow.js';
import { clsx } from 'clsx';
import React, { forwardRef, useContext, useEffect, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import type { ButtonPropTypes, TableRowDomRef } from '../..';
import { BusyIndicator, Button, FlexBoxAlignItems, Icon, TableCell, TableRow } from '../..';
import { BusyIndicatorSize, ButtonDesign, FlexBoxDirection, FlexBoxJustifyContent } from '../../enums/index.js';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
import type { ReorderDirections } from '../../internal/FilterBarDialogContext.js';
import { FilterBarDialogContext } from '../../internal/FilterBarDialogContext.js';
import { Label } from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox/index.js';
import styles from './FilterGroupItem.jss.js';
import type { FilterGroupItemInternalProps, FilterGroupItemPropTypes } from './types.js';

addCustomCSSWithScoping(
  'ui5-table-row',
  `
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 display:none;
}
`
);

const useStyles = createUseStyles(styles, { name: 'FilterGroupItem' });

/**
 * Represents a filter belonging to the `FilterBar`.
 */
const FilterGroupItem = forwardRef<HTMLDivElement, FilterGroupItemPropTypes & FilterGroupItemInternalProps>(
  (props, ref) => {
    const classes = useStyles();
    const {
      groupName = 'default',
      considerGroupName,
      label = '',
      labelTooltip,
      required = false,
      visible = true,
      visibleInFilterBar,
      children,
      loading,
      className,
      slot,
      active,
      orderId,
      ...rest
    } = props;
    const tableRowRef = useRef<TableRowDomRef>(null);

    const selected = props['data-selected'];
    const reactKey = props['data-react-key'];
    const index = props['data-index'];

    const {
      isFilterInDialog,
      isListView,
      onReorder,
      withValues,
      enableReordering,
      showBtnsOnHover,
      setShowBtnsOnHover,
      handleFocusFallback,
      currentReorderedItemOrderId
    } = useContext(FilterBarDialogContext);
    const inFB = !isFilterInDialog;
    const withReordering = enableReordering && !withValues && isListView;

    const handleFocus = () => {
      setShowBtnsOnHover(false);
    };

    const handleReorder = (e: Parameters<ButtonPropTypes['onClick']>[0]) => {
      onReorder({
        index,
        direction: e.currentTarget.dataset.reorder as ReorderDirections,
        target: tableRowRef.current,
        orderId
      });
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        const directionMap = {
          Home: 'top',
          End: 'bottom',
          ArrowUp: 'up',
          ArrowDown: 'down'
        };

        const direction = directionMap[e.key];
        if (direction) {
          onReorder({ index, direction, target: e.currentTarget, orderId });
        }
      }
    };

    useEffect(() => {
      if (withReordering && tableRowRef.current && currentReorderedItemOrderId === orderId && index) {
        handleFocusFallback();
      }
    }, [withReordering, currentReorderedItemOrderId, orderId, index]);

    if (!required && (!visible || (inFB && !visibleInFilterBar))) return null;

    if (!inFB) {
      return (
        //todo: disable selection for required fields when it's possible, or the table is fully controllable (https://github.com/SAP/ui5-webcomponents/issues/5662)
        <TableRow
          ref={tableRowRef}
          data-text={label}
          data-react-key={reactKey}
          selected={selected}
          data-required={required}
          data-component-name="FilterBarDialogTableRow"
          className={clsx(
            classes.dialogTableRow,
            withReordering && classes.withReorderBtns,
            withReordering && showBtnsOnHover && classes.withReorderHoverBtns
          )}
          onFocus={withReordering ? handleFocus : undefined}
          onKeyDown={withReordering ? handleKeyDown : undefined}
          data-order-id={orderId}
        >
          <TableCell>
            <FlexBox direction={FlexBoxDirection.Column} className={clsx(classes.labelContainer)}>
              <Label
                className={classes.dialogCellLabel}
                title={labelTooltip ?? label}
                required={required}
                showColon={!!label && withValues}
              >
                {label}
              </Label>
              {withValues && children}
            </FlexBox>
          </TableCell>
          {!withValues && isListView && (
            <TableCell className={classes.dialogActiveCell}>
              {withReordering && (
                <FlexBox
                  fitContainer
                  justifyContent={FlexBoxJustifyContent.Center}
                  alignItems={FlexBoxAlignItems.Center}
                  className={classes.reorderBtnsContainer}
                >
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveToTopIcon}
                    data-reorder="top"
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveUpIcon}
                    data-reorder="up"
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveDownIcon}
                    data-reorder="down"
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveToBottomIcon}
                    data-reorder="bottom"
                  />
                </FlexBox>
              )}
              {active && <Icon name={circleTask2Icon} className={classes.dialogActiveIcon} />}
            </TableCell>
          )}
        </TableRow>
      );
    }

    return (
      <div ref={ref} slot={slot} {...rest} data-order-id={orderId} className={clsx(classes.filterItem, className)}>
        <div className={classes.innerFilterItemContainer}>
          <FlexBox>
            <Label title={labelTooltip ?? label} required={required} showColon={!!label}>
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
  }
);

FilterGroupItem.displayName = 'FilterGroupItem';

FilterGroupItem.defaultProps = {
  groupName: 'default',
  visible: true,
  required: false,
  label: ''
};

export { FilterGroupItem };
export type { FilterGroupItemPropTypes };
