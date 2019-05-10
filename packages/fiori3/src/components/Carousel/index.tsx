import { Event, StyleClassHelper } from '@fiori-for-react/utils';
import { CarouselArrowsPlacement } from '@lib/CarouselArrowsPlacement';
import { PlacementType } from '@lib/PlacementType';
import React, { Children, Component, CSSProperties, Fragment, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { withStyles } from '@fiori-for-react/styles';
import styles from './Carousel.jss';
import { CarouselPagination, CarouselPaginationPropTypes } from './CarouselPagination';

export interface CarouselPropTypes extends CarouselPaginationPropTypes, Fiori3CommonProps {
  /**
   * The content which the carousel displays.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Index of the active page to be displayed
   */
  activePage?: number;
  /**
   * This event is fired after a carousel swipe has been completed
   */
  onPageChanged?: (event: Event) => void;
  /**
   * The height of the carousel. Note that when a percentage value is used, the height of the surrounding container
   * must be defined.
   */
  height?: CSSProperties['height'];
  /**
   * The width of the carousel. Note that when a percentage value is used, the height of the surrounding container
   * must be defined.
   */
  width?: CSSProperties['width'];
  /**
   * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
   */
  loop?: boolean;
}

interface CarouselPropsInternal extends CarouselPropTypes, ClassProps {}

interface CarouselState {
  activePage: number;
  prevProps: {
    activePage: number;
  };
}

const CarouselInner = (props) => {
  const { children, className, activePage } = props;

  return (
    <Fragment>
      {Children.map(children, (item, index) => (
        <div
          key={index}
          className={className}
          style={{
            transform: `translateX(-${activePage * 100}%)`,
            visibility: [activePage - 1, activePage, activePage + 1].includes(index) ? 'visible' : 'hidden'
          }}
        >
          {item}
        </div>
      ))}
    </Fragment>
  );
};

@withStyles(styles)
export class Carousel extends Component<CarouselPropTypes, CarouselState> {
  static defaultProps = {
    activePage: 0,
    arrowsPlacement: CarouselArrowsPlacement.Content,
    onPageChanged: () => {},
    height: '100%',
    width: '100%',
    showPageIndicator: true,
    loop: false,
    pageIndicatorPlacement: PlacementType.Bottom
  };

  state = {
    activePage: this.props.activePage,
    prevProps: {
      activePage: this.props.activePage
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.activePage !== prevState.prevProps.activePage) {
      return {
        activePage: nextProps.activePage,
        prevProps: {
          activePage: nextProps.activePage
        }
      };
    }
    return null;
  }

  private goToNextPage = (e) => {
    const children = Children.toArray(this.props.children);
    if (this.props.loop === false && this.state.activePage === children.length - 1) {
      return;
    }
    const nextPage = this.state.activePage === children.length - 1 ? 0 : this.state.activePage + 1;
    this.selectPageAtIndex(nextPage, e);
  };

  private goToPreviousPage = (e) => {
    if (this.props.loop === false && this.state.activePage === 0) {
      return;
    }
    const children = Children.toArray(this.props.children);
    const previousPage = this.state.activePage === 0 ? children.length - 1 : this.state.activePage - 1;
    this.selectPageAtIndex(previousPage, e);
  };

  private selectPageAtIndex(index, e: Event) {
    this.setState({
      activePage: index
    });
    this.props.onPageChanged(Event.of(this, e.originalEvent, { selectedIndex: index }));
  }

  render() {
    const {
      children,
      height,
      width,
      pageIndicatorPlacement,
      classes,
      className,
      style,
      arrowsPlacement,
      tooltip
    } = this.props as CarouselPropsInternal;

    const { activePage } = this.state;

    const outerStyle = { width, height };
    if (style) {
      Object.assign(outerStyle, style);
    }

    const classNameString = StyleClassHelper.of(classes.carousel);

    if (className) {
      classNameString.put(className);
    }

    const carouselItemClasses = StyleClassHelper.of(classes.carouselItem);
    if (arrowsPlacement === CarouselArrowsPlacement.Content) {
      carouselItemClasses.put(classes.carouselItemContentIndicator);
    }

    return (
      <div
        className={classNameString.toString()}
        style={outerStyle}
        title={tooltip}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        {Children.count(children) > 1 && pageIndicatorPlacement === PlacementType.Top && (
          <CarouselPagination
            {...this.props}
            activePage={activePage}
            goToPreviousPage={this.goToPreviousPage}
            goToNextPage={this.goToNextPage}
          />
        )}
        <div className={classes.carouselInner}>
          <CarouselInner className={carouselItemClasses.toString()} activePage={activePage}>
            {children}
          </CarouselInner>
        </div>
        {Children.count(children) > 1 && pageIndicatorPlacement === PlacementType.Bottom && (
          <CarouselPagination
            {...this.props}
            activePage={activePage}
            goToPreviousPage={this.goToPreviousPage}
            goToNextPage={this.goToNextPage}
          />
        )}
      </div>
    );
  }
}
