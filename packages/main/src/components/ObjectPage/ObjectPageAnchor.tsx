import { Event, StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { Component, RefObject } from 'react';
import { ObjectWithVariableKeys } from '../../interfaces/ObjectWithVariableKeys';
import { Icon } from '../../lib/Icon';
import { List } from '../../lib/List';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import { StandardListItem } from '../../lib/StandardListItem';
import { AnchorButton } from './AnchorButton';

export interface ObjectPageAnchorPropTypes {
  section: any;
  classes: ObjectWithVariableKeys;
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

  private onSubSectionClick = (e) => {
    const { section, onSubSectionSelected } = this.props;
    const selectedId = e.getParameter('item').dataset.key;
    const subSection = section.props.children
      .filter((item) => item.props && item.props.isSubSection)
      .find((item) => item.props.id === selectedId);
    if (this.state.open && subSection) {
      onSubSectionSelected(Event.of(this, e.getOriginalEvent(), subSection));
    }
    this.closeModal();
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
      <StandardListItem key={item.props.id} data-key={item.props.id}>
        {item.props.title}
      </StandardListItem>
    );
  };

  private handleAnchorButtonClick = (e) => {
    const isIconClicked = !e.getParameter('text');
    const { section, onAnchorSelected } = this.props;
    if (isIconClicked) {
      this.openModal();
    } else if (onAnchorSelected) {
      onAnchorSelected(Event.of(this, e.getOriginalEvent(), section));
    }
  };

  render() {
    const { section, classes, selected } = this.props;

    const containerClasses = StyleClassHelper.of(classes.anchorButtonContainer);
    const subSectionsAvailable = this.subSectionsAvailable();

    const titleButton = (
      <AnchorButton onClick={this.handleAnchorButtonClick} selected={selected}>
        {section.props.title}
      </AnchorButton>
    );

    const navigationIcon = (
      <Icon
        src="sap-icon://slim-arrow-down"
        onPress={this.handleAnchorButtonClick}
        style={{
          height: '1rem',
          width: '1rem',
          cursor: 'pointer',
          margin: '0 0.25rem 0 0.375rem',
          fontSize: '0.875rem'
        }}
      />
    );

    return (
      <li className={containerClasses.valueOf()}>
        {titleButton}
        {subSectionsAvailable && (
          <Popover
            open={this.state.open}
            placementType={PlacementType.Bottom}
            openBy={navigationIcon}
            onAfterClose={this.closeModal}
            noArrow
            noHeader
          >
            <List onItemPress={this.onSubSectionClick}>
              {this.props.section.props.children
                .filter((item) => item.props && item.props.isSubSection)
                .map(this.renderSubSectionListItem)}
            </List>
          </Popover>
        )}
      </li>
    );
  }
}
