import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import '@ui5/webcomponents-icons/dist/icons/pushpin-off';
import '@ui5/webcomponents-icons/dist/icons/slim-arrow-down';
import '@ui5/webcomponents-icons/dist/icons/slim-arrow-up';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React, { CSSProperties, FC, forwardRef, ReactElement, RefObject, useCallback, useState, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { StandardListItem } from '../../webComponents/StandardListItem';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { safeGetChildrenArray } from './ObjectPageUtils';

addCustomCSS(
  'ui5-button',
  `
:host([data-ui5wcr-object-page-header-action]) .ui5-button-root {
 padding: 0;
}`
);
addCustomCSS(
  'ui5-togglebutton',
  `
:host([data-ui5wcr-object-page-header-action]) .ui5-button-root {
 padding: 0;
}`
);

const anchorBarStyles = {
  anchorBar: {
    position: 'sticky',
    zIndex: 2
  },
  anchorBarActionButton: {
    position: 'absolute',
    '--_ui5_button_compact_height': '1.375rem',
    '--_ui5_button_base_height': '1.375rem',
    '--_ui5_button_base_min_compact_width': '1.375rem',
    top: `-0.6875rem`,
    marginLeft: `-0.6875rem`,
    left: '50%'
  },
  anchorBarActionButtonExpandable: {},
  anchorBarActionButtonPinnable: {},
  anchorBarActionPinnableAndExandable: {
    '&$anchorBarActionButtonPinnable': {
      marginLeft: '0.25rem'
    },
    '&$anchorBarActionButtonExpandable': {
      marginLeft: '-1.75rem'
    }
  }
};

const useStyles = createUseStyles(anchorBarStyles, { name: 'ObjectPageAnchorBar' });

interface Props {
  sections: ReactElement | ReactElement[];
  selectedSectionId: string;
  handleOnSectionSelected: (e: unknown) => void;
  handleOnSubSectionSelected: (e: unknown) => void;
  showHideHeaderButton: boolean;
  headerContentPinnable: boolean;
  headerPinned: boolean;
  showHeaderContent: boolean;
  setHeaderPinned: (payload: any) => void;
  style?: CSSProperties;
  onToggleHeaderContentVisibility: (e: any) => void;
}

const ObjectPageAnchorBar = forwardRef((props: Props, ref: RefObject<HTMLElement>) => {
  const {
    sections,
    selectedSectionId,
    handleOnSectionSelected,
    handleOnSubSectionSelected,
    showHideHeaderButton,
    headerContentPinnable,
    onToggleHeaderContentVisibility,
    headerPinned,
    setHeaderPinned,
    showHeaderContent,
    style
  } = props;

  const classes = useStyles();

  const shouldRenderHideHeaderButton = showHideHeaderButton;
  const shouldRenderHeaderPinnableButton = headerContentPinnable && showHeaderContent;
  const showBothActions = shouldRenderHeaderPinnableButton && shouldRenderHideHeaderButton;
  const [popoverContent, setPopoverContent] = useState(null);
  const popoverRef = useRef<Ui5PopoverDomRef>(null);

  const onPinHeader = useCallback(
    (e) => {
      setHeaderPinned(e.getParameter('pressed'));
    },
    [setHeaderPinned]
  );

  const onTabItemSelect = useCallback((event) => {
    const { sectionId, index } = event.getParameter('item').dataset;
    // eslint-disable-next-line eqeqeq
    const section = safeGetChildrenArray(sections).find((el) => el.props.id == sectionId);
    handleOnSectionSelected(
      Event.of(null, {} as any, {
        ...section,
        index
      })
    );
  }, []);

  const onShowSubSectionPopover = useCallback(
    (e, section) => {
      setPopoverContent(section);
      popoverRef.current.openBy(e.target.parentElement);
    },
    [setPopoverContent, popoverRef]
  );

  const onSubSectionClick = useCallback(
    (e) => {
      const selectedId = e.getParameter('item').dataset.key;
      const subSection = popoverContent.props.children
        .filter((item) => item.props && item.props.isSubSection)
        .find((item) => item.props.id === selectedId);
      if (subSection) {
        handleOnSubSectionSelected(Event.of(null, e.getOriginalEvent(), { section: popoverContent, subSection }));
      }
      popoverRef.current.close();
    },
    [handleOnSubSectionSelected, popoverRef, popoverContent]
  );

  return (
    <section className={classes.anchorBar} role="navigation" style={style} ref={ref}>
      <TabContainer collapsed fixed onItemSelect={onTabItemSelect} showOverflow>
        {safeGetChildrenArray(sections).map((section, index) => {
          return (
            <ObjectPageAnchorButton
              key={`Anchor-${section.props?.id}`}
              section={section}
              index={index}
              selected={selectedSectionId === section.props?.id}
              onShowSubSectionPopover={onShowSubSectionPopover}
            />
          );
        })}
      </TabContainer>
      {shouldRenderHideHeaderButton && (
        <Button
          icon={showHeaderContent ? 'slim-arrow-up' : 'slim-arrow-down'}
          onClick={onToggleHeaderContentVisibility}
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonExpandable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExandable : ''
          }`}
          data-ui5wcr-object-page-header-action=""
        />
      )}
      {shouldRenderHeaderPinnableButton && (
        <ToggleButton
          icon="pushpin-off"
          pressed={headerPinned}
          onClick={onPinHeader}
          className={`${classes.anchorBarActionButton} ${classes.anchorBarActionButtonPinnable} ${
            showBothActions ? classes.anchorBarActionPinnableAndExandable : ''
          }`}
          data-ui5wcr-object-page-header-action=""
        />
      )}
      <Popover placementType={PlacementType.Bottom} noArrow ref={popoverRef}>
        <List onItemClick={onSubSectionClick}>
          {popoverContent?.props?.children
            .filter((item) => item.props && item.props.isSubSection)
            .map((item) => (
              <StandardListItem key={item.props.id} data-key={item.props.id}>
                {item.props.title}
              </StandardListItem>
            ))}
        </List>
      </Popover>
    </section>
  );
});

ObjectPageAnchorBar.displayName = 'ObjectPageAnchorBar';

export { ObjectPageAnchorBar };
