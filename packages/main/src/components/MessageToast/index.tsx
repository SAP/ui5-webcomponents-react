import { withStyles } from '@ui5/webcomponents-react-base/';
import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import styles from './MessageToast.jss';

const coloredStyles = ({ parameters }: JSSTheme) => ({
  base: {
    fontSize: '1.375rem'
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

const ColoredIcon = withStyles(coloredStyles)(({ src, state, classes }) => (
  <Icon src={src} className={`${classes.base} ${classes[state]}`} />
));

@withStyles(styles)
export class MessageToast extends PureComponent {
  static CONTAINER_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  static mergeStyleWithDefault = (style) => {
    return Object.assign({}, MessageToast.CONTAINER_STYLE, style);
  };

  static show(text, options: CommonProps = {}) {
    toast(text, options);
  }

  static error(text, options: CommonProps = {}) {
    const toastContent = (
      <div style={MessageToast.mergeStyleWithDefault(options.style)} className={options.className}>
        <ColoredIcon src="message-error" state={ValueState.Error} />
        <span style={{ marginLeft: '0.5rem' }}>{text}</span>
      </div>
    );

    MessageToast.show(toastContent, options);
  }

  static success(text, options: CommonProps = {}) {
    const toastContent = (
      <div style={MessageToast.mergeStyleWithDefault(options.style)} className={options.className}>
        <ColoredIcon src="sys-enter" state={ValueState.Success} />
        <span style={{ marginLeft: '0.5rem' }}>{text}</span>
      </div>
    );

    MessageToast.show(toastContent, options);
  }

  static warning(text, options: CommonProps = {}) {
    const toastContent = (
      <div style={MessageToast.mergeStyleWithDefault(options.style)} className={options.className}>
        <ColoredIcon src="message-warning" state={ValueState.Warning} />
        <span style={{ marginLeft: '0.5rem' }}>{text}</span>
      </div>
    );

    MessageToast.show(toastContent, options);
  }

  render() {
    const { classes } = this.props as ClassProps;

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
  }
}
