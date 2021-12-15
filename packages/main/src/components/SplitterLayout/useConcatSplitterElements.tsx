import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import React, { cloneElement, CSSProperties, ReactElement, useMemo } from 'react';
import { safeGetChildrenArray } from '../ObjectPage/ObjectPageUtils';
import { Splitter } from '../Splitter';

export const useConcatSplitterElements = (
  children: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[],
  width: CSSProperties['width'],
  height: CSSProperties['height'],
  vertical: boolean
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
          <Splitter aria-label={'Resizer'} key={`splitter${index}`} height={height} width={width} vertical={vertical} />
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

    if (children.length !== 0) {
      const indexOfLastElement = childrenArray?.length - 1;
      childrenArray[indexOfLastElement] = cloneElement(
        childrenArray?.[indexOfLastElement],
        Object.assign({}, childrenArray?.[indexOfLastElement]?.props, {
          style: {
            flex: '1 0 auto',
            ...childrenArray?.[indexOfLastElement]?.props?.style
          }
        })
      );
    }

    return childrenArray;
  }, [children, width, height, vertical]);
};
