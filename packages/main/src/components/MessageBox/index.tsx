import '@ui5/webcomponents-icons/dist/hint.js';
import '@ui5/webcomponents-icons/dist/message-error.js';
import '@ui5/webcomponents-icons/dist/message-information.js';
import '@ui5/webcomponents-icons/dist/message-success.js';
import '@ui5/webcomponents-icons/dist/message-warning.js';
import '@ui5/webcomponents-icons/dist/question-mark.js';
import { useI18nBundle, useIsomorphicLayoutEffect, useSyncRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
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
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { Dialog, DialogPropTypes } from '@ui5/webcomponents-react/dist/Dialog';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { MessageBoxActions } from '@ui5/webcomponents-react/dist/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/dist/MessageBoxTypes';
import { Text } from '@ui5/webcomponents-react/dist/Text';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { Ui5DialogDomRef } from '@ui5/webcomponents-react/interfaces/Ui5DialogDomRef';
import clsx from 'clsx';
import React, {
  forwardRef,
  isValidElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { stopPropagation } from '../../internal/stopPropagation';
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
  children: ReactNode | ReactNodeArray;
  /**
   * Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.
   */
  actions?: MessageBoxAction[];
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
  onBeforeOpen?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * Fired after the component is opened. This event does not bubble.
   */
  onAfterOpen?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

const useStyles = createUseStyles(styles, { name: 'MessageBox' });

const createUniqueIds = (internalActions) =>
  internalActions.map((_) => `${performance.now() + Math.random()}`.split('.')[1]);

/**
 * The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.
 * For convenience, it also provides an `open` prop, so it is not necessary to attach a `ref` to open the `MessageBox`.
 */
const MessageBox = forwardRef((props: MessageBoxPropTypes, ref: Ref<Ui5DialogDomRef>) => {
  const {
    open,
    type,
    children,
    className,
    style,
    tooltip,
    slot,
    titleText,
    icon,
    actions,
    emphasizedAction,
    onClose,
    initialFocus,
    accessibleName,
    ...rest
  } = props;
  const [componentRef, dialogRef] = useSyncRef<Ui5DialogDomRef>(ref);

  const classes = useStyles();

  const iconToRender = useMemo(() => {
    if (isValidElement(icon)) return icon;
    switch (type) {
      case MessageBoxTypes.Confirm:
        return <Icon name="question-mark" />;
      case MessageBoxTypes.Error:
        return <Icon name="message-error" />;
      case MessageBoxTypes.Information:
        return <Icon name="message-information" />;
      case MessageBoxTypes.Success:
        return <Icon name="message-success" />;
      case MessageBoxTypes.Warning:
        return <Icon name="message-warning" />;
      case MessageBoxTypes.Highlight:
        return <Icon name="hint" />;
      default:
        return null;
    }
  }, [icon, type]);

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

  const getActions = () => {
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

  const handleOnClose = useCallback(
    (e) => {
      const { action } = e.target.dataset;
      stopPropagation(e);
      onClose(enrichEventWithDetails(e, { action }));
    },
    [onClose]
  );

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        dialogRef.current.show?.();
      } else {
        dialogRef.current.close?.();
      }
    }
  }, [dialogRef.current, open]);

  const messageBoxClassNames = clsx(classes.messageBox, className);
  const internalActions = getActions();

  const [uniqueIds, setUniqueIds] = useState(() => createUniqueIds(internalActions));
  useIsomorphicLayoutEffect(() => {
    setUniqueIds(createUniqueIds(internalActions));
  }, [internalActions.length]);

  const getInitialFocus = () => {
    const indexOfInitialFocus = internalActions.indexOf(initialFocus);
    if (~indexOfInitialFocus) {
      return `${internalActions[indexOfInitialFocus]}-${uniqueIds[indexOfInitialFocus]}`;
    }
    return initialFocus;
  };

  // @ts-ignore
  const { footer, headerText, title, onAfterClose, ...restWithoutOmitted } = rest;

  return (
    <Dialog
      slot={slot}
      ref={componentRef}
      style={style}
      title={tooltip ?? props.title}
      className={messageBoxClassNames}
      onAfterClose={open ? handleOnClose : stopPropagation}
      {...restWithoutOmitted}
      accessibleName={accessibleName ?? `${titleToRender() ?? ''} ${typeof children === 'string' ? children : ''}`}
      initialFocus={getInitialFocus()}
    >
      {!props.header && (
        <header slot="header" className={classes.header} data-type={type}>
          {iconToRender}
          {iconToRender && <span className={classes.spacer} />}
          <Title level={TitleLevel.H2}>{titleToRender()}</Title>
        </header>
      )}
      <Text className={classes.content}>{children}</Text>
      <footer slot="footer" className={classes.footer}>
        {internalActions.map((action, index) => (
          <Button
            id={`${action}-${uniqueIds[index]}`}
            key={`${action}-${index}`}
            design={emphasizedAction === action ? ButtonDesign.Emphasized : ButtonDesign.Transparent}
            onClick={handleOnClose}
            data-action={action}
          >
            {actionTranslations[action] ?? action}
          </Button>
        ))}
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
