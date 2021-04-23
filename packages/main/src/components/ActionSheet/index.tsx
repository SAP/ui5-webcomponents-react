import { isPhone } from '@ui5/webcomponents-base/dist/Device';
import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { AVAILABLE_ACTIONS, CANCEL, X_OF_Y } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { ResponsivePopover } from '@ui5/webcomponents-react/dist/ResponsivePopover';
import React, {
  Children,
  cloneElement,
  FC,
  forwardRef,
  ReactElement,
  RefObject,
  useCallback,
  useReducer,
  useRef
} from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { Ui5ResponsivePopoverDomRef } from '../../interfaces/Ui5ResponsivePopoverDomRef';
import { ButtonPropTypes } from '../../webComponents/Button';
import { ResponsivePopoverPropTypes } from '../../webComponents/ResponsivePopover';
import styles from './ActionSheet.jss';

export interface ActionSheetPropTypes extends Omit<ResponsivePopoverPropTypes, 'children'> {
  /**
   * Defines the actions of the <code>ActionSheet</code>. <br><b>Note:</b> Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Buttons` in order to preserve the intended design.
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
}

const useStyles = createUseStyles(styles, { name: 'ActionSheet' });

addCustomCSS(
  'ui5-button',
  `
  :host([data-action-btn-index]) .ui5-button-root {
    justify-content: flex-start;
  }
  `
);

if (isPhone()) {
  addCustomCSS(
    'ui5-responsive-popover',
    `
  :host([data-actionsheet]) ui5-button {
    display: none;
  }
  :host([data-actionsheet]) ui5-dialog {
    top: auto !important;
    bottom: 0;
    height: auto;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    box-sizing: border-box;
  }
  :host([data-actionsheet]) ui5-title {
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
const ActionSheet: FC<ActionSheetPropTypes> = forwardRef(
  (props: ActionSheetPropTypes, ref: RefObject<Ui5ResponsivePopoverDomRef>) => {
    const {
      children,
      style,
      slot,
      className,
      allowTargetOverlap,
      headerText,
      horizontalAlign,
      initialFocus,
      modal,
      noArrow,
      placementType,
      verticalAlign,
      footer,
      header,
      onAfterClose,
      onAfterOpen,
      onBeforeClose,
      onBeforeOpen,
      showCancelButton,
      alwaysShowHeader
    } = props;
    const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
    const classes = useStyles();
    const actionSheetClasses = StyleClassHelper.of(classes.actionSheet).putIfPresent(className);
    const popoverRef: RefObject<Ui5ResponsivePopoverDomRef> = useConsolidatedRef(ref);
    const actionBtnsRef = useRef(null);
    const [focusedItem, setFocusedItem] = useReducer((_, action) => {
      return parseInt(action.target.dataset.actionBtnIndex);
    }, 0);
    const childrenArrayLength = Children.toArray(children).length;
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

    const renderActionSheetButton = (element, index) => {
      return cloneElement(element, {
        role: 'button',
        key: index,
        design: ButtonDesign.Transparent,
        onClick: onActionButtonClicked(element.props?.onClick),
        'data-action-btn-index': index,
        'aria-label': `${i18nBundle.getText(X_OF_Y, index + 1, childrenLength)} ${element.props?.children}`,
        tabIndex: focusedItem === index ? 0 : -1,
        onFocus: setFocusedItem
      });
    };

    const passThroughProps = usePassThroughHtmlProps(props, [
      'onAfterClose',
      'onAfterOpen',
      'onBeforeClose',
      'onBeforeOpen'
    ]);
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
        aria-modal
        role="dialog"
        style={style}
        slot={slot}
        allowTargetOverlap={allowTargetOverlap}
        headerText={displayHeader ? headerText : undefined}
        horizontalAlign={horizontalAlign}
        initialFocus={initialFocus}
        modal={modal}
        noArrow={noArrow}
        placementType={placementType}
        verticalAlign={verticalAlign}
        footer={footer}
        header={displayHeader ? header : undefined}
        onAfterClose={onAfterClose}
        onBeforeClose={onBeforeClose}
        onBeforeOpen={onBeforeOpen}
        {...passThroughProps}
        onAfterOpen={handleAfterOpen}
        ref={popoverRef}
        className={actionSheetClasses.className}
        data-actionsheet
      >
        <div
          className={isPhone() ? classes.contentMobile : undefined}
          role="presentation"
          aria-label={i18nBundle.getText(AVAILABLE_ACTIONS)}
          onKeyDown={handleKeyDown}
          ref={actionBtnsRef}
        >
          {Children.map(children, renderActionSheetButton)}
          {isPhone() && showCancelButton && (
            <Button
              design={ButtonDesign.Negative}
              className={classes.closeBtn}
              onClick={handleCancelBtnClick}
              tabIndex={focusedItem === childrenLength - 1 ? 0 : -1}
              data-action-btn-index={childrenLength - 1}
              onFocus={setFocusedItem}
            >
              {i18nBundle.getText(CANCEL)}
            </Button>
          )}
        </div>
      </ResponsivePopover>,
      document.body
    );
  }
);

ActionSheet.defaultProps = {
  showCancelButton: true,
  alwaysShowHeader: true
};

ActionSheet.displayName = 'ActionSheet';

export { ActionSheet };
