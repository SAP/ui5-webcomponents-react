import { createComponentStyles } from '@ui5/webcomponents-react-base';
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
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Toolbar.jss';
import ResizeObserver from 'resize-observer-polyfill';
import { OverflowPopover } from './OverflowPopover';

const useStyles = createComponentStyles(styles, { name: 'Toolbar' });

export interface ToolbarProptypes extends CommonProps {
  children?: ReactNode | ReactNodeArray;
  toolbarStyle?: string; //todo enum
  design?: string; //todo enum
  active?: boolean;
  enabled?: boolean;
}

const Toolbar: FC<ToolbarProptypes> = forwardRef((props: ToolbarProptypes, ref: Ref<HTMLDivElement>) => {
  //todo add style, design enum, commonprops
  //todo export separator, spacer
  const { children, toolbarStyle = 'Standard', design = 'Auto', active = true, style } = props;
  const classes = useStyles(styles);
  const outerContainer = useRef(null);
  const controlMetaData = useRef([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState(null);
  const [blockerWidth, setBlockerWidth] = useState(0);

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
      <div className={classes.overflowButtonContainer}>
        <OverflowPopover lastVisibleIndex={lastVisibleIndex} contentClass={classes.popoverContent}>
          {children}
        </OverflowPopover>
      </div>
    );
  }, [classes.popoverContent, lastVisibleIndex, children]);

  const getToolbarDesign = () => {
    switch (design) {
      case 'Info':
        return classes.info;
      case 'Solid':
        return classes.solid;
      case 'Transparent':
        return classes.transparent;
      default:
        return '';
    }
  };

  const getActiveDesign = () => {
    if (active) {
      if (design === 'Info') {
        return classes.activeInfo;
      }
      return classes.active;
    }
    return '';
  };

  const toolbarStyleDesign = toolbarStyle === 'Clear' ? classes.clear : '';
  return (
    <div
      style={style}
      className={`${classes.outerContainer} ${getToolbarDesign()} ${getActiveDesign()} ${toolbarStyleDesign} `}
      ref={outerContainer}
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

Toolbar.displayName = 'Toolbar';
export { Toolbar };
