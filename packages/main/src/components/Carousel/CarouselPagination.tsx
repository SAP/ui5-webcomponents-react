import { Event, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { Children, Component } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CarouselArrowsPlacement } from '../../lib/CarouselArrowsPlacement';
import { Icon } from '../../lib/Icon';
import { Label } from '../../lib/Label';
import { PlacementType } from '../../lib/PlacementType';
import styles from './CarouselPagination.jss';

export interface CarouselPaginationPropTypes {
  /**
   * Defines where the carousel's arrows are placed.
   * Default is CarouselArrowsPlacement.Content used to place the arrows on the sides of the carousel.
   * Alternatively CarouselArrowsPlacement.PageIndicator can be used to place the arrows on the sides of
   * the page indicator.
   */
  arrowsPlacement?: CarouselArrowsPlacement;
  /**
   * Show or hide carousel's page indicator.
   */
  showPageIndicator?: boolean;
  /**
   * Defines where the carousel's page indicator is displayed.
   * Possible values are PlacementType.Top, PlacementType.Bottom.
   * Other values are ignored and the default value will be applied.
   * The default value is PlacementType.Bottom.
   */
  pageIndicatorPlacement?: PlacementType.Top | PlacementType.Bottom;
}

interface CarouselPaginationInternalProps extends CarouselPaginationPropTypes, ClassProps {
  goToPreviousPage: (e: Event) => void;
  goToNextPage: (e: Event) => void;
  activePage?: number;
}

@withStyles(styles)
export class CarouselPagination extends Component<CarouselPaginationInternalProps> {
  private static TEXT_INDICATOR_THRESHOLD = 8;

  private handleGoToNextPage = (e) => {
    this.props.goToNextPage(Event.of(this, e));
  };

  private handleGoToPreviousPage = (e) => {
    this.props.goToPreviousPage(Event.of(this, e));
  };

  render() {
    const { arrowsPlacement, children, showPageIndicator, pageIndicatorPlacement, classes, activePage } = this.props;

    const numberOfChildren = React.Children.count(children);
    const showTextIndicator = numberOfChildren >= CarouselPagination.TEXT_INDICATOR_THRESHOLD;

    const paginationClasses = StyleClassHelper.of(classes.pagination);
    if (arrowsPlacement === CarouselArrowsPlacement.Content) {
      paginationClasses.put(classes.paginationArrowContent);
    }
    if (pageIndicatorPlacement === PlacementType.Top) {
      paginationClasses.put(classes.paginationTop);
    }
    if (pageIndicatorPlacement === PlacementType.Bottom) {
      paginationClasses.put(classes.paginationBottom);
    }

    return (
      <div className={paginationClasses.valueOf()}>
        <div
          data-value={arrowsPlacement === CarouselArrowsPlacement.Content ? 'paginationArrow' : null}
          className={classes.paginationArrow}
          onClick={this.handleGoToPreviousPage}
        >
          <Icon src="slim-arrow-left" />
        </div>

        {showPageIndicator && (
          <div className={classes.paginationIndicator}>
            {showTextIndicator && <Label>{`Showing ${activePage + 1} of ${numberOfChildren}`}</Label>}

            {!showTextIndicator &&
              Children.map(children, (item, index) => (
                <span
                  key={index}
                  className={`${activePage === index ? classes.paginationIconActive : null} ${classes.paginationIcon}`}
                  aria-label={`Item ${index + 1} of ${numberOfChildren} displayed`}
                >
                  {index + 1}
                </span>
              ))}
          </div>
        )}

        <div
          data-value={arrowsPlacement === CarouselArrowsPlacement.Content ? 'paginationArrow' : null}
          className={classes.paginationArrow}
          onClick={this.handleGoToNextPage}
        >
          <Icon src="slim-arrow-right" />
        </div>
      </div>
    );
  }
}
