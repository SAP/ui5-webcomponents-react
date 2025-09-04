'use client';

import { debounce, Device, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { cloneElement, forwardRef, isValidElement, useEffect, useRef, useState } from 'react';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems.js';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection.js';
import { FlexBoxJustifyContent } from '../../enums/FlexBoxJustifyContent.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import type { ToolbarDomRef } from '../../webComponents/Toolbar/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { classNames, styleData } from './ObjectPageTitle.module.css.js';
import type { InternalProps, ObjectPageTitlePropTypes } from './types/index.js';

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
    snappedHeader,
    snappedSubHeader,
    _snappedAvatar,
    ...rest
  } = props as InternalProps;

  useStylesheet(styleData, ObjectPageTitle.displayName);
  const [componentRef, dynamicPageTitleRef] = useSyncRef<HTMLDivElement>(ref);
  const [showNavigationInTopArea, setShowNavigationInTopArea] = useState(undefined);
  const isMounted = useRef(false);
  const [isPhone, setIsPhone] = useState(
    Device.getCurrentRange(dynamicPageTitleRef.current?.getBoundingClientRect().width)?.name === 'Phone',
  );
  const containerClasses = clsx(classNames.container, isPhone && classNames.phone, className);
  const toolbarContainerRef = useRef<HTMLDivElement>(null);
  const _header = !props?.['data-header-content-visible'] && snappedHeader ? snappedHeader : header;
  const _subHeader = !props?.['data-header-content-visible'] && snappedSubHeader ? snappedSubHeader : subHeader;

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
          numberOfAlwaysVisibleItems: Infinity,
        }),
      );
    }
  }, [navigationBar]);

  useEffect(() => {
    const toolbarContainer = toolbarContainerRef.current;

    const updateNavigationToolbar = (container: HTMLDivElement) => {
      if (container.children.length >= 2) {
        const lastChild = container.lastElementChild as ToolbarDomRef;
        if (lastChild && lastChild.matches('[ui5-toolbar]')) {
          Array.from(lastChild.children).forEach((item) => {
            item.setAttribute('overflow-priority', 'NeverOverflow');
          });
        }
      }
    };

    const observer = new MutationObserver(([toolbarContainerMutation]) => {
      if (toolbarContainerMutation.type === 'childList') {
        updateNavigationToolbar(toolbarContainerMutation.target as HTMLDivElement);
      }
    });

    const config = { childList: true, subtree: true };

    if (toolbarContainer) {
      updateNavigationToolbar(toolbarContainer);
      observer.observe(toolbarContainer, config);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <FlexBox
      className={containerClasses}
      ref={componentRef}
      data-component-name="ObjectPageTitle"
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.SpaceBetween}
      {...rest}
    >
      <span
        className={classNames.clickArea}
        onClick={onHeaderClick}
        data-component-name="ObjectPageTitleClickElement"
      />
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
      <FlexBox alignItems={FlexBoxAlignItems.End}>
        <div className={classNames.snappedAvatarContainer}>{_snappedAvatar}</div>
        <FlexBox direction={FlexBoxDirection.Column} className={classNames.contentContainer}>
          <FlexBox
            alignItems={FlexBoxAlignItems.Center}
            className={classNames.middleSection}
            data-component-name="ObjectPageTitleMiddleSection"
          >
            <FlexBox className={classNames.titleMainSection} onClick={onHeaderClick}>
              {_header && (
                <div className={classNames.title} data-component-name="ObjectPageTitleHeader">
                  {_header}
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
                    className={classNames.actionsSeparator}
                    data-component-name="ObjectPageTitleActionsSeparator"
                    aria-hidden="true"
                  />
                )}
                {!showNavigationInTopArea && (wcrNavToolbar ? wcrNavToolbar : navigationBar)}
              </div>
            )}
          </FlexBox>
          {_subHeader && (
            <FlexBox id="sub">
              <div
                className={clsx(classNames.subTitle, classNames.subTitleBottom)}
                data-component-name="ObjectPageTitleSubHeader"
              >
                {_subHeader}
              </div>
            </FlexBox>
          )}
        </FlexBox>
      </FlexBox>
      {props?.['data-header-content-visible'] ? expandedContent : snappedContent}
    </FlexBox>
  );
});

ObjectPageTitle.displayName = 'ObjectPageTitle';

export { ObjectPageTitle };
export type { ObjectPageTitlePropTypes };
