import '@ui5/webcomponents-icons/dist/icons/hint';
import '@ui5/webcomponents-icons/dist/icons/message-error';
import '@ui5/webcomponents-icons/dist/icons/message-information';
import '@ui5/webcomponents-icons/dist/icons/message-success';
import '@ui5/webcomponents-icons/dist/icons/message-warning';
import '@ui5/webcomponents-icons/dist/icons/question-mark';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef, useI18nBundle, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';

import {
  CONFIRMATION,
  ERROR,
  HIGHLIGHT,
  INFORMATION,
  ABORT,
  CANCEL,
  CLOSE,
  DELETE,
  IGNORE,
  NO,
  OK,
  RETRY,
  YES,
  SUCCESS,
  WARNING
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
import styles from './MessageBox.jss';

const actionTextMap = new Map();
actionTextMap.set(MessageBoxActions.ABORT, ABORT);
actionTextMap.set(MessageBoxActions.CANCEL, CANCEL);
actionTextMap.set(MessageBoxActions.CLOSE, CLOSE);
actionTextMap.set(MessageBoxActions.DELETE, DELETE);
actionTextMap.set(MessageBoxActions.IGNORE, IGNORE);
actionTextMap.set(MessageBoxActions.NO, NO);
actionTextMap.set(MessageBoxActions.OK, OK);
actionTextMap.set(MessageBoxActions.RETRY, RETRY);
actionTextMap.set(MessageBoxActions.YES, YES);

export interface MessageBoxPropTypes extends CommonProps {
  open?: boolean;
  title?: string;
  children: string;
  actions?: MessageBoxActions[];
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

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

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

  const titleToRender = useMemo(() => {
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
    }
    return null;
  }, [title, type, i18nBundle]);

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

  return (
    <Dialog
      slot={slot}
      ref={dialogRef}
      style={style}
      tooltip={tooltip}
      className={className}
      onAfterClose={open ? handleOnClose : null}
      header={
        <header className={classes.header} data-type={type}>
          {!!iconToRender && <div className={classes.icon}>{iconToRender}</div>}
          <Title level={TitleLevel.H5}>{titleToRender}</Title>
        </header>
      }
      footer={
        <footer className={classes.footer}>
          {actionsToRender.map((action, index) => {
            const text = i18nBundle.getText(actionTextMap.get(action));
            return (
              <Button
                style={{
                  minWidth: '4rem'
                }}
                key={action}
                design={index === 0 ? ButtonDesign.Emphasized : ButtonDesign.Transparent}
                onClick={handleOnClose}
                data-action={action}
              >
                {text}
              </Button>
            );
          })}
        </footer>
      }
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
