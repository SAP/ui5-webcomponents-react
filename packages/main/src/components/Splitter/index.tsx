import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import React, { forwardRef, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from '../SplitterLayout/SplitterLayout.jss';

const useStyles = createUseStyles(styles, { name: 'SplitterLayout' });

export interface SplitterPropTypes {
  height: string | number;
  width: string | number;
  orientation: 'horizontal' | 'vertical';
}

const Splitter = forwardRef((props: SplitterPropTypes, ref: Ref<HTMLDivElement>) => {
  const { orientation } = props;
  const classes = useStyles(props);

  const gripIconClass = orientation === 'vertical' ? classes.gripIconVertical : classes.gripIconHorizontal;
  const splitterClass = orientation === 'vertical' ? classes.splitterVertical : classes.splitterHorizontal;

  return (
    <div ref={ref} className={splitterClass}>
      <Icon className={gripIconClass} name={orientation === 'vertical' ? 'vertical-grip' : 'horizontal-grip'} />
    </div>
  );
});

Splitter.displayName = 'Index';

export { Splitter };
