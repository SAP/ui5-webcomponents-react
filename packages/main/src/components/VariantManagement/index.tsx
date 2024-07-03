'use client';

import '@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import IllustrationMessageType from '@ui5/webcomponents-fiori/dist/types/IllustrationMessageType.js';
import navDownIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ComponentElement, ReactElement } from 'react';
import { Children, cloneElement, forwardRef, isValidElement, useCallback, useEffect, useRef, useState } from 'react';
import { MANAGE, MY_VIEWS, SAVE, SAVE_AS, SEARCH, SEARCH_VARIANT, SELECT_VIEW } from '../../i18n/i18n-defaults.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import type { SelectedVariant } from '../../internal/VariantManagementContext.js';
import { VariantManagementContext } from '../../internal/VariantManagementContext.js';
import type { ResponsivePopoverDomRef } from '../../webComponents/index.js';
import {
  Bar,
  Button,
  Icon,
  IllustratedMessage,
  Input,
  List,
  ResponsivePopover,
  Title
} from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox/index.js';
import type { ManageViewsDialogPropTypes } from './ManageViewsDialog.js';
import { ManageViewsDialog } from './ManageViewsDialog.js';
import { SaveViewDialog } from './SaveViewDialog.js';
import type { VariantManagementPropTypes } from './types.js';
import type { VariantItemPropTypes } from './VariantItem.js';
import { classNames, styleData } from './VariantManagement.module.css.js';

/**
 * The `VariantManagement` component can be used to manage variants, such as FilterBar variants or AnalyticalTable variants.
 */
const VariantManagement = forwardRef<HTMLDivElement, VariantManagementPropTypes>((props, ref) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const {
    titleText = i18nBundle.getText(MY_VIEWS),
    className,
    style,
    placement = PopoverPlacement.Bottom,
    level = TitleLevel.H4,
    onSelect,
    closeOnItemSelect,
    disabled,
    onSaveAs,
    onSaveManageViews,
    showOnlyFavorites,
    inErrorState,
    hideShare,
    children,
    hideManageVariants,
    hideApplyAutomatically,
    hideSetAsDefault,
    hideCreatedBy,
    hideSaveAs,
    dirtyStateText = '*',
    dirtyState,
    onSave,
    onManageViewsCancel,
    onSaveViewCancel,
    ...rest
  } = props;

  useStylesheet(styleData, VariantManagement.displayName);
  const popoverRef = useRef<ResponsivePopoverDomRef>(null);

  const [safeChildren, setSafeChildren] = useState(Children.toArray(children));

  useEffect(() => {
    setSafeChildren(Children.toArray(children));
  }, [children]);

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [manageViewsDialogOpen, setManageViewsDialogOpen] = useState(false);
  const [saveAsDialogOpen, setSaveAsDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<SelectedVariant | undefined>(() => {
    const currentSelectedVariant = safeChildren.find(
      (item) => isValidElement(item) && (item as ReactElement<VariantItemPropTypes>).props.selected
    ) as ComponentElement<any, any>;
    if (currentSelectedVariant) {
      return { ...currentSelectedVariant.props, variantItem: currentSelectedVariant.ref };
    }
  });
  const [selectedSaveViewInputProps, setSelectedSaveViewInputProps] = useState(
    selectedVariant?.saveViewInputProps ?? {}
  );

  const handleClose = () => {
    setPopoverOpen(false);
  };

  const handleManageClick = () => {
    setManageViewsDialogOpen(true);
    handleClose();
  };
  const handleManageClose = () => {
    setManageViewsDialogOpen(false);
  };
  const handleOpenSaveAsDialog = () => {
    setSaveAsDialogOpen(true);
    handleClose();
  };
  const handleSaveAsClose = () => {
    setSaveAsDialogOpen(false);
  };

  const handleSave = (e) => {
    if (typeof onSave === 'function') {
      onSave(enrichEventWithDetails(e, selectedVariant as Record<string, any>));
    }
  };

  const handleSaveView = (e, selectedVariant) => {
    if (typeof onSaveAs === 'function') {
      onSaveAs(enrichEventWithDetails(e, selectedVariant));
    }
    setSelectedVariant(selectedVariant);
    if (!e.defaultPrevented) {
      handleSaveAsClose();
    }
  };

  const handleSaveManageViews = (e, payload) => {
    const { defaultView, updatedRows, deletedRows } = payload;
    const callbackProperties = { deletedVariants: [], prevVariants: [], updatedVariants: [], variants: [] };
    setSafeChildren((prev) =>
      Children.toArray(
        prev.map((child) => {
          if (!isValidElement(child)) {
            return false;
          }
          const castChild = child as ReactElement<VariantItemPropTypes>;
          let updatedProps: Omit<SelectedVariant, 'children' | 'variantItem'> = {};
          const currentVariant = popoverRef.current.querySelector(
            `ui5-li[data-children="${castChild.props.children}"]`
          );
          callbackProperties.prevVariants.push(castChild.props);
          if (defaultView) {
            if (defaultView === castChild.props.children) {
              updatedProps.isDefault = true;
            } else if (castChild.props.isDefault) {
              updatedProps.isDefault = false;
            }
          }
          if (Object.keys(updatedRows).includes(castChild.props.children)) {
            const { currentVariant: _0, ...rest } = updatedRows[castChild.props.children];
            updatedProps = { ...updatedProps, ...rest };
          }
          if (deletedRows.has(castChild.props.children)) {
            callbackProperties.deletedVariants.push(castChild.props);
            return false;
          }
          if (Object.keys(updatedProps).length > 0) {
            callbackProperties.updatedVariants.push({
              ...castChild.props,
              ...updatedProps,
              variantItem: currentVariant,
              prevVariant: { ...castChild.props }
            });
          }
          callbackProperties.variants.push({ ...castChild.props, ...updatedProps, variantItem: currentVariant });
          return cloneElement(castChild, updatedProps);
        })
      )
    );
    if (typeof onSaveManageViews === 'function') {
      onSaveManageViews(enrichEventWithDetails(e, callbackProperties));
    }
    if (!e.defaultPrevented) {
      handleManageClose();
    }
  };

  const handleOpenVariantManagement = useCallback(
    (e) => {
      popoverRef.current.opener = e.target;
      setPopoverOpen(true);
    },
    [popoverRef]
  );

  const handleCloseVariantManagement = (e) => {
    stopPropagation(e);
    setPopoverOpen(false);
  };

  const searchText = i18nBundle.getText(SEARCH);
  const saveAsText = i18nBundle.getText(SAVE_AS);
  const manageText = i18nBundle.getText(MANAGE);
  const saveText = i18nBundle.getText(SAVE);
  const a11ySearchText = i18nBundle.getText(SEARCH_VARIANT);
  const selectViewText = i18nBundle.getText(SELECT_VIEW);

  const variantManagementClasses = clsx(classNames.container, disabled && classNames.disabled, className);

  const dirtyStateClasses = clsx(classNames.dirtyState, dirtyStateText !== '*' && classNames.dirtyStateText);

  const selectVariantEventRef = useRef(undefined);
  useEffect(() => {
    if (selectVariantEventRef.current) {
      if (typeof onSelect === 'function') {
        onSelect(enrichEventWithDetails(selectVariantEventRef.current, { selectedVariant }));
        selectVariantEventRef.current = undefined;
      }
    }
  }, [selectedVariant, onSelect]);

  useEffect(() => {
    const selectedChild = safeChildren.find(
      (item) =>
        isValidElement(item) &&
        (item as ReactElement<VariantItemPropTypes>).props.children === selectedVariant?.children
    ) as ReactElement<VariantItemPropTypes>;
    setSelectedSaveViewInputProps(selectedChild?.props.saveViewInputProps ?? {});
  }, [selectedVariant, safeChildren]);

  const handleVariantItemSelect = (e) => {
    setSelectedVariant({ ...e.detail.selectedItems[0].dataset, variantItem: e.detail.selectedItems[0] });
    selectVariantEventRef.current = e;
    if (closeOnItemSelect) {
      handleClose();
    }
  };

  const variantNames = safeChildren.map((item) =>
    isValidElement(item) && typeof (item as ReactElement<VariantItemPropTypes>).props?.children === 'string'
      ? (item as ReactElement<VariantItemPropTypes>).props.children
      : ''
  );

  const [favoriteChildren, setFavoriteChildren] = useState(undefined);

  useEffect(() => {
    if (showOnlyFavorites) {
      setFavoriteChildren(
        safeChildren.filter((child) => {
          return (
            isValidElement(child) &&
            ((child as ReactElement<VariantItemPropTypes>).props.favorite ||
              (child as ReactElement<VariantItemPropTypes>).props.isDefault)
          );
        })
      );
    }
    if (!showOnlyFavorites && favoriteChildren?.length > 0) {
      setFavoriteChildren(undefined);
    }
  }, [showOnlyFavorites, safeChildren]);

  const safeChildrenWithFavorites = favoriteChildren ?? safeChildren;
  const showInput = safeChildrenWithFavorites.length > 10;

  const [filteredChildren, setFilteredChildren] = useState(undefined);
  const [searchValue, setSearchValue] = useState('');
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
    setFilteredChildren(
      safeChildrenWithFavorites.filter(
        (child: ComponentElement<any, any>) =>
          typeof child?.props?.children === 'string' &&
          child.props.children.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    if (filteredChildren) {
      setFilteredChildren(
        safeChildrenWithFavorites.filter(
          (child: ComponentElement<any, any>) =>
            typeof child?.props?.children === 'string' && child.props.children.toLowerCase().includes(searchValue)
        )
      );
    }
  }, [safeChildrenWithFavorites]);

  // todo: this applies if `readOnly` is set to `false` as well since the value is read via data-attribute and is therefore a string not a boolean
  const showSaveBtn = dirtyState && !selectedVariant?.hasOwnProperty('readOnly');

  return (
    <div className={variantManagementClasses} style={style} {...rest} ref={ref}>
      <VariantManagementContext.Provider
        value={{
          selectVariantItem: setSelectedVariant
        }}
      >
        <FlexBox onClick={disabled ? undefined : handleOpenVariantManagement}>
          <Title level={level} className={classNames.title}>
            {selectedVariant?.children}
          </Title>
          {dirtyState && <div className={dirtyStateClasses}>{dirtyStateText}</div>}
        </FlexBox>
        <Button
          className={clsx(classNames.navDownBtn, 'ui5-content-density-compact')}
          tooltip={selectViewText}
          accessibleName={selectViewText}
          onClick={disabled ? undefined : handleOpenVariantManagement}
          design={ButtonDesign.Transparent}
          icon={navDownIcon}
          disabled={disabled}
        />

        <ResponsivePopover
          open={popoverOpen}
          className={classNames.popover}
          ref={popoverRef}
          headerText={titleText}
          placement={placement}
          footer={
            (showSaveBtn || !hideSaveAs || !hideManageVariants) && (
              <Bar
                design={BarDesign.Footer}
                className={classNames.footer}
                endContent={
                  <>
                    {!inErrorState && showSaveBtn && (
                      <Button onClick={handleSave} design={ButtonDesign.Emphasized}>
                        {saveText}
                      </Button>
                    )}
                    {!inErrorState && !hideSaveAs && (
                      <Button
                        onClick={handleOpenSaveAsDialog}
                        design={showSaveBtn ? ButtonDesign.Transparent : ButtonDesign.Emphasized}
                        disabled={!selectedVariant || Object.keys(selectedVariant).length === 0}
                      >
                        {saveAsText}
                      </Button>
                    )}
                    {!inErrorState && !hideManageVariants && (
                      <Button
                        onClick={handleManageClick}
                        design={showSaveBtn || !hideSaveAs ? ButtonDesign.Transparent : ButtonDesign.Emphasized}
                      >
                        {manageText}
                      </Button>
                    )}
                  </>
                }
              />
            )
          }
          onClose={handleCloseVariantManagement}
        >
          {inErrorState ? (
            <IllustratedMessage name={IllustrationMessageType.UnableToLoad} />
          ) : (
            <List
              onSelectionChange={handleVariantItemSelect}
              selectionMode={ListSelectionMode.Single}
              header={
                showInput ? (
                  <div className={classNames.searchInputContainer} tabIndex={-1}>
                    <Input
                      className={classNames.searchInput}
                      accessibleName={a11ySearchText}
                      value={searchValue}
                      placeholder={searchText}
                      onInput={handleSearchInput}
                      showClearIcon
                      icon={<Icon name={searchIcon} className={classNames.inputIcon} />}
                    />
                  </div>
                ) : undefined
              }
            >
              {filteredChildren ?? safeChildrenWithFavorites}
            </List>
          )}
        </ResponsivePopover>
        {manageViewsDialogOpen && (
          <ManageViewsDialog
            onAfterClose={handleManageClose}
            onManageViewsCancel={onManageViewsCancel}
            handleSaveManageViews={handleSaveManageViews}
            showShare={!hideShare}
            showApplyAutomatically={!hideApplyAutomatically}
            showCreatedBy={!hideCreatedBy}
            showSetAsDefault={!hideSetAsDefault}
            variantNames={variantNames}
            showOnlyFavorites={showOnlyFavorites}
          >
            {safeChildren as unknown as ManageViewsDialogPropTypes['children']}
          </ManageViewsDialog>
        )}
        {saveAsDialogOpen && (
          <SaveViewDialog
            onSaveViewCancel={onSaveViewCancel}
            saveViewInputProps={selectedSaveViewInputProps}
            showShare={!hideShare}
            showApplyAutomatically={!hideApplyAutomatically}
            showSetAsDefault={!hideSetAsDefault}
            onAfterClose={handleSaveAsClose}
            handleSave={handleSaveView}
            selectedVariant={selectedVariant}
            variantNames={variantNames}
          />
        )}
      </VariantManagementContext.Provider>
    </div>
  );
});

VariantManagement.displayName = 'VariantManagement';

export { VariantManagement };
export type { VariantManagementPropTypes };
