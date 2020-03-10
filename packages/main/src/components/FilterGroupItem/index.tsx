import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { forwardRef, ReactElement, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { BusyIndicator, BusyIndicatorSize, FlexBox } from '../..';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './FilterGroupItem.jss';

const useStyles = createUseStyles(styles, { name: 'FilterGroupItem' });

export interface FilterGroupItemPropTypes extends CommonProps {
  groupName?: string;
  labelTooltip?: string;
  label?: string;
  loading?: boolean;
  mandatory?: boolean;
  visible?: boolean;
  visibleInFilterBar?: boolean;
  children?: ReactElement;
  considerGroupName?: boolean;

  //internal
  inFB?: boolean;
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
    inFB,
    style,
    loading
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
          {mandatory && <span style={{ color: 'red' }}>*</span>}
          <Label tooltip={labelTooltip ?? label}>
            {`${considerGroupName && groupName !== 'default' ? `${groupName}: ` : ''}
          ${label}`}
          </Label>
        </FlexBox>
        {loading ? (
          //todo busy indicator backgroundcolor, size
          <BusyIndicator className={classes.loadingContainer} active size={BusyIndicatorSize.Small} />
        ) : (
          children
        )}
      </div>
    </div>
  );
});

FilterGroupItem.defaultProps = {
  groupName: 'default',
  visible: true,
  visibleInFilterBar: true,
  inFB: false
};
