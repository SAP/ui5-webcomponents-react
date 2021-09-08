import '@ui5/webcomponents-icons/dist/navigation-down-arrow';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { CANCEL, VARIANTS } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { List } from '@ui5/webcomponents-react/dist/List';
import { ListMode } from '@ui5/webcomponents-react/dist/ListMode';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { ResponsivePopover } from '@ui5/webcomponents-react/dist/ResponsivePopover';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5ResponsivePopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5ResponsivePopoverDomRef';
import React, { forwardRef, Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { stopPropagation } from '../../internal/stopPropagation';
import { ManageViewsDialog } from './ManageViewsDialog';

export interface VariantItem {
  key: string;
  label: string;
}

export interface VariantManagementPropTypes extends Omit<CommonProps, 'onSelect'> {
  /**
   * Determines on which side the VariantManagement popover is placed at.
   */
  placement?: PopoverPlacementType | keyof typeof PopoverPlacementType;
  /**
   * Describes the title of the VariantManagement popover.
   *
   * __Note:__ If not set, the default title is used.
   */
  titleText?: string;
  /**
   * Selects the <code>variantItem</code> by its key.
   */
  selectedKey?: string;
  /**
   * Defines whether the VariantManagement should be closed if an item was selected.
   */
  closeOnItemSelect?: boolean;
  /**
   * Variant items displayed by the VariantManagement component.
   */
  variantItems: VariantItem[];
  /**
   * Describes the `HTML Title` level of the variants.
   */
  level?: TitleLevel | keyof typeof TitleLevel;
  /**
   * Defines whether the VariantManagement is disabled.
   */
  disabled?: boolean;
  /**
   * Fired after a variant has been selected.
   */
  onSelect?: (event: CustomEvent<{ item: HTMLElement; selectedItem: VariantItem }>) => void;
  /**
   * todo
   */
  children?: any;
  /**
   * todo this is not a prop, if >10 favorite views exist search is rendered (ui5: >8)
   */
  showSearchInput?: boolean;
  /**
   * todo dirtyStateText
   */
  dirtyStateText?: string;
  /**
   * Indicates that the 'Favorites' feature is used. Only variants marked as favorites will be displayed in the variant list.
   * todo necessary? name is confusing --> hook
   */
  useFavorites?: boolean;
  /**
   * Indicates that set as default is visible in the Save Variant and the Manage Variants dialogs.
   */
  showSetAsDefault?: boolean;
  /**
   * todo this will most probably only render the respective checkbox with an cb attached
   * Indicates that the Public checkbox is visible in the Save View and the Manage Views dialogs. Selecting this checkbox allows you to share variants with other users.
   */
  showShare?: boolean;
  /**
   * todo how is it indicated?
   * Indicates that end users are allowed to create variants.
   */
  variantCreationByUserAllowed?: boolean;

  //custom
  /**
   * todo opens the ManageViews dialog
   */
  showManage?: boolean;
  /**
   * todo
   */
  showSaveAs?: boolean;

  // not sure
  /**
   * Indicates that the control is in error state. If set to true error message will be displayed whenever the variant is opened.
   */
  inErrorState?: boolean;
  /**
   * Indicates that a Create Tile is visible in the Create dialog.
   * todo what is this?
   */
  showCreateTile?: boolean;
  /**
   * todo see variant item
   * Indicates that Execute on Selection is visible in the Save Variant and the Manage Variants dialogs.
   */
  showApplyAutomatically?: boolean; //ui5 showExecuteOnSelection
  /**
   * Defines the author of the standard variant, for example, the name of the own company.
   */
  standardItemAuthor?: boolean;
  /**
   * Overwrites the default Standard variant title.
   */
  standardItemText?: boolean;
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer'
  },
  title: {
    cursor: 'pointer',
    color: ThemingParameters.sapButton_TextColor,
    '&:hover': {
      color: ThemingParameters.sapButton_Hover_TextColor
    }
  },
  disabled: {
    '& $title': {
      color: ThemingParameters.sapGroup_TitleTextColor,
      cursor: 'default',
      '&:hover': {
        color: 'ThemingParameters.sapGroup_TitleTextColor'
      }
    }
  },
  footer: {
    margin: '0.4375rem 1rem 0.4325rem auto'
  }
};

const useStyles = createUseStyles(styles, { name: 'VariantManagement' });

/**
 * The `VariantManagement` component can be used to manage variants, such as FilterBar variants or AnalyticalTable variants.
 */
const VariantManagement = forwardRef((props: VariantManagementPropTypes, ref: Ref<HTMLDivElement>) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const {
    variantItems,
    titleText = i18nBundle.getText(VARIANTS),
    className,
    style,
    tooltip,
    placement,
    level,
    onSelect,
    closeOnItemSelect,
    disabled,

    children,
    showManage
  } = props;

  const classes = useStyles();
  const popoverRef = useRef<Ui5ResponsivePopoverDomRef>(null);
  const saveAsRef = useRef<Ui5ResponsivePopoverDomRef>(null);

  const [selectedKey, setSelectedKey] = useState(props.selectedKey ?? variantItems?.[0]?.key ?? null);
  const [manageViewsDialogOpen, setManageViewsDialogOpen] = useState(false);

  useEffect(() => {
    if (props.selectedKey) {
      setSelectedKey(props.selectedKey);
    }
  }, [props.selectedKey, setSelectedKey]);

  const handleCancelButtonClick = () => {
    popoverRef.current.close();
  };

  const handleManageClick = () => {
    setManageViewsDialogOpen(true);
  };
  const handleManageClose = () => {
    setManageViewsDialogOpen(false);
  };

  const handleOpenVariantManagement = useCallback(
    (e) => {
      popoverRef.current.showAt(e.target);
    },
    [popoverRef]
  );

  const cancelText = i18nBundle.getText(CANCEL);

  const getItemByKey = (key) => {
    return variantItems?.find((item) => item.key === key);
  };

  const selectedItem = getItemByKey(selectedKey) || variantItems[0];

  const variantManagementClasses = StyleClassHelper.of(classes.container);

  if (disabled) {
    variantManagementClasses.put(classes.disabled);
  }

  if (className) {
    variantManagementClasses.put(className);
  }

  const handleVariantItemSelect = useCallback(
    (event) => {
      const newSelectedKey = event.detail.item.dataset.key;
      setSelectedKey(newSelectedKey);
      onSelect(
        enrichEventWithDetails(event, {
          ...event.details,
          selectedItem: getItemByKey(newSelectedKey) || variantItems[0]
        })
      );
      if (closeOnItemSelect) {
        handleCancelButtonClick();
      }
    },
    [handleCancelButtonClick, closeOnItemSelect, selectedKey, variantItems, setSelectedKey]
  );

  const passThroughProps = usePassThroughHtmlProps(props, ['onSelect']);

  if (!variantItems || variantItems.length < 1) {
    return null;
  }

  return (
    <div className={variantManagementClasses.valueOf()} style={style} title={tooltip} {...passThroughProps} ref={ref}>
      <Title level={level} className={classes.title}>
        {selectedItem.label}
      </Title>
      <Button
        onClick={handleOpenVariantManagement}
        design={ButtonDesign.Transparent}
        icon="navigation-down-arrow"
        disabled={disabled}
      />
      {createPortal(
        <ResponsivePopover
          ref={popoverRef}
          headerText={titleText}
          placementType={placement}
          footer={
            <Bar
              endContent={
                <>
                  {/*todo footer styling*/}
                  <Button onClick={handleCancelButtonClick} design={ButtonDesign.Emphasized}>
                    {cancelText}
                  </Button>
                  {/*todo i18n*/}
                  {showManage && (
                    <Button onClick={handleManageClick} design={ButtonDesign.Transparent}>
                      Manage
                    </Button>
                  )}
                </>
              }
            />
          }
          onAfterClose={stopPropagation}
        >
          <List onItemClick={handleVariantItemSelect} mode={ListMode.SingleSelect}>
            {children}
            {/*{variantItems.map((item) => {*/}
            {/*  return (*/}
            {/*    <VariantManagementItem*/}
            {/*      style={{ minWidth: '300px' }}*/}
            {/*      data-key={item.key}*/}
            {/*      type={ListItemType.Active}*/}
            {/*      key={item.key}*/}
            {/*      selected={selectedKey === item.key}*/}
            {/*    >*/}
            {/*      {item.label}*/}
            {/*    </VariantManagementItem>*/}
            {/*  );*/}
            {/*})}*/}
          </List>
        </ResponsivePopover>,
        document.body
      )}
      {manageViewsDialogOpen && <ManageViewsDialog onAfterClose={handleManageClose}>{children}</ManageViewsDialog>}
    </div>
  );
});

VariantManagement.defaultProps = {
  //todo
  // onSelect: () => {},
  closeOnItemSelect: true,
  placement: PopoverPlacementType.Bottom,
  level: TitleLevel.H4,
  disabled: false,
  variantItems: []
};
VariantManagement.displayName = 'VariantManagement';

export { VariantManagement };
