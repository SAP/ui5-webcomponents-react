import { CommonProps } from '../../interfaces/CommonProps';
import { createComponentStyles, StyleClassHelper, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base';
import { DynamicPageHeaderStyles } from './DynamicPageHeader.jss';
import React, { FC, forwardRef, ReactNode, Ref } from 'react';
import { FlexBox, FlexBoxAlignItems, FlexBoxDirection } from '../..';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar/DynamicPageAnchorBar';
import { ObjectPageAnchorBar } from '../ObjectPage/ObjectPageAnchorBar';

export interface DynamicPageHeaderProps extends CommonProps {
  headerContent?: ReactNode;
  noHeader?: boolean;
}

const useStyles = createComponentStyles(DynamicPageHeaderStyles, { name: 'DynamicPageHeader' });

const DynamicPageHeader: FC<DynamicPageHeaderProps> = forwardRef(
  (props: DynamicPageHeaderProps, ref: Ref<HTMLDivElement>) => {
    const { headerContent, style, className, noHeader } = props;

    const classes = useStyles();
    const containerClasses = StyleClassHelper.of(classes.container);

    containerClasses.putIfPresent(className);

    const passThroughProps = usePassThroughHtmlProps(props);
    return (
      <div
        style={style}
        ref={ref}
        className={containerClasses.className}
        data-component-name={'DynamicPageHeader'}
        {...passThroughProps}
      >
        <FlexBox className={classes.headerContent} alignItems={FlexBoxAlignItems.Start}>
          {headerContent}
          <DynamicPageAnchorBar headerContentHeight={300} headerContentPinnable showHideHeaderButton />
        </FlexBox>
      </div>
    );
  }
);

DynamicPageHeader.displayName = 'DynamicPageHeader';

export { DynamicPageHeader };
