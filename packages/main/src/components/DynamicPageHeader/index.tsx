import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import React, { CSSProperties, FC, forwardRef, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { DynamicPageHeaderStyles } from './DynamicPageHeader.jss';

export interface DynamicPageHeaderProps extends CommonProps {
  children?: ReactNode | ReactNodeArray;
}

interface InternalProps extends DynamicPageHeaderProps {
  alwaysShowContentHeader?: boolean;
  noHeader?: boolean;
  headerPinned?: boolean;
  topHeaderHeight?: number;
}

const useStyles = createComponentStyles(DynamicPageHeaderStyles, { name: 'DynamicPageHeader' });

const DynamicPageHeader: FC<DynamicPageHeaderProps> = forwardRef((props: InternalProps, ref: Ref<HTMLDivElement>) => {
  const { children, headerPinned, topHeaderHeight } = props;

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

  const classes = useStyles();

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
});

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
