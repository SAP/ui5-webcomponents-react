import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import React, { useLayoutEffect, useMemo, useRef, useState, ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

const styles = {
  base: {
    marginRight: '1rem',
    opacity: 0
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
    maxWidth: '3rem',
    maxHeight: '3rem'
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
  image?: string | ReactElement<unknown>;
  imageShapeCircle?: boolean;
}

export const CollapsedAvatar = (props: CollapsedAvatarPropTypes) => {
  const { image, imageShapeCircle } = props;
  const classes = useStyles();
  const [isMounted, setIsMounted] = useState(false);
  const domRef = useRef();

  const avatarContent = useMemo(() => {
    if (!image) return null;

    if (typeof image === 'string') {
      return (
        <span
          className={classes.imageContainer}
          style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
        >
          <img className={classes.image} src={image} alt="Company Logo" />
        </span>
      );
    } else {
      return React.cloneElement(image, {
        size: AvatarSize.S,
        // @ts-ignore
        className: image.props?.className
          ? `${classes.imageContainer} ${image.props?.className}`
          : classes.imageContainer
      } as unknown);
    }
  }, [image, imageShapeCircle]);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  const containerClasses = StyleClassHelper.of(classes.base);
  if (isMounted) {
    containerClasses.put(classes.visible);
  } else {
    containerClasses.put(classes.hidden);
  }

  return (
    <div ref={domRef} className={containerClasses.valueOf()}>
      {avatarContent}
    </div>
  );
};
