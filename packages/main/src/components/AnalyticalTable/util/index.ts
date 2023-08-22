import type { CSSProperties, RefObject } from 'react';
import { TextAlign, VerticalAlign } from '../../../enums/index.js';

// copied from https://github.com/tannerlinsley/react-table/blob/f97fb98509d0b27cc0bebcf3137872afe4f2809e/src/utils.js#L320-L347 (13. Jan 2021)
const reOpenBracket = /\[/g;
const reCloseBracket = /]/g;

function makePathArray(obj) {
  return (
    flattenDeep(obj)
      // remove all periods in parts
      .map((d) => String(d).replace('.', '_'))
      // join parts using period
      .join('.')
      // replace brackets with periods
      .replace(reOpenBracket, '.')
      .replace(reCloseBracket, '')
      // split it back out on periods
      .split('.')
  );
}

function flattenDeep(arr, newArr = []) {
  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

// copied from https://github.com/tannerlinsley/react-table/blob/master/src/utils.js#L169-L191 (13.Jan 2021)
const pathObjCache = new Map();

export function getBy(obj, path, def) {
  if (!path) {
    return obj;
  }
  const cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

  const pathObj =
    pathObjCache.get(cacheKey) ||
    (() => {
      const pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    })();
  let val;

  try {
    val = pathObj.reduce((cursor, pathPart) => {
      return cursor[pathPart];
    }, obj);
  } catch (e) {
    // continue regardless of error
  }
  return typeof val !== 'undefined' ? val : def;
}

export const tagNamesWhichShouldNotSelectARow = new Set([
  'UI5-AVATAR',
  'UI5-BUTTON',
  'UI5-CALENDAR',
  'UI5-CHECKBOX',
  'UI5-COLOR-PICKER',
  'UI5-COMBOBOX',
  'UI5-DATE-PICKER',
  'UI5-DATERANGE-PICKER',
  'UI5-DATETIME-PICKER',
  'UI5-DURATION-PICKER',
  'UI5-FILE-UPLOADER',
  'UI5-ICON',
  'UI5-INPUT',
  'UI5-LINK',
  'UI5-MULTI-COMBOBOX',
  'UI5-MULTI-INPUT',
  'UI5-RADIO-BUTTON',
  'UI5-RANGE-SLIDER',
  'UI5-RATING-INDICATOR',
  'UI5-SEGMENTED-BUTTON',
  'UI5-SELECT',
  'UI5-SLIDER',
  'UI5-STEP-INPUT',
  'UI5-SWITCH',
  'UI5-TEXT-AREA',
  'UI5-TIME-PICKER',
  'UI5-TOGGLE-BUTTON',
  'UI5-UPLOAD-COLLECTION'
]);

export const resolveCellAlignment = (column) => {
  const style: CSSProperties = {};

  switch (column.hAlign) {
    case TextAlign.Begin:
      style.justifyContent = 'flex-start';
      style.textAlign = 'start';
      break;
    case TextAlign.Center:
      style.justifyContent = 'center';
      style.textAlign = 'center';
      break;
    case TextAlign.End:
      style.justifyContent = 'flex-end';
      style.textAlign = 'end';
      break;
    case TextAlign.Left:
      style.justifyContent = 'left';
      style.textAlign = 'left';
      break;
    case TextAlign.Right:
      style.justifyContent = 'right';
      style.textAlign = 'right';
      break;
    case TextAlign.Initial:
      style.justifyContent = 'initial';
      style.textAlign = 'initial';
      break;
  }
  switch (column.vAlign) {
    case VerticalAlign.Bottom:
      style.alignItems = 'flex-end';
      break;
    case VerticalAlign.Middle:
      style.alignItems = 'center';
      break;
    case VerticalAlign.Top:
      style.alignItems = 'flex-start';
      break;
  }
  return style;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getRowHeight(rowHeight: number, tableRef: RefObject<any>) {
  if (rowHeight) {
    return rowHeight;
  }

  if (typeof document !== 'undefined') {
    return parseInt(
      getComputedStyle(tableRef.current ?? document.body).getPropertyValue('--_ui5wcr-AnalyticalTableRowHeight') || '44'
    );
  }

  // fallback for SSR
  return 44;
}

export function getSubRowsByString(subRowsKey, row) {
  if (!subRowsKey.includes('.')) {
    return row.subRows || row[subRowsKey];
  } else {
    return subRowsKey.split('.').reduce((acc, cur) => acc?.[cur], row);
  }
}

// copied from https://github.com/TanStack/table/blob/06703a56890122cedf1b2fa4b82982999537774e/src/plugin-hooks/useResizeColumns.js#L286-L296 (22. Aug 2023)
export function getLeafHeaders(header) {
  const leafHeaders = [];
  const recurseHeader = (header) => {
    if (header.columns && header.columns.length) {
      header.columns.map(recurseHeader);
    }
    leafHeaders.push(header);
  };
  recurseHeader(header);
  return leafHeaders;
}
