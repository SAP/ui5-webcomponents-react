import '@ui5/webcomponents-icons/dist/hint.js';
import '@ui5/webcomponents-icons/dist/message-error.js';
import '@ui5/webcomponents-icons/dist/message-information.js';
import '@ui5/webcomponents-icons/dist/message-success.js';
import '@ui5/webcomponents-icons/dist/message-warning.js';
import '@ui5/webcomponents-icons/dist/question-mark.js';
import {
  enrichEventWithDetails,
  useI18nBundle,
  useIsomorphicLayoutEffect,
  useIsomorphicId
} from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, { cloneElement, forwardRef, isValidElement, ReactNode, Ref, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { MessageBoxActions } from '../../enums/MessageBoxActions';
import { MessageBoxTypes } from '../../enums/MessageBoxTypes';
import { TitleLevel } from '../../enums/TitleLevel';
import {
  ABORT,
  CANCEL,
  CLOSE,
  CONFIRMATION,
  DELETE,
  ERROR,
  HIGHLIGHT,
  IGNORE,
  INFORMATION,
  NO,
  OK,
  RETRY,
  SUCCESS,
  WARNING,
  YES
} from '../../i18n/i18n-defaults';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { stopPropagation } from '../../internal/stopPropagation';
import { Button, ButtonPropTypes } from '../../webComponents/Button';
import { Dialog, DialogDomRef, DialogPropTypes } from '../../webComponents/Dialog';
import { Icon, IconPropTypes } from '../../webComponents/Icon';
import { Title } from '../../webComponents/Title';
import { Text } from '../Text';
import styles from './MessageBox.jss';

type MessageBoxAction = MessageBoxActions | keyof typeof MessageBoxActions | string;

export interface MessageBoxPropTypes
  extends Omit<DialogPropTypes, 'children' | 'footer' | 'headerText' | 'onAfterClose'> {
  /**
   * Flag whether the Message Box should be opened or closed
   */
  open?: boolean;
  /**
   * A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.
   */
  titleText?: string;
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
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. This event does not bubble.
   */
  onBeforeOpen?: (event: Ui5CustomEvent<DialogDomRef>) => void;
  /**
   * Fired after the component is opened. This event does not bubble.
   */
  onAfterOpen?: (event: Ui5CustomEvent<DialogDomRef>) => void;
}

const useStyles = createUseStyles(styles, { name: 'MessageBox' });

const createUniqueIds = (internalActions): (string | null)[] => {
  return internalActions.map((action) => {
    if (typeof action === 'string') {
      return `${performance.now() + Math.random()}`.split('.')[1];
    }
    return null;
  });
};

const getIcon = (icon, type) => {
  if (isValidElement(icon)) return icon;
  const iconProps = { 'aria-hidden': 'true', accessibleRole: 'presentation' } as IconPropTypes;
  switch (type) {
    case MessageBoxTypes.Confirm:
      return <Icon name="question-mark" {...iconProps} />;
    case MessageBoxTypes.Error:
      return <Icon name="message-error" {...iconProps} />;
    case MessageBoxTypes.Information:
      return <Icon name="message-information" {...iconProps} />;
    case MessageBoxTypes.Success:
      return <Icon name="message-success" {...iconProps} />;
    case MessageBoxTypes.Warning:
      return <Icon name="message-warning" {...iconProps} />;
    case MessageBoxTypes.Highlight:
      return <Icon name="hint" {...iconProps} />;
    default:
      return null;
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
const MessageBox = forwardRef((props: MessageBoxPropTypes, ref: Ref<DialogDomRef>) => {
  const {
    open,
    type,
    children,
    className,
    style,
    slot,
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
      case MessageBoxTypes.Highlight:
        return i18nBundle.getText(HIGHLIGHT);
      default:
        return null;
    }
  };

  const handleOnClose = (e) => {
    const { action } = e.target.dataset;
    stopPropagation(e);
    onClose(enrichEventWithDetails(e, { action }));
  };

  const messageBoxClassNames = clsx(classes.messageBox, className);
  const internalActions = getActions(actions, type);

  const [uniqueIds, setUniqueIds] = useState(() => createUniqueIds(internalActions));
  useIsomorphicLayoutEffect(() => {
    setUniqueIds(createUniqueIds(internalActions));
  }, [internalActions.length]);

  const getInitialFocus = () => {
    const indexOfInitialFocus = internalActions.indexOf(initialFocus);
    const actionToFocus = internalActions[indexOfInitialFocus] as string;
    if (typeof actionToFocus === 'string') {
      return `${actionToFocus}-${uniqueIds[indexOfInitialFocus]}`;
    }
    return initialFocus;
  };

  const iconToRender = getIcon(icon, type);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { footer: _0, headerText: _1, onAfterClose: _2, ...restWithoutOmitted } = rest;

  const messageBoxId = useIsomorphicId();

  return (
    <Dialog
      open={open}
      slot={slot}
      ref={ref}
      style={style}
      className={messageBoxClassNames}
      onAfterClose={open ? handleOnClose : stopPropagation}
      {...restWithoutOmitted}
      accessibleNameRef={`${messageBoxId}-title ${messageBoxId}-text`}
      initialFocus={getInitialFocus()}
      data-type={type}
    >
      {!props.header && (
        <header slot="header" className={classes.header}>
          {iconToRender}
          {iconToRender && <span className={classes.spacer} />}
          <Title id={`${messageBoxId}-title`} level={TitleLevel.H2}>
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
                id={`${action}-${uniqueIds[index]}`}
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
