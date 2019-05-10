import { Event } from '@fiori-for-react/utils';
import { Button } from '@lib/Button';
import { ButtonType } from '@lib/ButtonType';
import { List } from '@lib/List';
import { ListItemTypes } from '@lib/ListItemTypes';
import { ListMode } from '@lib/ListMode';
import { PlacementType } from '@lib/PlacementType';
import { ResponsivePopover } from '@lib/ResponsivePopover';
import { StandardListItem } from '@lib/StandardListItem';
import { Title } from '@lib/Title';
import { TitleLevel } from '@lib/TitleLevel';
import React, { Component, ReactElement } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { withStyles } from '@fiori-for-react/styles';
import { ButtonPropTypes } from '../../webComponents/Button';

export interface VariantItem {
  key: string;
  label: string;
}

export interface VariantManagementPropTypes extends CommonProps {
  enabled?: boolean;
  placement?: PlacementType;
  popupTitle?: string;
  initialSelectedKey?: string;
  closeOnItemSelect?: boolean;
  variantItems: VariantItem[];
  onSelect?: (event: Event) => void;
  level?: TitleLevel;
}

interface VariantManagementInternalProps extends VariantManagementPropTypes, ClassProps {
  theme: JSSTheme;
}

interface VariantManagementState {
  selectedKey: string;
  open: boolean;
}

const styles = ({ parameters }: JSSTheme) => ({
  VariantManagement: {
    display: 'inline',
    textAlign: 'center',
    cursor: 'pointer'
  },
  VariantManagementText: {
    '& > *': {
      cursor: 'pointer',
      textShadow: parameters.sapUiContentShadowColor
    }
  },
  footer: {
    float: 'right',
    padding: '0.5rem'
  }
});

@withStyles(styles)
export class VariantManagement extends Component<VariantManagementPropTypes, VariantManagementState> {
  static defaultProps = {
    enabled: true,
    popupTitle: 'Variants',
    initialSelectedKey: null,
    onSelect: () => {},
    closeOnItemSelect: true,
    placement: PlacementType.Bottom,
    level: TitleLevel.H4
  };

  private initialSelectedKey = this.props.variantItems && this.props.variantItems[0] && this.props.variantItems[0].key;

  state = {
    selectedKey: this.initialSelectedKey,
    open: false
  };

  _getItemByKey(key, items) {
    return items.filter((item) => item.key === key)[0];
  }

  private handleCancelButtonClick = () => {
    this.setState({ open: false });
  };

  private handleAfterOpen = () => {
    this.setState({ open: true });
  };

  private handleVariantItemSelect = (event) => {
    const selectedKey = event.getParameter('item').getAttribute('data-key');
    const { variantItems } = this.props as VariantManagementInternalProps;
    const selectedItem = this._getItemByKey(selectedKey, variantItems) || variantItems[0];
    this.setState({ selectedKey });
    this.props.onSelect(Event.of(this, event.getOriginalEvent(), { selectedItem }));
    if (this.props.closeOnItemSelect) {
      const openPopover = !this.state.open;
      this.setState({ open: openPopover });
    }
  };

  private get variantManagementButton() {
    const { classes, variantItems, level } = this.props as VariantManagementInternalProps;
    const { selectedKey } = this.state;
    const selectedItem = this._getItemByKey(selectedKey, variantItems) || variantItems[0];

    return (
      <div className={classes.VariantManagement}>
        <span className={classes.VariantManagementText}>
          <Title level={level}>{selectedItem.label}</Title>
        </span>
        <Button type={ButtonType.Transparent} icon={'navigation-down-arrow'} />
      </div>
    );
  }

  private getVariantManagementFooterButtons = () => {
    const { classes } = this.props as VariantManagementInternalProps;
    return [
      <Button
        className={classes.footer}
        key="btn-cancel"
        onPress={this.handleCancelButtonClick}
        type={ButtonType.Emphasized}
      >
        Cancel
      </Button>
    ] as Array<ReactElement<ButtonPropTypes>>;
  };

  render() {
    const { variantItems, popupTitle, className, style, tooltip } = this.props;
    const { selectedKey } = this.state;

    if (!variantItems || variantItems.length < 1) {
      return null;
    }

    return (
      <ResponsivePopover
        open={this.state.open}
        onAfterOpen={this.handleAfterOpen}
        headerText={popupTitle}
        placementType={this.props.placement}
        openBy={this.variantManagementButton}
        footer={this.getVariantManagementFooterButtons() as Array<ReactElement<ButtonPropTypes>>}
        className={className}
        innerStyles={style}
        tooltip={tooltip}
      >
        <List onItemPress={this.handleVariantItemSelect} mode={ListMode.SingleSelect}>
          {variantItems.map((item) => (
            <StandardListItem
              style={{ width: '300px' }}
              data-key={item.key}
              type={ListItemTypes.Active}
              key={item.key}
              selected={selectedKey === item.key}
            >
              {item.label}
            </StandardListItem>
          ))}
        </List>
      </ResponsivePopover>
    );
  }
}
