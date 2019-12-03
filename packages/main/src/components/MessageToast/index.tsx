import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './MessageToast.jss';
import '@ui5/webcomponents-icons/dist/icons/message-error';
import '@ui5/webcomponents-icons/dist/icons/message-warning';
import '@ui5/webcomponents-icons/dist/icons/sys-enter';

const coloredStyles = ({ parameters }: JSSTheme) => ({
  base: {
    width: '1.375rem',
    minWidth: '1.375rem',
    height: '1.375rem',
    minHeight: '1.375rem'
  },
  Success: {
    color: parameters.sapUiPositiveElement
  },
  Error: {
    color: parameters.sapUiNegativeElement
  },
  Warning: {
    color: parameters.sapUiCriticalElement
  }
});

const useIconStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof coloredStyles>>(coloredStyles, {
  name: 'MessageToastIcon'
});

const ColoredIcon = ({ name, state }) => {
  const classes = useIconStyles();
  return <Icon name={name} className={`${classes.base} ${classes[state]}`} />;
};

const useMessageToastStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, {
  name: 'MessageToast'
});

const MessageToast = () => {
  const classes = useMessageToastStyles();

  return createPortal(
    <ToastContainer
      closeButton={false}
      autoClose={3000}
      hideProgressBar
      closeOnClick={false}
      position="bottom-center"
      toastClassName={classes.messageToast}
      bodyClassName={classes.messageToastBody}
      className={classes.messageToastContainer}
    />,
    document.body
  );
};

const CONTAINER_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const mergeStyleWithDefault = (style) => {
  return Object.assign({}, CONTAINER_STYLE, style);
};

MessageToast.show = (text, options: CommonProps = {}) => {
  toast(text, options);
};

MessageToast.error = (text, options: CommonProps = {}) => {
  const toastContent = (
    <div style={mergeStyleWithDefault(options.style)} className={options.className}>
      <ColoredIcon name="message-error" state={ValueState.Error} />
      <span style={{ marginLeft: '0.5rem' }}>{text}</span>
    </div>
  );

  MessageToast.show(toastContent, options);
};

MessageToast.success = (text, options: CommonProps = {}) => {
  const toastContent = (
    <div style={mergeStyleWithDefault(options.style)} className={options.className}>
      <ColoredIcon name="sys-enter" state={ValueState.Success} />
      <span style={{ marginLeft: '0.5rem' }}>{text}</span>
    </div>
  );

  MessageToast.show(toastContent, options);
};

MessageToast.warning = (text, options: CommonProps = {}) => {
  const toastContent = (
    <div style={mergeStyleWithDefault(options.style)} className={options.className}>
      <ColoredIcon name="message-warning" state={ValueState.Warning} />
      <span style={{ marginLeft: '0.5rem' }}>{text}</span>
    </div>
  );

  MessageToast.show(toastContent, options);
};

MessageToast.displayName = 'MessageToast';

export { MessageToast };
