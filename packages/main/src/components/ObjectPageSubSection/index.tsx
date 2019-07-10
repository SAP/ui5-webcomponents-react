import { fonts, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { PureComponent, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';

export interface ObjectPageSubSectionPropTypes extends CommonProps {
  title?: string;
  id: string;
  children: ReactNode | ReactNodeArray;
}

export interface ObjectPageSubSectionInternalProps extends ObjectPageSubSectionPropTypes, ClassProps {
  isSubSection?: boolean;
}

const styles = ({ parameters }: JSSTheme) => ({
  objectPageSubSection: {
    padding: '1rem 0',
    '&:focus': {
      outline: `1px dotted ${parameters.sapUiContentFocusColor}`,
      outlineOffset: '-1px'
    }
  },
  objectPageSubSectionHeaderTitle: {
    fontSize: fonts.sapMFontHeader5Size,
    color: parameters.sapUiGroupTitleTextColor,
    marginBottom: '0.5rem'
  },
  subSectionContent: {
    padding: '1rem 2rem 3rem 0'
  }
});

@withStyles(styles)
export class ObjectPageSubSection extends PureComponent<ObjectPageSubSectionPropTypes> {
  static defaultProps = {
    title: null,
    isSubSection: true
  };

  render() {
    const { children, id, title, classes, className, style, tooltip, innerRef } = this
      .props as ObjectPageSubSectionInternalProps;

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSubSection requires a unique ID property!');
    }

    const subSectionClassName = StyleClassHelper.of(classes.objectPageSubSection);
    if (className) {
      subSectionClassName.put(className);
    }

    return (
      <div
        ref={innerRef}
        className={subSectionClassName.toString()}
        id={`ObjectPageSubSection-${id}`}
        role="region"
        style={style}
        title={tooltip}
      >
        <div className={classes.objectPageSubSectionHeaderTitle}>{title}</div>
        <div className={classes.subSectionContent}>{children}</div>
      </div>
    );
  }
}
