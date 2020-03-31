import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { forwardRef, ReactElement, RefObject } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './FilterGroupItem.jss';

const useStyles = createComponentStyles(styles, { name: 'FilterGroupItem' });

export interface FilterGroupItemPropTypes extends CommonProps {
  children: ReactElement;
  label?: string;
  groupName?: string;
  labelTooltip?: string;
  loading?: boolean;
  mandatory?: boolean;
  visible?: boolean;
  visibleInFilterBar?: boolean;
  considerGroupName?: boolean;
}

export const FilterGroupItem = forwardRef((props: FilterGroupItemPropTypes, ref: RefObject<HTMLDivElement>) => {
  const classes = useStyles();
  const {
    groupName,
    considerGroupName,
    label,
    labelTooltip,
    mandatory,
    visible,
    visibleInFilterBar,
    children,
    style,
    loading,
    // @ts-ignore
    inFB
  } = props;

  const passThroughProps = usePassThroughHtmlProps(props);

  if (!mandatory && (!visible || (inFB && !visibleInFilterBar))) return null;
  return (
    <div
      ref={ref}
      {...passThroughProps}
      className={inFB ? classes.filterItem : classes.filterItemDialog}
      style={inFB ? style : {}}
    >
      <div className={inFB ? classes.innerFilterItemContainer : classes.innerFilterItemContainerDialog}>
        <FlexBox>
          {mandatory && <span className={classes.mandatory}>*</span>}
          <Label tooltip={labelTooltip ?? label}>
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
});

FilterGroupItem.displayName = 'FilterGroupItem';

FilterGroupItem.defaultProps = {
  groupName: 'default',
  visible: true,
  visibleInFilterBar: true,
  mandatory: false
};
