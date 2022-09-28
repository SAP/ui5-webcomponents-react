import clsx from 'clsx';
import React, { forwardRef, ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxDirection } from '../../enums';
import { BusyIndicatorSize } from '../../enums/BusyIndicatorSize';
import { CommonProps } from '../../interfaces/CommonProps';
import { Icon, TableCell, TableRow } from '../../webComponents';
import { BusyIndicator } from '../../webComponents/BusyIndicator';
import { Label } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';
import styles from './FilterGroupItem.jss';

const useStyles = createUseStyles(styles, { name: 'FilterGroupItem' });

export interface FilterGroupItemPropTypes extends CommonProps {
  /**
   * Content of the `FilterGroupItem`.
   *
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
  /**
   * Defines whether the filter is displayed with a value. If it's active an indicator will be shown in the filter configuration dialog.
   */
  active?: boolean;
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
    active,
    ...rest
  } = props;

  const inFB = props['data-in-fb'];
  const withValues = props['data-with-values'];
  const selected = props['data-selected'];
  const filterContainerRef = useRef();

  if (!required && (!visible || (inFB && !visibleInFilterBar))) return null;

  const [isDefined, setIsDefined] = useState(false);
  useEffect(() => {
    if (required && children && !loading && children?.props?.required === undefined) {
      const inputElemement = filterContainerRef.current.children[filterContainerRef.current.children.length - 1];
      if (inputElemement.localName.startsWith('ui5-')) {
        customElements.whenDefined(inputElemement.localName).then(() => {
          setIsDefined(inputElemement);
        });
      } else {
        inputElemement.setAttribute('aria-required', 'true');
      }
    }
  }, [required, children?.props?.required, loading]);

  useEffect(() => {
    if (isDefined) {
      isDefined.shadowRoot.firstElementChild.setAttribute('aria-required', 'true');
      setIsDefined(false);
    }
  }, [isDefined]);

  // todo use context instead of data attributes
  if (!inFB) {
    return (
      //todo: disable selection for required fields when it's possible, or the table is fully controllable (https://github.com/SAP/ui5-webcomponents/issues/5662)
      <TableRow data-react-key={props['data-react-key']} selected={selected}>
        <TableCell>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Label className={classes.dialogCellLabel} title={labelTooltip ?? label} required={required}>
              {label}
            </Label>
            {withValues && children}
          </FlexBox>
        </TableCell>
        {!withValues && (
          <TableCell className={classes.dialogActiveCell}>
            {active && <Icon name="circle-task-2" className={classes.dialogActiveIcon} />}
          </TableCell>
        )}
      </TableRow>
    );
  }

  return (
    <div ref={ref} slot={slot} {...rest} className={clsx(classes.filterItem, className)}>
      <div
        className={inFB ? classes.innerFilterItemContainer : classes.innerFilterItemContainerDialog}
        ref={filterContainerRef}
      >
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
