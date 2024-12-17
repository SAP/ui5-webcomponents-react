import type { CarouselDomRef, CarouselPropTypes } from '@ui5/webcomponents-react';
import { Carousel } from '@ui5/webcomponents-react';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

export function StoryCarousel(props: Omit<CarouselPropTypes, 'children'> & { children: ReactNode[] }) {
  const { children } = props;
  const carouselRef = useRef<CarouselDomRef>(null);
  const counter = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const cleanUpInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel && children.length) {
      intervalRef.current = setInterval(() => {
        counter.current++;
        carousel.navigateTo(counter.current % children.length);
      }, 5000);
    }

    return () => {
      cleanUpInterval();
    };
  }, [children]);

  return (
    <Carousel
      style={{ height: '500px' }}
      arrowsPlacement="Navigation"
      cyclic
      ref={carouselRef}
      onNavigate={() => {
        cleanUpInterval();
      }}
      {...props}
    />
  );
}
