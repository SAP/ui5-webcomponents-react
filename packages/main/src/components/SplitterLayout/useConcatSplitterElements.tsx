import type { CSSProperties, ReactElement } from 'react';
import { Children, cloneElement, isValidElement, useMemo } from 'react';
import { Splitter } from '../Splitter/index.js';
import type { SplitterElementPropTypes } from '../SplitterElement/index.js';
import type { SplitterLayoutPropTypes } from './types.js';

interface ConcatSplitterElements {
  children: SplitterLayoutPropTypes['children'];
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  vertical: boolean;
  onResize: SplitterLayoutPropTypes['onResize'] | undefined;
}

export const useConcatSplitterElements = (concatSplitterElements: ConcatSplitterElements) => {
  return useMemo(() => {
    if (isValidElement(concatSplitterElements?.children)) {
      return concatSplitterElements?.children;
    }

    const childrenArray = Children.toArray(concatSplitterElements?.children).filter(
      isValidElement,
    ) as ReactElement<SplitterElementPropTypes>[];

    let splitterCount = 0;
    const indicesWithSplitter = [];

    childrenArray.forEach((child, index) => {
      const splitterElementChild = childrenArray[index + splitterCount];
      const splitterElementChildMinSize = Object.prototype.hasOwnProperty.call(splitterElementChild.props, 'minSize')
        ? splitterElementChild.props.minSize
        : 0;
      if (
        childrenArray.length - splitterCount - 1 > index &&
        (splitterElementChild.props.resizable || splitterElementChild.props.resizable === undefined) &&
        splitterElementChildMinSize !== undefined
      ) {
        childrenArray.splice(
          index + splitterCount + 1,
          0,
          <Splitter
            key={`splitter${index}`}
            height={concatSplitterElements?.height}
            width={concatSplitterElements?.width}
            vertical={concatSplitterElements?.vertical}
            onResize={concatSplitterElements?.onResize}
          />,
        );
        // -1 => prev element
        indicesWithSplitter.push(index + 1 + splitterCount - 1);
        ++splitterCount;
      } else if (index > 0 && splitterElementChild?.props.resizable === false) {
        const indexOfSplitter = childrenArray.findIndex((element) => element === splitterElementChild) - 1;
        if (childrenArray[indexOfSplitter].props.minSize === undefined) {
          childrenArray.splice(indexOfSplitter, 1);
        }
        indicesWithSplitter.pop();
        --splitterCount;
      }
    });

    indicesWithSplitter.forEach((index) => {
      const size = childrenArray[index]?.props?.size;
      const _size = typeof size === 'number' ? `${size}px` : size;
      if (size && size !== 'auto') {
        childrenArray[index] = cloneElement(childrenArray[index], {
          size: `calc(${_size} - var(--_ui5wcr-SplitterSize))`,
        });
      }
    });

    return childrenArray;
  }, [concatSplitterElements]);
};
