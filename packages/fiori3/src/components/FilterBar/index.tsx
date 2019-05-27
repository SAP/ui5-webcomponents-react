import { ClassProps } from '../../interfaces/ClassProps';
import { withStyles } from '@fiori-for-react/styles';
import React, { PureComponent, ReactNode, ReactNodeArray } from 'react';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import styles from './FilterBar.jss';
import { Button } from '../../lib/Button';
import { ButtonType } from '../../lib/ButtonType';

export interface FilterBarPropTypes extends Fiori3CommonProps {
  renderVariants?: () => JSX.Element;
  renderSearch?: () => JSX.Element;
  children: ReactNode | ReactNodeArray;
}

interface FilterBarInternalProps extends FilterBarPropTypes, ClassProps {}

@withStyles(styles)
export class FilterBar extends PureComponent<FilterBarPropTypes> {
  static defaultProps = {
    children: '',
    displayOnly: true,
    renderSearch: true
  };

  state = {
    showFilters: true
  };

  handelHideFilterBar = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  render() {
    const { children, classes, renderVariants, renderSearch } = this.props as FilterBarInternalProps;

    return (
      <div className={classes.outerContainer}>
        <div className={classes.filterBarHeader}>
          {renderVariants && renderVariants()}
          {renderSearch && <div className={classes.vLine}> {renderSearch()} </div>}
          <div className={classes.headerRowRight}>
            <Button onPress={this.handelHideFilterBar} type={ButtonType.Transparent}>
              {this.state.showFilters ? 'Hide Filter Bar' : 'Show Filter Bar'}
            </Button>
          </div>
        </div>
        {this.state.showFilters && <div className={classes.filterArea}>{children}</div>}
      </div>
    );
  }
}
