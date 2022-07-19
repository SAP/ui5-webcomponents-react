export enum CustomVariables {
  ObjectPageSectionTitleFontFamily = '--ui5wcr_ObjectPage_SectionTitleFontFamily',
  ObjectPageSectionBorderTop = '--ui5wcr_ObjectPage_SectionBorderTop',
  ObjectPageSubSectionBackgroundColor = '--ui5wcr_ObjectPage_SubSectionBackgroundColor',
  ObjectPageSubSectionBorderRadius = '--ui5wcr_ObjectPage_SubSectionBorderRadius'
}

export const CustomThemingParameters = new Proxy(CustomVariables, {
  get: (target, prop: string): string => `var(${target[prop] as string})`
});
