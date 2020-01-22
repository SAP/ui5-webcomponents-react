import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { List } from '@ui5/webcomponents-react/lib/List';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React, { Children, cloneElement, FC, forwardRef, ReactNode, Ref, useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { sideNavigationStyles } from './SideNavigation.jss';

export interface SideNavigationProps extends CommonProps {
  openState?: SideNavigationOpenState;
  children?: ReactNode;
  footerItems?: ReactNode[];
  selectedId?: string | number;
  onItemSelect?: (event: Event) => void;
  onItemClick?: (event: Event) => void;
  /*
   * Flag whether to show icons or not. Will only take effect in <code>openState: Expanded</code>
   */
  noIcons?: boolean;
}

let lastFiredSelection = '';

const useStyles = createUseStyles<keyof ReturnType<typeof sideNavigationStyles>>(sideNavigationStyles, {
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

  const [internalSelectedId, setInternalSelectedId] = useState(selectedId);

  useEffect(() => {
    setInternalSelectedId(selectedId);
  }, [selectedId, setInternalSelectedId]);

  const sideNavigationClasses = StyleClassHelper.of(classes.sideNavigation);

  switch (openState) {
    case SideNavigationOpenState.Expanded: {
      sideNavigationClasses.put(classes.expanded);
      break;
    }
    case SideNavigationOpenState.Condensed: {
      sideNavigationClasses.put(classes.condensed);
      break;
    }
    case SideNavigationOpenState.Collapsed: {
      sideNavigationClasses.put(classes.collapsed);
      break;
    }
  }

  if (className) {
    sideNavigationClasses.put(className);
  }

  const onListItemSelected = useCallback(
    (e) => {
      const listItem = e.getParameter('item');
      onItemClick(
        Event.of(null, e, {
          selectedItem: listItem,
          selectedId: listItem.dataset.id
        })
      );

      if (lastFiredSelection === listItem.dataset.id) {
        return;
      }
      setInternalSelectedId(listItem.dataset.id);

      onItemSelect(
        Event.of(null, e, {
          selectedItem: listItem,
          selectedId: listItem.dataset.id
        })
      );
      lastFiredSelection = listItem.dataset.id;
    },
    [onItemSelect, onItemClick, setInternalSelectedId]
  );

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div ref={ref} className={sideNavigationClasses.valueOf()} style={style} title={tooltip} {...passThroughProps}>
      <List onItemClick={onListItemSelected}>
        {Children.map(children, (child: any) =>
          cloneElement(child, {
            openState: openState,
            selectedId: internalSelectedId,
            noIcons,
            onListItemSelected
          })
        )}
      </List>
      <span style={{ flexGrow: 1 }} />
      {footerItems.length > 0 && <span className={classes.footerItemsSeparator} />}
      {footerItems && (
        <List onItemClick={onListItemSelected}>
          {footerItems.map((item: any, index) =>
            cloneElement(item, {
              openState: openState,
              key: index,
              selectedId: internalSelectedId,
              noIcons,
              onListItemSelected
            })
          )}
        </List>
      )}
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
