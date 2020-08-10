import '@ui5/webcomponents-icons/dist/icons/hint';
import '@ui5/webcomponents-icons/dist/icons/message-error';
import '@ui5/webcomponents-icons/dist/icons/message-information';
import '@ui5/webcomponents-icons/dist/icons/message-success';
import '@ui5/webcomponents-icons/dist/icons/message-warning';
import '@ui5/webcomponents-icons/dist/icons/question-mark';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef, useI18nText, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
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
import React, { FC, forwardRef, isValidElement, ReactNode, Ref, useCallback, useEffect, useMemo } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { stopPropagation } from '../../internal/stopPropagation';
import styles from './MessageBox.jss';

const actionTextMap = new Map();
actionTextMap.set(MessageBoxActions.ABORT, 0);
actionTextMap.set(MessageBoxActions.CANCEL, 1);
actionTextMap.set(MessageBoxActions.CLOSE, 2);
actionTextMap.set(MessageBoxActions.DELETE, 3);
actionTextMap.set(MessageBoxActions.IGNORE, 4);
actionTextMap.set(MessageBoxActions.NO, 5);
actionTextMap.set(MessageBoxActions.OK, 6);
actionTextMap.set(MessageBoxActions.RETRY, 7);
actionTextMap.set(MessageBoxActions.YES, 8);

export interface MessageBoxPropTypes extends CommonProps {
  open?: boolean;
  title?: string;
  children: string;
  actions?: (MessageBoxActions | string)[];
  icon?: ReactNode;
  type?: MessageBoxTypes;
  onClose: (event: CustomEvent<{ action: MessageBoxActions }>) => void;
}

const useStyles = createComponentStyles(styles, { name: 'MessageBox' });

/**
 * <code>import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';</code>
 */
const MessageBox: FC<MessageBoxPropTypes> = forwardRef((props: MessageBoxPropTypes, ref: Ref<Ui5DialogDomRef>) => {
  const { open, type, children, className, style, tooltip, slot, title, icon, actions, onClose } = props;

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
    }

    return null;
  }, [icon, type]);

  const [
    titleConfirmation,
    titleError,
    titleInformation,
    titleSuccess,
    titleWarning,
    titleHighlight,
    ...actionTranslations
  ] = useI18nText(
    '@ui5/webcomponents-react',
    CONFIRMATION,
    ERROR,
    INFORMATION,
    SUCCESS,
    WARNING,
    HIGHLIGHT,
    ABORT,
    CANCEL,
    CLOSE,
    DELETE,
    IGNORE,
    NO,
    OK,
    RETRY,
    YES
  );

  const titleToRender = () => {
    if (title) {
      return title;
    }
    switch (type) {
      case MessageBoxTypes.CONFIRM:
        return titleConfirmation;
      case MessageBoxTypes.ERROR:
        return titleError;
      case MessageBoxTypes.INFORMATION:
        return titleInformation;
      case MessageBoxTypes.SUCCESS:
        return titleSuccess;
      case MessageBoxTypes.WARNING:
        return titleWarning;
      case MessageBoxTypes.HIGHLIGHT:
        return titleHighlight;
    }
    return null;
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

  const dialogRef = useConsolidatedRef<Ui5DialogDomRef>(ref);

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
                {actionTextMap.has(action) ? actionTranslations[actionTextMap.get(action)] : action}
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
