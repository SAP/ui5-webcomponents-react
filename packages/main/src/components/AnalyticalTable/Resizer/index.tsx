import { useMemo, useCallback } from 'react';
import React from 'react';

const Resizer = ({ children, className, ...rest }) => {
  const classNames = useMemo(() => {
    let name = 'rt-resizer';
    if (className) {
      name += ` ${className}`;
    }
    return name;
  }, [className]);

  const handleOnClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div className={classNames} {...rest} onClick={handleOnClick}>
      {children}
    </div>
  );
};

Resizer.displayName = 'Resizer';

export { Resizer };
