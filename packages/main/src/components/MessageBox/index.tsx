'use client';

import iconSysHelp from '@ui5/webcomponents-icons/dist/sys-help-2.js';
import { enrichEventWithDetails, useI18nBundle, useIsomorphicId } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React, { cloneElement, forwardRef, isValidElement } from 'react';
import { createUseStyles } from 'react-jss';
import {
  ButtonDesign,
  MessageBoxActions,
  MessageBoxTypes,
  PopupAccessibleRole,
  TitleLevel,
  ValueState
} from '../../enums/index.js';
import {
  ABORT,
  CANCEL,
  CLOSE,
  CONFIRMATION,
  DELETE,
  ERROR,
  IGNORE,
  INFORMATION,
  NO,
  OK,
  RETRY,
  SUCCESS,
  WARNING,
  YES
} from '../../i18n/i18n-defaults.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import type { ButtonPropTypes, DialogDomRef, DialogPropTypes } from '../../webComponents/index.js';
import { Button, Dialog, Icon, Title } from '../../webComponents/index.js';
import { Text } from '../Text/index.js';
import styles from './MessageBox.jss.js';

type MessageBoxAction = MessageBoxActions | keyof typeof MessageBoxActions | string;

export interface MessageBoxPropTypes
  extends Omit<
    DialogPropTypes,
    'children' | 'footer' | 'headerText' | 'onAfterClose' | 'state' | 'accessibleNameRef' | 'open' | 'initialFocus'
  > {
  /**
   * Defines the IDs of the elements that label the component.
   *
   * __Note:__ Per default the prop receives the IDs of the header and the content.
   */
  accessibleNameRef?: DialogPropTypes['accessibleNameRef'];
  /**
   * Flag whether the Message Box should be opened or closed
   */
  open?: DialogPropTypes['open'];
  /**
   * A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.
   */
  titleText?: DialogPropTypes['headerText'];
  /**
   * Defines the content of the `MessageBox`.
   *
   * **Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design and a11y capabilities.
   */
  children: ReactNode | ReactNode[];
  /**
   * Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `MessageBoxAction`s (text) or the `Button` component in order to preserve the intended.
   */
  actions?: (MessageBoxAction | ReactNode)[];
  /**
   * Specifies which action of the created dialog will be emphasized.
   *
   * @since 0.16.3
   */
  emphasizedAction?: MessageBoxAction;
  /**
   * A custom icon. If not present, it will be derived from the `MessageBox` type.
   */
  icon?: ReactNode;
  /**
   * Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.
   */
  type?: MessageBoxTypes | keyof typeof MessageBoxTypes;
  /**
   * Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.
   */
  initialFocus?: MessageBoxAction;
  /**
   * Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the `ESC` key). `event.detail.action` contains the pressed action button.
   */
  onClose?: (event: CustomEvent<{ action: MessageBoxAction }>) => void;
}

const useStyles = createUseStyles(styles, { name: 'MessageBox' });

const getIcon = (icon, type, classes) => {
  if (isValidElement(icon)) return icon;
  switch (type) {
    case MessageBoxTypes.Confirm:
      return (
        <Icon name={iconSysHelp} aria-hidden="true" accessibleRole="presentation" className={classes.confirmIcon} />
      );
    default:
      return null;
  }
};

const convertMessageBoxTypeToState = (type: MessageBoxTypes) => {
  switch (type) {
    case MessageBoxTypes.Information:
      return ValueState.Information;
    case MessageBoxTypes.Success:
      return ValueState.Success;
    case MessageBoxTypes.Warning:
      return ValueState.Warning;
    case MessageBoxTypes.Error:
      return ValueState.Error;
    default:
      return ValueState.None;
  }
};

const getActions = (actions, type): (string | ReactNode)[] => {
  if (actions && actions.length > 0) {
    return actions;
  }
  if (type === MessageBoxTypes.Confirm) {
    return [MessageBoxActions.OK, MessageBoxActions.Cancel];
  }
  if (type === MessageBoxTypes.Error) {
    return [MessageBoxActions.Close];
  }
  return [MessageBoxActions.OK];
};

/**
 * The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.
 * For convenience, it also provides an `open` prop, so it is not necessary to attach a `ref` to open the `MessageBox`.
 */
const MessageBox = forwardRef<DialogDomRef, MessageBoxPropTypes>((props, ref) => {
  const {
    open,
    type,
    children,
    className,
    titleText,
    icon,
    actions,
    emphasizedAction,
    onClose,
    initialFocus,
    ...rest
  } = props;

  const classes = useStyles();

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const actionTranslations = {
    [MessageBoxActions.Abort]: i18nBundle.getText(ABORT),
    [MessageBoxActions.Cancel]: i18nBundle.getText(CANCEL),
    [MessageBoxActions.Close]: i18nBundle.getText(CLOSE),
    [MessageBoxActions.Delete]: i18nBundle.getText(DELETE),
    [MessageBoxActions.Ignore]: i18nBundle.getText(IGNORE),
    [MessageBoxActions.No]: i18nBundle.getText(NO),
    [MessageBoxActions.OK]: i18nBundle.getText(OK),
    [MessageBoxActions.Retry]: i18nBundle.getText(RETRY),
    [MessageBoxActions.Yes]: i18nBundle.getText(YES)
  };

  const titleToRender = () => {
    if (titleText) {
      return titleText;
    }
    switch (type) {
      case MessageBoxTypes.Confirm:
        return i18nBundle.getText(CONFIRMATION);
      case MessageBoxTypes.Error:
        return i18nBundle.getText(ERROR);
      case MessageBoxTypes.Information:
        return i18nBundle.getText(INFORMATION);
      case MessageBoxTypes.Success:
        return i18nBundle.getText(SUCCESS);
      case MessageBoxTypes.Warning:
        return i18nBundle.getText(WARNING);
      default:
        return null;
    }
  };

  const handleOnClose = (e) => {
    const { action } = e.target.dataset;
    stopPropagation(e);
    onClose(enrichEventWithDetails(e, { action }));
  };

  const messageBoxId = useIsomorphicId();
  const internalActions = getActions(actions, type);

  const getInitialFocus = () => {
    const actionToFocus = internalActions.find((action) => action === initialFocus);
    if (typeof actionToFocus === 'string') {
      return `${messageBoxId}-action-${actionToFocus}`;
    }
    return initialFocus;
  };

  // @ts-expect-error: footer, headerText and onAfterClose are already omitted via prop types
  const { footer: _0, headerText: _1, onAfterClose: _2, ...restWithoutOmitted } = rest;

  const iconToRender = getIcon(icon, type, classes);
  const needsCustomHeader = !props.header && !!iconToRender;

  return (
    <Dialog
      open={open}
      ref={ref}
      className={clsx(classes.messageBox, className)}
      onAfterClose={open ? handleOnClose : stopPropagation}
      accessibleNameRef={needsCustomHeader ? `${messageBoxId}-title ${messageBoxId}-text` : undefined}
      accessibleRole={PopupAccessibleRole.AlertDialog}
      {...restWithoutOmitted}
      headerText={titleToRender()}
      state={convertMessageBoxTypeToState(type as MessageBoxTypes)}
      initialFocus={getInitialFocus()}
      data-type={type}
    >
      {needsCustomHeader && (
        <header slot="header" className={classes.header}>
          {iconToRender}
          {iconToRender && <span className={classes.spacer} />}
          <Title id={`${messageBoxId}-title`} level={TitleLevel.H1}>
            {titleToRender()}
          </Title>
        </header>
      )}
      <Text id={`${messageBoxId}-text`}>{children}</Text>
      <footer slot="footer" className={classes.footer}>
        {internalActions.map((action, index) => {
          if (typeof action !== 'string' && isValidElement(action)) {
            return cloneElement<ButtonPropTypes | { 'data-action': string }>(action, {
              onClick: action?.props?.onClick
                ? (e) => {
                    action?.props?.onClick(e);
                    handleOnClose(e);
                  }
                : handleOnClose,
              'data-action': action?.props?.['data-action'] ?? `${index}: custom action`
            });
          }
          if (typeof action === 'string') {
            return (
              <Button
                id={`${messageBoxId}-action-${action}`}
                key={`${action}-${index}`}
                design={emphasizedAction === action ? ButtonDesign.Emphasized : ButtonDesign.Transparent}
                onClick={handleOnClose}
                data-action={action}
              >
                {actionTranslations[action] ?? action}
              </Button>
            );
          }
          return null;
        })}
      </footer>
    </Dialog>
  );
});

MessageBox.displayName = 'MessageBox';

MessageBox.defaultProps = {
  open: false,
  type: MessageBoxTypes.Confirm,
  emphasizedAction: MessageBoxActions.OK,
  actions: []
};

export { MessageBox };
