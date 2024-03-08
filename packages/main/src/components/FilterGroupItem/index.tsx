'use client';

import { isMac as isMacFn } from '@ui5/webcomponents-base/dist/Device.js';
import circleTask2Icon from '@ui5/webcomponents-icons/dist/circle-task-2.js';
import moveToTopIcon from '@ui5/webcomponents-icons/dist/collapse-group.js';
import moveToBottomIcon from '@ui5/webcomponents-icons/dist/expand-group.js';
import moveDownIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import moveUpIcon from '@ui5/webcomponents-icons/dist/navigation-up-arrow.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
  BusyIndicatorSize,
  ButtonDesign,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent
} from '../../enums/index.js';
import {
  MOVE_TO_TOP,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_TO_BOTTOM,
  FILTER_DIALOG_REORDER_FILTERS,
  DOWN_ARROW,
  UP_ARROW
} from '../../i18n/i18n-defaults.js';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
import type { ReorderDirections } from '../../internal/FilterBarDialogContext.js';
import { FilterBarDialogContext } from '../../internal/FilterBarDialogContext.js';
import type { ButtonPropTypes, TableRowDomRef } from '../../webComponents/index.js';
import { BusyIndicator, Button, Icon, Label, TableCell, TableRow } from '../../webComponents/index.js';
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

const isMac = isMacFn();

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
    const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
    const tableRowRef = useRef<TableRowDomRef>(null);

    const selected = props['data-selected'];
    const reactKey = props['data-react-key'];
    const index = props['data-index'];
    const isomporphicReorderKey = isMac ? 'CMD' : 'CTRL';

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
    const [itemPosition, setItemPosition] = useState<undefined | 'last' | 'first'>(undefined);

    const handleFocus = (e) => {
      setShowBtnsOnHover(false);
      if (e.currentTarget.nextSibling === null) {
        setItemPosition('last');
      } else if (index === 0) {
        setItemPosition('first');
      } else {
        setItemPosition(undefined);
      }
    };

    useEffect(() => {
      if (index === 0) {
        // fallback
        setItemPosition('first');
      }
    }, [index]);

    const handleReorder = (e: Parameters<ButtonPropTypes['onClick']>[0]) => {
      setItemPosition(undefined);
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
          setItemPosition(undefined);
          onReorder({ index, direction, target: e.currentTarget, orderId });
        }
      }
    };

    useEffect(() => {
      if (
        withReordering &&
        tableRowRef.current &&
        currentReorderedItemOrderId === orderId &&
        typeof index === 'number'
      ) {
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
          //todo: check
          aria-label={withReordering ? i18nBundle.getText(FILTER_DIALOG_REORDER_FILTERS) : undefined}
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
                    disabled={itemPosition === 'first'}
                    tooltip={`${i18nBundle.getText(MOVE_TO_TOP, ` (${isomporphicReorderKey}+Home)`)})`}
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveUpIcon}
                    data-reorder="up"
                    disabled={itemPosition === 'first'}
                    tooltip={`${i18nBundle.getText(MOVE_UP, ` (${isomporphicReorderKey}+${i18nBundle.getText(UP_ARROW)})`)}`}
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveDownIcon}
                    data-reorder="down"
                    disabled={itemPosition === 'last'}
                    tooltip={`${i18nBundle.getText(MOVE_DOWN, ` (${isomporphicReorderKey}+${i18nBundle.getText(DOWN_ARROW)})`)}`}
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveToBottomIcon}
                    data-reorder="bottom"
                    disabled={itemPosition === 'last'}
                    tooltip={`${i18nBundle.getText(MOVE_TO_BOTTOM, ` (${isomporphicReorderKey}+End`)})`}
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
