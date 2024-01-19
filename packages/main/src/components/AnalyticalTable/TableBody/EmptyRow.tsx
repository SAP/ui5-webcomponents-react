import type { VirtualItem } from '@tanstack/react-virtual';
import type { ReactNode } from 'react';

export const EmptyRow = ({
  virtualRow,
  className,
  children
}: {
  virtualRow: VirtualItem;
  className: string;
  children?: ReactNode;
}) => {
  return (
    <div
      data-empty-row="true"
      key={`empty_row_${virtualRow.index}`}
      className={className}
      style={{
        height: `${virtualRow.size}px`,
        transform: `translateY(${virtualRow.start}px)`,
        boxSizing: 'border-box'
      }}
    >
      {children}
    </div>
  );
};
