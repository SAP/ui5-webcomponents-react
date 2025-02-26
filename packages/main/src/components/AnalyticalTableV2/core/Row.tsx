import type { CommonProps } from '@ui5/webcomponents-react';
import { clsx } from 'clsx';
import { classNames } from '../AnalyticalTableV2.module.css.js';

interface RowProps extends CommonProps {
  //todo children type
  children: any;
  startIndex: number;
}

export function Row(props: RowProps) {
  const { children, className, startIndex, ...rest } = props;
  return (
    <div role="row" className={clsx(classNames.row, className)} aria-rowindex={startIndex + 1} {...rest}>
      {children}
    </div>
  );
}

Row.displayName = 'AnalyticalTableRow';
