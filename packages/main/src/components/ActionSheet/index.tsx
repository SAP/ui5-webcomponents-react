'use client';

import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import { isPhone } from '@ui5/webcomponents-base/dist/Device.js';
import { useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactElement } from 'react';
import { forwardRef, useEffect, useReducer, useRef, useState } from 'react';
import { AVAILABLE_ACTIONS, CANCEL, X_OF_Y } from '../../i18n/i18n-defaults.js';
import type { ButtonPropTypes, ResponsivePopoverDomRef, ResponsivePopoverPropTypes } from '../../index.js';
import { Button, ResponsivePopover } from '../../index.js';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
import { flattenFragments, getUi5TagWithSuffix } from '../../internal/utils.js';
import { CustomThemingParameters } from '../../themes/CustomVariables.js';
import type { UI5WCSlotsNode } from '../../types/index.js';
import { classNames, styleData } from './ActionSheet.module.css.js';

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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--page).
   */
  header?: UI5WCSlotsNode;
  /**
   * Defines the actions of the `ActionSheet`.
   *
   * __Note:__ Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Buttons` in order to preserve the intended design.
   */
  children?: ReactElement<ButtonPropTypes> | ReactElement<ButtonPropTypes>[];
  /**
   * Hides the cancel button below the action buttons on mobile devices. No cancel button will be shown on desktop and tablet devices.
   */
  hideCancelButton?: boolean;
  /**
   * Defines internally used accessibility properties/attributes.
   */
  accessibilityAttributes?: {
    actionSheetMobileContent?: {
      role?: string;
    };
  };
}

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
 * The children of the action sheet should be `Button` components. Elements in the `ActionSheet` are start-aligned. Actions should be arranged in order of importance, from top to bottom.
 *
 * ### Guidelines
 * - Always display text or text and icons for the actions. Do not use icons only.
 * - Always provide a Cancel button on mobile phones.
 * - Avoid scrolling on action sheets.
 *
 */
const ActionSheet = forwardRef<ResponsivePopoverDomRef, ActionSheetPropTypes>((props, ref) => {
  const { accessibilityAttributes, children, className, header, headerText, hideCancelButton, onOpen, open, ...rest } =
    props;

  useStylesheet(styleData, ActionSheet.displayName);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const actionBtnsRef = useRef(null);
  const [focusedItem, setFocusedItem] = useReducer((_, action) => {
    return parseInt(action.target.dataset.actionBtnIndex);
  }, 0);
  const childrenToRender = flattenFragments(children);
  const childrenArrayLength = childrenToRender.length;
  const childrenLength = isPhone() && !hideCancelButton ? childrenArrayLength + 1 : childrenArrayLength;

  const [internalOpen, setInternalOpen] = useState(undefined);
  useEffect(() => {
    const tagName = getUi5TagWithSuffix('ui5-responsive-popover');
    void customElements.whenDefined(tagName).then(() => {
      setInternalOpen(open);
    });
  }, [open]);

  const handleCancelBtnClick = () => {
    setInternalOpen(false);
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
          setInternalOpen(false);
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
    if (typeof onOpen === 'function') {
      onOpen(e);
    }
  };

  const handleKeyDown = (e) => {
    const currentIndex = parseInt(e.target.dataset.actionBtnIndex);
    const isRtl = actionBtnsRef.current?.matches(':dir(rtl)');
    switch (e.key) {
      case 'ArrowDown':
      case isRtl ? 'ArrowLeft' : 'ArrowRight':
        if (currentIndex + 1 < childrenLength) {
          e.preventDefault();
          actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex + 1}"]`).focus();
        }
        break;
      case 'ArrowUp':
      case isRtl ? 'ArrowRight' : 'ArrowLeft':
        if (currentIndex > 0) {
          e.preventDefault();
          actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex - 1}"]`).focus();
        }
        break;
      case 'PageUp':
        e.preventDefault();
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${Math.max(currentIndex - 5, 0)}"]`).focus();
        break;
      case 'PageDown':
        e.preventDefault();
        actionBtnsRef.current
          .querySelector(`[data-action-btn-index="${Math.min(currentIndex + 5, childrenLength - 1)}"]`)
          .focus();
        break;
      case 'Home':
        e.preventDefault();
        actionBtnsRef.current.querySelector(`[data-action-btn-index="0"]`).focus();
        break;
      case 'End':
        e.preventDefault();
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${childrenLength - 1}"]`).focus();
        break;
    }
  };

  const displayHeader = isPhone();
  return (
    <ResponsivePopover
      open={internalOpen}
      headerText={displayHeader ? headerText : undefined}
      header={displayHeader ? header : undefined}
      accessibleName={i18nBundle.getText(AVAILABLE_ACTIONS)}
      {...rest}
      onOpen={handleAfterOpen}
      ref={ref}
      className={clsx(classNames.actionSheet, isPhone() && classNames.actionSheetMobile, className)}
      data-actionsheet
    >
      <div
        className={isPhone() ? classNames.contentMobile : undefined}
        data-component-name="ActionSheetMobileContent"
        role={accessibilityAttributes?.actionSheetMobileContent?.role ?? 'application'}
        onKeyDown={handleKeyDown}
        ref={actionBtnsRef}
      >
        {childrenToRender.map(renderActionSheetButton)}
        {isPhone() && !hideCancelButton && (
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
    </ResponsivePopover>
  );
});

ActionSheet.displayName = 'ActionSheet';

export { ActionSheet };
