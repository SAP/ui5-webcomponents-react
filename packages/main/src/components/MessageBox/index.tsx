import '@ui5/webcomponents-icons/dist/hint';
import '@ui5/webcomponents-icons/dist/message-error';
import '@ui5/webcomponents-icons/dist/message-information';
import '@ui5/webcomponents-icons/dist/message-success';
import '@ui5/webcomponents-icons/dist/message-warning';
import '@ui5/webcomponents-icons/dist/question-mark';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef, useI18nBundle, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
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
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, {
  FC,
  forwardRef,
  isValidElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useEffect,
  useMemo
} from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { stopPropagation } from '../../internal/stopPropagation';
import styles from './MessageBox.jss';

export interface MessageBoxPropTypes extends CommonProps {
  /**
   * Flag whether the Message Box should be opened or closed
   */
  open?: boolean;
  /**
   * A custom title for the MessageBox. If not present, it will be derived from the `MessageBox` type.
   */
  title?: string;
  /**
   * Defines the content of the `MessageBox`.
   *
   * **Note:** Although this prop accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Array of actions of the MessageBox. Those actions will be transformed into buttons in the `MessageBox` footer.
   */
  actions?: (MessageBoxActions | string)[];
  /**
   * A custom icon. If not present, it will be derived from the `MessageBox` type.
   */
  icon?: ReactNode;
  /**
   * Defines the type of the `MessageBox` with predefined title, icon, actions and a visual highlight color.
   */
  type?: MessageBoxTypes;
  /**
   * Callback to be executed when the `MessageBox` is closed (either by pressing on one of the `actions` or by pressing the `ESC` key). `event.detail.action` contains the pressed action button.
   */
  onClose: (event: CustomEvent<{ action: MessageBoxActions }>) => void;
}

const useStyles = createComponentStyles(styles, { name: 'MessageBox' });

/**
 * The `MessageBox` component provides easier methods to create a `Dialog`, such as standard alerts, confirmation dialogs, or arbitrary message dialogs.
 * For convenience, it also provides an `open` prop, so it is not necessary to attach a `ref` to open the `MessageBox`.
 */
const MessageBox: FC<MessageBoxPropTypes> = forwardRef((props: MessageBoxPropTypes, ref: Ref<Ui5DialogDomRef>) => {
  const { open, type, children, className, style, tooltip, slot, title, icon, actions, onClose } = props;
  const dialogRef = useConsolidatedRef<Ui5DialogDomRef>(ref);

  const classes = useStyles();

  const iconToRender = useMemo(() => {
    if (isValidElement(icon)) return icon;
    switch (type) {
      case MessageBoxTypes.CONFIRM:
        return <Icon name="question-mark" />;
      case MessageBoxTypes.ERROR:
        return <Icon name="message-error" />;
      case MessageBoxTypes.INFORMATION:
        return <Icon name="message-information" />;
      case MessageBoxTypes.SUCCESS:
        return <Icon name="message-success" />;
      case MessageBoxTypes.WARNING:
        return <Icon name="message-warning" />;
      case MessageBoxTypes.HIGHLIGHT:
        return <Icon name="hint" />;
      default:
        return null;
    }
  }, [icon, type]);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const actionTranslations = {
    [MessageBoxActions.ABORT]: i18nBundle.getText(ABORT),
    [MessageBoxActions.CANCEL]: i18nBundle.getText(CANCEL),
    [MessageBoxActions.CLOSE]: i18nBundle.getText(CLOSE),
    [MessageBoxActions.DELETE]: i18nBundle.getText(DELETE),
    [MessageBoxActions.IGNORE]: i18nBundle.getText(IGNORE),
    [MessageBoxActions.NO]: i18nBundle.getText(NO),
    [MessageBoxActions.OK]: i18nBundle.getText(OK),
    [MessageBoxActions.RETRY]: i18nBundle.getText(RETRY),
    [MessageBoxActions.YES]: i18nBundle.getText(YES)
  };

  const titleToRender = () => {
    if (title) {
      return title;
    }
    switch (type) {
      case MessageBoxTypes.CONFIRM:
        return i18nBundle.getText(CONFIRMATION);
      case MessageBoxTypes.ERROR:
        return i18nBundle.getText(ERROR);
      case MessageBoxTypes.INFORMATION:
        return i18nBundle.getText(INFORMATION);
      case MessageBoxTypes.SUCCESS:
        return i18nBundle.getText(SUCCESS);
      case MessageBoxTypes.WARNING:
        return i18nBundle.getText(WARNING);
      case MessageBoxTypes.HIGHLIGHT:
        return i18nBundle.getText(HIGHLIGHT);
      default:
        return null;
    }
  };

  const actionsToRender = useMemo(() => {
    if (actions && actions.length > 0) {
      return actions;
    }
    if (type === MessageBoxTypes.CONFIRM) {
      return [MessageBoxActions.OK, MessageBoxActions.CANCEL];
    }
    if (type === MessageBoxTypes.ERROR) {
      return [MessageBoxActions.CLOSE];
    }
    return [MessageBoxActions.OK];
  }, [actions, type]);

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
        dialogRef.current.open();
      } else {
        dialogRef.current.close();
      }
    }
  }, [open, dialogRef]);

  const passThroughProps = usePassThroughHtmlProps(props, ['onClose']);

  const messageBoxClassNames = StyleClassHelper.of(classes.messageBox).putIfPresent(className).className;

  return (
    <Dialog
      slot={slot}
      ref={dialogRef}
      style={style}
      tooltip={tooltip}
      className={messageBoxClassNames}
      header={
        <header className={classes.header} data-type={type}>
          {iconToRender}
          <Title level={TitleLevel.H5}>{titleToRender()}</Title>
        </header>
      }
      footer={
        <footer className={classes.footer}>
          {actionsToRender.map((action, index) => {
            return (
              <Button
                key={action}
                design={index === 0 ? ButtonDesign.Emphasized : ButtonDesign.Transparent}
                onClick={handleOnClose}
                data-action={action}
              >
                {actionTranslations[action] ?? action}
              </Button>
            );
          })}
        </footer>
      }
      onAfterClose={open ? handleOnClose : stopPropagation}
      {...passThroughProps}
    >
      <Text className={classes.content}>{children}</Text>
    </Dialog>
  );
});

MessageBox.displayName = 'MessageBox';

MessageBox.defaultProps = {
  open: false,
  title: null,
  icon: null,
  type: MessageBoxTypes.CONFIRM,
  actions: []
};

export { MessageBox };
