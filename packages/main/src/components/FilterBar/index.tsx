import React, { FC, forwardRef, ReactNode, ReactNodeArray, RefObject, useCallback, useState } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { Button } from '../../lib/Button';
import { ButtonDesign } from '../../lib/ButtonDesign';
import styles from './FilterBar.jss';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { StyleClassHelper } from '@ui5/webcomponents-react-base';

export interface FilterBarPropTypes extends CommonProps {
  renderVariants?: () => JSX.Element;
  renderSearch?: () => JSX.Element;
  children: ReactNode | ReactNodeArray;
}

interface FilterBarInternalProps extends FilterBarPropTypes, ClassProps {}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'FilterBar' });

const FilterBar: FC<FilterBarPropTypes> = forwardRef((props: FilterBarPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, renderVariants, renderSearch } = props as FilterBarInternalProps;
  const [showFilters, setShowFilters] = useState(true);

  const classes = useStyles();

  const handleHideFilterBar = useCallback(() => {
    setShowFilters(!showFilters);
  }, [showFilters]);

  const filterAreaClasses = StyleClassHelper.of(classes.filterArea);
  if (showFilters) {
    filterAreaClasses.put(classes.filterAreaOpen);
  } else {
    filterAreaClasses.put(classes.filterAreaClosed);
  }

  return (
    <div ref={ref} className={classes.outerContainer}>
      <div className={classes.filterBarHeader}>
        {renderVariants && renderVariants()}
        {renderSearch && <div className={classes.vLine}> {renderSearch()} </div>}
        <div className={classes.headerRowRight}>
          <Button onClick={handleHideFilterBar} design={ButtonDesign.Transparent}>
            {showFilters ? 'Hide Filter Bar' : 'Show Filter Bar'}
          </Button>
        </div>
      </div>
      <div className={filterAreaClasses.valueOf()}>{children}</div>
    </div>
  );
});

FilterBar.defaultProps = {
  children: ''
};

FilterBar.displayName = 'FilterBar';
export { FilterBar };
