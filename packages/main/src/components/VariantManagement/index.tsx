import '@ui5/webcomponents-icons/dist/navigation-down-arrow';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { CANCEL, MY_VIEWS } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { IllustratedMessage } from '@ui5/webcomponents-react/dist/IllustratedMessage';
import { IllustrationMessageType } from '@ui5/webcomponents-react/dist/IllustrationMessageType';
import { List } from '@ui5/webcomponents-react/dist/List';
import { ListMode } from '@ui5/webcomponents-react/dist/ListMode';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { ResponsivePopover } from '@ui5/webcomponents-react/dist/ResponsivePopover';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5ResponsivePopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5ResponsivePopoverDomRef';
import React, {
  Children,
  ComponentElement,
  createContext,
  forwardRef,
  isValidElement,
  ReactChild,
  ReactChildren,
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
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { stopPropagation } from '../../internal/stopPropagation';
import { ManageViewsDialog } from './ManageViewsDialog';
import { SaveViewDialog } from './SaveViewDialog';
import { VariantItem, VariantItemPropTypes } from './VariantItem';
import '@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js';
import { VariantManagementContext, SelectedVariant } from '@ui5/webcomponents-react/dist/VariantManagementContext';

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
   * Variant items displayed by the VariantManagement component.
   */
  children?: ReactNode | ReactNodeArray;
  /**
   * todo this is not a prop, if >10 favorite views exist search is rendered (ui5: >8)
   */
  showSearchInput?: boolean;
  /**
   * todo dirtyStateText
   * todo isInDirtyState
   */
  dirtyStateText?: string;
  /**
   * Indicates that the 'Favorites' feature is used. Only variants marked as favorites will be displayed in the variant list.
   * todo necessary? name is confusing --> hook
   */
  useFavorites?: boolean;
  /**
   * todo
   * Indicates that set as default is visible in the Save Variant and the Manage Variants dialogs.
   */
  showSetAsDefault?: boolean;
  /**
   * Indicates that the Public indicator is visible in the Save View and the Manage Views dialogs.
   */
  showShare?: boolean;
  /**
   * todo is apply automatically
   * Indicates that Execute on Selection is visible in the Save Variant and the Manage Variants dialogs.
   */
  showApplyAutomatically?: boolean; // todo is: ui5 showExecuteOnSelection
  /**
   * todo
   */
  variantCreationByUserAllowed?: boolean;
  /**
   * Indicates that the control is in error state. If set to true error message will be displayed whenever the variant is opened.
   */
  inErrorState?: boolean;

  //custom
  /**
   * todo opens the ManageViews dialog
   */
  showManage?: boolean;
  /**
   * todo
   */
  onSaveAs?: any;
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

    inErrorState,
    showShare,
    children,
    showManage,
    showApplyAutomatically,
    showSetAsDefault,
    variantCreationByUserAllowed
  } = props;

  const classes = useStyles();
  const popoverRef = useRef<Ui5ResponsivePopoverDomRef>(null);
  const saveAsRef = useRef<Ui5ResponsivePopoverDomRef>(null);

  const [safeChildren, setSafeChildren] = useState(Children.toArray(children));

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

  const handleSaveManageViews = (e) => {
    console.log(e);
  };

  const handleOpenVariantManagement = useCallback(
    (e) => {
      popoverRef.current.showAt(e.target);
    },
    [popoverRef]
  );

  const cancelText = i18nBundle.getText(CANCEL);

  const variantManagementClasses = StyleClassHelper.of(classes.container);

  if (disabled) {
    variantManagementClasses.put(classes.disabled);
  }

  if (className) {
    variantManagementClasses.put(className);
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

  //todo
  const passThroughProps = usePassThroughHtmlProps(props, ['onSelect', 'onSaveAs']);

  return (
    <div className={variantManagementClasses.valueOf()} style={style} title={tooltip} {...passThroughProps} ref={ref}>
      <VariantManagementContext.Provider
        value={{
          selectVariantItem: setSelectedVariant
        }}
      >
        <Title level={level} className={classes.title}>
          {selectedVariant?.children}
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
              !inErrorState && (
                <Bar
                  endContent={
                    <>
                      {/*todo footer styling*/}
                      <Button onClick={handleClose} design={ButtonDesign.Emphasized}>
                        {cancelText}
                      </Button>
                      {/*todo i18n*/}
                      {variantCreationByUserAllowed && (
                        <Button
                          onClick={handleOpenSaveAsDialog}
                          design={ButtonDesign.Transparent}
                          disabled={!selectedVariant || Object.keys(selectedVariant).length === 0}
                        >
                          Save As
                        </Button>
                      )}
                      {showManage && (
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
              <List onSelectionChange={handleVariantItemSelect} mode={ListMode.SingleSelect}>
                {safeChildren}
              </List>
            )}
          </ResponsivePopover>,
          document.body
        )}
        {manageViewsDialogOpen && (
          <ManageViewsDialog
            onAfterClose={handleManageClose}
            handleSaveManageViews={handleSaveManageViews}
            showShare={showShare}
            showApplyAutomatically={showApplyAutomatically}
            showSetAsDefault={showSetAsDefault}
          >
            {safeChildren}
          </ManageViewsDialog>
        )}
        {saveAsDialogOpen && (
          <SaveViewDialog
            showShare={showShare}
            showApplyAutomatically={showApplyAutomatically}
            showSetAsDefault={showSetAsDefault}
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

//todo use true as default?
VariantManagement.defaultProps = {
  closeOnItemSelect: true,
  placement: PopoverPlacementType.Bottom,
  level: TitleLevel.H4,
  disabled: false,
  showShare: true,
  showApplyAutomatically: true,
  showSetAsDefault: true,
  variantCreationByUserAllowed: true,
  showManage: true
};
VariantManagement.displayName = 'VariantManagement';

export { VariantManagement };
