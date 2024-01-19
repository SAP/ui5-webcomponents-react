import { clsx } from 'clsx';
import type { CSSProperties, ReactElement } from 'react';
import { cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { AvatarSize } from '../../enums/index.js';

const styles = {
  base: {
    alignSelf: 'center',
    opacity: 0,
    paddingInlineEnd: '1rem'
  },
  hidden: {
    opacity: 0
  },
  visible: {
    transition: 'opacity 0.5s',
    opacity: 1
  },
  imageContainer: {
    display: 'inline-block',
    verticalAlign: 'middle',
    maxHeight: '3rem',
    width: '3rem',
    maxWidth: '3rem'
  },
  image: {
    width: '100%',
    height: '100%'
  }
};

const useStyles = createUseStyles(styles, {
  name: 'CollapsedAvatar'
});

export interface CollapsedAvatarPropTypes {
  image?: string | ReactElement;
  imageShapeCircle?: boolean;
  style?: CSSProperties;
}

export const CollapsedAvatar = (props: CollapsedAvatarPropTypes) => {
  const { image, imageShapeCircle, style } = props;
  const classes = useStyles();
  const [isMounted, setIsMounted] = useState(false);
  const domRef = useRef(null);

  const avatarContent = useMemo(() => {
    if (!image) return null;

    if (typeof image === 'string') {
      return (
        <span
          className={classes.imageContainer}
          style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
        >
          <img className={classes.image} src={image} alt="Object Page Image" />
        </span>
      );
    } else {
      return cloneElement(image, {
        size: AvatarSize.S,
        className: image.props?.className
          ? `${classes.imageContainer} ${image.props?.className}`
          : classes.imageContainer
      } as unknown);
    }
  }, [image, imageShapeCircle]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerClasses = clsx(classes.base, isMounted ? classes.visible : classes.hidden);

  return (
    <div ref={domRef} className={containerClasses} style={style} data-component-name="ObjectPageCollapsedAvatar">
      {avatarContent}
    </div>
  );
};
