import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { CSSProperties, forwardRef, Ref, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
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

const useStyles = createUseStyles<JSSTheme, string>(styles);

const Avatar = forwardRef((props: AvatarPropTypes, ref: Ref<HTMLSpanElement>) => {
  const {
    initials,
    size,
    shape,
    image,
    onClick,
    customFontSize,
    customDisplaySize,
    children,
    className,
    style,
    tooltip,
    slot
  } = props;

  const classes = useStyles();

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

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        onClick(Event.of(null, e));
      }
    },
    [onClick]
  );

  const handleOnClick = useCallback(
    (e) => {
      onClick(Event.of(null, e));
    },
    [onClick]
  );

  return (
    <span
      ref={ref}
      className={cssClasses.join(' ')}
      style={inlineStyle}
      onClick={handleOnClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      title={tooltip}
      slot={slot}
    >
      {initials ? initials : children}
    </span>
  );
});

Avatar.defaultProps = {
  size: AvatarSize.S,
  shape: AvatarShape.Circle,
  initials: null,
  image: null,
  onClick: null,
  customDisplaySize: '3rem',
  customFontSize: '1.125rem'
};

Avatar.displayName = 'Avatar';

export { Avatar };
