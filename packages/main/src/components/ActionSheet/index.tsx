import { isPhone } from '@ui5/webcomponents-base/dist/Device.js';
import { deprecationNotice, useI18nBundle, useSyncRef } from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, { Children, forwardRef, ReactElement, ReactNode, Ref, useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { ButtonDesign } from '../../enums';
import { AVAILABLE_ACTIONS, CANCEL, X_OF_Y } from '../../i18n/i18n-defaults';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping';
import { CustomThemingParameters } from '../../themes/CustomVariables';
import {
  Button,
  ButtonPropTypes,
  ResponsivePopover,
  ResponsivePopoverDomRef,
  ResponsivePopoverPropTypes
} from '../../webComponents';
import styles from './ActionSheet.jss';

export interface ActionSheetPropTypes extends Omit<ResponsivePopoverPropTypes, 'header' | 'headerText' | 'children'> {
  /**
   * Defines the header text. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.
   *
   * **Note:** If `header` slot is provided, the `headerText` is ignored.
   */
  headerText?: string;
  /**
   * Defines the header HTML Element. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  header?: ReactNode | ReactNode[];
  /**
   * Defines the actions of the `ActionSheet`.
   *
   * __Note:__ Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Buttons` in order to preserve the intended design.
   */
  children?: ReactElement<ButtonPropTypes> | ReactElement<ButtonPropTypes>[];
  /**
   * Displays a cancel button below the action buttons on mobile devices. No cancel button will be shown on desktop and tablet devices.
   */
  showCancelButton?: boolean;
  /**
   * Defines whether the `header` or `headerText` should always be displayed or only on mobile devices.
   *
   * __Deprecation Notice__: This prop is not specified by the Fiori Guidelines, so it will be removed with v0.29.0
   *
   * @deprecated This prop is not specified by the Fiori Guidelines, so it will be removed with v0.29.0
   */
  alwaysShowHeader?: boolean;
  /**
   * Defines internally used a11y properties.
   */
  a11yConfig?: {
    actionSheetMobileContent?: {
      role?: string;
      ariaLabel?: string;
    };
  };
  /**
   * Defines where modals are rendered into via `React.createPortal`.
   *
   * Defaults to: `document.body`
   */
  portalContainer?: Element;
}

const useStyles = createUseStyles(styles, { name: 'ActionSheet' });

if (isPhone()) {
  addCustomCSSWithScoping(
    'ui5-responsive-popover',
    `
  :host([data-actionsheet]) [ui5-button] {
    display: none;
  }
  :host([data-actionsheet]) [ui5-dialog] {
    top: auto !important;
    bottom: 0;
    height: auto;
    border-radius: ${CustomThemingParameters.ActionSheetMobileHeaderBorderRadius};
    background-color: ${CustomThemingParameters.ActionSheetMobileHeaderBackground};
    box-shadow: ${CustomThemingParameters.ActionSheetMobileHeaderBoxShadow};
    box-sizing: border-box;
    min-height: unset;
  }
  :host([data-actionsheet]) [ui5-title] {
    color: ${CustomThemingParameters.ActionSheetMobileHeaderTextColor} !important;
    text-shadow: none;
    text-align: start !important;
  }
  `
  );
}

interface ActionSheetButtonPropTypes extends ButtonPropTypes {
  index: number;
  totalLength: number;
}

function ActionSheetButton(props: ActionSheetButtonPropTypes) {
  const { index, totalLength, ...buttonProps } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  return (
    <Button
      // aria-describedby={ariaTextId}
      accessibleName={`${buttonProps.children as string} ${i18nBundle.getText(X_OF_Y, index + 1, totalLength)}`}
      {...buttonProps}
      design={ButtonDesign.Transparent}
      data-action-btn-index={index}
    />
  );
  // const id = useIsomorphicId();
  // const ariaTextId = `__button${id}-actionSheetHiddenText`;
  // <span id={ariaTextId} aria-hidden="true" className={classes.hiddenText}>
  //   {i18nBundle.getText(X_OF_Y, index + 1, totalLength)}
  // </span>
}

/**
 * The `ActionSheet` holds a list of buttons from which the user can select to complete an action.
 *
 * The children of the action sheet should be `Button` components. Elements in the `ActionSheet` are left-aligned. Actions should be arranged in order of importance, from top to bottom.
 *
 * ### Guidelines
 * - Always display text or text and icons for the actions. Do not use icons only.
 * - Always provide a Cancel button on mobile phones.
 * - Avoid scrolling on action sheets.
 *
 */
const ActionSheet = forwardRef((props: ActionSheetPropTypes, ref: Ref<ResponsivePopoverDomRef>) => {
  const {
    a11yConfig,
    allowTargetOverlap,
    alwaysShowHeader,
    children,
    className,
    footer,
    header,
    headerText,
    hideArrow,
    horizontalAlign,
    initialFocus,
    modal,
    placementType,
    portalContainer,
    showCancelButton,
    slot,
    style,
    verticalAlign,
    onAfterClose,
    onAfterOpen,
    onBeforeClose,
    onBeforeOpen,
    ...rest
  } = props;

  // deprecations
  useEffect(() => {
    if (a11yConfig?.actionSheetMobileContent?.ariaLabel) {
      deprecationNotice(
        'ActionSheet',
        `Using 'a11yConfig.actionSheetMobileContent.ariaLabel' is deprecated and will be removed in the next minor release. Please use the 'accessibleName' prop instead.`
      );
    }
  }, [a11yConfig?.actionSheetMobileContent?.ariaLabel]);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const classes = useStyles();
  const [componentRef, popoverRef] = useSyncRef(ref);
  const actionBtnsRef = useRef(null);
  const [focusedItem, setFocusedItem] = useReducer((_, action) => {
    return parseInt(action.target.dataset.actionBtnIndex);
  }, 0);
  const childrenToRender = Children.toArray(children).filter(Boolean);
  const childrenArrayLength = childrenToRender.length;
  const childrenLength = isPhone() && showCancelButton ? childrenArrayLength + 1 : childrenArrayLength;

  const handleCancelBtnClick = () => {
    popoverRef.current.close();
  };

  const renderActionSheetButton = (element, index: number, childrenArray) => {
    return (
      <ActionSheetButton
        key={index}
        index={index}
        totalLength={childrenArray.length}
        tabIndex={focusedItem === index ? 0 : -1}
        {...element.props}
        onClick={(e) => {
          popoverRef.current.close();
          if (typeof element.props?.onClick === 'function') {
            element.props?.onClick(e);
          }
        }}
        onFocus={(e) => {
          if (typeof element.props?.onFocus === 'function') {
            element.props?.onFocus(e);
          }
          setFocusedItem(e);
        }}
      />
    );
  };

  const handleAfterOpen = (e) => {
    if (isPhone()) {
      actionBtnsRef.current.querySelector(`[data-action-btn-index="${focusedItem}"]`).focus();
    }
    if (typeof onAfterOpen === 'function') {
      onAfterOpen(e);
    }
  };

  const handleKeyDown = (e) => {
    const currentIndex = parseInt(e.target.dataset.actionBtnIndex);
    if (e.key === 'ArrowDown' && currentIndex + 1 < childrenLength) {
      e.preventDefault();
      actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex + 1}"]`).focus();
    }
    if (e.key === 'ArrowUp' && currentIndex > 0) {
      e.preventDefault();
      actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex - 1}"]`).focus();
    }
  };

  // TODO remove this block before releasing v0.29.0
  useEffect(() => {
    if (alwaysShowHeader) {
      deprecationNotice('ActionSheet', `The prop 'alwaysShowHeader' is deprecated and will be removed in v0.29.0`);
    }
  }, [alwaysShowHeader]);

  const displayHeader = alwaysShowHeader || isPhone();
  return createPortal(
    <ResponsivePopover
      style={style}
      slot={slot}
      allowTargetOverlap={allowTargetOverlap}
      headerText={displayHeader ? headerText : undefined}
      horizontalAlign={horizontalAlign}
      initialFocus={initialFocus}
      modal={modal}
      hideArrow={hideArrow}
      placementType={placementType}
      verticalAlign={verticalAlign}
      footer={footer}
      header={displayHeader ? header : undefined}
      onAfterClose={onAfterClose}
      onBeforeClose={onBeforeClose}
      onBeforeOpen={onBeforeOpen}
      accessibleName={a11yConfig?.actionSheetMobileContent?.ariaLabel ?? i18nBundle.getText(AVAILABLE_ACTIONS)}
      {...rest}
      onAfterOpen={handleAfterOpen}
      ref={componentRef}
      className={clsx(classes.actionSheet, isPhone() && classes.actionSheetMobile, className)}
      data-actionsheet
    >
      <div
        className={isPhone() ? classes.contentMobile : undefined}
        data-component-name="ActionSheetMobileContent"
        role={a11yConfig?.actionSheetMobileContent?.role ?? 'application'}
        onKeyDown={handleKeyDown}
        ref={actionBtnsRef}
      >
        {childrenToRender.map(renderActionSheetButton)}
        {isPhone() && showCancelButton && (
          <Button
            design={ButtonDesign.Negative}
            onClick={handleCancelBtnClick}
            tabIndex={focusedItem === childrenLength - 1 ? 0 : -1}
            data-action-btn-index={childrenLength - 1}
            data-cancel-btn
            onFocus={setFocusedItem}
          >
            {i18nBundle.getText(CANCEL)}
          </Button>
        )}
      </div>
    </ResponsivePopover>,
    portalContainer
  );
});

ActionSheet.defaultProps = {
  showCancelButton: true,
  alwaysShowHeader: true,
  portalContainer: document.body
};

ActionSheet.displayName = 'ActionSheet';

export { ActionSheet };
