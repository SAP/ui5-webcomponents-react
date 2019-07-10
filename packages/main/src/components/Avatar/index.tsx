import { Event, KeyCodes, withStyles } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, PureComponent } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { AvatarShape } from '../../lib/AvatarShape';
import { AvatarSize } from '../../lib/AvatarSize';
import styles from './Avatar.jss';

export interface AvatarPropTypes extends CommonProps {
  size?: AvatarSize;
  shape?: AvatarShape;
  initials?: string;
  image?: string;
  onClick?: (event: Event) => void;
  children?: JSX.Element;
  customDisplaySize?: CSSProperties['width'];
  customFontSize?: CSSProperties['width'];
}

export interface AvatarPropsInternal extends AvatarPropTypes, ClassProps {}

@withStyles(styles)
export class Avatar extends PureComponent<AvatarPropTypes> {
  static defaultProps = {
    size: AvatarSize.S,
    shape: AvatarShape.Circle,
    initials: null,
    image: null,
    onClick: null,
    customDisplaySize: '3rem',
    customFontSize: '1.125rem'
  };

  private handleKeyDown = (e) => {
    if (e.keyCode === KeyCodes.ENTER) {
      this.props.onClick(Event.of(this, e));
    }
  };

  private handleOnClick = (e) => {
    this.props.onClick(Event.of(this, e));
  };

  render() {
    const {
      initials,
      size,
      shape,
      image,
      onClick,
      classes,
      customFontSize,
      customDisplaySize,
      children,
      className,
      style,
      tooltip
    } = this.props as AvatarPropsInternal;

    const cssClasses = [classes.avatar];
    const inlineStyle: CSSProperties = {};
    if (size === AvatarSize.Custom) {
      inlineStyle.fontSize = customFontSize;
      inlineStyle.width = customDisplaySize;
      inlineStyle.height = customDisplaySize;
      inlineStyle.lineHeight = customDisplaySize;
    } else {
      cssClasses.push(classes[`size${size}`]);
    }

    inlineStyle['--sapUiContentNonInteractiveIconColor'] = 'var(--sapContent_ContrastIconColor)';

    if (shape === AvatarShape.Circle) {
      cssClasses.push(classes.circle);
    }

    if (image) {
      inlineStyle.backgroundImage = `url(${image})`;
    }

    if (onClick) {
      inlineStyle.cursor = 'pointer';
    }

    if (className) {
      cssClasses.push(className);
    }
    if (style) {
      Object.assign(inlineStyle, style);
    }

    return (
      <span
        className={cssClasses.join(' ')}
        style={inlineStyle}
        onClick={this.handleOnClick}
        tabIndex={0}
        onKeyDown={this.handleKeyDown}
        title={tooltip}
        slot={this.props['slot']}
      >
        {initials ? initials : children}
      </span>
    );
  }
}
