import { Event, StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './SegmentedButtonItem.jss';

export interface SegmentedButtonItemPropTypes extends CommonProps {
  icon?: JSX.Element;
  id: string | number;
  enabled?: boolean;
  children?: string;
  width?: CSSProperties['width'];
  onClick?: (e: Event) => void;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'SegmentedButtonItem' });

const SegmentedButtonItem: FC<SegmentedButtonItemPropTypes> = forwardRef(
  (props: SegmentedButtonItemPropTypes, ref: Ref<HTMLLIElement>) => {
    const { enabled, children, icon, width, className, style, tooltip, onClick, id } = props;

    const classes = useStyles();

    const iconClasses = StyleClassHelper.of(classes.icon);
    const segmentedButtonItemClasses = StyleClassHelper.of(classes.segmentedButtonItem);

    if (children && children !== '') {
      iconClasses.put(classes.withText);
    } else {
      segmentedButtonItemClasses.put(classes.iconOnly);
    }

    if (enabled) {
      segmentedButtonItemClasses.put(classes.focusableItem);
    } else {
      segmentedButtonItemClasses.put(classes.disabled);
    }

    const inlineStyle = { minWidth: width };
    if (props['selected']) {
      segmentedButtonItemClasses.put(classes.selected);
      inlineStyle['--sapUiContentNonInteractiveIconColor'] = 'var(--sapContent_ContrastIconColor)';
    }

    if (className) {
      segmentedButtonItemClasses.put(className);
    }

    if (style) {
      Object.assign(inlineStyle, style);
    }

    const handleOnClick = useCallback(
      (e) => {
        if (enabled && typeof onClick === 'function') {
          onClick(Event.of(null, e, { selectedKey: id }));
        }
      },
      [onClick, enabled, id]
    );

    return (
      <li
        ref={ref}
        className={segmentedButtonItemClasses.valueOf()}
        onClick={handleOnClick}
        style={inlineStyle}
        title={tooltip}
      >
        {icon && <div className={iconClasses.valueOf()}>{icon}</div>}
        {children}
      </li>
    );
  }
);

SegmentedButtonItem.displayName = 'SegmentedButtonItem';

SegmentedButtonItem.defaultProps = {
  icon: null,
  enabled: true,
  children: null,
  onClick: null
};

export { SegmentedButtonItem };
