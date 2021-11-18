import { isIE } from '@ui5/webcomponents-react-base/dist/Device';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { forwardRef, ReactNode, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { DynamicPageHeaderStyles } from './DynamicPageHeader.jss';
import clsx from 'clsx';

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
const DynamicPageHeader = forwardRef((props: InternalProps, ref: Ref<HTMLDivElement>) => {
  const { children, headerPinned, topHeaderHeight, tooltip, className, style } = props;

  const passThroughProps = usePassThroughHtmlProps(props);

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
  const classNames = clsx(classes.header, className, isIE() && classes.iEClass);

  return (
    <div
      title={tooltip}
      ref={ref}
      {...passThroughProps}
      className={classNames}
      data-component-name="DynamicPageHeader"
      style={headerStyles}
    >
      {children}
    </div>
  );
});

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
