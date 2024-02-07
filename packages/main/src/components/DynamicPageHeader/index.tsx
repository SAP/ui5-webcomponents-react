'use client';

import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import type { CommonProps } from '../../types/index.js';
import { DynamicPageHeaderStyles } from './DynamicPageHeader.jss.js';

export interface DynamicPageHeaderPropTypes extends CommonProps {
  /**
   * Content of the `DynamicPageHeader`.
   */
  children?: ReactNode | ReactNode[];
}

interface InternalProps extends DynamicPageHeaderPropTypes {
  /**
   * Determines if the header is pinned.
   */
  headerPinned?: boolean;
  /**
   * Determines the height of the top header (dynamic page title).
   */
  topHeaderHeight?: number;
}

const useStyles = createUseStyles(DynamicPageHeaderStyles, { name: 'DynamicPageHeader' });

/**
 * The dynamic page header contains the header content of the dynamic page.
 * This component can be collapsed and pinned by the anchorbar.
 */
const DynamicPageHeader = forwardRef<HTMLDivElement, InternalProps>((props, ref) => {
  const { children, headerPinned, topHeaderHeight, className, style, ...rest } = props;

  const headerStyles = useMemo(() => {
    if (headerPinned) {
      return {
        ...style,
        top: `${topHeaderHeight}px`,
        zIndex: 1
      };
    }
    return style;
  }, [headerPinned, topHeaderHeight, style]);

  const classes = useStyles();
  const classNames = clsx(classes.header, className);

  return (
    <div ref={ref} {...rest} className={classNames} data-component-name="DynamicPageHeader" style={headerStyles}>
      {children}
    </div>
  );
});

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
