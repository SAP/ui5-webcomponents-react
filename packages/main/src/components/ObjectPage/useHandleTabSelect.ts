import type { debounce } from '@ui5/webcomponents-react-base';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { Dispatch, JSXElementConstructor, ReactElement, RefObject, SetStateAction } from 'react';
import { isValidElement, useEffect, useState } from 'react';
import { ObjectPageMode } from '../../enums/ObjectPageMode.js';
import type { TabContainerPropTypes } from '../../webComponents/TabContainer/index.js';
import type { ObjectPageSectionPropTypes } from '../ObjectPageSection/index.js';
import type { ObjectPageDomRef, ObjectPagePropTypes } from './types/index.js';

interface UseHandleTabSelectProps {
  onBeforeNavigate: ObjectPagePropTypes['onBeforeNavigate'];
  headerPinned: boolean;
  mode: ObjectPagePropTypes['mode'];
  setHeaderCollapsedInternal: Dispatch<SetStateAction<boolean>>;
  setScrolledHeaderExpanded: Dispatch<SetStateAction<boolean>>;
  childrenArray: ReactElement<ObjectPageSectionPropTypes, string | JSXElementConstructor<any>>[];
  handleOnSectionSelected: any;

  isProgrammaticallyScrolled: RefObject<boolean>;
  setInternalSelectedSectionId: Dispatch<SetStateAction<string>>;
  objectPageRef: RefObject<ObjectPageDomRef>;
  debouncedOnSectionChange: ReturnType<typeof debounce>;
  scrollTimeout: RefObject<number>;
  setSelectedSubSectionId: Dispatch<SetStateAction<string>>;
}

export const useHandleTabSelect = ({
  onBeforeNavigate,
  headerPinned,
  mode,
  setHeaderCollapsedInternal,
  setScrolledHeaderExpanded,
  childrenArray,
  handleOnSectionSelected,

  isProgrammaticallyScrolled,
  setInternalSelectedSectionId,
  objectPageRef,
  debouncedOnSectionChange,
  scrollTimeout,
  setSelectedSubSectionId
}: UseHandleTabSelectProps) => {
  const [onSectionSelectedArgs, setOnSectionSelectedArgs] = useState<
    | false
    | [
        Parameters<TabContainerPropTypes['onTabSelect']>[0],
        undefined | string,
        string,
        ReactElement<ObjectPageSectionPropTypes>
      ]
  >(false);

  const handleOnSubSectionSelected = (e) => {
    isProgrammaticallyScrolled.current = true;
    if (mode === ObjectPageMode.IconTabBar) {
      const sectionId = e.detail.sectionId;
      setInternalSelectedSectionId(sectionId);
      const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
      const currentIndex = childrenArray.findIndex((objectPageSection) => {
        return (
          isValidElement(objectPageSection) &&
          (objectPageSection as ReactElement<ObjectPagePropTypes>).props?.id === sectionId
        );
      });
      debouncedOnSectionChange(e, currentIndex, sectionId, sectionNodes[currentIndex]);
    }
    const subSectionId = e.detail.subSectionId;
    scrollTimeout.current = performance.now() + 200;
    setSelectedSubSectionId(subSectionId);
  };

  const handleTabItemSelect: TabContainerPropTypes['onTabSelect'] = (event) => {
    if (typeof onBeforeNavigate === 'function') {
      const selectedTabDataset = event.detail.tab.dataset;
      const sectionIndex = parseInt(selectedTabDataset.index, 10);
      const sectionId = selectedTabDataset.parentId ?? selectedTabDataset.sectionId;
      const subSectionId = Object.prototype.hasOwnProperty.call(selectedTabDataset, 'isSubTab')
        ? selectedTabDataset.sectionId
        : undefined;
      onBeforeNavigate(
        enrichEventWithDetails(event, {
          sectionIndex,
          sectionId,
          subSectionId
        })
      );
      if (event.defaultPrevented) {
        return;
      }
    }
    event.preventDefault();
    const { sectionId, index, isSubTab, parentId } = event.detail.tab.dataset;
    if (parseInt(index) !== 0 && !headerPinned && mode !== ObjectPageMode.IconTabBar) {
      setHeaderCollapsedInternal(true);
    }
    setScrolledHeaderExpanded(false);
    if (isSubTab !== undefined) {
      handleOnSubSectionSelected(enrichEventWithDetails(event, { sectionId: parentId, subSectionId: sectionId }));
    } else {
      const section = childrenArray.find((el) => {
        return el.props.id == sectionId;
      });
      setOnSectionSelectedArgs([event, section?.props?.id, index, section]);
    }
  };
  // effect required - if event is called in `handleTabItemSelect` it's invoked twice in StrictMode
  useEffect(() => {
    if (onSectionSelectedArgs) {
      handleOnSectionSelected(...onSectionSelectedArgs);
      setOnSectionSelectedArgs(false);
    }
  }, [onSectionSelectedArgs]);

  return handleTabItemSelect;
};
