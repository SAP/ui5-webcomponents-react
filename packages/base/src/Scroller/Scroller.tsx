import { IScroller } from '@ui5/webcomponents-react-base/interfaces/IScroller';
import React, { forwardRef, RefObject, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { ScrollContentProvider } from './ScrollContextProvider';
import { scrollTo } from './ScrollHelper';

export interface Props {
  scrollContainer: RefObject<HTMLDivElement>;
  children: any;
  forceSelection?: boolean;
}

export const Scroller = forwardRef((props: Props, ref: RefObject<IScroller>) => {
  const { children, scrollContainer, forceSelection = true } = props;

  const [selectedElementId, setSelectedElementId] = useState(null);

  const elements = useRef([]);

  const unregisterElement = useCallback(
    (id) => {
      elements.current = elements.current.filter((item) => item.id !== id);
    },
    [elements.current]
  );

  const onScrollContainerChanged = useCallback(() => {
    if (!scrollContainer.current) return;

    elements.current = elements.current
      .map((element) => ({
        ...element,
        offsetTop: getOffset(element.htmlRef.current),
        elementHeight: element.htmlRef.current.getBoundingClientRect().height
      }))
      .sort((a, b) => a.offsetTop - b.offsetTop);

    if (scrollContainer.current) {
      scroll({ target: scrollContainer.current });
    }
  }, [scrollContainer]);

  const registerElement = useCallback(
    (element) => {
      unregisterElement(element.id);
      elements.current.push(element);
      onScrollContainerChanged();
    },
    [elements.current]
  );

  const scrollToElementById = useCallback(
    (id, scrollOffset = 0) => {
      const element = elements.current.find((item) => item.id === id);
      if (element) {
        const { htmlRef } = element;
        scrollTo(
          element.offsetTop + scrollOffset,
          {
            scrollContainer,
            absolute: true
          },
          id,
          htmlRef.current
        );
      }
    },
    [elements.current]
  );

  const scrollToTop = useCallback(() => {
    scrollTo(
      0,
      {
        scrollContainer,
        absolute: true
      },
      null,
      null
    );
  }, [scrollContainer.current]);

  const getOffset = useCallback(
    (el, offset = 0) => {
      if (!el) return 0;
      const nextOffset = el.offsetTop + offset;
      if (el.parentElement === scrollContainer.current) {
        return nextOffset;
      }
      return getOffset(el.offsetParent, nextOffset);
    },
    [scrollContainer]
  );

  const observer = useRef(new MutationObserver(onScrollContainerChanged));

  const scroll = useCallback(
    (e) => {
      let selectedElement = elements.current.find(
        (item) =>
          item.spy && e.target.scrollTop >= item.offsetTop && e.target.scrollTop < item.offsetTop + item.elementHeight
      );

      if (forceSelection) {
        if (elements.current[0] && e.target.scrollTop < elements.current[0].offsetTop) {
          selectedElement = elements.current[0];
        } else {
          const lastElement = elements.current[elements.current.length - 1];

          if (lastElement && e.target.scrollTop >= lastElement.offsetTop + lastElement.elementHeight) {
            selectedElement = lastElement;
          }
        }
      }

      if (selectedElement && selectedElement.id !== selectedElementId) {
        setSelectedElementId(selectedElement.id);
      } else if (!selectedElement && selectedElementId !== null) {
        setSelectedElementId(null);
      }
    },
    [elements.current, selectedElementId, setSelectedElementId]
  );

  useImperativeHandle(
    ref,
    () => ({
      scroll,
      scrollToElementById,
      scrollToTop
    }),
    [elements.current, scrollContainer, selectedElementId, setSelectedElementId]
  );

  useEffect(() => {
    if (scrollContainer.current) {
      observer.current.observe(scrollContainer.current, {
        attributes: true,
        subtree: true,
        childList: true
      });
    }

    return () => {
      observer.current.disconnect();
    };
  }, [scrollContainer]);

  return (
    <ScrollContentProvider
      scrollContainer={scrollContainer}
      registerElement={registerElement}
      unregisterElement={unregisterElement}
      scrollToElementById={scrollToElementById}
      selectedElementId={selectedElementId}
      scrollToTop={scrollToTop}
    >
      {children}
    </ScrollContentProvider>
  );
});
