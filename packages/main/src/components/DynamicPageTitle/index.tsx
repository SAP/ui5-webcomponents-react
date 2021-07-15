import debounce from 'lodash/debounce';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { isIE } from '@ui5/webcomponents-react-base/lib/Device';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { ToolbarSeparator } from '@ui5/webcomponents-react/lib/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, {
  Children,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { stopPropagation } from '../../internal/stopPropagation';
import { ActionsSpacer } from './ActionsSpacer';
import { DynamicPageTitleStyles } from './DynamicPageTitle.jss';
import { useIsRTL } from '@ui5/webcomponents-react-base/lib/hooks';

export interface DynamicPageTitleProps extends CommonProps {
  /**
   * The `DynamicPageTitle` actions.
   */
  actions?: ReactElement | ReactElement[];

  /**
   * The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.
   */
  breadcrumbs?: ReactNode | ReactNodeArray;

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
   * The `subheading` is positioned in the `DynamicPageTitle` left area below the `heading`.
   * Use this aggregation to display a component like `Label` or any other component that serves as subheading.
   */
  subheading?: ReactNode;
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
    subheading,
    showSubheadingRight,
    navigationActions,
    className,
    style,
    tooltip
  } = props;

  const classes = useStyles();
  const containerClasses = StyleClassHelper.of(classes.container);
  const dynamicPageTitleRef = useConsolidatedRef<HTMLDivElement>(ref);
  const [showNavigationInTopArea, setShowNavigationInTopArea] = useState(undefined);
  const isRtl = useIsRTL(dynamicPageTitleRef);

  if (isIE()) {
    containerClasses.put(classes.iEClass);
  }
  containerClasses.putIfPresent(className);
  const passThroughProps = usePassThroughHtmlProps(props, ['onToggleHeaderContentVisibility', 'onClick']);

  const onHeaderClick = useCallback(
    (e) => {
      if (typeof props?.onClick === 'function') {
        props.onClick(e);
      }
      if (typeof onToggleHeaderContentVisibility === 'function' && !props?.['data-not-clickable']) {
        onToggleHeaderContentVisibility(e);
      }
    },
    [props?.onClick, onToggleHeaderContentVisibility, props?.['data-not-clickable']]
  );

  useEffect(() => {
    const observer = new ResizeObserver(
      debounce(([titleContainer]) => {
        // Firefox implements `borderBoxSize` as a single content rect, rather than an array
        const borderBoxSize = Array.isArray(titleContainer.borderBoxSize)
          ? titleContainer.borderBoxSize[0]
          : titleContainer.borderBoxSize;
        // Safari doesn't implement `borderBoxSize`
        const titleContainerWidth = borderBoxSize?.inlineSize ?? titleContainer.target.getBoundingClientRect().width;
        if (titleContainerWidth < 1280 && !showNavigationInTopArea === false) {
          setShowNavigationInTopArea(false);
        } else if (titleContainerWidth >= 1280 && !showNavigationInTopArea === true) {
          setShowNavigationInTopArea(true);
        }
      }, 300)
    );
    if (dynamicPageTitleRef.current) {
      observer.observe(dynamicPageTitleRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [dynamicPageTitleRef.current, showNavigationInTopArea]);

  const paddingLeftRtl = isRtl ? 'paddingRight' : 'paddingLeft';

  return (
    <FlexBox
      className={containerClasses.className}
      style={style}
      ref={dynamicPageTitleRef}
      tooltip={tooltip}
      data-component-name="DynamicPageTitle"
      onClick={onHeaderClick}
      {...passThroughProps}
    >
      {(breadcrumbs || (navigationActions && showNavigationInTopArea)) && (
        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
          <div className={classes.breadcrumbs} onClick={stopPropagation}>
            {breadcrumbs}
          </div>
          {showNavigationInTopArea && (
            <FlexBox alignItems={FlexBoxAlignItems.End} onClick={stopPropagation}>
              {navigationActions}
            </FlexBox>
          )}
        </FlexBox>
      )}
      <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ flexGrow: 1, width: '100%' }}>
        <FlexBox className={classes.titleMainSection}>
          {heading && <div className={classes.title}>{heading}</div>}
          {subheading && showSubheadingRight && (
            <div className={classes.subTitleRight} style={{ [paddingLeftRtl]: '0.5rem' }}>
              {subheading}
            </div>
          )}
          {children && (
            <div className={classes.content} style={{ [paddingLeftRtl]: '0.5rem' }}>
              {children}
            </div>
          )}
        </FlexBox>
        <Toolbar
          design={ToolbarDesign.Auto}
          toolbarStyle={ToolbarStyle.Clear}
          active
          className={classes.toolbar}
          onClick={stopPropagation}
        >
          <ActionsSpacer onClick={onHeaderClick} noHover={props?.['data-not-clickable']} />
          {actions}
          {!showNavigationInTopArea && Children.count(actions) > 0 && Children.count(navigationActions) > 0 && (
            <ToolbarSeparator />
          )}
          {!showNavigationInTopArea && navigationActions}
        </Toolbar>
      </FlexBox>
      {subheading && !showSubheadingRight && (
        <FlexBox>
          <div className={classes.subTitleBottom}>{subheading}</div>
        </FlexBox>
      )}
    </FlexBox>
  );
});

DynamicPageTitle.displayName = 'DynamicPageTitle';

export { DynamicPageTitle };
