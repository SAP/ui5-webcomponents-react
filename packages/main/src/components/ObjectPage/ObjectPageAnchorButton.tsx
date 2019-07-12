import { Event, fonts } from '@ui5/webcomponents-react-base';
import React, { FC, useCallback, useState } from 'react';
// @ts-ignore
import { createUseStyles } from 'react-jss';
import { Link } from 'react-scroll';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { Icon } from '../../lib/Icon';
import { List } from '../../lib/List';
import { ObjectPageMode } from '../../lib/ObjectPageMode';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import { StandardListItem } from '../../lib/StandardListItem';

interface ObjectPageAnchorPropTypes {
  section: any;
  onSectionSelected: (event: Event) => void;
  onSubSectionSelected?: (event: Event) => void;
  index: number;
  selected: boolean;
  mode: ObjectPageMode;
}

const useStyles = createUseStyles(({ parameters }: JSSTheme) => ({
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
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize
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
}));

export const ObjectPageAnchorButton: FC<ObjectPageAnchorPropTypes> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const { section, index, onSubSectionSelected, onSectionSelected, selected, mode } = props;

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
      if (open && subSection) {
        onSubSectionSelected(Event.of(null, e.getOriginalEvent(), { section, subSection, sectionIndex: index }));
      }
      closeModal();
    },
    [onSubSectionSelected, open]
  );

  const navigationIcon = (
    <Icon
      src="sap-icon://slim-arrow-down"
      onPress={openModal}
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
      <Link
        key={item.props.id}
        to={`ObjectPageSubSection-${item.props.id}`}
        containerId="ObjectPageSections"
        smooth
        offset={36}
      >
        <StandardListItem data-key={item.props.id}>{item.props.title}</StandardListItem>
      </Link>
    );
  };

  let sectionSelector = null;
  if (mode === ObjectPageMode.Default) {
    sectionSelector = (
      <Link
        to={`ObjectPageSection-${section.props.id}`}
        containerId="ObjectPageSections"
        spy
        activeClass={classes.selected}
        onSetActive={onScrollActive}
        duration={400}
        smooth
        offset={index === 0 ? 0 : 45}
      >
        <span className={classes.button}>{section.props.title}</span>
      </Link>
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
