// import { DocsContext } from '@storybook/addon-docs/blocks';
import { useMemo } from 'react';
// @ts-expect-error: storybook can handle this
import cemAi from './custom-element-manifests/ai.json';
// @ts-expect-error: storybook can handle this
import cemFiori from './custom-element-manifests/fiori.json';
// @ts-expect-error: storybook can handle this
import cemMain from './custom-element-manifests/main.json';

export const isChromatic = process.env.STORYBOOK_ENV === 'chromatic';

export const MAPPED_THEMES = [
  { value: 'sap_horizon', title: 'Morning Horizon (Light)' },
  { value: 'sap_horizon_dark', title: 'Evening Horizon (Dark)' },
  { value: 'sap_horizon_hcb', title: 'Horizon High Contrast Black' },
  { value: 'sap_horizon_hcw', title: 'Horizon High Contrast White' },
  { value: 'sap_fiori_3', title: 'Quartz Light' },
  { value: 'sap_fiori_3_dark', title: 'Quartz Dark' },
  { value: 'sap_fiori_3_hcb', title: 'Quartz High Contrast Black' },
  { value: 'sap_fiori_3_hcw', title: 'Quartz High Contrast White' },
];

export const excludePropsForAbstract = ['className', 'style'];

export function useGetCem() {
  return {};
  //todo: context is not available anymore like this
  // const docsContext = useContext(DocsContext);

  // @ts-expect-error: private but existing
  const { attachedCSFFiles } = docsContext;

  const storyTagsSet = new Set<string>();

  if (attachedCSFFiles?.size) {
    Array.from(attachedCSFFiles).forEach((cur) => {
      // @ts-expect-error: private but existing
      const tags: string[] | undefined = cur?.meta?.tags;
      if (tags?.length) {
        tags.forEach((tag) => {
          storyTagsSet.add(tag);
        });
      }
    });
  }

  const storyTags = storyTagsSet?.size ? Array.from(storyTagsSet) : [];
  const packageAnnotation = storyTags?.find((tag) => tag.startsWith('package:'));
  switch (packageAnnotation) {
    case 'package:@ui5/webcomponents':
      return cemMain;
    case 'package:@ui5/webcomponents-fiori':
      return cemFiori;
    case 'package:@ui5/webcomponents-ai':
      return cemAi;
  }
}

const replaceSubComps = {
  ListItemBase: ['ListItemStandard', 'ListItemCustom', 'ListItemGroup'],
  InputSuggestionItem: ['SuggestionItem', 'SuggestionItemGroup'],
  NotificationListItemBase: ['NotificationListItem'],
  ToolbarItem: ['ToolbarSeparator', 'ToolbarSpacer', 'ToolbarButton', 'ToolbarSelect', 'ToolbarSelectOption'],
  TreeItemBase: ['TreeItem', 'TreeItemCustom'],
  AvatarGroupItem: ['Avatar'],
  TableFeature: ['TableGrowing', 'TableSelection', 'TableVirtualizer', 'TableSelectionMulti', 'TableSelectionSingle'],
  SideNavigationItemBase: ['SideNavigationItem', 'SideNavigationGroup', 'SideNavigationSubItem'],
  TableRowActionBase: ['TableRowAction', 'TableRowActionNavigation'],
  TableHeaderCellActionBase: ['TableHeaderCellActionAI'],
};

function findSubComponentsRecursively(moduleName: string, cem: any): string[] {
  const subComponentsSet = new Set<string>();

  const recursiveFind = (moduleName: string) => {
    const module = cem?.modules.find((module: any) => module.path === `dist/${moduleName}.js`);
    if (!module) return;

    module.declarations.forEach((decl: any) => {
      (decl.slots || []).forEach((slot: any) => {
        (slot._ui5type?.references || []).forEach((ref: any) => {
          const name = ref.name.replace(/^I([A-Z])/g, '$1');
          const subComps = replaceSubComps[name] || [name];
          subComps.forEach((subComp: string) => {
            if (!subComponentsSet.has(subComp)) {
              subComponentsSet.add(subComp);
              recursiveFind(subComp);
            }
          });
        });
      });
    });
  };

  recursiveFind(moduleName);

  return Array.from(subComponentsSet);
}

export function useGetSubComponentsOfModule(moduleName: string) {
  const cem = useGetCem(); // Assuming useGetCem() is defined elsewhere
  return useMemo(() => {
    return findSubComponentsRecursively(moduleName, cem);
  }, [cem, moduleName]);
}
