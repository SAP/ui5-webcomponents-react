import { withStyles } from '@ui5-webcomponents-react/styles';
import { Device, StyleClassHelper } from '@ui5-webcomponents-react/utils';
import { ButtonType } from '../../lib/ButtonType';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import React, { Children, cloneElement, Component, ReactElement, ReactNode } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { ButtonPropTypes } from '../../webComponents/Button';
import styles from './ActionSheet.jss';

export interface ActionSheetPropTypes extends Fiori3CommonProps {
  openBy: ReactNode;
  placement?: PlacementType;
  children?: ReactElement<ButtonPropTypes> | Array<ReactElement<ButtonPropTypes>>;
}

export interface ActionSheetPropsInternal extends ActionSheetPropTypes, ClassProps {}

interface ActionSheetState {
  open: boolean;
}

@withStyles(styles)
export class ActionSheet extends Component<ActionSheetPropTypes, ActionSheetState> {
  static defaultProps = {
    placement: PlacementType.Bottom
  };

  private popoverRef = null;

  private onActionButtonClicked = (handler) => () => {
    this.setState({ open: false });
    handler();
  };

  private renderActionSheetButton = (element) => {
    if (element && element.props) {
      const { classes } = this.props as ActionSheetPropsInternal;
      return (
        <div key={element.key} className={classes.actionButtonContainer}>
          {cloneElement(element, {
            style: {
              justifyContent: 'flex-start'
            },
            type: ButtonType.Transparent,
            className: classes.actionButton,
            onPress: this.onActionButtonClicked(element.props.onPress)
          })}
        </div>
      );
    }
    return element;
  };

  getPopoverRef = (el) => {
    this.popoverRef = el;
  };

  render() {
    const { children, placement, classes, openBy, style } = this.props as ActionSheetPropsInternal;

    const actionSheetClasses = StyleClassHelper.of(classes.actionSheet);
    if (Device.system.tablet) {
      actionSheetClasses.put(classes.tablet);
    } else if (Device.system.phone) {
      actionSheetClasses.put(classes.phone);
    }

    return (
      <Popover
        hideHeader
        innerComponentRef={this.getPopoverRef}
        openBy={openBy}
        placementType={placement}
        style={style}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        <ul className={classes.actionSheet}>
          {Children.map(children, (child: ReactElement<ButtonPropTypes>) => this.renderActionSheetButton(child))}
        </ul>
      </Popover>
    );
  }
}
