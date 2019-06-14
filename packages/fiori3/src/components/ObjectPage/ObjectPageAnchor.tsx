import { Event, StyleClassHelper } from '@ui5-webcomponents-react/utils';
import { Button } from '../../lib/Button';
import { ButtonType } from '../../lib/ButtonType';
import { CustomListItem } from '../../lib/CustomListItem';
import { Icon } from '../../lib/Icon';
import { Label } from '../../lib/Label';
import { List } from '../../lib/List';
import { ListItemTypes } from '../../lib/ListItemTypes';
import { ObjectPageMode } from '../../lib/ObjectPageMode';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { ObjectWithVariableKeys } from '../../interfaces/ObjectWithVariableKeys';

export interface ObjectPageAnchorPropTypes {
  section: any;
  index: number;
  classes: ObjectWithVariableKeys;
  mode: ObjectPageMode;
  onAnchorSelected: (event: Event) => void;
  onSubSectionSelected: (event: Event) => void;
  selected: boolean;
}

export interface ObjectPageAnchorState {
  open: boolean;
}

export class ObjectPageAnchor extends Component<ObjectPageAnchorPropTypes, ObjectPageAnchorState> {
  state = {
    open: false
  };

  private containerDiv: HTMLElement;

  private openModal = () => {
    this.setState({
      open: true
    });
  };

  private closeModal = () => {
    this.setState({
      open: false
    });
  };

  private handleSubSectionSelected = (e) => {
    const { section, onAnchorSelected } = this.props;
    if (this.state.open && onAnchorSelected) {
      onAnchorSelected(Event.of(this, new CustomEvent('subSectionSelected'), section));
    }
    this.closeModal();
  };

  private onSubSectionClick = (e) => {
    const { section, onSubSectionSelected } = this.props;
    const selectedId = e.getParameter('item').dataset.key;
    const subSection = section.props.children
      .filter((item) => item.props && item.props.isSubSection)
      .find((item) => item.props.id === selectedId);
    if (this.state.open && subSection && typeof onSubSectionSelected === 'function') {
      onSubSectionSelected(Event.of(this, new CustomEvent('subSectionSelected'), subSection));
    }
  };

  private subSectionsAvailable() {
    const { section } = this.props;
    if (section.props.children && section.props.children.filter) {
      const subSections = section.props.children.filter((item) => item.props && item.props.isSubSection);
      return subSections.length > 0;
    }
    return false;
  }

  private renderSubSectionListItem = (item) => {
    return (
      <CustomListItem key={item.props.id} type={ListItemTypes.Active} data-key={item.props.id}>
        <Link
          onSetActive={this.handleSubSectionSelected}
          spy
          smooth
          to={`ObjectPageSubSection-${item.props.id}`}
          containerId="ObjectPageSections"
        >
          <Label>{item.props.title}</Label>
        </Link>
      </CustomListItem>
    );
  };

  private handleAnchorButtonClick = (e) => {
    const isIconClicked = e.getHtmlSourceElement().constructor.getMetadata().metadata.tag === 'ui5-icon';
    const { section, onAnchorSelected } = this.props;
    if (isIconClicked) {
      this.openModal();
    } else if (onAnchorSelected) {
      onAnchorSelected(Event.of(this, e.getOriginalEvent(), section));
    }
  };

  render() {
    const { section, classes, mode, selected } = this.props;

    const containerClasses = StyleClassHelper.of(classes.anchorButtonContainer);
    const subSectionsAvailable = this.subSectionsAvailable();

    const titleButton = (
      <Button className={classes.anchorButton} type={ButtonType.Transparent} onPress={this.handleAnchorButtonClick}>
        {section.props.title}
      </Button>
    );

    let anchorContent = (
      <Link
        spy
        smooth
        activeClass={classes.active}
        to={`ObjectPageSection-${section.props.id}`}
        containerId="ObjectPageSections"
      >
        {titleButton}
      </Link>
    );

    const navigationIcon = (
      <Icon
        src="sap-icon://slim-arrow-down"
        onPress={this.handleAnchorButtonClick}
        style={{ display: 'flex', height: '1.875rem', cursor: 'pointer' }}
      />
    );

    if (mode === ObjectPageMode.IconTabBar) {
      anchorContent = titleButton;
      if (selected) {
        containerClasses.put(classes.iconTabModeSelected);
      }
    }

    return (
      <div
        ref={(ref) => {
          this.containerDiv = ref;
        }}
        className={containerClasses.valueOf()}
      >
        {anchorContent}
        {subSectionsAvailable && (
          <Popover
            open={this.state.open}
            placementType={PlacementType.Bottom}
            openBy={navigationIcon}
            onAfterClose={this.closeModal}
            hideArrow
            hideHeader
          >
            <List onItemPress={this.onSubSectionClick}>
              {this.props.section.props.children
                .filter((item) => item.props && item.props.isSubSection)
                .map(this.renderSubSectionListItem)}
            </List>
          </Popover>
        )}
      </div>
    );
  }
}
