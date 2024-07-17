'use client';

import { debounce, Device, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import { cloneElement, forwardRef, isValidElement, useEffect, useRef, useState } from 'react';
import { FlexBoxAlignItems, FlexBoxJustifyContent } from '../../enums/index.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import type { CommonProps } from '../../types/index.js';
import type { ToolbarDomRef } from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { classNames, styleData } from './ObjectPageTitle.module.css.js';

export interface ObjectPageTitlePropTypes extends CommonProps {
  /**
   * Defines the actions bar of the `ObjectPageTitle`.
   *
   * __Note:__ Although this prop accepts all `ReactElement`s, it is strongly recommended that you only use the `Toolbar` component in order to preserve the intended design.
   */
  actionsBar?: ReactElement;

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
   * Defines navigation-actions bar of the `ObjectPageTitle`.
   *
   * *Note*: The `navigationBar` position depends on the control size.
   * If the control size is 1280px or bigger, they are rendered right next to the `actionsBar`.
   * Otherwise, they are rendered in the top-right area (above the `actionsBar`).
   * If a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationBar` is limited.
   *
   * __Note:__ Although this prop accepts all `ReactElement`s, it is strongly recommended that you only use the `Toolbar` component in order to preserve the intended design.
   */
  navigationBar?: ReactElement;
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

/**
 * The `ObjectPageTitle` component is used to serve as title of the `ObjectPage`.
 * It can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.
 *
 * __Note:__ When used inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
 */
const ObjectPageTitle = forwardRef<HTMLDivElement, ObjectPageTitlePropTypes>((props, ref) => {
  const {
    actionsBar,
    breadcrumbs,
    children,
    header,
    subHeader,
    navigationBar,
    className,
    onToggleHeaderContentVisibility,
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
  const toolbarContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const onHeaderClick = (e) => {
    if (typeof onToggleHeaderContentVisibility === 'function') {
      onToggleHeaderContentVisibility(e);
    }
  };

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

  const [wcrNavToolbar, setWcrNavToolbar] = useState(null);
  useEffect(() => {
    //@ts-expect-error: private identifier
    if (isValidElement(navigationBar) && navigationBar?.type?._displayName === 'UI5WCRToolbar') {
      setWcrNavToolbar(
        cloneElement<any>(navigationBar, {
          numberOfAlwaysVisibleItems: Infinity
        })
      );
    }
  }, [navigationBar]);

  useEffect(() => {
    const toolbarContainer = toolbarContainerRef.current;

    const observer = new MutationObserver(([toolbarContainerMutation]) => {
      if (toolbarContainerMutation.type === 'childList') {
        const navigationToolbar: ToolbarDomRef | undefined = (
          toolbarContainerMutation.target as HTMLDivElement
        ).querySelector(':has(> :nth-last-child(n + 2)) > [ui5-toolbar]:last-child');
        if (navigationToolbar?.children) {
          Array.from(navigationToolbar.children).forEach((item) => {
            item.setAttribute('overflow-priority', 'NeverOverflow');
          });
        }
      }
    });

    const config = { childList: true, subtree: true };

    if (toolbarContainer) {
      const navigationToolbar: ToolbarDomRef | undefined = toolbarContainer.querySelector(
        ':has(> :nth-last-child(n + 2)) > [ui5-toolbar]:last-child'
      );
      if (navigationToolbar?.children) {
        Array.from(navigationToolbar.children).forEach((item) => {
          item.setAttribute('overflow-priority', 'NeverOverflow');
        });
      }
      observer.observe(toolbarContainer, config);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <FlexBox className={containerClasses} ref={componentRef} data-component-name="ObjectPageTitle" {...rest}>
      <span className={classNames.clickArea} onClick={onHeaderClick} />
      {(breadcrumbs || (navigationBar && showNavigationInTopArea)) && (
        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} data-component-name="ObjectPageTitleBreadcrumbs">
          {breadcrumbs && (
            <div className={classNames.breadcrumbs} onClick={stopPropagation}>
              {breadcrumbs}
            </div>
          )}
          {showNavigationInTopArea && navigationBar && <div className={classNames.toolbar}>{navigationBar}</div>}
        </FlexBox>
      )}
      <FlexBox
        alignItems={FlexBoxAlignItems.Center}
        className={classNames.middleSection}
        data-component-name="ObjectPageTitleMiddleSection"
      >
        <FlexBox className={classNames.titleMainSection} onClick={onHeaderClick}>
          {header && (
            <div className={classNames.title} data-component-name="ObjectPageTitleHeader" /*onClick={onHeaderClick}*/>
              {header}
            </div>
          )}
          {children && (
            <div className={classNames.content} data-component-name="ObjectPageTitleContent">
              {children}
            </div>
          )}
        </FlexBox>
        {(actionsBar || (!showNavigationInTopArea && navigationBar)) && (
          <div className={classNames.toolbar} ref={toolbarContainerRef}>
            {actionsBar}
            {!showNavigationInTopArea && actionsBar && navigationBar && (
              <div
                className={classNames.actionsSpacer}
                data-component-name="ObjectPageTitleActionsSeparator"
                aria-hidden
              />
            )}
            {!showNavigationInTopArea && (wcrNavToolbar ? wcrNavToolbar : navigationBar)}
          </div>
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
