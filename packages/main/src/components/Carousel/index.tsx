import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import React, {
  Children,
  CSSProperties,
  FC,
  forwardRef,
  ReactNode,
  ReactNodeArray,
  Ref,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './Carousel.jss';
import { CarouselPagination, CarouselPaginationPropTypes } from './CarouselPagination';

export interface CarouselPropTypes
  extends Omit<CarouselPaginationPropTypes, 'goToPreviousPage' | 'goToNextPage'>,
    CommonProps {
  /**
   * The content which the carousel displays.
   */
  children: ReactNode | ReactNodeArray;
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

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Carousel' });

/**
 * <code>import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';</code>
 */
const Carousel: FC<CarouselPropTypes> = forwardRef((props: CarouselPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    height,
    width,
    pageIndicatorPlacement,
    className,
    style,
    arrowsPlacement,
    tooltip,
    showPageIndicator,
    loop,
    onPageChanged
  } = props;

  const [currentlyActivePage, setCurrentlyActivePage] = useState(props.activePage);

  useEffect(() => {
    setCurrentlyActivePage(props.activePage);
  }, [props.activePage, setCurrentlyActivePage]);

  const outerStyle = { width, height };
  if (style) {
    Object.assign(outerStyle, style);
  }

  const classes = useStyles();
  const classNameString = StyleClassHelper.of(classes.carousel);

  if (className) {
    classNameString.put(className);
  }

  const carouselItemClasses = StyleClassHelper.of(classes.carouselItem);
  if (arrowsPlacement === CarouselArrowsPlacement.Content) {
    classNameString.put(classes.carouselArrowPlacementContent);
  }

  const selectPageAtIndex = useCallback(
    (index, event) => {
      setCurrentlyActivePage(index);
      onPageChanged(Event.of(null, event, { selectedIndex: index }));
    },
    [onPageChanged, setCurrentlyActivePage]
  );

  const childElementCount = Children.count(children);
  const goToNextPage = useCallback(
    (e, skipManualInversion = false) => {
      if (
        document.dir === 'rtl' &&
        arrowsPlacement === CarouselArrowsPlacement.Content &&
        e.type === 'click' &&
        !skipManualInversion
      ) {
        return goToPreviousPage(e, true);
      }
      if (loop === false && currentlyActivePage === childElementCount - 1) {
        return;
      }
      const nextPage = currentlyActivePage === childElementCount - 1 ? 0 : currentlyActivePage + 1;
      selectPageAtIndex(nextPage, e);
    },
    [loop, currentlyActivePage, selectPageAtIndex, childElementCount, arrowsPlacement]
  );

  const goToPreviousPage = useCallback(
    (e, skipManualInversion = false) => {
      if (
        document.dir === 'rtl' &&
        arrowsPlacement === CarouselArrowsPlacement.Content &&
        e.type === 'click' &&
        !skipManualInversion
      ) {
        return goToNextPage(e, true);
      }
      if (loop === false && currentlyActivePage === 0) {
        return;
      }
      const previousPage = currentlyActivePage === 0 ? childElementCount - 1 : currentlyActivePage - 1;
      selectPageAtIndex(previousPage, e);
    },
    [loop, childElementCount, currentlyActivePage, selectPageAtIndex, arrowsPlacement, goToNextPage]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') {
        if (document.dir === 'rtl') {
          goToPreviousPage(e);
        } else {
          goToNextPage(e);
        }
      }
      if (e.key === 'ArrowLeft') {
        if (document.dir === 'rtl') {
          goToNextPage(e);
        } else {
          goToPreviousPage(e);
        }
      }
    },
    [goToPreviousPage, goToNextPage]
  );

  const translateXPrefix = document.dir === 'rtl' ? '' : '-';

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div
      className={classNameString.toString()}
      style={outerStyle}
      title={tooltip}
      slot={props['slot']}
      ref={ref}
      role="list"
      tabIndex={0}
      onKeyDown={onKeyDown}
      {...passThroughProps}
    >
      {childElementCount > 1 && pageIndicatorPlacement === PlacementType.Top && (
        <CarouselPagination
          arrowsPlacement={arrowsPlacement}
          showPageIndicator={showPageIndicator}
          pageIndicatorPlacement={pageIndicatorPlacement}
          activePage={currentlyActivePage}
          children={children}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )}
      <div
        className={classes.carouselInner}
        style={{
          transform: `translateX(${translateXPrefix}${currentlyActivePage * 100}%)`
        }}
      >
        {Children.map(children, (item, index) => (
          <div
            key={index}
            className={carouselItemClasses.toString()}
            role="listitem"
            aria-posinset={index}
            aria-setsize={childElementCount}
            style={{ visibility: index === currentlyActivePage ? 'visible' : null }}
          >
            {item}
          </div>
        ))}
      </div>
      {childElementCount > 1 && pageIndicatorPlacement === PlacementType.Bottom && (
        <CarouselPagination
          arrowsPlacement={arrowsPlacement}
          showPageIndicator={showPageIndicator}
          pageIndicatorPlacement={pageIndicatorPlacement}
          activePage={currentlyActivePage}
          children={children}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )}
    </div>
  );
});

Carousel.displayName = 'Carousel';
Carousel.defaultProps = {
  activePage: 0,
  arrowsPlacement: CarouselArrowsPlacement.Content,
  onPageChanged: () => {},
  height: '100%',
  width: '100%',
  showPageIndicator: true,
  loop: false,
  pageIndicatorPlacement: PlacementType.Bottom
};

export { Carousel };
