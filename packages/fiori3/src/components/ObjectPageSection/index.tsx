import { StyleClassHelper, withStyles } from '@ui5-webcomponents-react/base';
import React, { PureComponent, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';
import styles from './ObjectPageSection.jss';

export interface ObjectPageSectionPropTypes extends CommonProps {
  title?: string;
  id: string;
  titleUppercase?: boolean;
  children: ReactNode | ReactNodeArray;
}

export interface ObjectPageSectionInternalProps extends ObjectPageSectionPropTypes, ClassProps {
  isSection?: true;
}

@withStyles(styles)
export class ObjectPageSection extends PureComponent<ObjectPageSectionPropTypes> {
  static defaultProps = {
    title: '',
    isSection: true,
    titleUppercase: true
  };

  render() {
    const { title, id, children, classes, titleUppercase, className, style, tooltip } = this
      .props as ObjectPageSectionInternalProps;

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSection requires a unique ID property!');
    }

    const titleClasses = StyleClassHelper.of(classes.title);
    if (titleUppercase) {
      titleClasses.put(classes.uppercase);
    }

    return (
      <section id={`ObjectPageSection-${id}`} role="region" className={className} style={style} title={tooltip}>
        <div role="heading" className={classes.header}>
          <div className={titleClasses.valueOf()}>{title}</div>
        </div>
        {/* TODO Check for subsections as they should win over the children */}
        <div className={classes.sectionContent}>
          <div className={classes.sectionContentInner}>{children}</div>
        </div>
      </section>
    );
  }
}
