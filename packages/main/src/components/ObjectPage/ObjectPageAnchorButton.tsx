import '@ui5/webcomponents-icons/dist/slim-arrow-down';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import React, { FC, useEffect, useRef } from 'react';

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
    if (subSectionsAvailable) {
      try {
        const element = ref.current?.parentElement?.shadowRoot?.querySelector(
          `.ui5-tc__headerList li[aria-posinset="${index + 1}"] .ui5-tab-strip-itemContent`
        );

        if (element && !element.querySelector('ui5-icon')) {
          const icon = document.createElement('ui5-icon');
          (icon as any).name = 'slim-arrow-down';
          icon.style.verticalAlign = 'text-bottom';
          icon.style.pointerEvents = 'all';
          icon.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            e.preventDefault();
            e.stopPropagation();
            onShowSubSectionPopover(e, section);
          });
          element.appendChild(icon);
        }
      } catch (e) {
        // empty catch block, mainly required for tests
      }
    }
  }, [subSectionsAvailable, ref, onShowSubSectionPopover, section]);

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
