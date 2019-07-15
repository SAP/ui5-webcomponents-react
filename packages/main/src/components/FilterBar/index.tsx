import { withStyles } from '@ui5/webcomponents-react-base';
import React, { PureComponent, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { Button } from '../../lib/Button';
import { ButtonDesign } from '../../lib/ButtonDesign';
import styles from './FilterBar.jss';

export interface FilterBarPropTypes extends CommonProps {
  renderVariants?: () => JSX.Element;
  renderSearch?: () => JSX.Element;
  children: ReactNode | ReactNodeArray;
}

interface FilterBarInternalProps extends FilterBarPropTypes, ClassProps {}

@withStyles(styles)
export class FilterBar extends PureComponent<FilterBarPropTypes> {
  static defaultProps = {
    children: '',
    displayOnly: true
  };

  state = {
    showFilters: true
  };

  handelHideFilterBar = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  render() {
    const { children, classes, renderVariants, renderSearch, innerRef } = this.props as FilterBarInternalProps;

    return (
      <div ref={innerRef} className={classes.outerContainer}>
        <div className={classes.filterBarHeader}>
          {renderVariants && renderVariants()}
          {renderSearch && <div className={classes.vLine}> {renderSearch()} </div>}
          <div className={classes.headerRowRight}>
            <Button onClick={this.handelHideFilterBar} design={ButtonDesign.Transparent}>
              {this.state.showFilters ? 'Hide Filter Bar' : 'Show Filter Bar'}
            </Button>
          </div>
        </div>
        {this.state.showFilters && <div className={classes.filterArea}>{children}</div>}
      </div>
    );
  }
}
