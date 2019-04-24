import { PlacementType } from '@fiori-for-react/core/enums';
import { ClassProps } from '@fiori-for-react/core/types';
import { Device } from '@fiori-for-react/core/utils';
import { withStyles } from '@fiori-for-react/core/utils/withStyles';
import { StyleClassHelper } from '@fiori-for-react/utils';
import React, { Children, cloneElement, Component, ReactElement, ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import { ButtonType } from '../../enums/ButtonType';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { ButtonPropTypes } from '../../webComponents/Button';
import { ResponsivePopover } from '../ResponsivePopover';
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
      <ResponsivePopover
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
      </ResponsivePopover>
    );
  }
}
