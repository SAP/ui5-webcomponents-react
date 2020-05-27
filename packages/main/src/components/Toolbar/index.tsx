import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, {
  createRef,
  FC,
  forwardRef,
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
import ResizeObserver from 'resize-observer-polyfill';
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
  const { children, toolbarStyle, design, active, style, tooltip, className, onToolbarClick } = props;
  const classes = useStyles(styles);
  const outerContainer: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const controlMetaData = useRef([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState(null);
  const [blockerWidth, setBlockerWidth] = useState(0);
  const toolbarClasses = StyleClassHelper.of(classes.outerContainer);

  const passThroughProps = usePassThroughHtmlProps(props, ['onToolbarClick']);

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
      if (active) {
        toolbarClasses.put(classes.activeInfo);
      } else {
        toolbarClasses.put(classes.info);
      }
      break;
    default:
      break;
  }

  if (className) {
    toolbarClasses.put(className);
  }

  const childrenWithRef = useMemo(() => {
    controlMetaData.current = [];

    return React.Children.toArray(children).map((item, index) => {
      const itemRef: RefObject<HTMLDivElement> = createRef();

      controlMetaData.current.push({
        ref: itemRef
      });
      if (item.type.displayName === 'ToolbarSpacer') {
        return item;
      }
      return (
        <div ref={itemRef} key={index}>
          {item}
        </div>
      );
    });
  }, [children]);
  const overflowNeeded =
    (lastVisibleIndex || lastVisibleIndex === 0) && React.Children.count(childrenWithRef) !== lastVisibleIndex + 1;

  const calculateVisibleItems = useCallback(() => {
    requestAnimationFrame(() => {
      if (!outerContainer.current) return;
      const availableWidth = outerContainer.current.getBoundingClientRect().width; /*- 32 - 8*/
      let consumedWidth = 0;
      let lastIndex = null;
      let lastFitWidth = 0;

      if (availableWidth - 32 - 8 <= 0) {
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
              if (consumedWidth + nextWidth <= availableWidth - 32 - 8) {
                lastIndex = index;
                lastFitWidth = consumedWidth + nextWidth;
              }
              if (consumedWidth < availableWidth - 32 - 8 && consumedWidth + nextWidth >= availableWidth - 32 - 8) {
                lastIndex = index - 1;
                lastFitWidth = 0;
              }
            }
            consumedWidth += nextWidth;
          }
        });
      }
      setBlockerWidth(Math.max(0, availableWidth - lastFitWidth));
      setLastVisibleIndex(lastIndex);
    });
  }, [outerContainer.current, controlMetaData.current, setLastVisibleIndex, childrenWithRef, overflowNeeded]);

  const renderBlocker = useCallback(
    () => <div data-toolbar-blocker style={{ width: `${blockerWidth}px`, minWidth: `${blockerWidth}px` }} />,
    [blockerWidth]
  );

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

  const renderOverflowPopover = useCallback(() => {
    return (
      <div className={classes.overflowButtonContainer} title="Show More">
        <OverflowPopover lastVisibleIndex={lastVisibleIndex} contentClass={classes.popoverContent}>
          {children}
        </OverflowPopover>
      </div>
    );
  }, [classes.popoverContent, lastVisibleIndex, children]);

  const onClick = useCallback(
    (e) => {
      if (active && onToolbarClick) {
        if (onToolbarClick) {
          onToolbarClick(enrichEventWithDetails(e));
        }
      }
    },
    [onToolbarClick, active]
  );

  return (
    <div
      title={tooltip}
      style={style}
      className={toolbarClasses.toString()}
      ref={outerContainer}
      onClick={onClick}
      {...passThroughProps}
    >
      <div className={classes.toolbar}>
        {overflowNeeded &&
          React.Children.map(childrenWithRef, (item, index) => {
            if (index === lastVisibleIndex) {
              return (
                <>
                  {item}
                  {renderBlocker()}
                </>
              );
            }
            if (lastVisibleIndex === -1) {
              return (
                <>
                  {renderBlocker()}
                  {item}
                </>
              );
            }
            return item;
          })}
        {!overflowNeeded && childrenWithRef}
      </div>
      {overflowNeeded && renderOverflowPopover()}
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
