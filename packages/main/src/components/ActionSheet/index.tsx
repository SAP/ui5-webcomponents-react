import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { AVAILABLE_ACTIONS, X_OF_Y } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
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
      onBeforeOpen
    } = props;
    const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
    const classes = useStyles();
    const actionSheetClasses = StyleClassHelper.of(classes.actionSheet).putIfPresent(className);
    const popoverRef: RefObject<Ui5ResponsivePopoverDomRef> = useConsolidatedRef(ref);
    const actionBtnsRef = useRef(null);
    const [focusedItem, setFocusedItem] = useReducer((_, action) => {
      return parseInt(action.target.dataset.actionBtnIndex);
    }, 0);
    const childrenLength = Children.toArray(children).length;

    const onActionButtonClicked = (handler) => (e) => {
      popoverRef.current.close();
      if (typeof handler === 'function') {
        handler(e);
      }
    };

    const handleKeyDown = useCallback(
      (e) => {
        const currentId = parseInt(e.target.dataset.actionBtnIndex);
        if (e.key === 'ArrowDown' && currentId + 1 <= childrenLength) {
          actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentId + 1}"]`).focus();
        }
        if (e.key === 'ArrowUp' && currentId > 0) {
          actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentId - 1}"]`).focus();
        }
      },
      [childrenLength, actionBtnsRef.current]
    );

    const renderActionSheetButton = (element, index) => {
      return cloneElement(element, {
        role: 'button',
        key: index,
        design: ButtonDesign.Transparent,
        onClick: onActionButtonClicked(element.props.onClick),
        'data-action-btn-index': index,
        'aria-label': `${i18nBundle.getText(X_OF_Y, index + 1, childrenLength)} ${element.props.children}`,
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

    return createPortal(
      <ResponsivePopover
        aria-modal
        role="dialog"
        style={style}
        slot={slot}
        allowTargetOverlap={allowTargetOverlap}
        headerText={headerText}
        horizontalAlign={horizontalAlign}
        initialFocus={initialFocus}
        modal={modal}
        noArrow={noArrow}
        placementType={placementType}
        verticalAlign={verticalAlign}
        footer={footer}
        header={header}
        onAfterClose={onAfterClose}
        onAfterOpen={onAfterOpen}
        onBeforeClose={onBeforeClose}
        onBeforeOpen={onBeforeOpen}
        {...passThroughProps}
        ref={popoverRef}
        className={actionSheetClasses.className}
      >
        <div
          role="presentation"
          aria-label={i18nBundle.getText(AVAILABLE_ACTIONS)}
          onKeyDown={handleKeyDown}
          ref={actionBtnsRef}
        >
          {Children.map(children, renderActionSheetButton)}
        </div>
      </ResponsivePopover>,
      document.body
    );
  }
);

ActionSheet.displayName = 'ActionSheet';

export { ActionSheet };
