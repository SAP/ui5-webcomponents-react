import type { Row, RowData } from '@tanstack/react-table';
import type { HTMLAttributes } from 'react';
import type { FeaturesList } from '../types/index.js';
import type { FeatureRowProps } from './rowProps.js';
import { rowProps } from './rowProps.js';

type RowProps = Partial<ReturnType<FeatureRowProps[keyof FeatureRowProps]>>;

/**
 * Creates an object of (merged) React props by features.
 */
export function createRowProps(features: FeaturesList, row: Row<RowData>): RowProps {
  const propsList: HTMLAttributes<HTMLDivElement>[] = features
    .map((feature) => rowProps[feature]?.(row))
    .filter(Boolean);

  if (!propsList.length) {
    return {};
  }

  if (propsList.length === 1) {
    return propsList[0];
  }

  const mergedProps: HTMLAttributes<HTMLDivElement> = {};
  const classNames: string[] = [];

  for (const props of propsList) {
    for (const prop of Object.keys(props)) {
      const next = props[prop];
      const prev = mergedProps[prop];
      if (typeof prev === 'function' && typeof next === 'function') {
        // merge handlers of identical event
        mergedProps[prop] = (e) => {
          prev(e);
          next(e);
        };
      } else if (typeof next === 'function') {
        // single handler
        mergedProps[prop] = next;
        //todo: extend this for other props if required
      } else if (prop === 'className' && typeof next === 'string') {
        // add className to merge later
        classNames.push(next);
      } else {
        mergedProps[prop] = next;
      }
    }
  }

  if (classNames.length) {
    mergedProps.className = classNames.join(' ');
  }
  return mergedProps;
}
