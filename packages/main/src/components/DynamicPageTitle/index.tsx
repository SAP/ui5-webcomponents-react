import { isIE } from '@ui5/webcomponents-react-base/dist/Device';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { BreadcrumbsPropTypes } from '@ui5/webcomponents-react/dist/Breadcrumbs';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/dist/FlexBoxAlignItems';
import { Toolbar } from '@ui5/webcomponents-react/dist/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/dist/ToolbarDesign';
import { ToolbarSeparator } from '@ui5/webcomponents-react/dist/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/dist/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/dist/ToolbarStyle';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { Children, FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxDirection, FlexBoxJustifyContent } from '../..';
import { CollapsedAvatar } from './CollapsedAvatar';
import { DynamicPageTitleStyles } from './DynamicPageTitle.jss';

export interface DynamicPageTitleProps extends CommonProps {
  /**
   * The `DynamicPageTitle` actions.
   */
  actions?: ReactElement | ReactElement[];

  //todo should we really restrict this to only use the `Breadcrumbs` comp?
  /**
   * The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.
   */
  breadcrumbs?: ReactElement<BreadcrumbsPropTypes>;

  /**
   * The content is positioned in the `DynamicPageTitle` middle area
   */
  children?: ReactNode | ReactNodeArray;

  /**
   * The `heading` is positioned in the `DynamicPageTitle` left area.
   * Use this aggregation to display a `Title` (or any other component that serves as a heading)
   */
  heading?: ReactNode;
  /**
   * The `heading` is positioned in the `DynamicPageTitle` left area.
   * Use this aggregation to display a `Title` (or any other component that serves as a heading)
   */
  subHeading?: ReactNode;
  //todo description is wrong
  /**
   * The `DynamicPageTitle` navigation actions.<br />
   * *Note*: The `navigationActions` position depends on the control size.
   * If the control size is 1280px or bigger, they are rendered right next to the actions.
   * Otherwise, they are rendered in the top-right area, above the actions.
   * If a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.
   *
   */
  navigationActions?: ReactElement | ReactElement[];
  /**
   * Display the subheading on the right instead of below the heading.
   */
  showSubheadingRight?: boolean;
  /**
   * Defines the image displayed in front of the heading. You can pass a path to an image or an `Avatar` component.
   */
  image?: string | ReactElement<unknown>;
  /**
   * Defines whether the image should be displayed in a circle or in a square.<br />
   * __Note:__ If the `image` is not a `string`, this prop has no effect.
   */
  imageShapeCircle?: boolean;
}

interface InternalProps extends DynamicPageTitleProps {
  /**
   * The onToggleHeaderContentVisibility show or hide the header section
   */
  onToggleHeaderContentVisibility?: (e: any) => boolean;
}

const useStyles = createUseStyles(DynamicPageTitleStyles, { name: 'DynamicPageTitle' });

/**
 * The dynamic page title defines the elements in the top header.
 * It can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.
 */
const DynamicPageTitle: FC<DynamicPageTitleProps> = forwardRef((props: InternalProps, ref: Ref<HTMLDivElement>) => {
  const {
    actions,
    onToggleHeaderContentVisibility,
    breadcrumbs,
    children,
    heading,
    subHeading,
    showSubheadingRight,
    navigationActions,
    className,
    style,
    tooltip,
    image,
    imageShapeCircle
  } = props;

  const classes = useStyles();
  const containerClasses = StyleClassHelper.of(classes.container);
  if (isIE()) {
    containerClasses.put(classes.iEClass);
  }
  containerClasses.putIfPresent(className);
  const passThroughProps = usePassThroughHtmlProps(props, ['onToggleHeaderContentVisibility']);

  return (
    <FlexBox
      className={containerClasses.className}
      style={style}
      ref={ref}
      tooltip={tooltip}
      data-component-name="DynamicPageTitle"
      onClick={onToggleHeaderContentVisibility}
      {...passThroughProps}
    >
      {/*<div className={classes.avatar}>*/}
      {image && <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />}
      {/*</div>*/}
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.SpaceBetween}
        style={{ width: '100%' }}
      >
        <div className={classes.breadcrumbs}>{breadcrumbs}</div>
        <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ flexGrow: 1, width: '100%' }}>
          <FlexBox className={classes.titleMainSection}>
            <div className={classes.title}>{heading}</div>
            {showSubheadingRight && (
              //todo why flexboxes here
              <FlexBox>
                <div className={classes.subTitleRight}>{subHeading}</div>{' '}
              </FlexBox>
            )}
            <div className={classes.content}>
              {/*todo why toolbar here*/}
              <Toolbar toolbarStyle={ToolbarStyle.Clear}>{children}</Toolbar>
            </div>
          </FlexBox>
          <Toolbar design={ToolbarDesign.Auto} toolbarStyle={ToolbarStyle.Clear}>
            <ToolbarSpacer />
            {actions}
            {Children.count(actions) > 0 && Children.count(navigationActions) > 0 && <ToolbarSeparator />}
            {navigationActions}
          </Toolbar>
        </FlexBox>
        {!showSubheadingRight && (
          <FlexBox>
            <div className={classes.subTitleBottom}>{subHeading}</div>
          </FlexBox>
        )}
      </FlexBox>
    </FlexBox>
  );
});

DynamicPageTitle.displayName = 'DynamicPageTitle';

DynamicPageTitle.defaultProps = {
  showSubheadingRight: false,
  imageShapeCircle: false
};

export { DynamicPageTitle };
