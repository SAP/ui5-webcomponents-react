import { Splitter } from '@ui5/webcomponents-react/dist/Splitter';
import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import React, { ReactElement, useMemo } from 'react';
import { safeGetChildrenArray } from '../ObjectPage/ObjectPageUtils';

const calculateAutoSizes = (childrenArray: ReactElement<SplitterElementPropTypes>[], width: string) => {
  const childrenWithouSizeCount =
    childrenArray.filter((child) => !child?.props?.size || child?.props?.size === 'auto')?.length ?? 0;
  const childrenWithSizes = childrenArray
    .map((child) => {
      if (child.props?.size && child.props?.size.includes('%')) {
        const absoluteSize = child.props?.size.replace('%', '');
        return `calc(${width} * (${absoluteSize} / 100))`;
      }
      return child.props?.size;
    })
    ?.filter((el) => el && el !== 'auto');
  const childrenWithSizeTotal =
    childrenWithSizes.length !== 0
      ? childrenWithSizes.reduce((total, current) => `calc(${total} + ${current})`)
      : '0px';
  return `calc((${width} - ${childrenWithSizeTotal}) / ${childrenWithouSizeCount})`;
};

export const useConcatSplitterElements = (
  children: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[],
  width: string,
  height: string,
  orientation: 'horizontal' | 'vertical'
) => {
  return useMemo(() => {
    if (React.isValidElement(children)) {
      return children;
    }

    const childrenArray: ReactElement<SplitterElementPropTypes>[] = safeGetChildrenArray(children);
    let splitterCount = 0;
    let nextSplitterPosition = '0px';
    const remainingSizePerChild = calculateAutoSizes(childrenArray, width);

    childrenArray.forEach((child, index) => {
      const splitterElementChild = childrenArray[index + splitterCount];
      nextSplitterPosition = `calc(${
        splitterElementChild?.props?.size && splitterElementChild?.props?.size !== 'auto'
          ? splitterElementChild?.props?.size
          : remainingSizePerChild
      } + ${nextSplitterPosition})`;
      if (
        childrenArray.length - splitterCount - 1 > index &&
        (splitterElementChild.props.resizable || splitterElementChild.props.resizable === undefined) &&
        !(splitterElementChild.key as string).startsWith('splitter')
      ) {
        childrenArray.splice(
          index + splitterCount + 1,
          0,
          <Splitter
            key={`splitter${index}`}
            height={height}
            width={width}
            orientation={orientation}
            position={nextSplitterPosition}
          />
        );
        ++splitterCount;
      } else if (index > 0 && splitterElementChild?.props.resizable === false) {
        const indexOfSplitter = childrenArray.findIndex((element) => element === splitterElementChild) - 1;
        if ((childrenArray[indexOfSplitter].key as string).startsWith('splitter')) {
          childrenArray.splice(indexOfSplitter, 1);
        }
        --splitterCount;
      }
    });

    return childrenArray;
  }, [children, width, height, orientation]);
};
