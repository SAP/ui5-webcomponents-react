export enum ListGrowingMode {
  /**
   * Component's <code>load-more</code> is fired upon pressing a "More" button.
   * at the bottom.
   * @public
   * @type {Button}
   */
  Button = 'Button',

  /**
   * Component's <code>load-more</code> is fired upon scroll.
   * @public
   * @type {Scroll}
   */
  Scroll = 'Scroll',

  /**
   * Component's growing is not enabled.
   * @public
   * @type {None}
   */
  None = 'None'
}
