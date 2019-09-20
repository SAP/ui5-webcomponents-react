import { Event, StyleClassHelper } from '@ui5/webcomponents-react-base';
import { List } from '@ui5/webcomponents-react/lib/List';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React, { Children, cloneElement, FC, forwardRef, ReactNode, Ref, useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { sideNavigationStyles } from './SideNavigation.jss';

export interface SideNavigationProps extends CommonProps {
  openState?: SideNavigationOpenState;
  children?: ReactNode;
  footerItems?: ReactNode[];
  selectedId?: string | number;
  onItemSelect?: (event: Event) => void;
  noIcons?: boolean;
}

let lastFiredSelection = '';

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof sideNavigationStyles>>(sideNavigationStyles, {
  name: 'SideNavigation'
});

const SideNavigation: FC<SideNavigationProps> = forwardRef((props: SideNavigationProps, ref: Ref<HTMLDivElement>) => {
  const { children, openState, footerItems, selectedId, onItemSelect, noIcons, style, className } = props;

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
      if (listItem.dataset.hasChildren === 'true') {
        return;
      }

      if (lastFiredSelection === listItem.dataset.id) {
        return;
      }

      setInternalSelectedId(listItem.dataset.id);
      onItemSelect(
        Event.of(null, e, {
          selectedItem: listItem
        })
      );
      lastFiredSelection = listItem.dataset.id;
    },
    [onItemSelect, setInternalSelectedId]
  );

  return (
    <div ref={ref} className={sideNavigationClasses.valueOf()} style={style}>
      <List onItemClick={onListItemSelected}>
        {Children.map(children, (child: any) =>
          cloneElement(child, {
            openState: openState,
            selectedId: internalSelectedId,
            noIcons
          })
        )}
      </List>
      <span style={{ flexGrow: 1 }} />
      {footerItems.length && <span className={classes.footerItemsSeparator} />}
      {footerItems && (
        <List onItemClick={onListItemSelected}>
          {footerItems.map((item: any, index) =>
            cloneElement(item, {
              openState: openState,
              key: index,
              selectedId: internalSelectedId,
              noIcons
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
  selectedId: null
};

export { SideNavigation };
