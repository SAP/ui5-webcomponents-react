import { Event, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base';
import React, { forwardRef, ReactElement, ReactNode, RefObject, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { FilterType, FlexBox } from '../..';
import { CommonProps } from '../../interfaces/CommonProps';
import { FilterItemPropTypes } from '../FilterItem';
import styles from './FilterGroupItem.jss';
const useStyles = createUseStyles(styles, { name: 'FilterGroupItem' });
import { Label } from '@ui5/webcomponents-react/lib/Label';

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
    style
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
        {children}
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
