import { Device, StyleClassHelper, useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { Children, cloneElement, forwardRef, ReactElement, ReactNode, RefObject } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { ButtonDesign } from '../../lib/ButtonDesign';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import { ButtonPropTypes } from '../../webComponents/Button';
import styles from './ActionSheet.jss';
// @ts-ignore
import { createUseStyles } from 'react-jss';

export interface ActionSheetPropTypes extends CommonProps {
  openBy: ReactNode;
  placement?: PlacementType;
  children?: ReactElement<ButtonPropTypes> | Array<ReactElement<ButtonPropTypes>>;
}

export interface ActionSheetPropsInternal extends ActionSheetPropTypes, ClassProps {}

const useStyles = createUseStyles(styles);

const ActionSheet = forwardRef((props: ActionSheetPropTypes, ref: RefObject<Ui5PopoverDomRef>) => {
  const { children, placement, openBy, style, slot } = props as ActionSheetPropsInternal;

  const classes = useStyles();

  const actionSheetClasses = StyleClassHelper.of(classes.actionSheet);
  if (Device.system.tablet) {
    actionSheetClasses.put(classes.tablet);
  } else if (Device.system.phone) {
    actionSheetClasses.put(classes.phone);
  }

  const popoverRef: RefObject<Ui5PopoverDomRef> = useConsolidatedRef(ref);

  const renderActionSheetButton = (element) => {
    if (element && element.props) {
      return (
        <div key={element.key} className={classes.actionButtonContainer}>
          {cloneElement(element, {
            design: ButtonDesign.Transparent,
            onClick: onActionButtonClicked(element.props.onClick)
          })}
        </div>
      );
    }
    return element;
  };

  const onActionButtonClicked = (handler) => () => {
    popoverRef.current.close();
    if (typeof handler === 'function') {
      handler();
    }
  };

  return (
    <Popover ref={popoverRef} openBy={openBy} placementType={placement} style={style} slot={slot}>
      <ul className={actionSheetClasses.valueOf()}>{Children.map(children, renderActionSheetButton)}</ul>
    </Popover>
  );
});

ActionSheet.defaultProps = {
  placement: PlacementType.Bottom
};
ActionSheet.displayName = 'ActionSheet';

export { ActionSheet };
