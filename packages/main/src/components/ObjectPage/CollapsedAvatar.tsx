import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import { cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import { AvatarSize } from '../../enums/index.js';
import { classNames, styleData } from './CollapsedAvatar.module.css.js';
import type { ObjectPagePropTypes } from './index.js';

export interface CollapsedAvatarPropTypes {
  image?: ObjectPagePropTypes['image'];
  imageShapeCircle?: ObjectPagePropTypes['imageShapeCircle'];
  style?: CSSProperties;
}

export const CollapsedAvatar = (props: CollapsedAvatarPropTypes) => {
  const { image, imageShapeCircle, style } = props;
  useStylesheet(styleData, CollapsedAvatar.displayName);
  const [isMounted, setIsMounted] = useState(false);
  const domRef = useRef(null);

  const avatarContent = useMemo(() => {
    if (!image) return null;

    if (typeof image === 'string') {
      return (
        <span
          className={classNames.imageContainer}
          style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
        >
          <img className={classNames.image} src={image} alt="Object Page Image" />
        </span>
      );
    } else {
      return cloneElement(image, {
        size: AvatarSize.S,
        className: image.props?.className
          ? `${classNames.imageContainer} ${image.props?.className}`
          : classNames.imageContainer
      } as unknown);
    }
  }, [image, imageShapeCircle]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerClasses = clsx(classNames.base, isMounted ? classNames.visible : classNames.hidden);

  return (
    <div ref={domRef} className={containerClasses} style={style} data-component-name="ObjectPageCollapsedAvatar">
      {avatarContent}
    </div>
  );
};

CollapsedAvatar.displayName = 'CollapsedAvatar';
