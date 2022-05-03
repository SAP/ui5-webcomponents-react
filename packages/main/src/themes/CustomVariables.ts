export enum CustomVariables {
  ObjectPageSectionTitleFontFamily = '--ui5wcr_ObjectPage_SectionTitleFontFamily'
}

export const CustomThemingParameters = new Proxy(CustomVariables, {
  // @ts-ignore
  get: (target: CustomVariables, prop: string): string => `var(${target[prop] as string})`
});
