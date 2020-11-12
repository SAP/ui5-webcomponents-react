export enum ObjectPageMode {
  /**
   * All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page.
   * Selecting tabs will scroll to the corresponding section.
   */
  Default = 'Default',
  /**
   * All `ObjectPageSections` are displayed on separate pages.
   * Selecting tabs will lead to the corresponding page.
   */
  IconTabBar = 'IconTabBar'
}
