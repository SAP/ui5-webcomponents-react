'use client';

import BusyIndicatorSize from '@ui5/webcomponents/dist/types/BusyIndicatorSize.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import { isMac as isMacFn } from '@ui5/webcomponents-base/dist/Device.js';
import circleTask2Icon from '@ui5/webcomponents-icons/dist/circle-task-2.js';
import moveToTopIcon from '@ui5/webcomponents-icons/dist/collapse-group.js';
import moveToBottomIcon from '@ui5/webcomponents-icons/dist/expand-group.js';
import moveDownIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import moveUpIcon from '@ui5/webcomponents-icons/dist/navigation-up-arrow.js';
import { useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent } from '../../enums/index.js';
import {
  DOWN_ARROW,
  FILTER_DIALOG_REORDER_FILTERS,
  FILTER_IS_ACTIVE,
  MOVE_DOWN,
  MOVE_TO_BOTTOM,
  MOVE_TO_TOP,
  MOVE_UP,
  UP_ARROW
} from '../../i18n/i18n-defaults.js';
import type { ButtonPropTypes, TableRowDomRef } from '../../index.js';
import { BusyIndicator, Button, Icon, Label, TableCell, TableRow } from '../../index.js';
import type { ReorderDirections } from '../../internal/FilterBarDialogContext.js';
import { FilterBarDialogContext } from '../../internal/FilterBarDialogContext.js';
import { FlexBox } from '../FlexBox/index.js';
import { classNames, styleData } from './FilterGroupItem.module.css.js';
import type { FilterGroupItemInternalProps, FilterGroupItemPropTypes } from './types.js';

const isMac = isMacFn();

/**
 * Represents a filter belonging to the `FilterBar`.
 */
const FilterGroupItem = forwardRef<HTMLDivElement, FilterGroupItemPropTypes & FilterGroupItemInternalProps>(
  (props, ref) => {
    useStylesheet(styleData, FilterGroupItem.displayName);
    const {
      groupName = 'default',
      considerGroupName,
      label = '',
      labelTooltip,
      required,
      hidden,
      hiddenInFilterBar,
      children,
      loading,
      className,
      slot,
      active,
      filterKey,
      ...rest
    } = props;
    const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
    const index = props['data-index'];
    const isomporphicReorderKey = isMac ? 'CMD' : 'CTRL';
    const tableRowRef = useRef<TableRowDomRef>(null);

    const {
      isFilterInDialog,
      isListView,
      withValues,
      enableReordering,
      showBtnsOnHover,
      currentReorderedItemOrderId,
      handleFocusFallback,
      onReorder,
      setShowBtnsOnHover,
      setSelectedKeys,
      setRequiredKeys,
      prevIsListView
    } = useContext(FilterBarDialogContext);

    const listViewHasChanged = useRef(prevIsListView?.current !== isListView);

    useEffect(() => {
      if (prevIsListView?.current !== isListView) {
        listViewHasChanged.current = true;
      }
    }, [isListView]);

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
        filterKey
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
          onReorder({ index, direction, target: e.currentTarget, filterKey });
        }
      }
    };

    useEffect(() => {
      if (
        withReordering &&
        tableRowRef.current &&
        currentReorderedItemOrderId === filterKey &&
        typeof index === 'number'
      ) {
        handleFocusFallback();
      }
    }, [withReordering, currentReorderedItemOrderId, filterKey, index]);

    useEffect(() => {
      if (!inFB && !hidden && !listViewHasChanged?.current) {
        if (setSelectedKeys) {
          setSelectedKeys((prev) => {
            const keysSet = new Set(prev);
            if (hiddenInFilterBar && !required) {
              keysSet.delete(`${filterKey}`);
            } else {
              keysSet.add(`${filterKey}`);
            }
            return Array.from(keysSet);
          });
        }
        if (setRequiredKeys) {
          setRequiredKeys((prev) => ({ ...prev, [`${filterKey}`]: !!required }));
        }
      }
      if (listViewHasChanged?.current) {
        listViewHasChanged.current = false;
      }
    }, [inFB, hidden, hiddenInFilterBar, filterKey, setSelectedKeys, isListView, required]);

    if (!required && (hidden || (inFB && hiddenInFilterBar))) return null;

    if (!inFB) {
      return (
        //todo: disable selection for required fields when it's possible, or the table is fully controllable (https://github.com/SAP/ui5-webcomponents/issues/5662)
        <TableRow
          ref={tableRowRef}
          rowKey={`${filterKey}`}
          data-text={label}
          data-required={required}
          data-component-name="FilterBarDialogTableRow"
          className={clsx(
            classNames.dialogTableRow,
            withReordering && classNames.withReorderBtns,
            withReordering && showBtnsOnHover && classNames.withReorderHoverBtns
          )}
          onFocus={withReordering ? handleFocus : undefined}
          onKeyDown={withReordering ? handleKeyDown : undefined}
          aria-live={withReordering ? 'polite' : undefined}
          aria-label={
            withReordering ? i18nBundle.getText(FILTER_DIALOG_REORDER_FILTERS, isomporphicReorderKey) : undefined
          }
        >
          <TableCell data-component-name="FilterBarDialogTableCellFilter">
            <FlexBox
              fitContainer
              direction={FlexBoxDirection.Column}
              justifyContent={FlexBoxJustifyContent.Center}
              className={classNames.labelContainer}
              data-in-filters-dialog={true}
            >
              <Label
                className={classNames.dialogCellLabel}
                title={labelTooltip ?? label}
                required={required}
                showColon={!!label && withValues}
              >
                {label}
              </Label>
              {withValues && children}
            </FlexBox>
          </TableCell>
          {!withValues && (
            <TableCell className={classNames.dialogActiveCell} data-component-name="FilterBarDialogTableCellActive">
              {isListView && withReordering && (
                <FlexBox
                  fitContainer
                  justifyContent={FlexBoxJustifyContent.Center}
                  alignItems={FlexBoxAlignItems.Center}
                  className={classNames.reorderBtnsContainer}
                  data-component-name="FilterBarDialogTableCellReorderBtns"
                >
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveToTopIcon}
                    data-reorder="top"
                    disabled={itemPosition === 'first'}
                    tooltip={`${i18nBundle.getText(MOVE_TO_TOP, ` (${isomporphicReorderKey}+Home)`)})`}
                    data-component-name="FilterBarDialogReorderBtnTop"
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveUpIcon}
                    data-reorder="up"
                    disabled={itemPosition === 'first'}
                    tooltip={`${i18nBundle.getText(MOVE_UP, ` (${isomporphicReorderKey}+${i18nBundle.getText(UP_ARROW)})`)}`}
                    data-component-name="FilterBarDialogReorderBtnUp"
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveDownIcon}
                    data-reorder="down"
                    disabled={itemPosition === 'last'}
                    tooltip={`${i18nBundle.getText(MOVE_DOWN, ` (${isomporphicReorderKey}+${i18nBundle.getText(DOWN_ARROW)})`)}`}
                    data-component-name="FilterBarDialogReorderBtnDown"
                  />
                  <Button
                    onClick={handleReorder}
                    design={ButtonDesign.Transparent}
                    icon={moveToBottomIcon}
                    data-reorder="bottom"
                    disabled={itemPosition === 'last'}
                    tooltip={`${i18nBundle.getText(MOVE_TO_BOTTOM, ` (${isomporphicReorderKey}+End`)})`}
                    data-component-name="FilterBarDialogReorderBtnBottom"
                  />
                </FlexBox>
              )}
              {active && (
                <>
                  <Icon name={circleTask2Icon} className={classNames.dialogActiveIcon} aria-hidden />
                  <span className={classNames.pseudoInvisibleText}>{i18nBundle.getText(FILTER_IS_ACTIVE)}</span>
                </>
              )}
            </TableCell>
          )}
        </TableRow>
      );
    }

    const labelWithGroupName = considerGroupName && groupName !== 'default' ? `${label} (${groupName})` : label;

    return (
      <div ref={ref} slot={slot} {...rest} className={clsx(classNames.filterItem, className)}>
        <div className={classNames.innerFilterItemContainer} data-in-filter-bar={true}>
          <FlexBox>
            <Label title={labelTooltip ?? label} required={required} showColon={!!label}>
              {labelWithGroupName}
            </Label>
          </FlexBox>
          {loading ? (
            <BusyIndicator className={classNames.loadingContainer} active size={BusyIndicatorSize.S} />
          ) : (
            children
          )}
        </div>
      </div>
    );
  }
);

FilterGroupItem.displayName = 'FilterGroupItem';

export { FilterGroupItem };
export type { FilterGroupItemPropTypes };
