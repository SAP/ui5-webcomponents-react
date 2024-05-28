'use client';

import '@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import navDownIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ComponentElement, ReactElement } from 'react';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import {
  ButtonDesign,
  IllustrationMessageType,
  ListMode,
  PopoverPlacementType,
  TitleLevel
} from '../../enums/index.js';
import { MANAGE, MY_VIEWS, SAVE, SAVE_AS, SEARCH, SEARCH_VARIANT, SELECT_VIEW } from '../../i18n/i18n-defaults.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
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
    placement = PopoverPlacementType.Bottom,
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
    portalContainer,
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

  const [manageViewsDialogOpen, setManageViewsDialogOpen] = useState(false);
  const [saveAsDialogOpen, setSaveAsDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<SelectedVariant | undefined>(() => {
    const currentSelectedVariant = safeChildren.find(
      (item) => isValidElement(item) && item.props.selected
    ) as ComponentElement<any, any>;
    if (currentSelectedVariant) {
      return { ...currentSelectedVariant.props, variantItem: currentSelectedVariant.ref };
    }
  });
  const [selectedSaveViewInputProps, setSelectedSaveViewInputProps] = useState(
    selectedVariant?.saveViewInputProps ?? {}
  );

  const handleClose = () => {
    popoverRef.current.close();
  };

  const handleManageClick = () => {
    setManageViewsDialogOpen(true);
  };
  const handleManageClose = () => {
    setManageViewsDialogOpen(false);
  };
  const handleOpenSaveAsDialog = () => {
    setSaveAsDialogOpen(true);
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
          let updatedProps: Omit<SelectedVariant, 'children' | 'variantItem'> = {};
          const currentVariant = popoverRef.current.querySelector(`ui5-li[data-children="${child.props.children}"]`);
          callbackProperties.prevVariants.push(child.props);
          if (defaultView) {
            if (defaultView === child.props.children) {
              updatedProps.isDefault = true;
            } else if (child.props.isDefault) {
              updatedProps.isDefault = false;
            }
          }
          if (Object.keys(updatedRows).includes(child.props.children)) {
            const { currentVariant: _0, ...rest } = updatedRows[child.props.children];
            updatedProps = { ...updatedProps, ...rest };
          }
          if (deletedRows.has(child.props.children)) {
            callbackProperties.deletedVariants.push(child.props);
            return false;
          }
          if (Object.keys(updatedProps).length > 0) {
            callbackProperties.updatedVariants.push({
              ...child.props,
              ...updatedProps,
              variantItem: currentVariant,
              prevVariant: { ...child.props }
            });
          }
          callbackProperties.variants.push({ ...child.props, ...updatedProps, variantItem: currentVariant });
          return cloneElement(child, updatedProps);
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
      popoverRef.current.showAt(e.target);
    },
    [popoverRef]
  );

  const searchText = i18nBundle.getText(SEARCH);
  const saveAsText = i18nBundle.getText(SAVE_AS);
  const manageText = i18nBundle.getText(MANAGE);
  const saveText = i18nBundle.getText(SAVE);
  const a11ySearchText = i18nBundle.getText(SEARCH_VARIANT);
  const selectViewText = i18nBundle.getText(SELECT_VIEW);

  const variantManagementClasses = clsx(classNames.container, disabled && classNames.disabled, className);

  const dirtyStateClasses = clsx(classNames.dirtyState, dirtyStateText !== '*' && classNames.dirtyStateText);

  const selectVariantEventRef = useRef();
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
      (item) => isValidElement(item) && item.props.children === selectedVariant?.children
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
    isValidElement(item) && typeof item.props?.children === 'string' ? item.props.children : ''
  );

  const [favoriteChildren, setFavoriteChildren] = useState(undefined);

  useEffect(() => {
    if (showOnlyFavorites) {
      setFavoriteChildren(
        safeChildren.filter((child) => isValidElement(child) && (child.props.favorite || child.props.isDefault))
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

  const canRenderPortal = useCanRenderPortal();

  const showSaveBtn = dirtyState && !selectedVariant?.readOnly;
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
        {canRenderPortal
          ? createPortal(
              <ResponsivePopover
                className={classNames.popover}
                ref={popoverRef}
                headerText={titleText}
                placementType={placement}
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
                onAfterClose={stopPropagation}
              >
                {inErrorState ? (
                  <IllustratedMessage name={IllustrationMessageType.UnableToLoad} />
                ) : (
                  <List
                    onSelectionChange={handleVariantItemSelect}
                    mode={ListMode.SingleSelect}
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
              </ResponsivePopover>,
              portalContainer ?? document.body
            )
          : null}
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
            portalContainer={portalContainer}
            showOnlyFavorites={showOnlyFavorites}
          >
            {safeChildren}
          </ManageViewsDialog>
        )}
        {saveAsDialogOpen && (
          <SaveViewDialog
            onSaveViewCancel={onSaveViewCancel}
            saveViewInputProps={selectedSaveViewInputProps}
            portalContainer={portalContainer}
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
