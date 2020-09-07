import { CommonProps } from '../../interfaces/CommonProps';
import { createComponentStyles, StyleClassHelper, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base';
import { DynamicPageHeaderStyles } from './DynamicPageHeader.jss';
import React, { FC, forwardRef, ReactNode, Ref, useCallback } from 'react';
import { FlexBox, FlexBoxAlignItems } from '../..';

export interface DynamicPageHeaderProps extends CommonProps {
  headerContent?: ReactNode;
  alwaysShowContentHeader?: boolean;
  noHeader?: boolean;
  classes: any;
}

const DynamicPageHeader: FC<DynamicPageHeaderProps> = forwardRef(
  (props: DynamicPageHeaderProps, ref: Ref<HTMLDivElement>) => {
    const { headerContent, style, classes } = props;

    const passThroughProps = usePassThroughHtmlProps(props);
    return (
      <div
        style={style}
        ref={ref}
        className={classes.header}
        data-component-name={'DynamicPageHeader'}
        {...passThroughProps}
      >
        <FlexBox className={classes.contentHeader} alignItems={FlexBoxAlignItems.Start}>
          {headerContent}
        </FlexBox>
      </div>
    );
  }
);

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
