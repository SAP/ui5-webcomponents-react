import { useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import { ThemingParameters } from '@ui5/webcomponents-react-base/src';
import clsx from 'clsx';
import React, { forwardRef, ReactElement, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, FlexBoxWrap } from '../../enums';
import { BusyIndicatorSize } from '../../enums/BusyIndicatorSize';
import { CommonProps } from '../../interfaces/CommonProps';
import { CustomListItem, Panel, TableCell, TableRow } from '../../webComponents';
import { BusyIndicator } from '../../webComponents/BusyIndicator';
import { Label } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';
import styles from './FilterGroupItem.jss';

const useStyles = createUseStyles(styles, { name: 'FilterGroupItem' });

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
export const FilterGroupItem = forwardRef((props: FilterGroupItemPropTypes, ref: RefObject<HTMLDivElement>) => {
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
    slot,
    ...rest
  } = props;

  const inFB = props['data-in-fb'];
  const withValues = props['data-with-values'];
  const selected = props['data-selected'];
  console.log(selected);
  const [componentRef, filterGroupItemRef] = useSyncRef<HTMLDivElement>(ref);

  const isRtl = useIsRTL(filterGroupItemRef);
  const transformMarginRight = isRtl ? 'marginLeft' : 'marginRight';

  const styleClasses = clsx(className, inFB ? classes.filterItem : classes.filterItemDialog);

  const inlineStyle = { [transformMarginRight]: '1rem', ...style };

  if (!required && (!visible || (inFB && !visibleInFilterBar))) return null;

  if (!inFB) {
    return (
      //todo height, data-react-key
      <TableRow data-react-key={props['data-react-key']} selected={selected}>
        <TableCell>
          <FlexBox direction={FlexBoxDirection.Column}>
            {/*todo margin*/}
            <Text style={{ marginBottom: '0.25rem' }}>{label}</Text>
            {withValues && children}
          </FlexBox>
        </TableCell>
        {!withValues && (
          //todo a11y
          <TableCell style={{ width: '25%' }}>
            <div
              style={{
                flexGrow: 1,
                textAlign: 'center',
                color: ThemingParameters.sapNeutralColor,
                fontSize: '24px',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              •
            </div>
          </TableCell>
        )}
      </TableRow>
    );
  }

  if (!inFB) {
    return (
      /*todo rtl, somehow only active :active effect if really clicked on li (try :focus-within)*/
      <CustomListItem
        style={{ paddingLeft: '0.5rem', padding: '0.25rem 0 0.25rem 0.5rem' }}
        selected={typeof selected === 'boolean' ? selected : required || visibleInFilterBar}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ width: '100%' }} wrap={FlexBoxWrap.NoWrap}>
          <FlexBox style={{ flexBasis: '80%' }} direction={FlexBoxDirection.Column}>
            <Text>{label}</Text>
            {withValues && children}
          </FlexBox>
          {/*todo: use icon when wc fixed anti aliasing issue*/}
          {/*<Icon name="circle-task-2" style={{ transform: 'scale(-50%)' }} />*/}
          {!withValues && (
            <div
              style={{
                flexGrow: 1,
                textAlign: 'center',
                color: ThemingParameters.sapNeutralColor,
                fontSize: '24px',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              •
            </div>
          )}
        </FlexBox>
      </CustomListItem>
    );
  }
  return (
    <div ref={componentRef} slot={slot} {...rest} className={styleClasses} style={inFB ? inlineStyle : emptyObject}>
      <div className={inFB ? classes.innerFilterItemContainer : classes.innerFilterItemContainerDialog}>
        <FlexBox>
          <Label title={labelTooltip ?? label} required={required}>
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
  required: false,
  label: ''
};
