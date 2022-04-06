import {
  debounce,
  enrichEventWithDetails,
  useI18nBundle,
  useIsomorphicLayoutEffect,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { SHOW_MORE } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import clsx from 'clsx';
import React, {
  cloneElement,
  createRef,
  forwardRef,
  ReactElement,
  ReactFragment,
  ReactNode,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { ToolbarDesign, ToolbarStyle } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';
import { PopoverDomRef } from '../../webComponents';
import { OverflowPopover } from './OverflowPopover';
import { styles } from './Toolbar.jss';

const useStyles = createUseStyles(styles, { name: 'Toolbar' });

export interface ToolbarPropTypes extends Omit<CommonProps, 'onClick'> {
  /**
   * Defines the content of the `Toolbar`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the visual style of the `Toolbar`.<br />
   * <b>Note:</b> The visual styles are theme-dependent.
   */
  toolbarStyle?: ToolbarStyle | keyof typeof ToolbarStyle;
  /**
   * Defines the `Toolbar` design.<br />
   * <b>Note:</b> Design settings are theme-dependent.
   */
  design?: ToolbarDesign | keyof typeof ToolbarDesign;
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
   * Fired when the user clicks on the `Toolbar`, if the `active` prop is set to "true".
   */
  onClick?: (event: CustomEvent) => void;
  /**
   * Fired when the content of the overflow popover has changed.
   */
  onOverflowChange?: (event: {
    toolbarElements: HTMLElement[];
    overflowElements: HTMLCollection;
    target: HTMLElement;
  }) => void;
}

const OVERFLOW_BUTTON_WIDTH = 32 + 8;

/**
 * Horizontal container most commonly used to display buttons, labels, selects and various other input controls.
 *
 * The content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.
 * It can be accessed by the user through the overflow button that opens it in a popover.
 */
const Toolbar = forwardRef((props: ToolbarPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    toolbarStyle,
    design,
    active,
    style,
    tooltip,
    className,
    onClick,
    slot,
    as,
    portalContainer,
    numberOfAlwaysVisibleItems,
    onOverflowChange,
    overflowPopoverRef,
    ...rest
  } = props;

  useDeprecationNoticeForTooltip('Toolbar', props.tooltip);

  const classes = useStyles();
  const [componentRef, outerContainer] = useSyncRef<HTMLDivElement>(ref);
  const controlMetaData = useRef([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState<number>(null);
  const contentRef = useRef(null);
  const overflowContentRef = useRef(null);
  const overflowBtnRef = useRef(null);
  const [minWidth, setMinWidth] = useState('0');

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const showMoreText = i18nBundle.getText(SHOW_MORE);

  const toolbarClasses = clsx(
    classes.outerContainer,
    toolbarStyle === ToolbarStyle.Clear && classes.clear,
    active && classes.active,
    design === ToolbarDesign.Solid && classes.solid,
    design === ToolbarDesign.Transparent && classes.transparent,
    design === ToolbarDesign.Info && classes.info,
    className
  );

  const childrenWithRef = useMemo(() => {
    controlMetaData.current = [];

    const refactoredChildren = React.Children.toArray(children).map((child, index) => {
      if ((child as ReactElement).type === React.Fragment) {
        return (child as ReactElement).props.children.filter(Boolean).map((item, itemIndex: number) => {
          return cloneElement(item, { key: `.${index}:${itemIndex}` });
        });
      }
      return child;
    });

    return refactoredChildren.flat().map((item: ReactElement, index) => {
      const itemRef: RefObject<HTMLDivElement> = createRef();

      controlMetaData.current.push({
        ref: itemRef
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if ((item?.type as any)?.displayName === 'ToolbarSpacer') {
        return item;
      }
      return (
        <div ref={itemRef} key={index} className={classes.childContainer} data-component-name="ToolbarChildContainer">
          {item}
        </div>
      );
    });
  }, [children, controlMetaData, classes.childContainer]);

  const overflowNeeded =
    (lastVisibleIndex || lastVisibleIndex === 0) &&
    React.Children.count(childrenWithRef) !== lastVisibleIndex + 1 &&
    numberOfAlwaysVisibleItems < React.Children.count(children);

  useEffect(() => {
    let lastElementResizeObserver;
    const lastElement = contentRef.current.children[numberOfAlwaysVisibleItems - 1];
    const debouncedObserverFn = debounce(() => {
      setMinWidth(`${lastElement.getBoundingClientRect().right + OVERFLOW_BUTTON_WIDTH}px`);
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

  const requestAnimationFrameRef = useRef<undefined | number>();
  const calculateVisibleItems = useCallback(() => {
    requestAnimationFrameRef.current = requestAnimationFrame(() => {
      if (!outerContainer.current) return;
      const availableWidth = outerContainer.current.getBoundingClientRect().width;
      let consumedWidth = 0;
      let lastIndex = null;
      let lastFitWidth = 0;

      if (availableWidth - OVERFLOW_BUTTON_WIDTH <= 0) {
        lastIndex = -1;
        lastFitWidth = 0;
      } else {
        controlMetaData.current.forEach((item, index) => {
          const currentMeta = controlMetaData.current[index] as { ref: RefObject<HTMLElement> };
          if (currentMeta && currentMeta.ref && currentMeta.ref.current) {
            let nextWidth = currentMeta.ref.current.getBoundingClientRect().width;
            nextWidth += index === 0 || index === controlMetaData.current.length - 1 ? 4 : 8; // first & last element = padding: 4px
            if (index === controlMetaData.current.length - 1) {
              if (consumedWidth + nextWidth <= availableWidth - 8) {
                lastIndex = index;
                lastFitWidth = consumedWidth + nextWidth;
              }
            } else {
              if (consumedWidth + nextWidth <= availableWidth - OVERFLOW_BUTTON_WIDTH) {
                lastIndex = index;
                lastFitWidth = consumedWidth + nextWidth;
              }
              if (
                consumedWidth < availableWidth - OVERFLOW_BUTTON_WIDTH &&
                consumedWidth + nextWidth >= availableWidth - OVERFLOW_BUTTON_WIDTH
              ) {
                lastIndex = index - 1;
                lastFitWidth = 0;
              }
            }
            consumedWidth += nextWidth;
          }
        });
      }
      setLastVisibleIndex(lastIndex);
    });
  }, [outerContainer.current, controlMetaData.current, setLastVisibleIndex, childrenWithRef, overflowNeeded]);

  const observer = useRef(new ResizeObserver(calculateVisibleItems));

  useEffect(() => {
    if (outerContainer.current) {
      observer.current.observe(outerContainer.current);
    }
    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
      observer.current.disconnect();
    };
  }, [outerContainer.current]);

  useIsomorphicLayoutEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  const handleToolbarClick = useCallback(
    (e) => {
      if (active && typeof onClick === 'function') {
        onClick(enrichEventWithDetails(e));
      }
    },
    [onClick, active]
  );

  useEffect(() => {
    if (lastVisibleIndex !== null && typeof onOverflowChange === 'function') {
      const toolbarChildren = contentRef.current?.children;
      let toolbarElements = [];
      const overflowElements = overflowContentRef.current?.children;
      if (toolbarChildren?.length > 0) {
        toolbarElements = Array.from(toolbarChildren).filter((item, index) => index <= lastVisibleIndex);
      }
      onOverflowChange({
        toolbarElements,
        overflowElements,
        target: outerContainer.current
      });
    }
  }, [lastVisibleIndex]);
  const CustomTag = as as React.ElementType;
  const styleWithMinWidth = minWidth !== '0' ? { minWidth, ...style } : style;
  return (
    <CustomTag
      title={tooltip}
      style={styleWithMinWidth}
      className={clsx(toolbarClasses, overflowNeeded && classes.hasOverflow)}
      ref={componentRef}
      slot={slot}
      onClick={handleToolbarClick}
      {...rest}
    >
      <div className={classes.toolbar} data-component-name="ToolbarContent" ref={contentRef}>
        {overflowNeeded &&
          React.Children.map(childrenWithRef, (item, index) => {
            if (index >= lastVisibleIndex + 1 && index > numberOfAlwaysVisibleItems - 1) {
              return React.cloneElement(item as ReactElement, {
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
          className={classes.overflowButtonContainer}
          data-component-name="ToolbarOverflowButtonContainer"
        >
          <OverflowPopover
            overflowPopoverRef={overflowPopoverRef}
            lastVisibleIndex={lastVisibleIndex}
            classes={classes}
            portalContainer={portalContainer}
            overflowContentRef={overflowContentRef}
            numberOfAlwaysVisibleItems={numberOfAlwaysVisibleItems}
            showMoreText={showMoreText}
          >
            {React.Children.toArray(children).map((child) => {
              if ((child as ReactElement).type === React.Fragment) {
                return (child as ReactElement).props.children;
              }
              return child;
            })}
          </OverflowPopover>
        </div>
      )}
    </CustomTag>
  );
});

Toolbar.defaultProps = {
  as: 'div',
  toolbarStyle: ToolbarStyle.Standard,
  design: ToolbarDesign.Auto,
  active: false,
  portalContainer: document.body,
  numberOfAlwaysVisibleItems: 0
};

Toolbar.displayName = 'Toolbar';
export { Toolbar };
