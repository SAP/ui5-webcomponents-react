import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, { FC, useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { ScrollLink } from '@ui5/webcomponents-react-base/lib/ScrollLink';

interface ObjectPageAnchorPropTypes {
  section: any;
  onSectionSelected: (event: Event) => void;
  onSubSectionSelected?: (event: Event) => void;
  index: number;
  selected: boolean;
  collapsedHeader: boolean;
  mode: ObjectPageMode;
}

const anchorButtonStyles = ({ parameters }: JSSTheme) => ({
  anchorButtonContainer: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:not(:first-child)': {
      marginLeft: '2rem'
    }
  },
  button: {
    color: parameters.sapUiContentLabelColor,
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    cursor: 'pointer'
  },
  selected: {
    color: parameters.sapUiSelected,
    minWidth: '2rem',
    textAlign: 'center',
    '&:after': {
      content: '""',
      borderBottom: `0.188rem solid ${parameters.sapUiSelected}`,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0
    }
  }
});
const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof anchorButtonStyles>>(anchorButtonStyles, {
  name: 'ObjectPageAnchorButton'
});

export const ObjectPageAnchorButton: FC<ObjectPageAnchorPropTypes> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const { section, collapsedHeader, index, onSubSectionSelected, onSectionSelected, selected, mode } = props;

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  let subSectionsAvailable = false;
  if (section.props.children && section.props.children.filter) {
    const subSections = section.props.children.filter((item) => item.props && item.props.isSubSection);
    subSectionsAvailable = subSections.length > 0;
  }

  const onSubSectionClick = useCallback(
    (e) => {
      const selectedId = e.getParameter('item').dataset.key;
      const subSection = section.props.children
        .filter((item) => item.props && item.props.isSubSection)
        .find((item) => item.props.id === selectedId);
      if (subSection) {
        onSubSectionSelected(Event.of(null, e.getOriginalEvent(), { section, subSection, sectionIndex: index }));
      }
      closeModal();
    },
    [onSubSectionSelected, open]
  );

  const navigationIcon = (
    <Icon
      name="slim-arrow-down"
      style={{
        height: '1rem',
        width: '1rem',
        cursor: 'pointer',
        margin: '0 0.25rem 0 0.375rem',
        fontSize: '0.875rem'
      }}
    />
  );

  const onScrollActive = useCallback(() => {
    onSectionSelected(
      Event.of(null, {} as any, {
        ...section,
        index
      })
    );
  }, [onSectionSelected]);

  const renderSubSectionListItem = (item) => {
    if (mode === ObjectPageMode.IconTabBar) {
      return (
        <StandardListItem key={item.props.id} data-key={item.props.id}>
          {item.props.title}
        </StandardListItem>
      );
    }

    return (
      <ScrollLink
        key={item.props.id}
        id={`ObjectPageSubSection-${item.props.id}`}
        scrollOffset={collapsedHeader ? 45 : 0}
      >
        <StandardListItem data-key={item.props.id}>{item.props.title}</StandardListItem>
      </ScrollLink>
    );
  };

  let sectionSelector = null;
  if (mode === ObjectPageMode.Default) {
    sectionSelector = (
      <ScrollLink
        id={`ObjectPageSection-${section.props.id}`}
        onSetActive={onScrollActive}
        activeClass={classes.selected}
        alwaysToTop={index === 0}
        scrollOffset={45}
      >
        <span className={classes.button}>{section.props.title}</span>
      </ScrollLink>
    );
  } else {
    sectionSelector = (
      <span onClick={onScrollActive} className={`${classes.button}${selected ? ` ${classes.selected}` : ''}`}>
        {section.props.title}
      </span>
    );
  }

  return (
    <li className={classes.anchorButtonContainer}>
      {sectionSelector}
      {subSectionsAvailable && (
        <Popover
          open={open}
          placementType={PlacementType.Bottom}
          openBy={navigationIcon}
          onAfterClose={closeModal}
          onBeforeOpen={openModal}
          noArrow
        >
          <List onItemClick={onSubSectionClick}>
            {section.props.children
              .filter((item) => item.props && item.props.isSubSection)
              .map(renderSubSectionListItem)}
          </List>
        </Popover>
      )}
    </li>
  );
};
