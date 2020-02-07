import { Device } from '@ui5/webcomponents-react-base/lib/Device';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import React, { Children, cloneElement, FC, forwardRef, ReactElement, ReactNode, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { ButtonPropTypes } from '../../webComponents/Button';
import styles from './ActionSheet.jss';

export interface ActionSheetPropTypes extends CommonProps {
  openBy: ReactNode;
  placement?: PlacementType;
  children?: ReactElement<ButtonPropTypes> | Array<ReactElement<ButtonPropTypes>>;
}

const useStyles = createUseStyles(styles, { name: 'ActionSheet' });

/**
 * <code>import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';</code>
 */
const ActionSheet: FC<ActionSheetPropTypes> = forwardRef(
  (props: ActionSheetPropTypes, ref: RefObject<Ui5PopoverDomRef>) => {
    const { children, placement, openBy, style, slot } = props;

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

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <Popover
        ref={popoverRef}
        openBy={openBy}
        placementType={placement}
        style={style}
        slot={slot}
        {...passThroughProps}
      >
        <ul className={actionSheetClasses.valueOf()}>{Children.map(children, renderActionSheetButton)}</ul>
      </Popover>
    );
  }
);

ActionSheet.defaultProps = {
  placement: PlacementType.Bottom
};
ActionSheet.displayName = 'ActionSheet';

export { ActionSheet };
