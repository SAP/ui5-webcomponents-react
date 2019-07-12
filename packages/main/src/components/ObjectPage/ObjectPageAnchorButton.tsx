import { Event, fonts } from '@ui5/webcomponents-react-base';
import React, { FC, useCallback, useState } from 'react';
// @ts-ignore
import { createUseStyles } from 'react-jss';
import { Link } from 'react-scroll';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ObjectWithVariableKeys } from '../../interfaces/ObjectWithVariableKeys';
import { Icon } from '../../lib/Icon';
import { List } from '../../lib/List';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import { StandardListItem } from '../../lib/StandardListItem';

interface ObjectPageAnchorPropTypes {
  section: any;
  classes: ObjectWithVariableKeys;
  onAnchorSelected: (event: Event) => void;
  onSubSectionSelected?: (event: Event) => void;
  index: number;
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
  const { section, index, onSubSectionSelected, onAnchorSelected } = props;

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

  const onSubSectionClick = useCallback((e) => {
    const selectedId = e.getParameter('item').dataset.key;
    const subSection = section.props.children
      .filter((item) => item.props && item.props.isSubSection)
      .find((item) => item.props.id === selectedId);
    if (open && subSection) {
      onSubSectionSelected(Event.of(null, e.getOriginalEvent(), subSection));
    }
    closeModal();
  }, []);

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

  const onScrollActive = useCallback(
    (e) => {
      onAnchorSelected(
        Event.of(null, {} as any, {
          ...section,
          index
        })
      );
    },
    [onAnchorSelected]
  );

  const renderSubSectionListItem = (item) => {
    return (
      <Link to={`ObjectPageSubSection-${item.props.id}`} containerId="ObjectPageSections" smooth offset={36}>
        <StandardListItem key={item.props.id} data-key={item.props.id}>
          {item.props.title}
        </StandardListItem>
      </Link>
    );
  };

  return (
    <li className={classes.anchorButtonContainer}>
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
