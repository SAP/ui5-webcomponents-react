import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5TreeDomRef extends Ui5DomRef {
  /**
   * Perform Depth-First-Search walk on the tree and run a callback on each node
   * @param {(treeNode: HTMLElement, level: number) => void} callback - function to execute on each node of the tree with 2 arguments: the node and the level
   */
  walk: (callback: (treeNode: HTMLElement, level: number) => void) => void;
}
