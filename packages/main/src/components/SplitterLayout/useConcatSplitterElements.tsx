import { CssSizeVariables } from '@ui5/webcomponents-react-base';
import type { CSSProperties, ReactElement } from 'react';
import React, { Children, cloneElement, isValidElement, useMemo } from 'react';
import { Splitter } from '../Splitter/index.js';
import type { SplitterElementPropTypes } from '../SplitterElement/index.js';

interface ConcatSplitterElements {
  children: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[];
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  vertical: boolean;
}

export const useConcatSplitterElements = (concatSplitterElements: ConcatSplitterElements) => {
  return useMemo(() => {
    if (isValidElement(concatSplitterElements?.children)) {
      return concatSplitterElements?.children;
    }

    const childrenArray = Children.toArray(concatSplitterElements?.children).filter(
      isValidElement
    ) as ReactElement<SplitterElementPropTypes>[];

    let splitterCount = 0;
    const indicesWithSplitter = [];

    childrenArray.forEach((child, index) => {
      const splitterElementChild = childrenArray[index + splitterCount];
      if (
        childrenArray.length - splitterCount - 1 > index &&
        (splitterElementChild.props.resizable || splitterElementChild.props.resizable === undefined) &&
        splitterElementChild.props.minSize !== undefined
      ) {
        childrenArray.splice(
          index + splitterCount + 1,
          0,
          <Splitter
            key={`splitter${index}`}
            height={concatSplitterElements?.height}
            width={concatSplitterElements?.width}
            vertical={concatSplitterElements?.vertical}
          />
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
      if (size && size !== 'auto') {
        childrenArray[index] = cloneElement(childrenArray[index], {
          size: `calc(${size} - ${CssSizeVariables.ui5WcrSplitterSize})`
        });
      }
    });

    return childrenArray;
  }, [concatSplitterElements]);
};
