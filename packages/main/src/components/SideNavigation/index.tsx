import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { List } from '@ui5/webcomponents-react/lib/List';
import { SideNavigationContext } from '@ui5/webcomponents-react/lib/SideNavigationContext';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React, {
  Children,
  cloneElement,
  FC,
  forwardRef,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { sideNavigationStyles } from './SideNavigation.jss';

export interface SideNavigationProps extends CommonProps {
  openState?: SideNavigationOpenState;
  children?: ReactNode;
  footerItems?: ReactNode[];
  selectedId?: string | number;
  onItemSelect?: (event: CustomEvent<{ selectedItem: HTMLElement; selectedId: string | number }>) => void;
  onItemClick?: (
    event: CustomEvent<{
      selectedItem: HTMLElement;
      selectedId: string | number;
      hasChildren: boolean;
      isExpanded: boolean;
    }>
  ) => void;
  /*
   * Flag whether to show icons or not. Will only take effect in <code>openState: Expanded</code>
   */
  noIcons?: boolean;
}

let lastFiredSelection = '';

const useStyles = createComponentStyles(sideNavigationStyles, {
  name: 'SideNavigation'
});

/**
 * <code>import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';</code>
 */
const SideNavigation: FC<SideNavigationProps> = forwardRef((props: SideNavigationProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    openState,
    footerItems,
    selectedId,
    onItemSelect,
    onItemClick,
    noIcons,
    style,
    className,
    tooltip
  } = props;

  const classes = useStyles();

  const sideNavigationRef = useConsolidatedRef<any>(ref);

  const [internalSelectedId, setInternalSelectedId] = useState(selectedId);
  const [expandedItems, setExpandedItems] = useState(() => Children.map(children, (child) => child.props.id));
  const selectionTimeout = useRef(null);

  useEffect(() => {
    sideNavigationRef.current.expandItem = (id) => {
      setExpandedItems((items) => Array.from(new Set([items, id])));
    };
    sideNavigationRef.current.collapseItem = (id) => {
      setExpandedItems((items) => items.filter((item) => item !== id));
    };

    sideNavigationRef.current.toggleItem = (id) => {
      setExpandedItems((items) => {
        if (items.includes(id)) {
          return items.filter((item) => item !== id);
        }
        return Array.from(new Set([items, id]));
      });
    };
  }, [sideNavigationRef.current, setExpandedItems]);

  useEffect(() => {
    setInternalSelectedId(selectedId);
  }, [selectedId, setInternalSelectedId]);

  const sideNavigationClasses = StyleClassHelper.of(classes.sideNavigation).putIfPresent(className);

  switch (openState) {
    case SideNavigationOpenState.Expanded: {
      sideNavigationClasses.put(classes.expanded);
      break;
    }
    case SideNavigationOpenState.Condensed: {
      sideNavigationClasses.put(classes.condensed);
      break;
    }
  }

  const toggleExpandedItems = useCallback(
    (id) => {
      cancelAnimationFrame(selectionTimeout.current);
      setExpandedItems((items) => {
        if (items.includes(id)) {
          return items.filter((item) => item !== id);
        }
        return Array.from(new Set([...items, id]));
      });
    },
    [setExpandedItems]
  );

  const onListItemSelected = useCallback(
    (e) => {
      selectionTimeout.current = requestAnimationFrame(() => {
        const listItem = e.detail.item;
        onItemClick(
          enrichEventWithDetails(e, {
            selectedItem: listItem,
            selectedId: listItem.dataset.id,
            hasChildren: listItem.hasAttribute('data-has-children'),
            isExpanded: listItem.hasAttribute('data-is-expanded')
          })
        );

        if (lastFiredSelection === listItem.dataset.id) {
          return;
        }
        setInternalSelectedId(listItem.dataset.id);

        onItemSelect(
          enrichEventWithDetails(e, {
            selectedItem: listItem,
            selectedId: listItem.dataset.id
          })
        );
        lastFiredSelection = listItem.dataset.id;
        selectionTimeout.current = null;
      });
    },
    [onItemSelect, onItemClick, setInternalSelectedId, setExpandedItems, toggleExpandedItems, selectionTimeout]
  );

  const passThroughProps = usePassThroughHtmlProps(props, ['onItemSelect', 'onItemClick']);

  const contextValue = {
    openState,
    selectedId: internalSelectedId,
    noIcons,
    onListItemSelected,
    expandedItems: expandedItems,
    toggleExpandedItems
  };

  return (
    <div
      ref={sideNavigationRef}
      className={sideNavigationClasses.className}
      style={style}
      title={tooltip}
      {...passThroughProps}
    >
      <SideNavigationContext.Provider value={contextValue}>
        <List onItemClick={onListItemSelected}>{children}</List>
        <span style={{ flexGrow: 1 }} />
        {footerItems.length > 0 && <span className={classes.footerItemsSeparator} />}
        {footerItems && (
          <List onItemClick={onListItemSelected}>
            {footerItems.map((item: any, index) =>
              cloneElement(item, {
                key: index
              })
            )}
          </List>
        )}
      </SideNavigationContext.Provider>
    </div>
  );
});

SideNavigation.displayName = 'SideNavigation';

SideNavigation.defaultProps = {
  openState: SideNavigationOpenState.Expanded,
  footerItems: [],
  selectedId: null,
  onItemClick: () => {},
  onItemSelect: () => {}
};

export { SideNavigation };
