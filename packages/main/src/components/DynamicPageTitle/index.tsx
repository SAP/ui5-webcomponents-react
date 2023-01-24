'use client';

import { debounce, Device, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems, FlexBoxJustifyContent, ToolbarDesign, ToolbarStyle } from '../../enums';
import { CommonProps } from '../../interfaces';
import { stopPropagation } from '../../internal/stopPropagation';
import { flattenFragments } from '../../internal/utils';
import { PopoverDomRef } from '../../webComponents';
import { FlexBox } from '../FlexBox';
import { Toolbar, ToolbarPropTypes } from '../Toolbar';
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
   * Use this prop to display a `Title` (or any other component that serves as a heading).
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
   * Use this prop to customize the "actions" `Toolbar`.
   *
   * __Note:__ It is possible to overwrite internal implementations. Please use with caution!
   */
  actionsToolbarProps?: Omit<ToolbarPropTypes, 'design' | 'toolbarStyle' | 'active'>;
  /**
   * Use this prop to customize the "navigationActions" `Toolbar`.
   *
   * __Note:__ It is possible to overwrite internal implementations. Please use with caution!
   */
  navigationActionsToolbarProps?: Omit<ToolbarPropTypes, 'design' | 'toolbarStyle' | 'active'>;
}

interface InternalProps extends DynamicPageTitlePropTypes {
  /**
   * The onToggleHeaderContentVisibility show or hide the header section
   */
  onToggleHeaderContentVisibility?: (e: any) => boolean;
}

const useStyles = createUseStyles(DynamicPageTitleStyles, { name: 'DynamicPageTitle' });

const enhanceActionsWithClick = (actions, ref: MutableRefObject<PopoverDomRef>) =>
  flattenFragments(actions, Infinity).map((action) => {
    if (isValidElement(action)) {
      return cloneElement(action, {
        // @ts-expect-error: only actionable elements should be passed to either of the `action` props
        onClick: (e) => {
          if (typeof action.props?.onClick === 'function') {
            action.props.onClick(e);
          }
          if (ref.current?.isOpen() && !e.defaultPrevented) {
            ref.current.close();
          }
        }
      });
    }
  });

/**
 * The `DynamicPageTitle` component is part of the `DynamicPage` family and is used to serve as title of the `DynamicPage` and `ObjectPage`.
 * It can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.
 */
const DynamicPageTitle = forwardRef<HTMLDivElement, DynamicPageTitlePropTypes>((props, ref) => {
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
    actionsToolbarProps,
    navigationActionsToolbarProps,
    ...rest
  } = props as InternalProps;

  const classes = useStyles();
  const [componentRef, dynamicPageTitleRef] = useSyncRef<HTMLDivElement>(ref);
  const [showNavigationInTopArea, setShowNavigationInTopArea] = useState(undefined);
  const isMounted = useRef(false);
  const [isPhone, setIsPhone] = useState(
    Device.getCurrentRange(dynamicPageTitleRef.current?.getBoundingClientRect().width)?.name === 'Phone'
  );
  const containerClasses = clsx(classes.container, isPhone && classes.phone, className);

  const [actionsOverflowRef, syncedActionsOverflowRef] = useSyncRef<PopoverDomRef>(
    actionsToolbarProps?.overflowPopoverRef ?? null
  );
  const [navActionsOverflowRef, syncedNavActionsOverflowRef] = useSyncRef<PopoverDomRef>(
    navigationActionsToolbarProps?.overflowPopoverRef ?? null
  );

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
    const debouncedObserverFn = debounce(([titleContainer]: ResizeObserverEntry[]) => {
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

  const handleActionsToolbarClick = (e) => {
    stopPropagation(e);
    if (typeof actionsToolbarProps?.onClick === 'function') {
      actionsToolbarProps.onClick(e);
    }
  };

  const handleNavigationActionsToolbarClick = (e) => {
    stopPropagation(e);
    if (typeof navigationActionsToolbarProps?.onClick === 'function') {
      navigationActionsToolbarProps.onClick(e);
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
              tabIndex={undefined}
              role={undefined}
              {...navigationActionsToolbarProps}
              overflowButton={navigationActionsToolbarProps?.overflowButton}
              className={clsx(classes.toolbar, navigationActionsToolbarProps?.className)}
              onClick={handleNavigationActionsToolbarClick}
              data-component-name="DynamicPageTitleNavActions"
              onOverflowChange={navigationActionsToolbarProps?.onOverflowChange}
              overflowPopoverRef={navActionsOverflowRef}
              design={ToolbarDesign.Auto}
              toolbarStyle={ToolbarStyle.Clear}
              active
            >
              <ActionsSpacer onClick={onHeaderClick} noHover={props?.['data-not-clickable']} />
              {enhanceActionsWithClick(navigationActions, syncedNavActionsOverflowRef)}
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
            <div className={classes.subTitle} data-component-name="DynamicPageTitleSubHeader">
              {subHeader}
            </div>
          )}
          {children && (
            <div className={classes.content} data-component-name="DynamicPageTitleContent">
              {children}
            </div>
          )}
        </FlexBox>
        {(actions || (!showNavigationInTopArea && navigationActions)) && (
          <Toolbar
            tabIndex={undefined}
            role={undefined}
            {...actionsToolbarProps}
            overflowButton={actionsToolbarProps?.overflowButton}
            design={ToolbarDesign.Auto}
            toolbarStyle={ToolbarStyle.Clear}
            active
            className={clsx(classes.toolbar, actionsToolbarProps?.className)}
            onClick={handleActionsToolbarClick}
            data-component-name="DynamicPageTitleActions"
            onOverflowChange={actionsToolbarProps?.onOverflowChange}
            overflowPopoverRef={actionsOverflowRef}
          >
            <ActionsSpacer onClick={onHeaderClick} noHover={props?.['data-not-clickable']} />
            {enhanceActionsWithClick(actions, syncedActionsOverflowRef)}
            {!showNavigationInTopArea && Children.count(actions) > 0 && Children.count(navigationActions) > 0 && (
              <ToolbarSeparator />
            )}
            {!showNavigationInTopArea && enhanceActionsWithClick(navigationActions, syncedActionsOverflowRef)}
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
