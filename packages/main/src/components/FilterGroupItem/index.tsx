import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
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
  children: ReactElement;
  label?: string;
  groupName?: string;
  labelTooltip?: string;
  loading?: boolean;
  required?: boolean;
  visible?: boolean;
  visibleInFilterBar?: boolean;
  considerGroupName?: boolean;
}

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
      inFB,
    } = props;

    const passThroughProps = usePassThroughHtmlProps(props);

    if (!required && (!visible || (inFB && !visibleInFilterBar))) return null;
    return (
      <div
        ref={ref}
        title={tooltip}
        slot={slot}
        {...passThroughProps}
        className={`${className} ${inFB ? classes.filterItem : classes.filterItemDialog}`}
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
  className: '',
  groupName: 'default',
  visible: true,
  visibleInFilterBar: true,
  required: false,
};
