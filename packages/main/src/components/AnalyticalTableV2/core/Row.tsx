import type { CommonProps } from '@ui5/webcomponents-react';
import { clsx } from 'clsx';
import { classNames } from '../AnalyticalTableV2.module.css.js';

interface RowProps extends CommonProps {
  //todo children type
  children: any;
}

export function Row(props: RowProps) {
  const { children, className, ...rest } = props;
  return (
    <div role="row" className={clsx(classNames.row, className)} {...rest}>
      {children}
    </div>
  );
}

Row.displayName = 'AnalyticalTableRow';
