'use client';

import { debounce, Device, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { MouseEventHandler, ReactElement, ReactNode, RefObject } from 'react';
import { Children, cloneElement, forwardRef, isValidElement, useCallback, useEffect, useRef, useState } from 'react';
import { FlexBoxAlignItems, FlexBoxJustifyContent } from '../../enums/index.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import { flattenFragments } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
import type { ButtonPropTypes, PopoverDomRef } from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox/index.js';
import type { ToolbarPropTypes } from '../Toolbar/index.js';
import { Toolbar } from '../Toolbar/index.js';
import { ToolbarSeparator } from '../ToolbarSeparator/index.js';
import { ActionsSpacer } from './ActionsSpacer.js';
import { classNames, styleData } from './ObjectPageTitle.module.css.js';

export interface ObjectPageTitlePropTypes extends CommonProps {
  /**
   * Defines the actions of the `ObjectPageTitle`.
   *
   * __Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.
   *
   * __Note:__ Although this prop accepts all `ReactElements`, it is strongly recommended that you only use components that render a single element in order to preserve the intended design.
   */
  actions?: ReactElement | ReactElement[];

  /**
   * The `breadcrumbs` displayed in the `ObjectPageTitle` top-left area.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.
   */
  breadcrumbs?: ReactNode | ReactNode[];

  /**
   * The content is positioned in the `ObjectPageTitle` middle area
   */
  children?: ReactNode | ReactNode[];

  /**
   * The `header` is positioned in the `ObjectPageTitle` left area.
   * Use this prop to display a `Title` (or any other component that serves as a heading).
   */
  header?: ReactNode;
  /**
   * The `subHeader` is positioned in the `ObjectPageTitle` left area below the `header`.
   * Use this aggregation to display a component like `Label` or any other component that serves as sub header.
   */
  subHeader?: ReactNode;
  /**
   * The `ObjectPageTitle` navigation actions.<br />
   * *Note*: The `navigationActions` position depends on the control size.
   * If the control size is 1280px or bigger, they are rendered right next to the actions.
   * Otherwise, they are rendered in the top-right area, above the actions.
   * If a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.
   *
   * __Note:__ Although this prop accepts all `ReactElements`, it is strongly recommended that you only use components that render a single element in order to preserve the intended design.
   *
   * __Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.
   */
  navigationActions?: ReactElement | ReactElement[];
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
  /**
   * The content displayed in the `ObjectPageTitle` in expanded state.
   */
  expandedContent?: ReactNode | ReactNode[];
  /**
   * The content displayed in the `ObjectPageTitle` in collapsed (snapped) state.
   */
  snappedContent?: ReactNode | ReactNode[];
}

export interface InternalProps extends ObjectPageTitlePropTypes {
  /**
   * The onToggleHeaderContentVisibility show or hide the header section
   */
  onToggleHeaderContentVisibility?: (e: any) => void;
  /**
   * Defines whether the content area can be toggled
   */
  'data-not-clickable'?: boolean;
  /**
   * Defines whether the content area is visible
   */
  'data-header-content-visible'?: boolean;
  /**
   * Defines if the `snappedContent` should be rendered by the `ObjectPageTitle`
   */
  'data-is-snapped-rendered-outside'?: boolean;
}

type ActionsType =
  | ReactElement<{ onClick: MouseEventHandler<HTMLElement> }>
  | ReactElement<{ onClick: MouseEventHandler<HTMLElement> }>[];

const enhanceActionsWithClick = (actions: ActionsType, ref: RefObject<PopoverDomRef>) =>
  flattenFragments(actions, Infinity).map((action) => {
    if (isValidElement(action)) {
      return cloneElement<ButtonPropTypes>(action, {
        onClick: (e) => {
          if (typeof action.props?.onClick === 'function') {
            action.props.onClick(e);
          }
          // @ts-expect-error: will be replaced
          if (ref.current?.isOpen() && !e.defaultPrevented) {
            // @ts-expect-error: will be replaced
            ref.current.close();
          }
        }
      });
    }
  });

/**
 * The `ObjectPageTitle` component is used to serve as title of the `ObjectPage`.
 * It can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.
 *
 * __Note:__ When used inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
 */
const ObjectPageTitle = forwardRef<HTMLDivElement, ObjectPageTitlePropTypes>((props, ref) => {
  const {
    actions,
    breadcrumbs,
    children,
    header,
    subHeader,
    navigationActions,
    className,
    style,
    onToggleHeaderContentVisibility,
    actionsToolbarProps,
    navigationActionsToolbarProps,
    expandedContent,
    snappedContent,
    ...rest
  } = props as InternalProps;

  useStylesheet(styleData, ObjectPageTitle.displayName);
  const [componentRef, dynamicPageTitleRef] = useSyncRef<HTMLDivElement>(ref);
  const [showNavigationInTopArea, setShowNavigationInTopArea] = useState(undefined);
  const isMounted = useRef(false);
  const [isPhone, setIsPhone] = useState(
    Device.getCurrentRange(dynamicPageTitleRef.current?.getBoundingClientRect().width)?.name === 'Phone'
  );
  const containerClasses = clsx(classNames.container, isPhone && classNames.phone, className);

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
      data-component-name="ObjectPageTitle"
      onClick={onHeaderClick}
      {...propsWithoutOmitted}
    >
      {(breadcrumbs || (navigationActions && showNavigationInTopArea)) && (
        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} data-component-name="ObjectPageTitleBreadcrumbs">
          {breadcrumbs && (
            <div className={classNames.breadcrumbs} onClick={stopPropagation}>
              {breadcrumbs}
            </div>
          )}
          {navigationActions && showNavigationInTopArea && (
            <Toolbar
              tabIndex={undefined}
              role={undefined}
              {...navigationActionsToolbarProps}
              overflowButton={navigationActionsToolbarProps?.overflowButton}
              className={clsx(classNames.toolbar, navigationActionsToolbarProps?.className)}
              onClick={handleNavigationActionsToolbarClick}
              data-component-name="ObjectPageTitleNavActions"
              onOverflowChange={navigationActionsToolbarProps?.onOverflowChange}
              overflowPopoverRef={navActionsOverflowRef}
              design="Auto"
              toolbarStyle="Clear"
              active
            >
              <ActionsSpacer onClick={onHeaderClick} noHover={props?.['data-not-clickable']} />
              {enhanceActionsWithClick(navigationActions as ActionsType, syncedNavActionsOverflowRef)}
            </Toolbar>
          )}
        </FlexBox>
      )}
      <FlexBox
        alignItems={FlexBoxAlignItems.Center}
        className={classNames.middleSection}
        data-component-name="ObjectPageTitleMiddleSection"
      >
        <FlexBox className={classNames.titleMainSection}>
          {header && (
            <div className={classNames.title} data-component-name="ObjectPageTitleHeader">
              {header}
            </div>
          )}
          {children && (
            <div className={classNames.content} data-component-name="ObjectPageTitleContent">
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
            design="Auto"
            toolbarStyle="Clear"
            active
            className={clsx(classNames.toolbar, actionsToolbarProps?.className)}
            onClick={handleActionsToolbarClick}
            data-component-name="ObjectPageTitleActions"
            onOverflowChange={actionsToolbarProps?.onOverflowChange}
            overflowPopoverRef={actionsOverflowRef}
          >
            <ActionsSpacer onClick={onHeaderClick} noHover={props?.['data-not-clickable']} />
            {enhanceActionsWithClick(actions as ActionsType, syncedActionsOverflowRef)}
            {!showNavigationInTopArea && Children.count(actions) > 0 && Children.count(navigationActions) > 0 && (
              <ToolbarSeparator />
            )}
            {!showNavigationInTopArea &&
              enhanceActionsWithClick(navigationActions as ActionsType, syncedActionsOverflowRef)}
          </Toolbar>
        )}
      </FlexBox>
      {subHeader && (
        <FlexBox>
          <div
            className={clsx(classNames.subTitle, classNames.subTitleBottom)}
            data-component-name="ObjectPageTitleSubHeader"
          >
            {subHeader}
          </div>
        </FlexBox>
      )}
      {props?.['data-header-content-visible']
        ? expandedContent
        : props['data-is-snapped-rendered-outside']
          ? undefined
          : snappedContent}
    </FlexBox>
  );
});

ObjectPageTitle.displayName = 'ObjectPageTitle';

export { ObjectPageTitle };
