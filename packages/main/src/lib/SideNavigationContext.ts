import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import { createContext } from 'react';

interface ISideNavigationContext {
  openState: SideNavigationOpenState;
  selectedId: string;
  noIcons: boolean;
  onListItemSelected: () => void;
  expandedItems: string[];
  toggleExpandedItems: (id: string) => void;
}

const SideNavigationContext = createContext<ISideNavigationContext>({
  openState: SideNavigationOpenState.Expanded,
  selectedId: null,
  noIcons: false,
  onListItemSelected: () => {},
  toggleExpandedItems: () => {},
  expandedItems: []
});

export { ISideNavigationContext, SideNavigationContext };
