import { Splitter } from '@ui5/webcomponents-react/dist/Splitter';
import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import React, { ReactElement, useMemo } from 'react';
import { safeGetChildrenArray } from '../ObjectPage/ObjectPageUtils';

export const useConcatSplitterElements = (
  children: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[],
  width: string | number,
  height: string | number,
  orientation: 'horizontal' | 'vertical'
) => {
  return useMemo(() => {
    if (React.isValidElement(children)) {
      return children;
    }

    const childrenArray: ReactElement<SplitterElementPropTypes>[] = safeGetChildrenArray(children);
    let splitterCount = 0;
    childrenArray.forEach((child, index) => {
      const splitterElementChild = childrenArray[index + splitterCount];

      if (
        childrenArray.length - splitterCount - 1 > index &&
        (splitterElementChild.props.resizable || splitterElementChild.props.resizable === undefined) &&
        !(splitterElementChild.key as string).startsWith('splitter')
      ) {
        childrenArray.splice(
          index + splitterCount + 1,
          0,
          <Splitter key={`splitter${index}`} height={height} width={width} orientation={orientation} />
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
