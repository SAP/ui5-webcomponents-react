import '@ui5/webcomponents-icons/dist/icons/message-error';
import '@ui5/webcomponents-icons/dist/icons/message-warning';
import '@ui5/webcomponents-icons/dist/icons/sys-enter';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createPortal } from 'react-dom';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { toast, ToastContainer, ToastContent, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './MessageToast.jss';

const coloredStyles = {
  base: {
    width: '1.375rem',
    minWidth: '1.375rem',
    height: '1.375rem',
    minHeight: '1.375rem'
  },
  Success: {
    color: ThemingParameters.sapPositiveElementColor
  },
  Error: {
    color: ThemingParameters.sapNegativeElementColor
  },
  Warning: {
    color: ThemingParameters.sapCriticalElementColor
  }
};

const useIconStyles = createComponentStyles(coloredStyles, {
  name: 'MessageToastIcon'
});

const ColoredIcon = ({ name, state }) => {
  const classes = useIconStyles();
  return <Icon name={name} className={`${classes.base} ${classes[state]}`} />;
};

const useMessageToastStyles = createComponentStyles(styles, {
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
      position={toast.POSITION.BOTTOM_CENTER}
      toastClassName={classes.messageToast}
      bodyClassName={classes.messageToastBody}
      className={classes.messageToastContainer}
    />,
    document.body
  );
};

MessageToast.show = (text: ToastContent, options?: ToastOptions) => {
  toast(text, options);
};

MessageToast.error = (text, options?: ToastOptions) => {
  const toastContent = (
    <>
      <ColoredIcon name="message-error" state={ValueState.Error} />
      <span style={{ marginLeft: '0.5rem' }}>{text}</span>
    </>
  );

  MessageToast.show(toastContent, options);
};

MessageToast.success = (text, options?: ToastOptions) => {
  const toastContent = (
    <>
      <ColoredIcon name="sys-enter" state={ValueState.Success} />
      <span style={{ marginLeft: '0.5rem' }}>{text}</span>
    </>
  );

  MessageToast.show(toastContent, options);
};

MessageToast.warning = (text, options?: ToastOptions) => {
  const toastContent = (
    <>
      <ColoredIcon name="message-warning" state={ValueState.Warning} />
      <span style={{ marginLeft: '0.5rem' }}>{text}</span>
    </>
  );

  MessageToast.show(toastContent, options);
};

MessageToast.displayName = 'MessageToast';

export { MessageToast };
