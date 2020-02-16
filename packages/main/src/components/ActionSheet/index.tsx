import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
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
  children?: ReactElement<ButtonPropTypes> | ReactElement<ButtonPropTypes>[];
}

const useStyles = createUseStyles(styles, { name: 'ActionSheet' });

addCustomCSS(
  'ui5-button',
  `
  :host([data-is-action-sheet-button]) .ui5-button-root {
    justify-content: flex-start;
  }
  `
);

/**
 * <code>import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';</code>
 */
const ActionSheet: FC<ActionSheetPropTypes> = forwardRef(
  (props: ActionSheetPropTypes, ref: RefObject<Ui5PopoverDomRef>) => {
    const { children, placement, openBy, style, slot, className } = props;

    const classes = useStyles();

    const actionSheetClasses = StyleClassHelper.of(classes.actionSheet);
    if (className) {
      actionSheetClasses.put(className);
    }
    if (Device.system.tablet) {
      actionSheetClasses.put(classes.tablet);
    } else if (Device.system.phone) {
      actionSheetClasses.put(classes.phone);
    }

    const popoverRef: RefObject<Ui5PopoverDomRef> = useConsolidatedRef(ref);

    const onActionButtonClicked = (handler) => (e) => {
      popoverRef.current.close();
      if (typeof handler === 'function') {
        handler(e);
      }
    };

    const renderActionSheetButton = (element, index) => {
      return cloneElement(element, {
        key: index,
        design: ButtonDesign.Transparent,
        onClick: onActionButtonClicked(element.props.onClick),
        'data-is-action-sheet-button': ''
      });
    };

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <Popover
        ref={popoverRef}
        openBy={openBy}
        placementType={placement}
        style={style}
        slot={slot}
        className={actionSheetClasses.valueOf()}
        {...passThroughProps}
      >
        {Children.map(children, renderActionSheetButton)}
      </Popover>
    );
  }
);

ActionSheet.defaultProps = {
  placement: PlacementType.Bottom
};
ActionSheet.displayName = 'ActionSheet';

export { ActionSheet };
