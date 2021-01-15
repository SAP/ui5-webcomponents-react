import { defaultOrderByFn } from 'react-table';

export const orderByFn = (rows, functions, directions) => {
  const wrapSortFn = (sortFn, index) => {
    const desc = directions[index] === false || directions[index] === 'desc';

    return (rowA, rowB) => {
      if (rowA.original?.emptyRow && !rowB.original?.emptyRow) {
        return desc ? -1 : 1;
      }
      if (!rowA.original?.emptyRow && rowB.original?.emptyRow) {
        return desc ? 1 : -1;
      }
      if (rowA.original?.emptyRow && rowB.original?.emptyRow) {
        return 0;
      }
      return sortFn(rowA, rowB);
    };
  };

  const wrappedSortfunctions = functions.map(wrapSortFn);

  return defaultOrderByFn(rows, wrappedSortfunctions, directions);
};

// copied from https://github.com/tannerlinsley/react-table/blob/f97fb98509d0b27cc0bebcf3137872afe4f2809e/src/utils.js#L320-L347 (13. Jan 2021)
const reOpenBracket = /\[/g;
const reCloseBracket = /\]/g;

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
