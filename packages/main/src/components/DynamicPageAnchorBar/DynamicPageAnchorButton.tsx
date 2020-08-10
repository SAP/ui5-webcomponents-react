import '@ui5/webcomponents-icons/dist/icons/slim-arrow-down';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import React, { FC, useRef } from 'react';

interface DynamicPageAnchorPropTypes {
  section: any;
  onShowSubSectionPopover: (event: any, section: any) => void;
  index: number;
  selected: boolean;
}

export const DynamicPageAnchorButton: FC<DynamicPageAnchorPropTypes> = (props: DynamicPageAnchorPropTypes) => {
  const ref = useRef<HTMLElement>();
  const { section, index, selected, onShowSubSectionPopover } = props;

  return (
    <Tab
      ref={ref}
      data-index={index}
      data-section-id={section.props.id}
      text={section.props.title}
      selected={selected}
    />
  );
};
