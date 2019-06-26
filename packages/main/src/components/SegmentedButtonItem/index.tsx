import { Event, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, PureComponent } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { SelectedKey } from '../SegmentedButton';
import styles from './SegmentedButtonItem.jss';

export interface SegmentedButtonItemPropTypes extends CommonProps {
  icon?: JSX.Element;
  visible?: boolean;
  id: SelectedKey;
  enabled?: boolean;
  children?: string;
  width?: CSSProperties['width'];
  onClick?: (e: Event) => void;
}

export interface SegmentedButtonItemInternalProps extends SegmentedButtonItemPropTypes, ClassProps {
  selected?: boolean;
}

@withStyles(styles)
export class SegmentedButtonItem extends PureComponent<SegmentedButtonItemPropTypes> {
  static defaultProps = {
    icon: null,
    visible: true,
    enabled: true,
    children: null,
    onClick: null,
    selected: false
  };

  private handleOnClick = (e) => {
    if (this.props.enabled && this.props.onClick && typeof this.props.onClick === 'function') {
      this.props.onClick(Event.of(this, e, { selectedKey: this.props.id }));
    }
  };

  render() {
    const { enabled, children, selected, icon, classes, width, className, style, tooltip } = this
      .props as SegmentedButtonItemInternalProps;

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

    if (selected) {
      segmentedButtonItemClasses.put(classes.selected);
    }

    if (className) {
      segmentedButtonItemClasses.put(className);
    }

    const inlineStyle = { minWidth: width };
    if (style) {
      Object.assign(inlineStyle, style);
    }
    return (
      <li
        className={segmentedButtonItemClasses.valueOf()}
        onClick={this.handleOnClick}
        style={inlineStyle}
        title={tooltip}
      >
        {icon && <div className={iconClasses.valueOf()}>{icon}</div>}
        {children}
      </li>
    );
  }
}
