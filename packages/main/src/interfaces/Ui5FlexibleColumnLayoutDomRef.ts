// @generated

import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5FlexibleColumnLayoutDomRef extends Ui5DomRef {
  /**
   * Returns the current column layout, based on both the <code>layout</code> property and the screen size. <br><br> <b>For example:</b> ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc, where the numbers represents the width of the start, middle and end columns.
   */
  readonly columnLayout: unknown[];

  /**
   * Returns if the <code>end</code> column is visible.
   */
  readonly endColumnVisible: boolean;

  /**
   * Returns if the <code>middle</code> column is visible.
   */
  readonly midColumnVisible: boolean;

  /**
   * Returns if the <code>start</code> column is visible.
   */
  readonly startColumnVisible: boolean;

  /**
   * Returns the number of currently visible columns.
   */
  readonly visibleColumns: number;
}
