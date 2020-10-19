import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import React, { CSSProperties, FC, forwardRef, ReactNode, Ref, useMemo, ReactNodeArray } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';

export interface DynamicPageHeaderProps extends CommonProps {
  children?: ReactNode | ReactNodeArray;
  alwaysShowContentHeader?: boolean;
  noHeader?: boolean;
  headerPinned?: boolean;
  topHeaderHeight?: number;
  classes?: any;
}

const DynamicPageHeader: FC<DynamicPageHeaderProps> = forwardRef(
  (props: DynamicPageHeaderProps, ref: Ref<HTMLDivElement>) => {
    const { children, headerPinned, topHeaderHeight, classes } = props;

    const passThroughProps = usePassThroughHtmlProps(props);

    const headerStyles = useMemo<CSSProperties>(() => {
      if (headerPinned) {
        return {
          top: `${topHeaderHeight}px`,
          zIndex: 1
        };
      }
      return null;
    }, [headerPinned, topHeaderHeight]);

    return (
      <div
        style={headerStyles}
        ref={ref}
        className={classes.header}
        data-component-name={'DynamicPageHeader'}
        {...passThroughProps}
      >
        <FlexBox className={classes.contentHeader} alignItems={FlexBoxAlignItems.Start}>
          {children}
        </FlexBox>
      </div>
    );
  }
);

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
