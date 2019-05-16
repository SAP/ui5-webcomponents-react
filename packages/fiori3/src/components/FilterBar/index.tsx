import { ClassProps } from '@fiori-for-react/core/types/ClassProps';
import { withStyles } from '@fiori-for-react/core/utils/withStyles';
import React, { PureComponent, ReactNode, ReactNodeArray } from 'react';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import styles from './FilterBar.jss';
import { Input } from '../../webComponents/Input';
import { Button } from '../../webComponents/Button';
import { ButtonType } from '../../enums/ButtonType';

export interface FilterBarPropTypes extends Fiori3CommonProps {
  renderVariants?: () => JSX.Element;
  renderSearch?: boolean;
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
          {renderSearch && (
            <div className={classes.vLine}>
              <Input placeholder={'Search'} />
            </div>
          )}
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
