import React, { ReactNode, useLayoutEffect, useMemo, useState, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { Avatar } from '../Avatar';
import { AvatarShape, AvatarSize } from '../..';
import { StyleClassHelper } from '@ui5/webcomponents-react-base';

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
  }
};

const useStyles = createUseStyles(styles);

export interface CollapsedAvatarPropTypes {
  image?: string | ReactNode;
}

export function CollapsedAvatar(props: CollapsedAvatarPropTypes) {
  const { image } = props;
  const classes = useStyles();
  const [isMounted, setIsMounted] = useState(false);
  const domRef = useRef();

  const avatarContent = useMemo(() => {
    if (!image) return null;

    if (typeof image === 'string') {
      return <Avatar size={AvatarSize.S} shape={AvatarShape.Circle} image={image as string} />;
    } else {
      // @ts-ignore
      return React.cloneElement(image, {
        size: AvatarSize.S
      });
    }
  }, [image]);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
      // @ts-ignore
      // setTimeout(() => {
      //   // @ts-ignore
      //   domRef.current.style.opacity = 1;
      //   domRef.current.style.transition = 'opacity 3s';
      // }, 1000);
    });
  }, []);

  const containerClasses = StyleClassHelper.of(classes.base);
  if (isMounted) {
    // debugger;
    containerClasses.put(classes.visible);
  } else {
    // debugger;
    containerClasses.put(classes.hidden);
  }

  return (
    <div ref={domRef} className={containerClasses.valueOf()}>
      {avatarContent}
    </div>
  );
}
