import '@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js';
import '@ui5/webcomponents-icons/dist/navigation-down-arrow';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { CANCEL, MY_VIEWS, SEARCH } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { IllustratedMessage } from '@ui5/webcomponents-react/dist/IllustratedMessage';
import { IllustrationMessageType } from '@ui5/webcomponents-react/dist/IllustrationMessageType';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { List } from '@ui5/webcomponents-react/dist/List';
import { ListMode } from '@ui5/webcomponents-react/dist/ListMode';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { ResponsivePopover } from '@ui5/webcomponents-react/dist/ResponsivePopover';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { SelectedVariant, VariantManagementContext } from '@ui5/webcomponents-react/dist/VariantManagementContext';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5ResponsivePopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5ResponsivePopoverDomRef';
import React, {
  Children,
  cloneElement,
  ComponentElement,
  forwardRef,
  isValidElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { stopPropagation } from '../../internal/stopPropagation';
import { ManageViewsDialog } from './ManageViewsDialog';
import { SaveViewDialog } from './SaveViewDialog';
import { VariantItemPropTypes } from './VariantItem';
import '@ui5/webcomponents-icons/dist/search';
import '@ui5/webcomponents-icons/dist/decline';

export interface VariantManagementPropTypes extends Omit<CommonProps, 'onSelect'> {
  /**
   * Variant items displayed by the VariantManagement component.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantItem` in order to preserve the intended design.
   */
  children?: ReactNode | ReactNodeArray;
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
   * Defines whether the VariantManagement should be closed if an item was selected.
   */
  closeOnItemSelect?: boolean;
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
  onSelect?: (
    event: Ui5CustomEvent<
      HTMLElement,
      {
        selectedVariant: SelectedVariant;
        selectedItems: unknown[];
        previouslySelectedItems: unknown[];
      }
    >
  ) => void;
  /**
   * todo this is not a prop, if >10 favorite views exist search is rendered (ui5: >8)
   */
  showSearchInput?: boolean;
  /**
   * Indicator for modified but not saved variants.
   *
   * __Note:__ You can change the indicator by setting `dirtyStateText`.
   */
  dirtyState?: boolean;
  /**
   * Text for the dirty state indicator.
   */
  dirtyStateText?: string;
  /**
   * Indicates that the 'Favorites' feature is used. Only variants marked as favorites will be displayed in the variant list.
   * todo necessary? name is confusing --> hook
   * todo not used yet
   */
  useFavorites?: boolean;
  /**
   * Indicates that set as default is visible in the Save View and the Manage Views dialogs.
   */
  hideSetAsDefault?: boolean;
  /**
   * Indicates that the Public indicator is visible in the Save View and the Manage Views dialogs.
   */
  hideShare?: boolean;
  /**
   * Indicates that Apply Automatically is visible in the Save View and the Manage Views dialogs.
   */
  hideApplyAutomatically?: boolean;
  /**
   * Indicates that the Save View dialog button is visible.
   */
  hideSaveAs?: boolean;
  /**
   * Indicates that the Manage Views dialog button is visible.
   */
  hideManageVariants?: boolean;
  /**
   * Indicates that the control is in error state. If set to true error message will be displayed whenever the variant is opened.
   */
  inErrorState?: boolean;

  //custom
  /**
   * todo
   */
  onSaveAs?: any;
  /**
   * todo
   */
  onSaveManageViews?: any;
}

//todo
//sap.ui.getCore().byId($0.id).setStandardItemAuthor("Test")
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
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
  dirtyState: {
    color: ThemingParameters.sapGroup_TitleTextColor,
    padding: '0 0.125rem',
    fontWeight: 'bold',
    font: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    flexGrow: 1
  },
  dirtyStateText: {
    fontSize: ThemingParameters.sapFontSmallSize,
    fontWeight: 'normal'
  },
  footer: {
    margin: '0.4375rem 1rem 0.4325rem auto'
  }
};
//todo check that it's called view instead of variant in i18n
const useStyles = createUseStyles(styles, { name: 'VariantManagement' });

/**
 * The `VariantManagement` component can be used to manage variants, such as FilterBar variants or AnalyticalTable variants.
 */
const VariantManagement = forwardRef((props: VariantManagementPropTypes, ref: Ref<HTMLDivElement>) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const {
    titleText = i18nBundle.getText(MY_VIEWS),
    className,
    style,
    tooltip,
    placement,
    level,
    onSelect,
    closeOnItemSelect,
    disabled,
    onSaveAs,
    onSaveManageViews,

    inErrorState,
    hideShare,
    children,
    hideManageVariants,
    hideApplyAutomatically,
    hideSetAsDefault,
    hideSaveAs,
    dirtyStateText,
    dirtyState
  } = props;

  const classes = useStyles();
  const popoverRef = useRef<Ui5ResponsivePopoverDomRef>(null);
  const saveAsRef = useRef<Ui5ResponsivePopoverDomRef>(null);

  const [safeChildren, setSafeChildren] = useState(Children.toArray(children));
  const [showInput, setShowInput] = useState(safeChildren.length > 9);

  useEffect(() => {
    if (safeChildren.length > 9) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }, [safeChildren.length]);
  console.log(showInput);

  const [manageViewsDialogOpen, setManageViewsDialogOpen] = useState(false);
  const [saveAsDialogOpen, setSaveAsDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<VariantItemPropTypes | undefined>(() => {
    const currentSelectedVariant = safeChildren.find(
      (item) => isValidElement(item) && item.props.selected
    ) as ComponentElement<any, any>;
    if (currentSelectedVariant) {
      return { ...currentSelectedVariant.props, variantItem: currentSelectedVariant.ref };
    }
  });
  const handleClose = () => {
    popoverRef.current.close();
  };

  const handleManageClick = () => {
    //todo userEvent
    setManageViewsDialogOpen(true);
  };
  const handleManageClose = () => {
    //todo userEvent
    setManageViewsDialogOpen(false);
  };
  const handleOpenSaveAsDialog = () => {
    //todo userEvent
    setSaveAsDialogOpen(true);
  };
  const handleSaveAsClose = () => {
    //todo userEvent
    setSaveAsDialogOpen(false);
  };

  const handleSaveView = (e, selectedVariant) => {
    if (typeof onSaveAs === 'function') {
      onSaveAs(enrichEventWithDetails(e, { ...selectedVariant }));
    }
    handleSaveAsClose();
  };

  const handleSaveManageViews = (e, payload) => {
    const { defaultView, updatedRows, deletedRows } = payload;
    let callbackProperties = { deletedVariants: [], prevVariants: [], updatedVariants: [], variants: [] };
    if (typeof onSaveManageViews === 'function') {
      onSaveManageViews(enrichEventWithDetails(e, callbackProperties));
    }
    setSafeChildren((prev) =>
      prev
        .map((child: ComponentElement<any, any>) => {
          let updatedProps = {};
          const currentVariant = popoverRef.current.querySelector(`ui5-li[data-text="${child.props.children}"]`);
          callbackProperties.prevVariants.push(child.props);
          if (defaultView) {
            if (defaultView === child.props.children) {
              updatedProps.isDefault = true;
            } else if (child.props.isDefault) {
              updatedProps.isDefault = false;
            }
          }
          if (Object.keys(updatedRows).includes(child.props.children)) {
            const { currentVariant, ...rest } = updatedRows[child.props.children];
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
              variant: currentVariant,
              prevVariant: { ...child.props }
            });
          }
          callbackProperties.variants.push({ ...child.props, ...updatedProps, variant: currentVariant });
          return cloneElement(child, updatedProps);
        })
        .filter(Boolean)
    );
    handleManageClose();
  };

  const handleOpenVariantManagement = useCallback(
    (e) => {
      popoverRef.current.showAt(e.target);
    },
    [popoverRef]
  );

  const cancelText = i18nBundle.getText(CANCEL);
  const searchText = i18nBundle.getText(SEARCH);

  const variantManagementClasses = StyleClassHelper.of(classes.container);

  if (disabled) {
    variantManagementClasses.put(classes.disabled);
  }

  if (className) {
    variantManagementClasses.put(className);
  }

  const dirtyStateClasses = StyleClassHelper.of(classes.dirtyState);

  if (dirtyStateText !== '*') {
    dirtyStateClasses.put(classes.dirtyStateText);
  }

  const selectVariantEventRef = useRef();
  useEffect(() => {
    if (selectVariantEventRef.current) {
      if (typeof onSelect === 'function') {
        onSelect(enrichEventWithDetails(selectVariantEventRef.current, { selectedVariant }));
        selectVariantEventRef.current = undefined;
      }
    }
  }, [selectedVariant, onSelect]);

  const handleVariantItemSelect = (e) => {
    selectVariantEventRef.current = e;
    if (closeOnItemSelect) {
      handleClose();
    }
  };

  const variantNames = safeChildren.map((item: ComponentElement<any, any>) =>
    typeof item.props?.children === 'string' ? item.props.children : ''
  );

  const [filteredChildren, setFilteredChildren] = useState(undefined);
  const [searchValue, setSearchValue] = useState('');
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
    setFilteredChildren(
      safeChildren.filter(
        (child: ComponentElement<any, any>) =>
          typeof child?.props?.children === 'string' &&
          child.props.children.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleResetFilter = () => {
    setSearchValue('');
    setFilteredChildren(undefined);
  };

  //todo
  const passThroughProps = usePassThroughHtmlProps(props, ['onSelect', 'onSaveAs']);

  return (
    <div className={variantManagementClasses.className} style={style} title={tooltip} {...passThroughProps} ref={ref}>
      <VariantManagementContext.Provider
        value={{
          selectVariantItem: setSelectedVariant
        }}
      >
        <FlexBox>
          <Title level={level} className={classes.title}>
            {selectedVariant?.children}
          </Title>
          {dirtyState && <div className={dirtyStateClasses.className}>{dirtyStateText}</div>}
        </FlexBox>
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
              !inErrorState && (
                <Bar
                  endContent={
                    <>
                      {/*todo footer styling*/}
                      <Button onClick={handleClose} design={ButtonDesign.Emphasized}>
                        {cancelText}
                      </Button>
                      {/*todo i18n*/}
                      {!hideSaveAs && (
                        <Button
                          onClick={handleOpenSaveAsDialog}
                          design={ButtonDesign.Transparent}
                          disabled={!selectedVariant || Object.keys(selectedVariant).length === 0}
                        >
                          Save As
                        </Button>
                      )}
                      {!hideManageVariants && (
                        <Button onClick={handleManageClick} design={ButtonDesign.Transparent}>
                          Manage
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
                //todo style padding: 0 0.5rem 0 0.25rem;
                header={
                  showInput ? (
                    <div style={{ padding: '0.25rem 0.5rem 0.25rem 0.25rem' }}>
                      {/*todo space isn't working*/}
                      <Input
                        value={searchValue}
                        placeholder={searchText}
                        onInput={handleSearchInput}
                        icon={
                          <>
                            {/*todo style*/}
                            {filteredChildren && (
                              <Icon
                                name="decline"
                                interactive
                                onClick={handleResetFilter}
                                style={{ cursor: 'pointer' }}
                              />
                            )}
                            <Icon name="search" />
                          </>
                        }
                      />
                    </div>
                  ) : undefined
                }
              >
                {filteredChildren ?? safeChildren}
              </List>
            )}
          </ResponsivePopover>,
          document.body
        )}
        {manageViewsDialogOpen && (
          <ManageViewsDialog
            onAfterClose={handleManageClose}
            handleSaveManageViews={handleSaveManageViews}
            showShare={!hideShare}
            showApplyAutomatically={!hideApplyAutomatically}
            showSetAsDefault={!hideSetAsDefault}
            variantNames={variantNames}
          >
            {safeChildren}
          </ManageViewsDialog>
        )}
        {saveAsDialogOpen && (
          <SaveViewDialog
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

//todo change names to hide, default to false
VariantManagement.defaultProps = {
  placement: PopoverPlacementType.Bottom,
  level: TitleLevel.H4,
  dirtyStateText: '*'
};
VariantManagement.displayName = 'VariantManagement';

export { VariantManagement };
