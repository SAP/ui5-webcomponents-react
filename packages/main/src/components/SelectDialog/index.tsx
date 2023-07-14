'use client';

import iconDecline from '@ui5/webcomponents-icons/dist/decline.js';
import iconSearch from '@ui5/webcomponents-icons/dist/search.js';
import {
  CssSizeVariables,
  enrichEventWithDetails,
  ThemingParameters,
  useI18nBundle,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonDesign, ListMode, ToolbarDesign } from '../../enums/index.js';
import { CANCEL, CLEAR, RESET, SEARCH, SELECT, SELECTED } from '../../i18n/i18n-defaults.js';
import type { Ui5CustomEvent } from '../../interfaces/index.js';
import type {
  ButtonDomRef,
  DialogDomRef,
  DialogPropTypes,
  IconDomRef,
  InputDomRef,
  ListDomRef,
  ListPropTypes,
  StandardListItemDomRef
} from '../../webComponents/index.js';
import { Button, Dialog, Icon, Input, List, Title } from '../../webComponents/index.js';
import { Text } from '../Text/index.js';
import { Toolbar } from '../Toolbar/index.js';

const useStyles = createUseStyles(
  {
    dialog: {
      '&::part(header)': {
        paddingBottom: '0.25rem',
        flexDirection: 'column',
        marginBottom: 0
      },
      '&::part(content)': {
        padding: 0
      }
    },
    headerContent: {
      display: 'grid',
      gridTemplateColumns: 'fit-content(100px) minmax(0, 1fr) fit-content(100px)',
      gridTemplateAreas: `
      "titleStart titleCenter cancel"
      "input input input"
      `,
      gridTemplateRows: `${CssSizeVariables.ui5WcrDialogHeaderHeight} ${CssSizeVariables.ui5WcrDialogSubHeaderHeight}`,
      width: '100%',
      alignItems: 'center'
    },
    title: {
      fontSize: ThemingParameters.sapFontLargeSize,
      fontFamily: ThemingParameters.sapFontHeaderFamily,
      gridColumnStart: 'titleStart',
      gridColumnEnd: 'titleCenter',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    titleCenterAlign: {
      gridArea: 'titleCenter',
      justifySelf: 'center'
    },
    hiddenClearBtn: {
      gridArea: 'titleStart',
      visibility: 'hidden'
    },
    clearBtn: {
      gridArea: 'cancel',
      justifySelf: 'end'
    },
    input: {
      gridArea: 'input',
      width: '100%'
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      width: '100%',
      boxSizing: 'border-box',
      '& > *': {
        marginInlineStart: '0.5rem'
      }
    },
    inputIcon: { cursor: 'pointer', color: ThemingParameters.sapContent_IconColor },
    infoBar: { padding: '0 0.5rem', position: 'sticky', top: 0, zIndex: 1 }
  },
  { name: 'SelectDialog' }
);

interface ListDomRefWithPrivateAPIs extends ListDomRef {
  get hasData(): boolean;

  getSelectedItems(): HTMLElement[];

  deselectSelectedItems(): void;

  focusFirstItem(): void;
}

export interface SelectDialogPropTypes
  extends Omit<DialogPropTypes, 'header' | 'headerText' | 'footer' | 'children'>,
    Pick<ListPropTypes, 'growing' | 'onLoadMore'> {
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
  mode?: ListPropTypes['mode'];
  /**
   * Defines props you can pass to the internal `List` component.
   *
   * __Note:__ `mode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.
   */
  listProps?: Omit<ListPropTypes, 'mode' | 'children' | 'footerText' | 'growing' | 'onLoadMore'>;
  /**
   * Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.
   */
  numberOfSelectedItems?: number;
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
  onSearchReset?: (event: Ui5CustomEvent<IconDomRef, { prevValue: string }>) => void;
  /**
   * This event will be fired when the clear button has been clicked.
   */
  onClear?: (event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: StandardListItemDomRef[] }>) => void;
  /**
   * This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.
   */
  onConfirm?:
    | ((event: Ui5CustomEvent<ListDomRef, { selectedItems: StandardListItemDomRef[] }>) => void)
    | ((event: Ui5CustomEvent<ButtonDomRef, { selectedItems: StandardListItemDomRef[] }>) => void);
}

/**
 * The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.
 */
const SelectDialog = forwardRef<DialogDomRef, SelectDialogPropTypes>((props, ref) => {
  const {
    children,
    className,
    confirmButtonText,
    growing,
    headerText,
    headerTextAlignCenter,
    listProps,
    mode,
    numberOfSelectedItems,
    rememberSelections,
    showClearButton,
    onAfterClose,
    onClear,
    onConfirm,
    onLoadMore,
    onSearch,
    onSearchInput,
    onSearchReset,
    onBeforeOpen,
    onAfterOpen,
    ...rest
  } = props;

  const classes = useStyles();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const [searchValue, setSearchValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [componentRef, selectDialogRef] = useSyncRef(ref);
  const [listComponentRef, listRef] = useSyncRef<ListDomRefWithPrivateAPIs>((listProps as any).ref);

  const handleBeforeOpen = (e) => {
    if (typeof onBeforeOpen === 'function') {
      onBeforeOpen(e);
    }
    if (mode === ListMode.MultiSelect && listRef.current?.hasData) {
      setSelectedItems(listRef.current?.getSelectedItems() ?? []);
    }
  };

  const handleAfterOpen = (e) => {
    if (typeof onAfterOpen === 'function') {
      onAfterOpen(e);
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
    listRef.current?.deselectSelectedItems();
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
    if (typeof onSearchReset === 'function') {
      onSearchReset(enrichEventWithDetails(e, { prevValue: searchValue }));
    }
    setSearchValue('');
    if (!rememberSelections) {
      listRef.current?.deselectSelectedItems();
    }
  };

  return (
    <Dialog
      {...rest}
      data-component-name="SelectDialog"
      ref={componentRef}
      className={clsx(classes.dialog, className)}
      onAfterClose={handleAfterClose}
      onBeforeOpen={handleBeforeOpen}
      onAfterOpen={handleAfterOpen}
    >
      <div className={classes.headerContent} slot="header">
        {showClearButton && headerTextAlignCenter && (
          <Button
            onClick={handleClear}
            design={ButtonDesign.Transparent}
            className={classes.hiddenClearBtn}
            tabIndex={-1}
            aria-hidden="true"
          >
            {i18nBundle.getText(CLEAR)}
          </Button>
        )}
        <Title className={clsx(classes.title, headerTextAlignCenter && classes.titleCenterAlign)}>{headerText}</Title>
        {showClearButton && (
          <Button onClick={handleClear} design={ButtonDesign.Transparent} className={classes.clearBtn}>
            {i18nBundle.getText(CLEAR)}
          </Button>
        )}
        <Input
          className={classes.input}
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
                  interactive
                  onClick={handleResetSearch}
                  className={classes.inputIcon}
                />
              )}
              <Icon
                interactive
                name={iconSearch}
                className={classes.inputIcon}
                onClick={handleSearchSubmit}
                accessibleName={i18nBundle.getText(SEARCH)}
                title={i18nBundle.getText(SEARCH)}
              />
            </>
          }
        />
      </div>

      {mode === ListMode.MultiSelect && (!!selectedItems.length || numberOfSelectedItems > 0) && (
        <Toolbar design={ToolbarDesign.Info} className={classes.infoBar}>
          <Text>{`${i18nBundle.getText(SELECTED)}: ${numberOfSelectedItems ?? selectedItems.length}`}</Text>
        </Toolbar>
      )}
      <List
        {...listProps}
        ref={listComponentRef}
        growing={growing}
        onLoadMore={onLoadMore}
        mode={mode}
        onSelectionChange={handleSelectionChange}
      >
        {children}
      </List>
      <div slot="footer" className={classes.footer}>
        {mode === ListMode.MultiSelect && (
          <Button onClick={handleConfirm} design={ButtonDesign.Emphasized}>
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

SelectDialog.defaultProps = {
  mode: ListMode.SingleSelect,
  listProps: {}
};

SelectDialog.displayName = 'SelectDialog';

export { SelectDialog };
