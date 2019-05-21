import React, { Component, FC, Fragment } from 'react';
import { ClassProps } from '../../../interfaces/ClassProps';
import { Label } from '@lib/Label';
import { Link } from '@lib/Link';
import { ContentDensity } from '@lib/ContentDensity';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { withStyles } from '@fiori-for-react/styles';
import { LinkType } from '@fiori-for-react/fiori3';

enum NavigationModes {
  rightArrowPress,
  leftArrowPress,
  default
}

interface LinkHOCProps {
  enabled?: boolean;
  page?: number;
  selectedPage: number;
  children: string | number;
  mode?: NavigationModes;
  onClick: (page: number, mode: NavigationModes) => void;
}

const onClickHandler = (props) => (e) => {
  const { page, selectedPage, onClick, mode } = props;

  if (page === selectedPage) {
    return;
  }
  if (page > -1) {
    onClick(page, NavigationModes.default);
  } else {
    onClick(selectedPage, mode);
  }
};

export const LinkHOC: FC<LinkHOCProps> = (props) => {
  const { children, page, selectedPage } = props;

  return (
    <Link
      style={{ paddingRight: '0.2rem' }}
      onPress={onClickHandler(props)}
      type={page === selectedPage ? LinkType.Emphasized : LinkType.Default}
    >
      {children.toString()}
    </Link>
  );
};

LinkHOC.defaultProps = {
  children: '',
  enabled: true,
  page: -1
};

const styles = ({ theme, parameters, contentDensity }: JSSTheme) => ({
  container: {
    padding: '16px 20px',
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '3rem'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: parameters.sapUiListHeaderBackground,
    '& a': {
      paddingLeft: '4px',
      paddingRight: '4px'
    }
  },
  total: {
    marginRight: '8px'
  }
});

export interface PaginationProps {
  children: string;
  numItems: number;
  onSelectionChange: (event: object) => null;
}

interface PaginationPropsInternal extends PaginationProps, ClassProps {
  canNext: boolean;
  canPrevious: boolean;
  pages: number;
  page: number;
  onPageChange: (page) => null;
}

@withStyles(styles)
export class Pagination extends Component<PaginationProps> {
  static defaultProps = {
    numItems: 0
  };

  onNavigatePress = (page: number, mode: NavigationModes) => {
    const { onPageChange, onSelectionChange } = this.props as PaginationPropsInternal;
    let newPage = -1;

    switch (mode) {
      case NavigationModes.rightArrowPress:
        newPage = page + 1;
        onPageChange(newPage);
        if (onSelectionChange) {
          onSelectionChange({ newPage });
        }
        break;
      case NavigationModes.leftArrowPress:
        newPage = page - 1;
        onPageChange(newPage);
        if (onSelectionChange) {
          onSelectionChange({ newPage });
        }
        break;
      default:
        onPageChange(page);
        if (onSelectionChange) {
          onSelectionChange({ page });
        }
    }
  };

  getLinkNumbers = () => {
    const { page, pages } = this.props as PaginationPropsInternal;

    const showLeftDots = page > 2 && pages > 2;
    const showRightDots = page < pages - 3 && pages > 6;
    const showMiddleNumbers = showLeftDots && showRightDots;
    const showSecondToLastNumber = (pages > 4 && pages < 7) || (page > pages - 4 && pages > 4);
    const showThirdToLastNumber = (pages > 5 && pages < 7) || (page > pages - 4 && pages > 5);

    let middleNumbers = [];

    if (showMiddleNumbers) {
      middleNumbers = [
        <LinkHOC key={page - 1} onClick={this.onNavigatePress} page={page - 1} selectedPage={page}>
          {page}
        </LinkHOC>,
        <LinkHOC key={page} onClick={this.onNavigatePress} page={page} selectedPage={page}>
          {page + 1}
        </LinkHOC>,
        <LinkHOC key={page + 1} onClick={this.onNavigatePress} page={page + 1} selectedPage={page}>
          {page + 2}
        </LinkHOC>
      ];
    }

    return (
      <Fragment>
        <LinkHOC onClick={this.onNavigatePress} page={0} selectedPage={page}>
          1
        </LinkHOC>
        {page <= 2 && pages > 1 && (
          <LinkHOC onClick={this.onNavigatePress} page={1} selectedPage={page}>
            2
          </LinkHOC>
        )}
        {page <= 2 && pages > 2 && (
          <LinkHOC onClick={this.onNavigatePress} page={2} selectedPage={page}>
            3
          </LinkHOC>
        )}
        {showLeftDots && <Link>...</Link>}
        {showMiddleNumbers && middleNumbers}
        {showRightDots && <Link>...</Link>}
        {showThirdToLastNumber && (
          <LinkHOC onClick={this.onNavigatePress} page={pages - 3} selectedPage={page}>
            {pages - 2}
          </LinkHOC>
        )}
        {showSecondToLastNumber && (
          <LinkHOC onClick={this.onNavigatePress} page={pages - 2} selectedPage={page}>
            {pages - 1}
          </LinkHOC>
        )}
        {pages > 3 && (
          <LinkHOC onClick={this.onNavigatePress} page={pages - 1} selectedPage={page}>
            {pages}
          </LinkHOC>
        )}
      </Fragment>
    );
  };

  render() {
    const { classes, numItems, canNext, canPrevious, page } = this.props as PaginationPropsInternal;

    return (
      <div className={classes.container}>
        <div className={classes.total}>
          <Label>{`${numItems} Items`}</Label>
        </div>
        <LinkHOC
          mode={NavigationModes.leftArrowPress}
          enabled={canPrevious}
          onClick={this.onNavigatePress}
          selectedPage={page}
        >
          {'<'}
        </LinkHOC>
        {this.getLinkNumbers()}
        <LinkHOC
          mode={NavigationModes.rightArrowPress}
          enabled={canNext}
          onClick={this.onNavigatePress}
          selectedPage={page}
        >
          {'>'}
        </LinkHOC>
      </div>
    );
  }
}
