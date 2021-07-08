import ObjectPageAnchorTab from './ObjectPageAnchorTab';
import '@ui5/webcomponents-icons/dist/slim-arrow-down';
import React, { FC, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ObjectPageAnchorTab.define();

interface ObjectPageAnchorPropTypes {
  section: any;
  onShowSubSectionPopover: (event: any, section: any) => void;
  index: number;
  selected: boolean;
}

export const ObjectPageAnchorButton: FC<ObjectPageAnchorPropTypes> = (props: ObjectPageAnchorPropTypes) => {
  const ref = useRef<HTMLElement>();
  const { section, index, selected, onShowSubSectionPopover } = props;

  let subSectionsAvailable = false;
  if (section.props.children && section.props.children.filter) {
    const subSections = section.props.children.filter((item) => item.props && item.props.isSubSection);
    subSectionsAvailable = subSections.length > 0;
  }

  useEffect(() => {
    const listener = (e) => {
      onShowSubSectionPopover(e, section);
    };
    const el = ref.current;
    el.addEventListener('show-sub-sections', listener);
    return () => {
      el?.removeEventListener('show-sub-sections', listener);
    };
  }, [onShowSubSectionPopover]);

  return (
    <ui5-object-page-anchor-tab
      ref={ref}
      data-index={index}
      data-section-id={section.props.id}
      text={section.props.title}
      selected={selected || undefined}
      with-sub-sections={subSectionsAvailable || undefined}
    />
  );
};
