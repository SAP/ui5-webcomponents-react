// @generated

import { ReactNode } from 'react';
import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5ShellBarDomRef extends Ui5DomRef {
  /**
   * Returns the <code>copilot</code> DOM ref.
   */
  readonly copilotDomRef: ReactNode;

  /**
   * Returns the <code>logo</code> DOM ref.
   */
  readonly logoDomRef: ReactNode;

  /**
   * Returns the <code>notifications</code> icon DOM ref.
   */
  readonly notificationsDomRef: ReactNode;

  /**
   * Returns the <code>overflow</code> icon DOM ref.
   */
  readonly overflowDomRef: ReactNode;

  /**
   * Returns the <code>product-switch</code> icon DOM ref.
   */
  readonly productSwitchDomRef: ReactNode;

  /**
   * Returns the <code>profile</code> icon DOM ref.
   */
  readonly profileDomRef: ReactNode;
  /**
   * Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event
   *
   */
  closeOverflow: () => void;
}
