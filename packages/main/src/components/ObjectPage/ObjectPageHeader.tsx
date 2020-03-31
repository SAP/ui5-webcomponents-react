import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { CSSProperties, forwardRef, ReactElement, RefObject, useMemo } from 'react';
import { safeGetChildrenArray } from './ObjectPageUtils';

interface Props {
  image: string | ReactElement;
  imageShapeCircle: boolean;
  classes: any;
  showTitleInHeaderContent: boolean;
  renderHeaderContentProp: () => JSX.Element;
  renderBreadcrumbs: () => JSX.Element;
  renderKeyInfos: () => JSX.Element;
  title: string;
  subTitle: string;
  headerPinned: boolean;
  topHeaderHeight: number;
}

export const ObjectPageHeader = forwardRef((props: Props, ref: RefObject<HTMLDivElement>) => {
  const {
    image,
    classes,
    imageShapeCircle,
    showTitleInHeaderContent,
    renderHeaderContentProp,
    renderBreadcrumbs,
    title,
    subTitle,
    renderKeyInfos,
    headerPinned,
    topHeaderHeight
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
          <img src={image} className={classes.image} alt="Company Logo"/>
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
      {renderHeaderContentProp && <span className={classes.headerCustomContent}>{renderHeaderContentProp()}</span>}
    </>
  );

  if (showTitleInHeaderContent) {
    const headerContents = renderHeaderContentProp && renderHeaderContentProp();
    let firstElement;
    let contents = [];

    if (headerContents?.type === React.Fragment) {
      [firstElement, ...contents] = safeGetChildrenArray(headerContents.props.children);
    } else {
      firstElement = headerContents;
    }
    renderedHeaderContent = (
      <>
        <FlexBox>
          {avatar}
          <FlexBox direction={FlexBoxDirection.Column}>
            <div>{renderBreadcrumbs && renderBreadcrumbs()}</div>
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
              <div className={classes.keyInfos}>{renderKeyInfos && renderKeyInfos()}</div>
            </FlexBox>
          </FlexBox>
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
