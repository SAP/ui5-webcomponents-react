import { Device, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { Children, cloneElement, Component, ReactElement, ReactNode, RefObject } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { ButtonDesign } from '../../lib/ButtonDesign';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import { ButtonPropTypes } from '../../lib/Button';
import styles from './ActionSheet.jss';
import { Ui5PopoverDomRef } from '../../lib/Ui5PopoverDomRef';

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

  private popoverRef: RefObject<Ui5PopoverDomRef> = React.createRef();

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
            design: ButtonDesign.Transparent,
            className: classes.actionButton,
            onPress: this.onActionButtonClicked(element.props.onPress)
          })}
        </div>
      );
    }
    return element;
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
        noHeader
        ref={this.popoverRef}
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
