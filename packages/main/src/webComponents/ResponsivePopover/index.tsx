import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5ResponsivePopover from '@ui5/webcomponents/dist/ResponsivePopover';
import React, { FC, ReactNode, RefObject, useCallback, useEffect, useMemo, useRef } from 'react';
import { Ui5ResponsivePopoverDomRef } from '../../interfaces/Ui5ResponsivePopoverDomRef';
import { UI5WebComponentsReactPopoverPropTypes } from '../../interfaces/UI5WebComponentsReactPopoverPropTypes';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ResponsivePopoverPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines if there is no enough space, the <code>ui5-popover</code> can be placed over the target.
   */
  allowTargetOverlap?: boolean;
  /**
   * Defines the header text. <br><br> <b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.
   */
  headerText?: string;
  /**
   * Determines the horizontal alignment of the <code>ui5-popover</code>. <br><br> Available options are: <ul> <li><code>Center</code></li> <li><code>Left</code></li> <li><code>Right</code></li> <li><code>Stretch</code></li> </ul>
   */
  horizontalAlign?: PopoverHorizontalAlign;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Defines whether the <code>ui5-popover</code> should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.
   */
  modal?: boolean;
  /**
   * Determines whether the <code>ui5-popover</code> arrow is hidden.
   */
  noArrow?: boolean;
  /**
   * Determines on which side the <code>ui5-popover</code> is placed at. <br><br> Available options are: <ul> <li><code>Left</code></li> <li><code>Right</code></li> <li><code>Top</code></li> <li><code>Bottom</code></li> </ul>
   */
  placementType?: PlacementType;
  /**
   * Determines the vertical alignment of the <code>ui5-popover</code>. <br><br> Available options are: <ul> <li><code>Center</code></li> <li><code>Top</code></li> <li><code>Bottom</code></li> <li><code>Stretch</code></li> </ul>
   */
  verticalAlign?: PopoverVerticalAlign;
  /**
   * Defines the header HTML Element.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Defines the footer HTML Element.
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the content of the Web Component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed.
   */
  onAfterClose?: (event: CustomEvent<{}>) => void;
  /**
   * Fired after the component is opened.
   */
  onAfterOpen?: (event: CustomEvent<{}>) => void;
  /**
   * Fired before the component is closed.
   */
  onBeforeClose?: (event: CustomEvent<{ escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened.
   */
  onBeforeOpen?: (event: CustomEvent<{}>) => void;
}

const ResponsivePopoverWebComponent = withWebComponent<ResponsivePopoverPropTypes>(UI5ResponsivePopover);

/**
 * <code>import { ResponsivePopover } from '@ui5/webcomponents-react/lib/ResponsivePopover';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ResponsivePopover" target="_blank">UI5 Web Components Playground</a>
 */
const ResponsivePopover: FC<ResponsivePopoverPropTypes & UI5WebComponentsReactPopoverPropTypes> = React.forwardRef(
  (
    props: ResponsivePopoverPropTypes & UI5WebComponentsReactPopoverPropTypes,
    givenRef: RefObject<Ui5ResponsivePopoverDomRef>
  ) => {
    const { propagateOpenByClickEvent, openBy, openByStyle, open, ...rest } = props;
    const openByRef: RefObject<HTMLDivElement> = useRef(null);

    const internalPopoverRef = useConsolidatedRef<Ui5ResponsivePopoverDomRef>(givenRef);

    const handleOpenPopover = useCallback(
      (e) => {
        if (internalPopoverRef.current) {
          internalPopoverRef.current.open(openByRef.current);
        }
        if (e && !propagateOpenByClickEvent) {
          e.stopPropagation();
        }
      },
      [internalPopoverRef, openByRef]
    );

    const closePopover = useCallback(() => {
      if (internalPopoverRef.current) {
        internalPopoverRef.current.close();
      }
    }, [internalPopoverRef]);

    useEffect(() => {
      if (open) {
        handleOpenPopover(null);
      } else {
        closePopover();
      }
    }, [open]);

    const style = useMemo(() => {
      return {
        display: 'inline-block',
        ...openByStyle
      };
    }, [openByStyle]);

    return (
      <>
        {openBy && (
          <div style={style} onClick={handleOpenPopover} ref={openByRef}>
            {openBy}
          </div>
        )}
        <ResponsivePopoverWebComponent {...rest} ref={internalPopoverRef} />
      </>
    );
  }
);

ResponsivePopover.displayName = 'ResponsivePopover';

ResponsivePopover.defaultProps = {
  allowTargetOverlap: false,
  horizontalAlign: PopoverHorizontalAlign.Center,
  initialFocus: '',
  modal: false,
  noArrow: false,
  placementType: PlacementType.Right,
  verticalAlign: PopoverVerticalAlign.Center,
  propagateOpenByClickEvent: true
};

export { ResponsivePopover };
