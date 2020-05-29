import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef, useI18nText } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { SHOW_MORE } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import React, {
  createRef,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { OverflowPopover } from './OverflowPopover';
import { styles } from './Toolbar.jss';

const useStyles = createComponentStyles(styles, { name: 'Toolbar' });

export interface ToolbarProptypes extends CommonProps {
  children?: ReactNode | ReactNodeArray;
  toolbarStyle?: ToolbarStyle;
  design?: ToolbarDesign;
  active?: boolean;
  onToolbarClick?: (event: CustomEvent<{}>) => void;
}

const Toolbar: FC<ToolbarProptypes> = forwardRef((props: ToolbarProptypes, ref: Ref<HTMLDivElement>) => {
  const { children, toolbarStyle, design, active, style, tooltip, className, onToolbarClick, slot } = props;
  const classes = useStyles(styles);
  const outerContainer: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const controlMetaData = useRef([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState(null);

  const passThroughProps = usePassThroughHtmlProps(props, ['onToolbarClick']);

  const [showMoreText] = useI18nText('@ui5/webcomponents-react', SHOW_MORE);

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

    return React.Children.toArray(children).map((item, index) => {
      const itemRef: RefObject<HTMLDivElement> = createRef();

      controlMetaData.current.push({
        ref: itemRef
      });
      if (item?.type?.displayName === 'ToolbarSpacer') {
        return item;
      }
      return (
        <div ref={itemRef} key={index}>
          {item}
        </div>
      );
    });
  }, [children, controlMetaData]);
  const overflowNeeded =
    (lastVisibleIndex || lastVisibleIndex === 0) && React.Children.count(childrenWithRef) !== lastVisibleIndex + 1;

  toolbarClasses.putIfPresent(overflowNeeded && classes.hasOverflow);

  const calculateVisibleItems = useCallback(() => {
    const OVERFLOW_BUTTON_WIDTH = 32 + 8;
    requestAnimationFrame(() => {
      if (!outerContainer.current) return;
      const availableWidth = outerContainer.current.getBoundingClientRect().width; /*- 32 - 8*/
      let consumedWidth = 0;
      let lastIndex = null;
      let lastFitWidth = 0;

      if (availableWidth - OVERFLOW_BUTTON_WIDTH <= 0) {
        lastIndex = -1;
        lastFitWidth = 0;
      } else {
        controlMetaData.current.forEach((item, index) => {
          const currentMeta = controlMetaData.current[index];
          if (currentMeta && currentMeta.ref && currentMeta.ref.current) {
            let nextWidth = currentMeta.ref.current.getBoundingClientRect().width;
            nextWidth += index === 0 || index === controlMetaData.current.length - 1 ? 4 : 8; //first & last element = padding: 4px
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
      observer.current.disconnect();
    };
  }, [outerContainer.current]);

  useLayoutEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  const onClick = useCallback(
    (e) => {
      if (active && typeof onToolbarClick === 'function') {
        onToolbarClick(enrichEventWithDetails(e));
      }
    },
    [onToolbarClick, active]
  );

  return (
    <div
      title={tooltip}
      style={style}
      className={toolbarClasses.className}
      ref={outerContainer}
      onClick={onClick}
      slot={slot}
      {...passThroughProps}
    >
      <div className={classes.toolbar}>
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
        <div className={classes.overflowButtonContainer} title={showMoreText}>
          <OverflowPopover lastVisibleIndex={lastVisibleIndex} contentClass={classes.popoverContent}>
            {children}
          </OverflowPopover>
        </div>
      )}
    </div>
  );
});

Toolbar.defaultProps = {
  toolbarStyle: ToolbarStyle.Standard,
  design: ToolbarDesign.Auto,
  active: false
};

Toolbar.displayName = 'Toolbar';
export { Toolbar };
