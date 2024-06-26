'use client';

import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import PopupAccessibleRole from '@ui5/webcomponents/dist/types/PopupAccessibleRole.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import iconSysHelp from '@ui5/webcomponents-icons/dist/sys-help-2.js';
import { enrichEventWithDetails, useI18nBundle, useIsomorphicId, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import { cloneElement, forwardRef, isValidElement } from 'react';
import { MessageBoxAction, MessageBoxType } from '../../enums/index.js';
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
import type { Ui5CustomEvent } from '../../types/index.js';
import type { ButtonDomRef, ButtonPropTypes, DialogDomRef, DialogPropTypes } from '../../webComponents/index.js';
import { Button, Dialog, Icon, Title } from '../../webComponents/index.js';
import { Text } from '../Text/index.js';
import { classNames, styleData } from './MessageBox.module.css.js';

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type MessageBoxActionType = MessageBoxAction | keyof typeof MessageBoxAction | string;

export interface MessageBoxPropTypes
  extends Omit<
    DialogPropTypes,
    'children' | 'footer' | 'headerText' | 'onClose' | 'state' | 'accessibleNameRef' | 'open' | 'initialFocus'
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
  actions?: (MessageBoxActionType | ReactNode)[];
  /**
   * Specifies which action of the created dialog will be emphasized.
   *
   * @since 0.16.3
   *
   * @default `"OK"`
   */
  emphasizedAction?: MessageBoxActionType;
  /**
   * A custom icon. If not present, it will be derived from the `MessageBox` type.
   */
  icon?: ReactNode;
  /**
   * Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.
   *
   * @default `"Confirm"`
   */
  type?: MessageBoxType | keyof typeof MessageBoxType;
  /**
   * Defines the ID of the HTML Element or the `MessageBoxAction`, which will get the initial focus.
   */
  initialFocus?: MessageBoxActionType;
  /**
   * Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the `ESC` key).
   * `event.detail.action` contains the pressed action button.
   *
   * __Note:__ The target of the event differs according to how the user closed the dialog.
   */
  onClose?: (
    //todo adjust this once enrichEventWithDetails forwards the native `detail`
    event:
      | Ui5CustomEvent<DialogDomRef, { action: undefined }>
      | (MouseEvent & ButtonDomRef & { detail: { action: MessageBoxActionType } })
  ) => void;
}

const getIcon = (icon, type, classes) => {
  if (isValidElement(icon)) return icon;
  switch (type) {
    case MessageBoxType.Confirm:
      return <Icon name={iconSysHelp} mode={IconMode.Decorative} className={classes.confirmIcon} />;
    default:
      return null;
  }
};

const convertMessageBoxTypeToState = (type: MessageBoxType) => {
  switch (type) {
    case MessageBoxType.Information:
      return ValueState.Information;
    case MessageBoxType.Success:
      return ValueState.Positive;
    case MessageBoxType.Warning:
      return ValueState.Critical;
    case MessageBoxType.Error:
      return ValueState.Negative;
    default:
      return ValueState.None;
  }
};

const getActions = (actions, type): (string | ReactElement<ButtonPropTypes>)[] => {
  if (actions && actions.length > 0) {
    return actions;
  }
  if (type === MessageBoxType.Confirm) {
    return [MessageBoxAction.OK, MessageBoxAction.Cancel];
  }
  if (type === MessageBoxType.Error) {
    return [MessageBoxAction.Close];
  }
  return [MessageBoxAction.OK];
};

/**
 * The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.
 * For convenience, it also provides an `open` prop, so it is not necessary to attach a `ref` to open the `MessageBox`.
 */
const MessageBox = forwardRef<DialogDomRef, MessageBoxPropTypes>((props, ref) => {
  const {
    open,
    type = MessageBoxType.Confirm,
    children,
    className,
    titleText,
    icon,
    actions = [],
    emphasizedAction = MessageBoxAction.OK,
    onClose,
    initialFocus,
    ...rest
  } = props;

  useStylesheet(styleData, MessageBox.displayName);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const actionTranslations = {
    [MessageBoxAction.Abort]: i18nBundle.getText(ABORT),
    [MessageBoxAction.Cancel]: i18nBundle.getText(CANCEL),
    [MessageBoxAction.Close]: i18nBundle.getText(CLOSE),
    [MessageBoxAction.Delete]: i18nBundle.getText(DELETE),
    [MessageBoxAction.Ignore]: i18nBundle.getText(IGNORE),
    [MessageBoxAction.No]: i18nBundle.getText(NO),
    [MessageBoxAction.OK]: i18nBundle.getText(OK),
    [MessageBoxAction.Retry]: i18nBundle.getText(RETRY),
    [MessageBoxAction.Yes]: i18nBundle.getText(YES)
  };

  const titleToRender = () => {
    if (titleText) {
      return titleText;
    }
    switch (type) {
      case MessageBoxType.Confirm:
        return i18nBundle.getText(CONFIRMATION);
      case MessageBoxType.Error:
        return i18nBundle.getText(ERROR);
      case MessageBoxType.Information:
        return i18nBundle.getText(INFORMATION);
      case MessageBoxType.Success:
        return i18nBundle.getText(SUCCESS);
      case MessageBoxType.Warning:
        return i18nBundle.getText(WARNING);
      default:
        return null;
    }
  };

  const handleDialogClose: DialogPropTypes['onBeforeClose'] = (e) => {
    if (typeof props.onBeforeClose === 'function') {
      props.onBeforeClose(e);
    }
    if (e.detail.escPressed) {
      // @ts-expect-error: todo check type
      onClose(enrichEventWithDetails(e, { action: undefined }));
    }
  };

  const handleOnClose: ButtonPropTypes['onClick'] = (e) => {
    const { action } = e.currentTarget.dataset;
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

  // @ts-expect-error: footer, headerText and onClose are already omitted via prop types
  const { footer: _0, headerText: _1, onClose: _2, onBeforeClose: _3, ...restWithoutOmitted } = rest;

  const iconToRender = getIcon(icon, type, classNames);
  const needsCustomHeader = !props.header && !!iconToRender;

  return (
    <Dialog
      open={open}
      ref={ref}
      className={clsx(classNames.messageBox, className)}
      onBeforeClose={handleDialogClose}
      accessibleNameRef={needsCustomHeader ? `${messageBoxId}-title ${messageBoxId}-text` : undefined}
      accessibleRole={PopupAccessibleRole.AlertDialog}
      {...restWithoutOmitted}
      headerText={titleToRender()}
      state={convertMessageBoxTypeToState(type as MessageBoxType)}
      initialFocus={getInitialFocus()}
      data-type={type}
    >
      {needsCustomHeader && (
        <div slot="header" className={classNames.header}>
          {iconToRender}
          {iconToRender && <span className={classNames.spacer} />}
          <Title id={`${messageBoxId}-title`} level={TitleLevel.H1}>
            {titleToRender()}
          </Title>
        </div>
      )}
      <Text id={`${messageBoxId}-text`}>{children}</Text>
      <div slot="footer" className={classNames.footer}>
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
      </div>
    </Dialog>
  );
});

MessageBox.displayName = 'MessageBox';

export { MessageBox };
