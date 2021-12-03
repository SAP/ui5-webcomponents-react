import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming.js';
import '@ui5/webcomponents-icons/dist/decline.js';
import '@ui5/webcomponents-icons/dist/search.js';
import { useI18nBundle, useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import {
  CANCEL,
  CLEAR,
  RESET,
  SEARCH,
  SELECT,
  SELECTED
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { BarDesign } from '@ui5/webcomponents-react/lib/BarDesign';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Dialog, DialogPropTypes } from '@ui5/webcomponents-react/lib/Dialog';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { List, ListPropTypes } from '@ui5/webcomponents-react/lib/List';
import { ListGrowingMode } from '@ui5/webcomponents-react/lib/ListGrowingMode';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import React, { forwardRef, ReactNode, RefObject, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    dialog: { '--_ui5_popup_content_padding': 0 },
    spread: { width: '100%' },
    noShadow: { boxShadow: 'none' },
    inputIcon: { cursor: 'pointer', color: ThemingParameters.sapContent_IconColor },
    infoBar: { padding: '0 0.5rem' }
  },
  { name: 'SelectDialog' }
);

// necessary for draggable dialog
addCustomCSS(
  'ui5-dialog',
  `
:host([data-component-name="SelectDialog"]) .ui5-popup-header-root {
  flex-direction: column;
}
 `
);

addCustomCSS(
  'ui5-bar',
  `
:host([data-component-name="SelectDialogSubHeader"]) .ui5-bar-midcontent-container {
  width: 100%;
}

:host([data-component-name="SelectDialogSubHeader"]) .ui5-bar-startcontent-container {
  display: none;
}

:host([data-component-name="SelectDialogSubHeader"]) .ui5-bar-endcontent-container {
  display: none;
}
 `
);

export interface SelectDialogPropTypes extends Omit<DialogPropTypes, 'header' | 'headerText' | 'footer' | 'children'> {
  /**
   * Defines the list items of the component.
   *
   * __Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `StandardListItem` in order to preserve the intended design.
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
   * Defines the mode of the SelectDialog list.
   *
   * __Note:__ Although this prop accepts all `ListMode`s, it is strongly recommended that you only use `SingleSelect` or `MultiSelect` in order to preserve the intended design.
   */
  mode?: ListMode | keyof typeof ListMode;
  /**
   * Defines whether the `List` will have growing capability either by pressing a `More` button, or via user scroll. In both cases the `onLoadMore` event is fired.
   *
   * Available options:
   *
   * `Button` - Shows a `More` button at the bottom of the list, pressing of which triggers the `load-more` event.
   * `Scroll` - The `load-more` event is triggered when the user scrolls to the bottom of the list;
   * `None` (default) - The growing is off.
   *
   * **Limitations:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.
   */
  growing?: ListGrowingMode | keyof typeof ListGrowingMode;
  /**
   * Defines props you can pass to the internal `List` component.
   *
   * __Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.
   */
  listProps?: Omit<ListPropTypes, 'mode' | 'children' | 'footerText' | 'growing' | 'onLoadMore'>;
  /**
   * This event will be fired when the value of the search field is changed by a user - e.g. at each key press
   */
  onSearchInput?: (event: CustomEvent<{ value: string }>) => void;
  /**
   * This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.
   */
  onSearch?: (event: CustomEvent<{ value: string }>) => void;
  /**
   * This event will be fired when the reset button has been clicked in the search field.
   */
  onSearchReset?: (event: CustomEvent<{ prevValue: string }>) => void;
  /**
   * This event will be fired when the clear button has been clicked.
   */
  onClear?: (event: CustomEvent<{ prevSelectedItems: HTMLElement[] }>) => void;
  /**
   * This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.
   */
  onConfirm?: (event: CustomEvent<{ selectedItems: HTMLElement[] }>) => void;
  /**
   * Fired when the user scrolls to the bottom of the list.
   *
   * **Note:** The event is fired when the `growing='Scroll'` property is enabled.
   */
  onLoadMore?: (event: CustomEvent) => void;
}

/**
 * The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.
 */
const SelectDialog = forwardRef((props: SelectDialogPropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    children,
    className,
    confirmButtonText,
    growing,
    headerText,
    headerTextAlignCenter,
    listProps,
    mode,
    rememberSelections,
    showClearButton,
    onAfterClose,
    onClear,
    onConfirm,
    onLoadMore,
    onSearch,
    onSearchInput,
    onSearchReset,
    ...rest
  } = props;
  const classes = useStyles();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const [searchValue, setSearchValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [listMounted, setListMounted] = useState(true);
  const selectDialogRef = useConsolidatedRef(ref);

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
    if (mode === ListMode.MultiSelect) {
      setSelectedItems(e.detail.selectedItems);
    } else {
      if (typeof onConfirm === 'function') {
        onConfirm(e);
      }
      selectDialogRef.current.close();
    }
  };

  const handleClose = () => {
    selectDialogRef.current.close();
  };

  const handleClear = (e) => {
    if (typeof onClear === 'function') {
      onClear(enrichEventWithDetails(e, { prevSelectedItems: selectedItems }));
    }
    setSelectedItems([]);
    setListMounted(false);
    setListMounted(true);
  };

  const handleConfirm = (e) => {
    if (typeof onConfirm === 'function') {
      onConfirm(enrichEventWithDetails(e, { selectedItems }));
    }
    selectDialogRef.current.close();
  };

  const handleAfterClose = (e) => {
    if (typeof onAfterClose === 'function') {
      onAfterClose(e);
    }
    if (!rememberSelections) {
      setListMounted(false);
      setListMounted(true);
    }
  };

  const classNames = StyleClassHelper.of(classes.dialog).putIfPresent(className).className;
  return (
    <Dialog
      {...rest}
      data-component-name="SelectDialog"
      ref={selectDialogRef}
      className={classNames}
      footer={
        <Bar
          design={BarDesign.Footer}
          endContent={
            <>
              <Button onClick={handleClose} design={ButtonDesign.Transparent}>
                {i18nBundle.getText(CANCEL)}
              </Button>
              {mode === ListMode.MultiSelect && (
                <Button onClick={handleConfirm} design={ButtonDesign.Emphasized}>
                  {confirmButtonText ?? i18nBundle.getText(SELECT)}
                </Button>
              )}
            </>
          }
        />
      }
      onAfterClose={handleAfterClose}
    >
      <Bar
        slot="header"
        startContent={!headerTextAlignCenter && <Title>{headerText}</Title>}
        endContent={
          showClearButton && (
            <Button onClick={handleClear} design={ButtonDesign.Transparent}>
              {i18nBundle.getText(CLEAR)}
            </Button>
          )
        }
        design={BarDesign.Header}
        className={`${classes.noShadow} ${classes.spread}`}
      >
        {headerTextAlignCenter && <Title>{headerText}</Title>}
      </Bar>
      <Bar
        slot="header"
        design={BarDesign.Subheader}
        data-component-name="SelectDialogSubHeader"
        className={classes.noShadow}
      >
        <Input
          slot="middleContent"
          className={classes.spread}
          value={searchValue}
          placeholder={i18nBundle.getText(SEARCH)}
          onInput={handleSearchInput}
          onKeyUp={handleSearchSubmit}
          icon={
            <>
              {searchValue && (
                <Icon
                  accessibleName={i18nBundle.getText(RESET)}
                  tooltip={i18nBundle.getText(RESET)}
                  name="decline"
                  interactive
                  onClick={handleResetSearch}
                  className={classes.inputIcon}
                />
              )}
              <Icon
                name="search"
                className={classes.inputIcon}
                onClick={handleSearchSubmit}
                accessibleName={i18nBundle.getText(SEARCH)}
                tooltip={i18nBundle.getText(SEARCH)}
              />
            </>
          }
        />
      </Bar>
      <List
        {...listProps}
        growing={growing}
        onLoadMore={onLoadMore}
        mode={mode}
        header={
          mode === ListMode.MultiSelect &&
          !!selectedItems.length && (
            <Toolbar design={ToolbarDesign.Info} className={classes.infoBar}>
              <Text>{`${i18nBundle.getText(SELECTED)}: ${selectedItems.length}`}</Text>
            </Toolbar>
          )
        }
        onSelectionChange={handleSelectionChange}
      >
        {listMounted && children}
      </List>
    </Dialog>
  );
});

SelectDialog.defaultProps = {
  mode: ListMode.SingleSelect,
  listProps: {}
};

SelectDialog.displayName = 'SelectDialog';

export { SelectDialog };
