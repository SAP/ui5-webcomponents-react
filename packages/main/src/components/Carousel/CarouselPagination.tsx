import '@ui5/webcomponents-icons/dist/icons/slim-arrow-left';
import '@ui5/webcomponents-icons/dist/icons/slim-arrow-right';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import React, { Children, FC, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './CarouselPagination.jss';

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'CarouselPagination' });

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

  /**
   * Index of the active page to be displayed
   */
  activePage?: number;

  goToPreviousPage?: (e: any) => void;
  goToNextPage?: (e: any) => void;
}

const TEXT_INDICATOR_THRESHOLD = 8;
const CarouselPagination: FC<CarouselPaginationPropTypes> = (props) => {
  const classes = useStyles();

  const {
    arrowsPlacement,
    children,
    showPageIndicator,
    pageIndicatorPlacement,
    activePage,
    goToPreviousPage,
    goToNextPage
  } = props;

  const numberOfChildren = React.Children.count(children);
  const showTextIndicator = numberOfChildren >= TEXT_INDICATOR_THRESHOLD;

  const shouldRenderPaginationBar = useMemo(() => {
    return showPageIndicator || arrowsPlacement === CarouselArrowsPlacement.PageIndicator;
  }, [showPageIndicator, arrowsPlacement]);

  if (!shouldRenderPaginationBar) {
    return (
      <div className={classes.paginationArrowContentNoBar}>
        <div data-value="paginationArrow" className={classes.paginationArrow} onClick={goToPreviousPage}>
          <Icon name="slim-arrow-left" />
        </div>
        <div data-value="paginationArrow" className={classes.paginationArrow} onClick={goToNextPage}>
          <Icon name="slim-arrow-right" />
        </div>
      </div>
    );
  }

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
      <div data-value="paginationArrow" className={classes.paginationArrow} onClick={goToPreviousPage}>
        <Icon name="slim-arrow-left" />
      </div>

      <div className={classes.paginationIndicator}>
        {showPageIndicator && showTextIndicator && <Label>{`Showing ${activePage + 1} of ${numberOfChildren}`}</Label>}

        {showPageIndicator &&
          !showTextIndicator &&
          Children.map(children, (item, index) => (
            <span
              key={index}
              className={`${classes.paginationIcon}${activePage === index ? ` ${classes.paginationIconActive}` : ''}`}
              aria-label={`Item ${index + 1} of ${numberOfChildren} displayed`}
            >
              {index + 1}
            </span>
          ))}
      </div>

      <div data-value="paginationArrow" className={classes.paginationArrow} onClick={goToNextPage}>
        <Icon name="slim-arrow-right" />
      </div>
    </div>
  );
};

export { CarouselPagination };
