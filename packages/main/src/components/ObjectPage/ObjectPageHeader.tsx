import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import React, { CSSProperties, forwardRef, ReactElement, ReactNode, RefObject, useMemo } from 'react';
import { safeGetChildrenArray } from './ObjectPageUtils';

interface Props {
  image: string | ReactElement;
  imageShapeCircle: boolean;
  classes: any;
  showTitleInHeaderContent: boolean;
  headerContentProp: ReactElement;
  breadcrumbs: ReactNode;
  keyInfos: ReactNode;
  title: string;
  subTitle: string;
  headerPinned: boolean;
  topHeaderHeight: number;
  headerActions: ReactElement<unknown>[];
}

export const ObjectPageHeader = forwardRef((props: Props, ref: RefObject<HTMLDivElement>) => {
  const {
    image,
    classes,
    imageShapeCircle,
    showTitleInHeaderContent,
    headerContentProp,
    breadcrumbs,
    title,
    subTitle,
    keyInfos,
    headerPinned,
    topHeaderHeight,
    headerActions
  } = props;

  const avatar = useMemo(() => {
    if (!image) {
      return null;
    }

    if (typeof image === 'string') {
      return (
        <span
          className={classes.headerImage}
          style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
        >
          <img src={image} className={classes.image} alt="Company Logo" />
        </span>
      );
    } else {
      return React.cloneElement(image, {
        size: AvatarSize.L,
        className: image.props?.className ? `${classes.headerImage} ${image.props?.className}` : classes.headerImage
      } as unknown);
    }
  }, [image, classes.headerImage, classes.image, imageShapeCircle]);

  const headerStyles = useMemo<CSSProperties>(() => {
    if (headerPinned) {
      return {
        top: `${topHeaderHeight}px`,
        zIndex: 1
      };
    }

    return null;
  }, [headerPinned, topHeaderHeight]);

  let renderedHeaderContent = (
    <>
      {avatar}
      {headerContentProp && <span className={classes.headerCustomContent}>{headerContentProp}</span>}
    </>
  );

  if (showTitleInHeaderContent) {
    let firstElement;
    let contents = [];

    if (headerContentProp?.type === React.Fragment) {
      [firstElement, ...contents] = safeGetChildrenArray(headerContentProp.props.children);
    } else {
      firstElement = headerContentProp;
    }
    renderedHeaderContent = (
      <>
        <FlexBox>
          {avatar}
          <FlexBox direction={FlexBoxDirection.Column}>
            <div>{breadcrumbs}</div>
            <FlexBox>
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level={TitleLevel.H3} className={classes.title}>
                  {title}
                </Title>
                <Label className={classes.subTitle}>{subTitle}</Label>
                <span> {firstElement}</span>
              </FlexBox>
              <FlexBox>
                {contents.map((c, index) => (
                  <div key={`customContent-${index}`} className={classes.headerCustomContentItem}>
                    {c}
                  </div>
                ))}
              </FlexBox>
              <div className={classes.keyInfos}>{keyInfos}</div>
            </FlexBox>
          </FlexBox>
          <Toolbar toolbarStyle={ToolbarStyle.Clear} design={ToolbarDesign.Transparent}>
            <ToolbarSpacer />
            {headerActions}
          </Toolbar>
        </FlexBox>
      </>
    );
  }

  return (
    <div style={headerStyles} className={classes.contentHeader} ref={ref}>
      {renderedHeaderContent}
    </div>
  );
});

ObjectPageHeader.displayName = 'ObjectPageHeader';
