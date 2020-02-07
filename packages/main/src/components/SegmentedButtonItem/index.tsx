import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './SegmentedButtonItem.jss';

export interface SegmentedButtonItemPropTypes extends CommonProps {
  icon?: JSX.Element;
  id: string | number;
  disabled?: boolean;
  children?: string;
  width?: CSSProperties['width'];
  onClick?: (e: Event) => void;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'SegmentedButtonItem' });

/**
 * <code>import { SegmentedButtonItem } from '@ui5/webcomponents-react/lib/SegmentedButtonItem';</code>
 */
const SegmentedButtonItem: FC<SegmentedButtonItemPropTypes> = forwardRef(
  (props: SegmentedButtonItemPropTypes, ref: Ref<HTMLLIElement>) => {
    const { disabled, children, icon, className, style, tooltip, onClick, id, width } = props;

    const classes = useStyles();

    const iconClasses = StyleClassHelper.of(classes.icon);
    const segmentedButtonItemClasses = StyleClassHelper.of(classes.segmentedButtonItem);

    if (children && children !== '') {
      iconClasses.put(classes.withText);
    } else {
      segmentedButtonItemClasses.put(classes.iconOnly);
    }

    if (disabled) {
      segmentedButtonItemClasses.put(classes.disabled);
    } else {
      segmentedButtonItemClasses.put(classes.focusableItem);
    }

    if (props['selected']) {
      segmentedButtonItemClasses.put(classes.selected);
    }

    if (className) {
      segmentedButtonItemClasses.put(className);
    }

    const handleOnClick = useCallback(
      (e) => {
        if (!disabled && typeof onClick === 'function') {
          onClick(Event.of(null, e, { selectedKey: id }));
        }
      },
      [onClick, disabled, id]
    );

    const inlineStyles = useMemo(() => {
      if (width === undefined || width === null) {
        return style;
      }

      return {
        ...style,
        width
      };
    }, [style, width]);

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <li
        ref={ref}
        className={segmentedButtonItemClasses.valueOf()}
        onClick={handleOnClick}
        style={inlineStyles}
        title={tooltip}
        data-has-own-width={!!width}
        {...passThroughProps}
      >
        {icon && <div className={iconClasses.valueOf()}>{icon}</div>}
        {children}
      </li>
    );
  }
);

SegmentedButtonItem.displayName = 'SegmentedButtonItem';

SegmentedButtonItem.defaultProps = {
  disabled: false
};

export { SegmentedButtonItem };
