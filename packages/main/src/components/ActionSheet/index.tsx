import { isPhone } from '@ui5/webcomponents-base/dist/Device.js';
import { ThemingParameters, useI18nBundle, useSyncRef } from '@ui5/webcomponents-react-base';
import { AVAILABLE_ACTIONS, CANCEL, X_OF_Y } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import clsx from 'clsx';
import React, { Children, cloneElement, forwardRef, ReactElement, Ref, useCallback, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping';
import { Button, ButtonPropTypes } from '../../webComponents/Button';
import {
  ResponsivePopover,
  ResponsivePopoverDomRef,
  ResponsivePopoverPropTypes
} from '../../webComponents/ResponsivePopover';
import styles from './ActionSheet.jss';

export interface ActionSheetPropTypes extends Omit<ResponsivePopoverPropTypes, 'children'> {
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
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    box-sizing: border-box;
    min-height: unset;
  }
  :host([data-actionsheet]) [ui5-title] {
    color: ${ThemingParameters.sapContent_ContrastTextColor} !important;
    text-shadow: none;
    text-align: start !important;
    padding-left:1rem !important;
  }
  `
  );
}

/**
 * The `ActionSheet` holds a list of buttons from which the user can select to complete an action. <br />
 * The children of the action sheet should be `Button` components. Elements in the `ActionSheet` are left-aligned. Actions should be arranged in order of importance, from top to bottom.
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

  const onActionButtonClicked = (handler) => (e) => {
    popoverRef.current.close();
    if (typeof handler === 'function') {
      handler(e);
    }
  };

  const handleFocus = (handler) => (e) => {
    if (typeof handler === 'function') {
      handler(e);
    }
    setFocusedItem(e);
  };

  const handleKeyDown = useCallback(
    (e) => {
      const currentIndex = parseInt(e.target.dataset.actionBtnIndex);
      if (e.key === 'ArrowDown' && currentIndex + 1 < childrenLength) {
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex + 1}"]`).focus();
      }
      if (e.key === 'ArrowUp' && currentIndex > 0) {
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex - 1}"]`).focus();
      }
    },
    [childrenLength, actionBtnsRef.current]
  );

  const renderActionSheetButton = (element, index: number, childrenArray) => {
    return cloneElement(element, {
      role: 'button',
      'aria-label': `${i18nBundle.getText(X_OF_Y, index + 1, childrenArray.length)} ${element.props?.children}`,
      key: index,
      tabIndex: focusedItem === index ? 0 : -1,
      ...element.props,
      design: ButtonDesign.Transparent,
      onClick: onActionButtonClicked(element.props?.onClick),
      onFocus: handleFocus(element.props?.onFocus),
      'data-action-btn-index': index
    });
  };

  const handleAfterOpen = useCallback(
    (e) => {
      if (isPhone()) {
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${focusedItem}"]`).focus();
      }
      if (typeof onAfterOpen === 'function') {
        onAfterOpen(e);
      }
    },
    [onAfterOpen, actionBtnsRef.current, focusedItem]
  );
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
        aria-label={a11yConfig?.actionSheetMobileContent?.ariaLabel ?? i18nBundle.getText(AVAILABLE_ACTIONS)}
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
