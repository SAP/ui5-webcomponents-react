import React, { PureComponent, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';
import { fonts, HSLColor } from '@ui5-webcomponents-react/styles';
import { withStyles } from '@ui5-webcomponents-react/styles';
import { StyleClassHelper } from '@ui5-webcomponents-react/utils';

const lighten = (amount, color) => HSLColor.of(color).lighten(amount * 100).hsl;

export interface ObjectPageSubSectionPropTypes extends CommonProps {
  title?: string;
  id: string;
  children: ReactNode | ReactNodeArray;
}

export interface ObjectPageSubSectionInternalProps extends ObjectPageSubSectionPropTypes, ClassProps {
  isSubSection?: boolean;
}

const styles = ({ theme, parameters }: JSSTheme) => ({
  objectPageSubSection: {
    'padding-bottom': 0,
    borderBottom: `0.125rem solid ${lighten(0.05, parameters.sapUiListBorderColor)}`,
    '&:focus': {
      outline: `1px dotted ${parameters.sapUIContentFocusColor}`,
      outlineOffset: '-1px'
    }
  },
  objectPageSubSectionHeader: {
    height: 'auto',
    overflow: 'auto',
    wordWrap: 'break-word',
    padding: '1rem 0 0 0'
  },
  objectPageSubSectionHeaderTitle: {
    whiteSpace: 'normal',
    float: 'left',
    lineHeight: '3rem',
    fontSize: fonts.sapMFontHeader4Size,
    fontWeight: 'normal',
    color: parameters.sapUiGroupTitleTextColor
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
    const { children, id, title, classes, className, style, tooltip } = this.props as ObjectPageSubSectionInternalProps;

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSubSection requires a unique ID property!');
    }

    const subSectionClassName = StyleClassHelper.of(classes.objectPageSubSection);
    if (className) {
      subSectionClassName.put(className);
    }

    return (
      <div
        className={subSectionClassName.toString()}
        id={`ObjectPageSubSection-${id}`}
        role="region"
        style={style}
        title={tooltip}
      >
        <div className={classes.objectPageSubSectionHeader}>
          <div className={classes.objectPageSubSectionHeaderTitle}>{title}</div>
        </div>
        <div className={classes.subSectionContent}>{children}</div>
      </div>
    );
  }
}
