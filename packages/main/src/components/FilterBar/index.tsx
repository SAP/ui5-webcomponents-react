import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, RefObject, useCallback, useState } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './FilterBar.jss';

export interface FilterBarPropTypes extends CommonProps {
  variants?: ReactNode;
  search?: ReactNode;
  children: ReactNode | ReactNodeArray;
}

interface FilterBarInternalProps extends FilterBarPropTypes {}

const useStyles = createComponentStyles(styles, { name: 'FilterBar' });

/**
 * <code>import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';</code>
 */
const FilterBar: FC<FilterBarPropTypes> = forwardRef((props: FilterBarPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, search, variants } = props as FilterBarInternalProps;
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

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div ref={ref} className={classes.outerContainer} {...passThroughProps}>
      <div className={classes.filterBarHeader}>
        {variants}
        {search && <div className={classes.vLine}> {search} </div>}
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

FilterBar.displayName = 'FilterBar';
export { FilterBar };
