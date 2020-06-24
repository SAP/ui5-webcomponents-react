import { createContext } from 'react';

interface ISideNavigationContext {
  openState: boolean;
  selectedId: string;
  noIcons: boolean;
  onListItemSelected: () => void;
  expandedItems: string[];
  toggleExpandedItems: (id: string) => void;
}

const SideNavigationContext = createContext<ISideNavigationContext>(null);

export { ISideNavigationContext, SideNavigationContext };
