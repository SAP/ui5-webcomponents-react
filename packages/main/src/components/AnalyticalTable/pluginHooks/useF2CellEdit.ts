import type { Ui5DomRef } from '@ui5/webcomponents-react-base';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import type { FocusEventHandler, KeyboardEventHandler } from 'react';
import { useCallback } from 'react';
import { INCLUDES_X } from '../../../i18n/i18n-defaults.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

//todo: how to export
export const useEditModeCallbackRef = (props) => {
  const cellContentTabIndex =
    props.state.cellContentTabIndex === -1 || props.state.cellContentTabIndex === undefined ? '-1' : '0';
  return useCallback(
    (node: HTMLElement) => {
      if (node) {
        if (node.tagName.startsWith('UI5')) {
          void (node as Ui5DomRef)
            .getFocusDomRefAsync()
            .then((focusNode) => focusNode.setAttribute('tabindex', cellContentTabIndex))
            .catch(() => {
              // fail silently
            });
        } else {
          node.setAttribute('tabindex', cellContentTabIndex);
        }
      }
    },
    [cellContentTabIndex],
  );
};

//todo: memoize everything - getCellProps is called often
export const useF2CellEdit = (hooks: ReactTableHooks) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const setCellProps = useCallback(
    (props, { cell, instance }: { cell: Record<string, any>; instance: TableInstance }) => {
      const { dispatch } = instance;
      const { interactiveElementName } = cell.column;
      const inputName =
        typeof interactiveElementName === 'function' ? interactiveElementName(cell) : interactiveElementName;
      const ariaLabel =
        (interactiveElementName ? i18nBundle.getText(INCLUDES_X, inputName) : '') + ' ' + props['aria-label'];

      const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === 'F2') {
          e.preventDefault();
          if (e.currentTarget === e.target && interactiveElementName) {
            const interactiveElement = findFirstFocusableInside(e.target as HTMLElement);
            if (interactiveElement) {
              dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: 0 });
              e.currentTarget.tabIndex = -1;
              requestAnimationFrame(() => {
                interactiveElement.focus();
              });
            }
          }
          if (e.currentTarget !== e.target) {
            dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
            e.currentTarget.tabIndex = 0;
            e.currentTarget.focus();
          }
        }
      };

      const handleFocus: FocusEventHandler<HTMLDivElement> = (e) => {
        if (typeof props.onFocus === 'function') {
          props.onFocus(e);
        }

        if (e.currentTarget !== e.target) {
          dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: 0 });
        } else {
          dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
        }
      };

      return [props, { onKeyDown: handleKeyDown, onFocus: handleFocus, 'aria-label': ariaLabel }];
    },
    [i18nBundle],
  );

  hooks.getCellProps.push(setCellProps);
  hooks.stateReducers.push(stateReducer);
};
useF2CellEdit.pluginName = 'useF2CellEdit';

const stateReducer: TableInstance['stateReducer'] = (state, action, _prevState) => {
  const { payload, type } = action;

  if (type === 'CELL_CONTENT_TAB_INDEX') {
    return { ...state, cellContentTabIndex: payload };
  }
  return state;
};

function findFirstFocusableInside(element: HTMLElement) {
  if (!element) return null;

  function recursiveFindInteractiveElement(el) {
    for (const child of el.children) {
      const style = getComputedStyle(child);
      if (child.disabled || style.display === 'none' || style.visibility === 'hidden') {
        continue;
      }

      const focusableSelectors = [
        'a[href]',
        'button',
        'input',
        'textarea',
        'select',
        '[tabindex]:not([tabindex="-1"])',
      ];

      if (child.matches(focusableSelectors.join(','))) {
        return child;
      }

      if (child.shadowRoot) {
        const shadowFocusable = recursiveFindInteractiveElement(child.shadowRoot);
        if (shadowFocusable) return shadowFocusable;
      }

      const nestedFocusable = recursiveFindInteractiveElement(child);
      if (nestedFocusable) return nestedFocusable;
    }
    return null;
  }

  return recursiveFindInteractiveElement(element);
}
