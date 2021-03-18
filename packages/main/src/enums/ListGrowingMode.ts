export enum ListGrowingMode {
  /**
   * List's <code>onLoadMore</code> is fired upon pressing a "More" button.
   * at the bottom.
   * @public
   * @type {Button}
   */
  Button = 'Button',

  /**
   * List's <code>onLoadMore</code> is fired upon scroll.
   * @public
   * @type {Scroll}
   */
  Scroll = 'Scroll',

  /**
   * List's growing is not enabled.
   * @public
   * @type {None}
   */
  None = 'None'
}
