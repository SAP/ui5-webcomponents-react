import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { SplitterElementPropTypes } from '@ui5/webcomponents-react/dist/SplitterElement';
import React, { ReactElement, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { ReflexSplitter } from 'react-reflex';
import { safeGetChildrenArray } from '../ObjectPage/ObjectPageUtils';
import { styles } from './SplitterLayout.jss';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

const Splitter = (key: number, height: string | number, orientation: 'horizontal' | 'vertical') => {
  const props = { key, height, orientation };
  const classes = useStyles(props);

  return (
    <ReflexSplitter
      style={{
        width: orientation === 'vertical' ? '16px' : height,
        height: orientation === 'vertical' ? height : '16px',
        border: 'none',
        backgroundColor: ThemingParameters.sapShell_Background
      }}
      key={`splitter${key}`}
    >
      <Icon className={classes.gripIcon} name={orientation === 'vertical' ? 'vertical-grip' : 'horizontal-grip'} />
    </ReflexSplitter>
  );
};

export const useConcatSplitterElements = (
  children: ReactElement<SplitterElementPropTypes> | ReactElement<SplitterElementPropTypes>[],
  height: string | number,
  orientation: 'horizontal' | 'vertical'
) => {
  return useMemo(() => {
    if (React.isValidElement(children)) {
      return children;
    }

    const childrenArray = safeGetChildrenArray(children);
    let splitterCount = 0;
    childrenArray.forEach((child, index) => {
      const splitterElementChild = childrenArray[index + splitterCount];
      if (
        childrenArray.length - splitterCount - 1 > index &&
        (splitterElementChild.props.resizable || splitterElementChild.props.resizable === undefined) &&
        !splitterElementChild.key.startsWith('splitter')
      ) {
        childrenArray.splice(index + splitterCount + 1, 0, Splitter(index, height, orientation));
        ++splitterCount;
      } else if (index > 0 && splitterElementChild?.props.resizable === false) {
        const indexOfSplitter = childrenArray.findIndex((element) => element === splitterElementChild) - 1;
        if (childrenArray[indexOfSplitter].key.startsWith('splitter')) {
          childrenArray.splice(indexOfSplitter, 1);
        }
        --splitterCount;
      }
    });
    return childrenArray;
  }, [children, height, orientation]);
};
