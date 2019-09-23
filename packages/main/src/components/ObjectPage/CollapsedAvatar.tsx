import React, { ReactNode, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';

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

const useStyles = createUseStyles(styles, {
  name: 'CollapsedAvatar'
});

export interface CollapsedAvatarPropTypes {
  image?: string | ReactNode;
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
        <Avatar
          size={AvatarSize.S}
          shape={imageShapeCircle ? AvatarShape.Circle : AvatarShape.Square}
          image={image as string}
        />
      );
    } else {
      // @ts-ignore
      return React.cloneElement(image, {
        size: AvatarSize.S
      });
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
