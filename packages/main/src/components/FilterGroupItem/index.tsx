import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { FC, forwardRef, ReactElement, RefObject } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './FilterGroupItem.jss';

const useStyles = createComponentStyles(styles, { name: 'FilterGroupItem' });

const emptyObject = {};

export interface FilterGroupItemPropTypes extends CommonProps {
  /**
   * Content of the `FilterGroupItem`.<br />
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use form elements like `Input`, `Select` or `Switch` in order to preserve the intended design.
   */
  children: ReactElement;
  /**
   * Defines the label of the `FilterGroupItem`.<br />
   * __Note:__ This label is used for the search in the filter configuration dialog.
   */
  label?: string;
  /**
   * Defines the group name of the filter.<br />
   * __Note:__ If no `groupName` is set, the name defaults to "Basic".
   */
  groupName?: string;
  /**
   * Defines the tooltip of the label.<br />
   * __Note:__ If no `labelTooltip` is set, it uses the `label` text as tooltip.
   */
  labelTooltip?: string;
  /**
   * Defines whether a loading indicator should be shown in the `FilterGroupItem`.
   */
  loading?: boolean;
  /**
   * Defines whether the filter is required.<br />
   * __Note:__ Required filters cannot be removed from the `FilterBar`.
   */
  required?: boolean;
  /**
   * Defines whether the filter is visible.
   */
  visible?: boolean;
  /**
   * Defines whether the filter is visible in the `FilterBar` or only in the filter configuration dialog.
   */
  visibleInFilterBar?: boolean;
  /**
   * Defines whether the `groupName` of the `FilterGroupItems` is displayed in the filter configuration dialog.
   */
  considerGroupName?: boolean;
}

/**
 * Represents a filter belonging to the `FilterBar`.
 */
export const FilterGroupItem: FC<FilterGroupItemPropTypes> = forwardRef(
  (props: FilterGroupItemPropTypes, ref: RefObject<HTMLDivElement>) => {
    const classes = useStyles();
    const {
      groupName,
      considerGroupName,
      label,
      labelTooltip,
      required,
      visible,
      visibleInFilterBar,
      children,
      style,
      loading,
      className,
      tooltip,
      slot,
      // @ts-ignore
      inFB
    } = props;

    const passThroughProps = usePassThroughHtmlProps(props);

    const styleClasses = StyleClassHelper.of(inFB ? classes.filterItem : classes.filterItemDialog);
    if (className) {
      styleClasses.put(className);
    }

    if (!required && (!visible || (inFB && !visibleInFilterBar))) return null;
    return (
      <div
        ref={ref}
        title={tooltip}
        slot={slot}
        {...passThroughProps}
        className={styleClasses.valueOf()}
        style={inFB ? style : emptyObject}
      >
        <div className={inFB ? classes.innerFilterItemContainer : classes.innerFilterItemContainerDialog}>
          <FlexBox>
            <Label tooltip={labelTooltip ?? label} required={required}>
              {`${considerGroupName && groupName !== 'default' ? `${groupName}: ` : ''}
          ${label}`}
            </Label>
          </FlexBox>
          {loading ? (
            <BusyIndicator className={classes.loadingContainer} active size={BusyIndicatorSize.Small} />
          ) : (
            children
          )}
        </div>
      </div>
    );
  }
);

FilterGroupItem.displayName = 'FilterGroupItem';

FilterGroupItem.defaultProps = {
  groupName: 'default',
  visible: true,
  required: false,
  label: ''
};
