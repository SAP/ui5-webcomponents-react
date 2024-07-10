'use client';

import type PopupAccessibleRole from '@ui5/webcomponents/dist/types/PopupAccessibleRole.js';
import {
  debounce,
  useI18nBundle,
  useIsomorphicLayoutEffect,
  useStylesheet,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ElementType, HTMLAttributes, ReactElement, ReactNode, Ref, RefObject } from 'react';
import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { SHOW_MORE } from '../../i18n/i18n-defaults.js';
import { flattenFragments } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
import type { ButtonPropTypes, PopoverDomRef, ToggleButtonPropTypes } from '../../webComponents/index.js';
import { OverflowPopover } from './OverflowPopover.js';
import { classNames, styleData } from './Toolbar.module.css.js';

export interface ToolbarPropTypes extends Omit<CommonProps, 'onClick' | 'children'> {
  /**
   * Defines the content of the `Toolbar`.
   *
   * __Note:__ Although this prop accepts all `ReactNode` types, it is strongly recommended to not pass `string`, `number` or a React Portal to it.
   *
   * __Note:__ Only components displayed inside the Toolbar are supported as children, i.e. elements positioned outside the normal flow of the document (like dialogs or popovers), can cause undesired behavior.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the button shown when the `Toolbar` goes into overflow.
   *
   * __Note:__ It is strongly recommended that you only use `ToggleButton` in icon only mode in order to preserve the intended design.
   *
   * __Note:__ Per default a `ToggleButton` with the `"overflow"` icon and all necessary a11y attributes will be rendered.
   */
  overflowButton?: ReactElement<ToggleButtonPropTypes> | ReactElement<ButtonPropTypes>;
  /**
   * Defines the visual style of the `Toolbar`.
   *
   * __Note:__ The visual styles are theme-dependent.
   */
  toolbarStyle?: 'Clear' | 'Standard';
  /**
   * Defines the `Toolbar` design.<br />
   * <b>Note:</b> Design settings are theme-dependent.
   */
  design?: 'Auto' | 'Info' | 'Solid' | 'Transparent';
  /**
   * Indicates that the whole `Toolbar` is clickable. The Press event is fired only if `active` is set to true.
   */
  active?: boolean;
  /**
   * Sets the components outer HTML tag.
   *
   * __Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Defines where modals are rendered into via `React.createPortal`.
   *
   * You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).
   *
   * Defaults to: `document.body`
   */
  portalContainer?: Element;
  /**
   * Defines the number of items inside the toolbar which should always be visible.
   * _E.g.: `numberOfAlwaysVisibleItems={3}` would always show the first three items, no matter the size of the toolbar._
   *
   * __Note__: To preserve the intended design, it's not recommended to overwrite the `min-width` when using this prop.
   */
  numberOfAlwaysVisibleItems?: number;
  /**
   * Exposes the React Ref of the overflow popover.
   * This can be useful, for example, when wanting to close the popover on click or selection of a child element.
   */
  overflowPopoverRef?: Ref<PopoverDomRef>;
  /**
   * Defines internally used a11y properties.
   *
   * __Note:__ When setting `contentRole` of the `overflowPopover`, the `role` is set to `"None"`.
   */
  a11yConfig?: {
    overflowPopover?: {
      /**
       * Defines the `accessibleRole` of the overflow `Popover`.
       */
      role?: PopupAccessibleRole | keyof typeof PopupAccessibleRole;
      /**
       * Defines the `role` of the content div inside the overflow `Popover`.
       *
       * __Note:__ When setting `contentRole`, the `role` is set to `"None"`.
       */
      contentRole?: HTMLAttributes<HTMLDivElement>['role'];
    };
  };
  /**
   * Fired if the `active` prop is set to true and the user clicks or presses Enter/Space on the `Toolbar`.
   */
  onClick?: (event: CustomEvent) => void;
  /**
   * Fired when the content of the overflow popover has changed.
   */
  onOverflowChange?: (event: {
    toolbarElements: HTMLElement[];
    overflowElements: HTMLCollection | undefined;
    target: HTMLElement;
  }) => void;
}

function getSpacerWidths(ref) {
  if (!ref) {
    return 0;
  }

  let spacerWidths = 0;
  if (ref.dataset.componentName === 'ToolbarSpacer') {
    spacerWidths += ref.offsetWidth;
  }
  return spacerWidths + getSpacerWidths(ref.previousElementSibling);
}

const OVERFLOW_BUTTON_WIDTH = 36 + 8 + 8; // width + padding end + spacing start

/**
 *
 * __Note:__ The `Toolbar` component may be replaced by the `ui5-toolbar` web-component (currently available as `ToolbarV2`) with our next major release. If you only need to pass components supported by `ToolbarV2` then please consider using `ToolbarV2` instead of this component.
 *
 * ___
 *
 * Horizontal container most commonly used to display buttons, labels, selects and various other input controls.
 *
 * The content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.
 * It can be accessed by the user through the overflow button that opens it in a popover.
 *
 * __Note:__ The overflow popover is mounted only when the overflow button is displayed, i.e., any child component of the popover will be remounted, when moved into it.
 *
 * __Note:__ To prevent duplicate child `id`s in the DOM, all child `id`s get an `-overflow` suffix. This is especially important when popovers are opened by id.
 */
const Toolbar = forwardRef<HTMLDivElement, ToolbarPropTypes>((props, ref) => {
  const {
    children,
    toolbarStyle = 'Standard',
    design = 'Auto',
    active = false,
    style,
    className,
    onClick,
    slot,
    as = 'div',
    portalContainer,
    numberOfAlwaysVisibleItems = 0,
    onOverflowChange,
    overflowPopoverRef,
    overflowButton,
    a11yConfig,
    ...rest
  } = props;

  useStylesheet(styleData, Toolbar.displayName);
  const [componentRef, outerContainer] = useSyncRef<HTMLDivElement>(ref);
  const controlMetaData = useRef([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState<number>(null);
  const [isPopoverMounted, setIsPopoverMounted] = useState(false);
  const contentRef = useRef(null);
  const overflowContentRef = useRef(null);
  const overflowBtnRef = useRef(null);
  const [minWidth, setMinWidth] = useState('0');

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const showMoreText = i18nBundle.getText(SHOW_MORE);

  const toolbarClasses = clsx(
    classNames.outerContainer,
    toolbarStyle === 'Clear' && classNames.clear,
    active && classNames.active,
    design === 'Solid' && classNames.solid,
    design === 'Transparent' && classNames.transparent,
    design === 'Info' && classNames.info,
    className
  );
  const flatChildren = useMemo(() => {
    return flattenFragments(children, 10);
  }, [children]);

  const childrenWithRef = useMemo(() => {
    controlMetaData.current = [];

    return flatChildren.map((item, index) => {
      const itemRef: RefObject<HTMLDivElement> = createRef();
      // @ts-expect-error: if type is not defined, it's not a spacer
      const isSpacer = item?.type?.displayName === 'ToolbarSpacer';
      controlMetaData.current.push({
        ref: itemRef,
        isSpacer
      });
      if (isSpacer) {
        return item;
      }
      return (
        <div
          ref={itemRef}
          key={index}
          className={classNames.childContainer}
          data-component-name="ToolbarChildContainer"
        >
          {item}
        </div>
      );
    });
  }, [flatChildren, controlMetaData, classNames.childContainer]);

  const overflowNeeded =
    (lastVisibleIndex || lastVisibleIndex === 0) &&
    Children.count(childrenWithRef) !== lastVisibleIndex + 1 &&
    numberOfAlwaysVisibleItems < Children.count(flatChildren);

  useEffect(() => {
    let lastElementResizeObserver;
    const lastElement = contentRef.current.children[numberOfAlwaysVisibleItems - 1];
    const debouncedObserverFn = debounce(() => {
      const spacerWidth = getSpacerWidths(lastElement);
      const isRtl = outerContainer.current?.matches(':dir(rtl)');
      if (isRtl) {
        setMinWidth(
          `${lastElement.offsetParent.offsetWidth - lastElement.offsetLeft + OVERFLOW_BUTTON_WIDTH - spacerWidth}px`
        );
      } else {
        setMinWidth(
          `${
            lastElement.offsetLeft + lastElement.getBoundingClientRect().width + OVERFLOW_BUTTON_WIDTH - spacerWidth
          }px`
        );
      }
    }, 200);
    if (numberOfAlwaysVisibleItems && overflowNeeded && lastElement) {
      lastElementResizeObserver = new ResizeObserver(debouncedObserverFn);
      lastElementResizeObserver.observe(contentRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      lastElementResizeObserver?.disconnect();
    };
  }, [numberOfAlwaysVisibleItems, overflowNeeded]);

  const requestAnimationFrameRef = useRef<undefined | number>(undefined);
  const calculateVisibleItems = useCallback(() => {
    requestAnimationFrameRef.current = requestAnimationFrame(() => {
      if (!outerContainer.current) return;
      const availableWidth = outerContainer.current.getBoundingClientRect().width;
      let consumedWidth = 0;
      let lastIndex = null;
      if (availableWidth - OVERFLOW_BUTTON_WIDTH <= 0) {
        lastIndex = -1;
      } else {
        let prevItemsAreSpacer = true;
        controlMetaData.current.forEach((item, index) => {
          const currentMeta = controlMetaData.current[index] as { ref: RefObject<HTMLElement> };
          if (currentMeta && currentMeta.ref && currentMeta.ref.current) {
            let nextWidth = currentMeta.ref.current.getBoundingClientRect().width;
            nextWidth += index === 0 || index === controlMetaData.current.length - 1 ? 4 : 8; // first & last element = padding: 4px
            if (index === controlMetaData.current.length - 1) {
              if (consumedWidth + nextWidth <= availableWidth - 8) {
                lastIndex = index;
              } else if (index === 0 || prevItemsAreSpacer) {
                lastIndex = index - 1;
              }
            } else {
              if (consumedWidth + nextWidth <= availableWidth - OVERFLOW_BUTTON_WIDTH) {
                lastIndex = index;
              }
              if (
                consumedWidth < availableWidth - OVERFLOW_BUTTON_WIDTH &&
                consumedWidth + nextWidth >= availableWidth - OVERFLOW_BUTTON_WIDTH
              ) {
                lastIndex = index - 1;
              }
            }
            if (prevItemsAreSpacer && !item.isSpacer) {
              prevItemsAreSpacer = false;
            }
            consumedWidth += nextWidth;
          }
        });
      }
      setLastVisibleIndex(lastIndex);
    });
  }, [overflowNeeded]);

  useEffect(() => {
    const observer = new ResizeObserver(calculateVisibleItems);

    if (outerContainer.current) {
      observer.observe(outerContainer.current);
    }
    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
      observer.disconnect();
    };
  }, [calculateVisibleItems]);

  useEffect(() => {
    if (Children.count(children) > 0) {
      calculateVisibleItems();
    }
  }, [children]);

  useIsomorphicLayoutEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  const handleToolbarClick = (e) => {
    if (active && typeof onClick === 'function') {
      const isSpaceEnterDown = e.type === 'keydown' && (e.code === 'Enter' || e.code === 'Space');
      if (isSpaceEnterDown && e.target !== e.currentTarget) {
        return;
      }
      if (e.type === 'click' || isSpaceEnterDown) {
        if (isSpaceEnterDown) {
          e.preventDefault();
        }
        onClick(e);
      }
    }
  };

  const prevChildren = useRef(flatChildren);
  const debouncedOverflowChange = useRef<ToolbarPropTypes['onOverflowChange'] & { cancel(): void }>(undefined);

  useEffect(() => {
    if (typeof onOverflowChange === 'function') {
      debouncedOverflowChange.current = debounce(onOverflowChange, 60);
    }
  }, [onOverflowChange]);

  useEffect(() => {
    const haveChildrenChanged = prevChildren.current.length !== flatChildren.length;
    if ((lastVisibleIndex !== null || haveChildrenChanged) && typeof debouncedOverflowChange.current === 'function') {
      prevChildren.current = flatChildren;
      const toolbarChildren = contentRef.current?.children;
      let toolbarElements = [];
      let overflowElements;
      if (isPopoverMounted) {
        overflowElements = overflowContentRef.current?.children;
      }
      if (toolbarChildren?.length > 0) {
        toolbarElements = Array.from(toolbarChildren).filter((item, index) => index <= lastVisibleIndex);
      }
      debouncedOverflowChange.current({
        toolbarElements,
        overflowElements,
        target: outerContainer.current
      });
    }
    return () => {
      if (debouncedOverflowChange.current) {
        debouncedOverflowChange.current.cancel();
      }
    };
  }, [lastVisibleIndex, flatChildren.length, isPopoverMounted]);

  const CustomTag = as as ElementType;
  const styleWithMinWidth = minWidth !== '0' ? { minWidth, ...style } : style;
  return (
    <CustomTag
      style={styleWithMinWidth}
      className={clsx(toolbarClasses, overflowNeeded && classNames.hasOverflow)}
      ref={componentRef}
      slot={slot}
      onClick={handleToolbarClick}
      onKeyDown={handleToolbarClick}
      tabIndex={active ? 0 : undefined}
      role={active ? 'button' : undefined}
      data-sap-ui-fastnavgroup="true"
      {...rest}
    >
      <div className={classNames.toolbar} data-component-name="ToolbarContent" ref={contentRef}>
        {overflowNeeded &&
          Children.map(childrenWithRef, (item, index) => {
            if (index >= lastVisibleIndex + 1 && index > numberOfAlwaysVisibleItems - 1) {
              return cloneElement(item as ReactElement<CommonProps>, {
                style: { visibility: 'hidden', position: 'absolute', pointerEvents: 'none' }
              });
            }
            return item;
          })}
        {!overflowNeeded && childrenWithRef}
      </div>
      {overflowNeeded && (
        <div
          ref={overflowBtnRef}
          className={classNames.overflowButtonContainer}
          data-component-name="ToolbarOverflowButtonContainer"
        >
          <OverflowPopover
            overflowPopoverRef={overflowPopoverRef}
            lastVisibleIndex={lastVisibleIndex}
            classes={classNames}
            portalContainer={portalContainer}
            overflowContentRef={overflowContentRef}
            numberOfAlwaysVisibleItems={numberOfAlwaysVisibleItems}
            showMoreText={showMoreText}
            overflowButton={overflowButton}
            setIsMounted={setIsPopoverMounted}
            a11yConfig={a11yConfig}
          >
            {flatChildren}
          </OverflowPopover>
        </div>
      )}
    </CustomTag>
  );
});

Toolbar.displayName = 'Toolbar';
export { Toolbar };
