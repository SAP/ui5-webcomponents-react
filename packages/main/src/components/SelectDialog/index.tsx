'use client';

import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconSearch from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { forwardRef, useEffect, useState } from 'react';
import { CANCEL, CLEAR, RESET, SEARCH, SELECT, SELECTED } from '../../i18n/i18n-defaults.js';
import type { Ui5CustomEvent } from '../../types/index.js';
import type {
  ButtonDomRef,
  ButtonPropTypes,
  DialogDomRef,
  DialogPropTypes,
  IconDomRef,
  InputDomRef,
  ListDomRef,
  ListPropTypes,
  ListItemStandardDomRef
} from '../../webComponents/index.js';
import { Button, Dialog, Icon, Input, List, Title } from '../../webComponents/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { Toolbar } from '../Toolbar/index.js';
import { classNames, styleData } from './SelectDialog.module.css.js';

interface ListDomRefWithPrivateAPIs extends ListDomRef {
  get hasData(): boolean;

  getSelectedItems(): HTMLElement[];

  deselectSelectedItems(): void;

  focusFirstItem(): void;
}

export interface SelectDialogPropTypes
  extends Omit<DialogPropTypes, 'header' | 'headerText' | 'footer' | 'children' | 'state'>,
    Pick<ListPropTypes, 'growing' | 'onLoadMore'> {
  /**
   * Defines the list items of the component.
   *
   * __Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.
   */
  showClearButton?: boolean;
  /**
   * Defines the header text.
   */
  headerText?: string;
  /**
   * Specifies the `headerText` alignment.
   */
  headerTextAlignCenter?: boolean;
  /**
   * Overwrites the default text for the confirmation button.
   */
  confirmButtonText?: string;
  /**
   * This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.
   *
   * __Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.
   */
  rememberSelections?: boolean;
  /**
   * Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.
   */
  numberOfSelectedItems?: number;
  /**
   * Defines the mode of the SelectDialog list.
   *
   * __Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.
   *
   * @default ListSelectionMode.Single
   */
  selectionMode?: ListPropTypes['selectionMode'];
  /**
   * Defines props you can pass to the internal `List` component.
   *
   * __Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.
   *
   * @default {}
   */
  listProps?: Omit<ListPropTypes, 'selectionMode' | 'children' | 'footerText' | 'growing' | 'onLoadMore'>;
  /**
   * Defines the props of the confirm button.
   *
   * __Note:__`onClick` and `design` are not supported.
   *
   * @since 1.25.0
   */
  confirmButtonProps?: Omit<ButtonPropTypes, 'onClick' | 'design'>;
  /**
   * This event will be fired when the value of the search field is changed by a user - e.g. at each key press
   */
  onSearchInput?: (event: Ui5CustomEvent<InputDomRef, { value: string }>) => void;
  /**
   * This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.
   */
  onSearch?:
    | ((event: Ui5CustomEvent<InputDomRef, { value: string }>) => void)
    | ((event: Ui5CustomEvent<IconDomRef, { value: string }>) => void);
  /**
   * This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.
   */
  onSearchReset?: (event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number }>) => void;
  /**
   * This event will be fired when the clear button has been clicked.
   */
  onClear?: (
    event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number }>
  ) => void;
  /**
   * This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.
   */
  onConfirm?:
    | ((event: Ui5CustomEvent<ListDomRef, { selectedItems: ListItemStandardDomRef[] }>) => void)
    | ((event: Ui5CustomEvent<ButtonDomRef, { selectedItems: ListItemStandardDomRef[] }>) => void);
  /**
   * This event will be fired when the cancel button is clicked or ESC key is pressed.
   */
  onCancel?: ButtonPropTypes['onClick'] | DialogPropTypes['onBeforeClose'];
}

/**
 * The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.
 */
const SelectDialog = forwardRef<DialogDomRef, SelectDialogPropTypes>((props, ref) => {
  const {
    open,
    children,
    className,
    confirmButtonText,
    confirmButtonProps,
    growing,
    headerText,
    headerTextAlignCenter,
    listProps = {},
    selectionMode = ListSelectionMode.Single,
    numberOfSelectedItems,
    rememberSelections,
    showClearButton,
    onClose,
    onClear,
    onConfirm,
    onLoadMore,
    onSearch,
    onSearchInput,
    onSearchReset,
    onBeforeOpen,
    onBeforeClose,
    onOpen,
    onCancel,
    ...rest
  } = props;

  useStylesheet(styleData, SelectDialog.displayName);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const [searchValue, setSearchValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [listComponentRef, listRef] = useSyncRef<ListDomRefWithPrivateAPIs>((listProps as any).ref);
  const [internalOpen, setInternalOpen] = useState(open);
  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const handleBeforeOpen = (e) => {
    const localSelectedItems = listRef.current?.getSelectedItems() ?? [];
    if (typeof onBeforeOpen === 'function') {
      onBeforeOpen(e);
    }
    if (selectionMode === ListSelectionMode.Multiple && listRef.current?.hasData) {
      setSelectedItems(localSelectedItems);
    }
  };

  const handleAfterOpen = (e) => {
    if (typeof onOpen === 'function') {
      onOpen(e);
    }
    listRef.current?.focusFirstItem();
  };

  const handleSearchInput = (e) => {
    if (typeof onSearchInput === 'function') {
      onSearchInput(enrichEventWithDetails(e, { value: e.target.value }));
    }
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    if (typeof onSearch === 'function') {
      if (e.type === 'keyup' && e.code === 'Enter') {
        onSearch(enrichEventWithDetails(e, { value: e.target.value }));
      }
      if (e.type === 'click') {
        onSearch(enrichEventWithDetails(e, { value: searchValue }));
      }
    }
  };
  const handleResetSearch = (e) => {
    if (typeof onSearchReset === 'function') {
      onSearchReset(enrichEventWithDetails(e, { prevValue: searchValue }));
    }
    setSearchValue('');
  };

  const handleSelectionChange = (e) => {
    if (typeof listProps?.onSelectionChange === 'function') {
      listProps.onSelectionChange(e);
    }
    if (selectionMode === ListSelectionMode.Multiple) {
      setSelectedItems(e.detail.selectedItems);
    } else {
      if (typeof onConfirm === 'function') {
        onConfirm(e);
      }
      setInternalOpen(false);
    }
  };

  const handleClose = (e) => {
    setInternalOpen(false);
    if (typeof onCancel === 'function') {
      onCancel(e);
    }
  };

  const handleClear = (e) => {
    if (typeof onClear === 'function') {
      onClear(enrichEventWithDetails(e, { prevSelectedItems: selectedItems }));
    }
    setSelectedItems([]);
    listRef.current?.deselectSelectedItems();
  };

  const handleConfirm = (e) => {
    if (typeof onConfirm === 'function') {
      onConfirm(enrichEventWithDetails(e, { selectedItems }));
    }
    setInternalOpen(false);
  };

  const handleAfterClose = (e) => {
    setInternalOpen(false);
    if (typeof onClose === 'function') {
      onClose(e);
    }
    if (typeof onSearchReset === 'function') {
      onSearchReset(enrichEventWithDetails(e, { prevValue: searchValue }));
    }
    setSearchValue('');
    if (!rememberSelections) {
      listRef.current?.deselectSelectedItems();
    }
  };

  const handleBeforeClose = (e) => {
    if (typeof onBeforeClose === 'function') {
      onBeforeClose(e);
    }
    if (typeof onCancel === 'function' && e.detail.escPressed) {
      onCancel(e);
    }
  };

  return (
    <Dialog
      {...rest}
      open={internalOpen}
      data-component-name="SelectDialog"
      ref={ref}
      className={clsx(classNames.dialog, className)}
      onClose={handleAfterClose}
      onBeforeOpen={handleBeforeOpen}
      onOpen={handleAfterOpen}
      onBeforeClose={handleBeforeClose}
    >
      <div className={classNames.headerContent} slot="header">
        {showClearButton && headerTextAlignCenter && (
          <Button
            onClick={handleClear}
            design={ButtonDesign.Transparent}
            className={classNames.hiddenClearBtn}
            tabIndex={-1}
            aria-hidden="true"
          >
            {i18nBundle.getText(CLEAR)}
          </Button>
        )}
        <Title className={clsx(classNames.title, headerTextAlignCenter && classNames.titleCenterAlign)}>
          {headerText}
        </Title>
        {showClearButton && (
          <Button onClick={handleClear} design={ButtonDesign.Transparent} className={classNames.clearBtn}>
            {i18nBundle.getText(CLEAR)}
          </Button>
        )}
        <Input
          className={classNames.input}
          accessibleName={i18nBundle.getText(SEARCH)}
          value={searchValue}
          placeholder={i18nBundle.getText(SEARCH)}
          onInput={handleSearchInput}
          onKeyUp={handleSearchSubmit}
          icon={
            <>
              {searchValue && (
                <Icon
                  accessibleName={i18nBundle.getText(RESET)}
                  title={i18nBundle.getText(RESET)}
                  name={iconDecline}
                  mode={IconMode.Interactive}
                  onClick={handleResetSearch}
                  className={classNames.inputIcon}
                />
              )}
              <Icon
                mode={IconMode.Interactive}
                name={iconSearch}
                className={classNames.inputIcon}
                onClick={handleSearchSubmit}
                accessibleName={i18nBundle.getText(SEARCH)}
                title={i18nBundle.getText(SEARCH)}
              />
            </>
          }
        />
      </div>

      {selectionMode === ListSelectionMode.Multiple && (!!selectedItems.length || numberOfSelectedItems > 0) && (
        <Toolbar design="Info" className={classNames.infoBar}>
          <Text>{`${i18nBundle.getText(SELECTED)}: ${numberOfSelectedItems ?? selectedItems.length}`}</Text>
        </Toolbar>
      )}
      <List
        {...listProps}
        ref={listComponentRef}
        growing={growing}
        onLoadMore={onLoadMore}
        selectionMode={selectionMode}
        onSelectionChange={handleSelectionChange}
      >
        {children}
      </List>
      <div slot="footer" className={classNames.footer}>
        {selectionMode === ListSelectionMode.Multiple && (
          <Button {...confirmButtonProps} onClick={handleConfirm} design={ButtonDesign.Emphasized}>
            {confirmButtonText ?? i18nBundle.getText(SELECT)}
          </Button>
        )}
        <Button onClick={handleClose} design={ButtonDesign.Transparent}>
          {i18nBundle.getText(CANCEL)}
        </Button>
      </div>
    </Dialog>
  );
});

SelectDialog.displayName = 'SelectDialog';

export { SelectDialog };
