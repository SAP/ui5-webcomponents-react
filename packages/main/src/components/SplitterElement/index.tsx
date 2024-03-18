'use client';

import { Device, useIsomorphicLayoutEffect, useSyncRef, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { SplitterLayoutContext } from '../../internal/SplitterLayoutContext.js';
import type { CommonProps } from '../../types/index.js';
import { classNames, styleData } from './SplitterElement.module.css.js';

export interface SplitterElementPropTypes extends CommonProps {
  /**
   * Defines whether a resizer element is displayed.
   *
   * If the next `SplitterElement` has the prop `resizable={false}`, no resizer element will be shown after this
   * `SplitterElement`. The resizer element is only shown when all siblings of the resizer are resizable.
   * Default value of resizable is `true`.
   */
  resizable?: boolean;
  /**
   * Defines the initial size of the `SplitterElement`.
   */
  size?: CSSProperties['width'] | CSSProperties['height'];
  /**
   * Defines the minimum size of the `SplitterElement`. The resizer element stops when the minimum size is reached.
   */
  minSize?: number;
  /**
   * Defines the content which is shown inside the `SplitterElement`.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `SplitterElement` holds the component of the content area. Allowed size values are of the type css property width or
 * height according to the orientation of the `SplitterLayout`. If `size` isn't passed to the element, the width or
 * height of the content area will be calculated automatically according to the size of the given `SplitterLayout`.
 * The `minSize` defines the minimum width or height of the area and is set to 0 when no minimum size is given, so the
 * content can be completely collapsed.
 */
const SplitterElement = forwardRef<HTMLDivElement, SplitterElementPropTypes>((props, ref) => {
  const { children, style, className, minSize, size, resizable: _0, ...rest } = props;
  const [componentRef, splitterElementRef] = useSyncRef(ref);
  const { vertical, reset } = useContext(SplitterLayoutContext);
  const safariStyles = Device.isSafari() ? { width: 'min-content', flex: '1 1 auto' } : {};
  const defaultFlexStyles = size !== 'auto' ? { flex: `0 1 ${size}` } : { flex: '1 0 min-content', ...safariStyles };
  const [flexStyles, setFlexStyles] = useState(defaultFlexStyles);
  const [flexBasisApplied, setFlexBasisApplied] = useState(false);

  useStylesheet(styleData, SplitterElement.displayName);

  useEffect(() => {
    const elementObserver = new ResizeObserver(([element]) => {
      if (element.target.getBoundingClientRect().width !== 0 && !flexBasisApplied) {
        const resetSafariStyles = Device.isSafari() ? { width: 'unset' } : {};
        setFlexStyles({
          flex: `0 0 ${element.target.getBoundingClientRect()[vertical ? 'height' : 'width']}px`,
          ...resetSafariStyles
        });
        setFlexBasisApplied(true);
      }
    });

    if (size === 'auto' && splitterElementRef.current) {
      elementObserver.observe(splitterElementRef.current);
    } else {
      setFlexStyles({ flex: `0 1 ${size}` });
    }

    return () => {
      elementObserver.disconnect();
    };
  }, [size, flexBasisApplied, vertical]);

  useIsomorphicLayoutEffect(() => {
    if (reset) {
      setFlexStyles(undefined);
      setFlexBasisApplied(false);
    }
  }, [reset, size]);

  useIsomorphicLayoutEffect(() => {
    if (flexStyles === undefined) {
      setFlexStyles(defaultFlexStyles);
    }
  }, [flexStyles]);

  return (
    <div
      ref={componentRef}
      className={clsx(classNames.splitterElement, className)}
      style={{
        minHeight: vertical && minSize ? `${minSize}px` : undefined,
        minWidth: !vertical && minSize ? `${minSize}px` : undefined,
        ...flexStyles,
        ...style
      }}
      {...rest}
      data-min-size={minSize}
    >
      {children}
    </div>
  );
});

SplitterElement.defaultProps = {
  minSize: 0,
  size: 'auto'
};

SplitterElement.displayName = 'SplitterElement';

export { SplitterElement };
