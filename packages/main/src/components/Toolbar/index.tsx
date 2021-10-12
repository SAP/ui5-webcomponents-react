import { createUseStyles } from 'react-jss';
import { useConsolidatedRef, useI18nBundle, useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { SHOW_MORE } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ToolbarDesign } from '@ui5/webcomponents-react/dist/ToolbarDesign';
import { ToolbarStyle } from '@ui5/webcomponents-react/dist/ToolbarStyle';
import React, {
  cloneElement,
  createRef,
  forwardRef,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactNodeArray,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { OverflowPopover } from './OverflowPopover';
import { styles } from './Toolbar.jss';

const useStyles = createUseStyles(styles, { name: 'Toolbar' });

export interface ToolbarPropTypes extends Omit<CommonProps, 'onClick'> {
  /**
   * Defines the content of the `Toolbar`.
   */
  children?: ReactNode | ReactNodeArray | ReactFragment;
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
   * Fired when the user clicks on the `Toolbar`, if the `active` prop is set to "true".
   */
  onClick?: (event: CustomEvent) => void;
}

/**
 * Horizontal container most commonly used to display buttons, labels, selects and various other input controls.
 *
 * The content of the `Toolbar` moves into the overflow area from right to left when the available space is not enough in the visible area of the container.
 * It can be accessed by the user through the overflow button that opens it in a popover.
 */
const Toolbar = forwardRef((props: ToolbarPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, toolbarStyle, design, active, style, tooltip, className, onClick, slot, as, ...rest } = props;
  const classes = useStyles();
  const outerContainer: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const controlMetaData = useRef([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState<number>(null);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const toolbarClasses = StyleClassHelper.of(classes.outerContainer);
  if (toolbarStyle === ToolbarStyle.Clear) {
    toolbarClasses.put(classes.clear);
  }
  if (active) {
    toolbarClasses.put(classes.active);
  }
  switch (design) {
    case ToolbarDesign.Solid:
      toolbarClasses.put(classes.solid);
      break;
    case ToolbarDesign.Transparent:
      toolbarClasses.put(classes.transparent);
      break;
    case ToolbarDesign.Info:
      toolbarClasses.put(classes.info);
      break;
    default:
      break;
  }
  toolbarClasses.putIfPresent(className);

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
    (lastVisibleIndex || lastVisibleIndex === 0) && React.Children.count(childrenWithRef) !== lastVisibleIndex + 1;

  toolbarClasses.putIfPresent(overflowNeeded && classes.hasOverflow);

  const requestAnimationFrameRef = useRef<undefined | number>();
  const calculateVisibleItems = useCallback(() => {
    const OVERFLOW_BUTTON_WIDTH = 32 + 8;
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

  const CustomTag = as as React.ElementType;
  return (
    <CustomTag
      title={tooltip}
      style={style}
      className={toolbarClasses.className}
      ref={outerContainer}
      slot={slot}
      onClick={handleToolbarClick}
      {...rest}
    >
      <div className={classes.toolbar} data-component-name="ToolbarContent">
        {overflowNeeded &&
          React.Children.map(childrenWithRef, (item, index) => {
            if (index >= lastVisibleIndex + 1) {
              return React.cloneElement(item as ReactElement, { style: { visibility: 'hidden' } });
            }
            return item;
          })}
        {!overflowNeeded && childrenWithRef}
      </div>
      {overflowNeeded && (
        <div
          className={classes.overflowButtonContainer}
          title={i18nBundle.getText(SHOW_MORE)}
          data-component-name="ToolbarOverflowButtonContainer"
        >
          <OverflowPopover lastVisibleIndex={lastVisibleIndex} contentClass={classes.popoverContent}>
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
  active: false
};

Toolbar.displayName = 'Toolbar';
export { Toolbar };
