import { StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { Component, CSSProperties, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Flexbox.jss';

export enum FlexBoxJustifyContent {
  Start = 'Start',
  Center = 'Center',
  End = 'End',
  SpaceAround = 'SpaceAround',
  SpaceBetween = 'SpaceBetween'
}

export enum FlexBoxAlignItems {
  Start = 'Start',
  Center = 'Center',
  End = 'End',
  Baseline = 'Baseline',
  Stretch = 'Stretch'
}

export enum FlexBoxDirection {
  Column = 'Column',
  ColumnReverse = 'ColumnReverse',
  Row = 'Row',
  RowReverse = 'RowReverse'
}

export enum FlexBoxWrap {
  NoWrap = 'NoWrap',
  Wrap = 'Wrap',
  WrapReverse = 'WrapReverse'
}

export interface FlexBoxPropTypes extends CommonProps {
  alignItems?: FlexBoxAlignItems;
  direction?: FlexBoxDirection;
  displayInline?: boolean;
  fitContainer?: boolean;
  height?: CSSProperties['height'];
  justifyContent?: FlexBoxJustifyContent;
  width?: CSSProperties['width'];
  wrap?: FlexBoxWrap;
  children: ReactNode | ReactNodeArray;
}

@withStyles(styles)
export class FlexBox extends Component<FlexBoxPropTypes> {
  static defaultProps = {
    alignItems: FlexBoxAlignItems.Stretch,
    direction: FlexBoxDirection.Row,
    displayInline: false,
    height: '',
    justifyContent: FlexBoxJustifyContent.Start,
    width: '',
    wrap: FlexBoxWrap.NoWrap
  };

  render() {
    const {
      children,
      classes,
      justifyContent,
      direction,
      alignItems,
      height,
      width,
      displayInline,
      wrap,
      style,
      className,
      tooltip,
      innerRef,
      slot
    } = this.props as FlexBoxPropTypes & ClassProps;
    const flexBoxClasses = StyleClassHelper.of(classes.flexBox);
    // direction
    flexBoxClasses.put(classes[`flexBoxDirection${direction}`]);
    // justify content
    flexBoxClasses.put(classes[`justifyContent${justifyContent}`]);
    // align items
    flexBoxClasses.put(classes[`alignItems${alignItems}`]);
    // wrapping
    flexBoxClasses.put(classes[`flexWrap${wrap}`]);

    if (displayInline) {
      flexBoxClasses.put(classes.flexBoxDisplayInline);
    }

    const inlineStyle = {} as CSSProperties;
    if (height) {
      inlineStyle.height = height;
    }
    if (width) {
      inlineStyle.width = width;
    }

    if (className) {
      flexBoxClasses.put(className);
    }

    if (style) {
      Object.assign(inlineStyle, style);
    }

    return (
      <div ref={innerRef} className={flexBoxClasses.valueOf()} style={inlineStyle} title={tooltip} slot={slot}>
        {children}
      </div>
    );
  }
}
