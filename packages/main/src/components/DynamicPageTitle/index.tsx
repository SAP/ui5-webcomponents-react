import { debounce, Device, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, {
  Children,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems';
import { FlexBoxJustifyContent } from '../../enums/FlexBoxJustifyContent';
import { ToolbarDesign } from '../../enums/ToolbarDesign';
import { ToolbarStyle } from '../../enums/ToolbarStyle';
import { CommonProps } from '../../interfaces/CommonProps';
import { stopPropagation } from '../../internal/stopPropagation';
import { flattenFragments } from '../../internal/utils';
import { PopoverDomRef } from '../../webComponents';
import { FlexBox } from '../FlexBox';
import { Toolbar } from '../Toolbar';
import { ToolbarSeparator } from '../ToolbarSeparator';
import { ActionsSpacer } from './ActionsSpacer';
import { DynamicPageTitleStyles } from './DynamicPageTitle.jss';

export interface DynamicPageTitlePropTypes extends CommonProps {
  /**
   * The `DynamicPageTitle` actions.
   *
   * __Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.
   */
  actions?: ReactElement | ReactElement[];

  /**
   * The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.
   */
  breadcrumbs?: ReactNode | ReactNode[];

  /**
   * The content is positioned in the `DynamicPageTitle` middle area
   */
  children?: ReactNode | ReactNode[];

  /**
   * The `header` is positioned in the `DynamicPageTitle` left area.
   * Use this aggregation to display a `Title` (or any other component that serves as a header)
   */
  header?: ReactNode;
  /**
   * The `subHeader` is positioned in the `DynamicPageTitle` left area below the `header`.
   * Use this aggregation to display a component like `Label` or any other component that serves as sub header.
   */
  subHeader?: ReactNode;
  /**
   * The `DynamicPageTitle` navigation actions.<br />
   * *Note*: The `navigationActions` position depends on the control size.
   * If the control size is 1280px or bigger, they are rendered right next to the actions.
   * Otherwise, they are rendered in the top-right area, above the actions.
   * If a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.
   *
   * __Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.
   */
  navigationActions?: ReactElement | ReactElement[];
  /**
   * Display the `subHeader` on the right instead of below the `header`.
   */
  showSubHeaderRight?: boolean;
  /**
   * Fired when the content of the `actions` or `navigationActions` toolbar overflow popover has been changed.
   */
  onToolbarOverflowChange?: (event: {
    toolbarElements: HTMLElement[];
    overflowElements: HTMLCollection;
    target: HTMLElement;
    origin: 'actions' | 'navigationActions';
  }) => void;
}

interface InternalProps extends DynamicPageTitlePropTypes {
  /**
   * The onToggleHeaderContentVisibility show or hide the header section
   */
  onToggleHeaderContentVisibility?: (e: any) => boolean;
}

const useStyles = createUseStyles(DynamicPageTitleStyles, { name: 'DynamicPageTitle' });

const enhanceActionsWithClick = (actions, ref) =>
  flattenFragments(actions, Infinity).map((action: ReactElement) =>
    React.cloneElement(action, {
      onClick: (e) => {
        if (typeof action.props?.onClick === 'function') {
          action.props.onClick(e);
        }
        if (ref.current?.isOpen() && !e.defaultPrevented) {
          ref.current.close();
        }
      }
    })
  );

/**
 * The `DynamicPageTitle` component is part of the `DynamicPage` family and is used to serve as title of the `DynamicPage` and `ObjectPage`.
 * It can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.
 */
const DynamicPageTitle = forwardRef((props: DynamicPageTitlePropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    actions,
    breadcrumbs,
    children,
    header,
    subHeader,
    showSubHeaderRight,
    navigationActions,
    className,
    style,
    onToggleHeaderContentVisibility,
    onToolbarOverflowChange,
    ...rest
  } = props as InternalProps;

  const classes = useStyles();
  const [componentRef, dynamicPageTitleRef] = useSyncRef<HTMLDivElement>(ref);
  const [showNavigationInTopArea, setShowNavigationInTopArea] = useState(undefined);
  const isRtl = useIsRTL(dynamicPageTitleRef);
  const isMounted = useRef(false);
  const [isPhone, setIsPhone] = useState(
    Device.getCurrentRange(dynamicPageTitleRef.current?.getBoundingClientRect().width)?.name === 'Phone'
  );
  const containerClasses = clsx(classes.container, isPhone && classes.phone, className);

  const actionsOverflowPopoverRef = useRef<PopoverDomRef>(null);
  const navActionsOverflowPopoverRef = useRef<PopoverDomRef>(null);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const { onClick: _0, ...propsWithoutOmitted } = rest;

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
    const debouncedObserverFn = debounce(([titleContainer]) => {
      // Firefox implements `borderBoxSize` as a single content rect, rather than an array
      const borderBoxSize = Array.isArray(titleContainer.borderBoxSize)
        ? titleContainer.borderBoxSize[0]
        : titleContainer.borderBoxSize;
      // Safari doesn't implement `borderBoxSize`
      const titleContainerWidth = borderBoxSize?.inlineSize ?? titleContainer.target.getBoundingClientRect().width;
      setIsPhone(Device.getCurrentRange(titleContainerWidth)?.name === 'Phone');
      if (titleContainerWidth < 1280 && !showNavigationInTopArea === true && isMounted.current) {
        setShowNavigationInTopArea(true);
      } else if (titleContainerWidth >= 1280 && !showNavigationInTopArea === false && isMounted.current) {
        setShowNavigationInTopArea(false);
      }
    }, 150);
    const observer = new ResizeObserver(debouncedObserverFn);
    if (dynamicPageTitleRef.current) {
      observer.observe(dynamicPageTitleRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      observer.disconnect();
    };
  }, [dynamicPageTitleRef.current, showNavigationInTopArea, isMounted]);

  const paddingLeftRtl = isRtl ? 'paddingRight' : 'paddingLeft';

  const handleToolbarsOverflowChange = (e) => {
    if (typeof onToolbarOverflowChange === 'function') {
      let origin = 'actions';
      if (e.target.dataset.componentName === 'DynamicPageTitleNavActions') {
        origin = 'navigationActions';
      }
      onToolbarOverflowChange({ ...e, origin });
    }
  };

  return (
    <FlexBox
      className={containerClasses}
      style={style}
      ref={componentRef}
      data-component-name="DynamicPageTitle"
      onClick={onHeaderClick}
      {...propsWithoutOmitted}
    >
      {(breadcrumbs || (navigationActions && showNavigationInTopArea)) && (
        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} data-component-name="DynamicPageTitleBreadcrumbs">
          {breadcrumbs && (
            <div className={classes.breadcrumbs} onClick={stopPropagation}>
              {breadcrumbs}
            </div>
          )}
          {showNavigationInTopArea && (
            <Toolbar
              design={ToolbarDesign.Auto}
              toolbarStyle={ToolbarStyle.Clear}
              active
              className={classes.toolbar}
              onClick={stopPropagation}
              data-component-name="DynamicPageTitleNavActions"
              onOverflowChange={handleToolbarsOverflowChange}
              overflowPopoverRef={navActionsOverflowPopoverRef}
            >
              <ActionsSpacer onClick={onHeaderClick} noHover={props?.['data-not-clickable']} />
              {enhanceActionsWithClick(navigationActions, navActionsOverflowPopoverRef)}
            </Toolbar>
          )}
        </FlexBox>
      )}
      <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ flexGrow: 1, width: '100%' }}>
        <FlexBox className={classes.titleMainSection}>
          {header && (
            <div className={classes.title} data-component-name="DynamicPageTitleHeader">
              {header}
            </div>
          )}
          {subHeader && showSubHeaderRight && (
            <div
              className={classes.subTitle}
              style={{ [paddingLeftRtl]: '0.5rem' }}
              data-component-name="DynamicPageTitleSubHeader"
            >
              {subHeader}
            </div>
          )}
          {children && (
            <div
              className={classes.content}
              style={{ [paddingLeftRtl]: '0.5rem' }}
              data-component-name="DynamicPageTitleContent"
            >
              {children}
            </div>
          )}
        </FlexBox>
        {(actions || (!showNavigationInTopArea && navigationActions)) && (
          <Toolbar
            design={ToolbarDesign.Auto}
            toolbarStyle={ToolbarStyle.Clear}
            active
            className={classes.toolbar}
            onClick={stopPropagation}
            data-component-name="DynamicPageTitleActions"
            onOverflowChange={handleToolbarsOverflowChange}
            overflowPopoverRef={actionsOverflowPopoverRef}
          >
            <ActionsSpacer onClick={onHeaderClick} noHover={props?.['data-not-clickable']} />
            {enhanceActionsWithClick(actions, actionsOverflowPopoverRef)}
            {!showNavigationInTopArea && Children.count(actions) > 0 && Children.count(navigationActions) > 0 && (
              <ToolbarSeparator />
            )}
            {!showNavigationInTopArea && enhanceActionsWithClick(navigationActions, actionsOverflowPopoverRef)}
          </Toolbar>
        )}
      </FlexBox>
      {subHeader && !showSubHeaderRight && (
        <FlexBox>
          <div
            className={clsx(classes.subTitle, classes.subTitleBottom)}
            data-component-name="DynamicPageTitleSubHeader"
          >
            {subHeader}
          </div>
        </FlexBox>
      )}
    </FlexBox>
  );
});

DynamicPageTitle.displayName = 'DynamicPageTitle';

export { DynamicPageTitle };
