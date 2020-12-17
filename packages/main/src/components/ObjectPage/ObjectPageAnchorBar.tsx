import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import '@ui5/webcomponents-icons/dist/pushpin-off';
import '@ui5/webcomponents-icons/dist/slim-arrow-down';
import '@ui5/webcomponents-icons/dist/slim-arrow-up';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { List } from '@ui5/webcomponents-react/lib/List';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React, { CSSProperties, forwardRef, ReactElement, RefObject, useCallback, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { stopPropagation } from '../../internal/stopPropagation';
import { StandardListItem } from '../../webComponents/StandardListItem';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { safeGetChildrenArray } from './ObjectPageUtils';
import { createPortal } from 'react-dom';

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
  anchorBarActionButton: {
    position: 'absolute',
    '--_ui5_button_compact_height': '1.375rem',
    '--_ui5_button_base_height': '1.375rem',
    '--_ui5_button_base_min_width': '1.375rem',
    '--_ui5_button_base_min_compact_width': '1.375rem',
    top: `-0.6875rem`,
    marginLeft: `-0.6875rem`,
    left: '50%',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '4rem',
      top: '50%',
      height: '0.0625rem'
    },
    '&:before': {
      right: '100%',
      backgroundImage: `linear-gradient(to left, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`
    },
    '&:after': {
      backgroundImage: `linear-gradient(to right, ${ThemingParameters.sapHighlightColor}, rgba(8,84,160,0))`,
      left: '100%'
    }
  },
  anchorBarActionButtonExpandable: {},
  anchorBarActionButtonPinnable: {},
  anchorBarActionPinnableAndExandable: {
    '&$anchorBarActionButtonPinnable': {
      marginLeft: '0.25rem',
      '&:before': {
        backgroundImage: 'none'
      }
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
  headerContentHeight: number;
  setHeaderPinned: (payload: any) => void;
  style?: CSSProperties;
  onToggleHeaderContentVisibility: (e: any) => void;
  className: string;
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
    headerContentHeight,
    style,
    className
  } = props;

  const classes = useStyles();

  const shouldRenderHideHeaderButton = showHideHeaderButton;
  const shouldRenderHeaderPinnableButton = headerContentPinnable && headerContentHeight > 0;
  const showBothActions = shouldRenderHeaderPinnableButton && shouldRenderHideHeaderButton;
  const [popoverContent, setPopoverContent] = useState<ReactElement>(null);
  const popoverRef = useRef<Ui5PopoverDomRef>(null);

  const onPinHeader = useCallback(
    (e) => {
      setHeaderPinned(e.target.pressed);
    },
    [setHeaderPinned]
  );

  const onTabItemSelect = useCallback(
    (event) => {
      const { sectionId, index } = event.detail.tab.dataset;
      // eslint-disable-next-line eqeqeq
      const section = safeGetChildrenArray<ReactElement>(sections).find((el) => el.props.id == sectionId);
      handleOnSectionSelected(
        enrichEventWithDetails({} as any, {
          ...section,
          index
        })
      );
    },
    [sections]
  );

  const onShowSubSectionPopover = useCallback(
    (e, section) => {
      setPopoverContent(section);
      popoverRef.current.openBy(e.target.parentElement);
    },
    [setPopoverContent, popoverRef]
  );

  const onSubSectionClick = useCallback(
    (e) => {
      const selectedId = e.detail.item.dataset.key;
      const subSection = popoverContent.props.children
        .filter((item) => item.props && item.props.isSubSection)
        .find((item) => item.props.id === selectedId);
      if (subSection) {
        handleOnSubSectionSelected(enrichEventWithDetails(e, { section: popoverContent, subSection }));
      }
      popoverRef.current.close();
    },
    [handleOnSubSectionSelected, popoverRef, popoverContent]
  );

  return (
    <section className={className} role="navigation" style={style} ref={ref}>
      <TabContainer collapsed fixed onTabSelect={onTabItemSelect} showOverflow>
        {safeGetChildrenArray(sections).map((section: ReactElement, index) => {
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
          icon={headerContentHeight === 0 ? 'slim-arrow-down' : 'slim-arrow-up'}
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
      {createPortal(
        <Popover placementType={PlacementType.Bottom} noArrow ref={popoverRef} onAfterClose={stopPropagation}>
          <List onItemClick={onSubSectionClick}>
            {popoverContent?.props?.children
              .filter((item) => item.props && item.props.isSubSection)
              .map((item) => (
                <StandardListItem key={item.props.id} data-key={item.props.id}>
                  {item.props.title}
                </StandardListItem>
              ))}
          </List>
        </Popover>,
        document.body
      )}
    </section>
  );
});

ObjectPageAnchorBar.displayName = 'ObjectPageAnchorBar';

export { ObjectPageAnchorBar };
