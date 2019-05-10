import { Event, StyleClassHelper } from '@fiori-for-react/utils';
import { Icon } from '@lib/Icon';
import { MessageBoxButton } from '@lib/MessageBoxButton';
import { Text } from '@lib/Text';
import { Title } from '@lib/Title';
import { TitleLevel } from '@lib/TitleLevel';
import React, { isValidElement, PureComponent, ReactNode } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { withStyles } from '@fiori-for-react/styles';
import styles from './MessageBox.jss';

export enum MessageBoxActions {
  ABORT = 'Abort',
  CANCEL = 'Cancel',
  CLOSE = 'Close',
  DELETE = 'Delete',
  IGNORE = 'Ignore',
  NO = 'No',
  OK = 'OK',
  RETRY = 'Retry',
  YES = 'Yes'
}

export enum MessageBoxTypes {
  CONFIRM = 'Confirm',
  ERROR = 'Error',
  INFORMATION = 'Information',
  SUCCESS = 'Success',
  WARNING = 'Warning',
  HIGHLIGHT = 'Highlight'
}

export interface MessageBoxPropTypes extends Fiori3CommonProps {
  visible: boolean;
  title?: string;
  children: string;
  actions?: MessageBoxActions[];
  icon?: ReactNode;
  type?: MessageBoxTypes;
  onClose: (event: Event) => void;
}

interface MessageBoxInternalPropTypes extends MessageBoxPropTypes, ClassProps {}

@withStyles(styles)
export class MessageBox extends PureComponent<MessageBoxPropTypes> {
  static defaultProps = {
    title: null,
    icon: null,
    type: MessageBoxTypes.CONFIRM,
    actions: []
  };

  private getTitle = () => {
    if (this.props.title) {
      return this.props.title;
    }
    const { type } = this.props;

    switch (type) {
      case MessageBoxTypes.CONFIRM:
        return 'Confirmation';
      case MessageBoxTypes.ERROR:
        return 'Error';
      case MessageBoxTypes.INFORMATION:
        return 'Information';
      case MessageBoxTypes.SUCCESS:
        return 'Success';
      case MessageBoxTypes.WARNING:
        return 'Warning';
      case MessageBoxTypes.HIGHLIGHT:
        return 'Highlight';
    }
    return null;
  };

  private getIcon = () => {
    if (isValidElement(this.props.icon)) return this.props.icon;
    const { type } = this.props;
    switch (type) {
      case MessageBoxTypes.CONFIRM:
        return <Icon src="question-mark" />;
      case MessageBoxTypes.ERROR:
        return <Icon src="message-error" />;
      case MessageBoxTypes.INFORMATION:
        return <Icon src="message-information" />;
      case MessageBoxTypes.SUCCESS:
        return <Icon src="message-success" />;
      case MessageBoxTypes.WARNING:
        return <Icon src="message-warning" />;
      case MessageBoxTypes.HIGHLIGHT:
        return <Icon src="hint" />;
    }

    return null;
  };

  private getActions = () => {
    if (this.props.actions && this.props.actions.length > 0) {
      return this.props.actions;
    }
    const { type } = this.props;
    if (type === MessageBoxTypes.CONFIRM) {
      return [MessageBoxActions.OK, MessageBoxActions.CANCEL];
    }
    if (type === MessageBoxTypes.ERROR) {
      return [MessageBoxActions.CLOSE];
    }
    return [MessageBoxActions.OK];
  };

  private handleOnClose = (e, action) => {
    this.props.onClose(Event.of(this, e, { action }));
  };

  render() {
    const { visible, classes, type, children, className, style, tooltip } = this.props as MessageBoxInternalPropTypes;
    if (!visible) {
      return null;
    }

    const messageBoxClasses = StyleClassHelper.of(classes.messageBox);
    if (className) {
      messageBoxClasses.put(className);
    }

    const icon = this.getIcon();
    const title = this.getTitle();

    return (
      <div className={classes.overlay} data-ui5-slot={this.props['data-ui5-slot']}>
        <div className={messageBoxClasses.toString()} style={style} title={tooltip}>
          <header className={classes.header} data-type={type}>
            {!!icon && <div className={classes.icon}>{icon}</div>}
            <Title level={TitleLevel.H5}>{title}</Title>
          </header>
          <section className={classes.content}>
            <Text>{children}</Text>
          </section>
          <footer className={classes.footer}>
            {this.getActions().map((action, index) => (
              <MessageBoxButton emphasize={index === 0} key={action} onClick={this.handleOnClose} action={action} />
            ))}
          </footer>
        </div>
      </div>
    );
  }
}
