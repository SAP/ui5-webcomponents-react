import { StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { forwardRef, ReactNode, ReactNodeArray, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';
import styles from './ObjectPageSection.jss';

export interface ObjectPageSectionPropTypes extends CommonProps {
  title?: string;
  id: string;
  titleUppercase?: boolean;
  children: ReactNode | ReactNodeArray;
}

const useStyles = createUseStyles<string>(styles, { name: 'ObjectPageSection' });

const ObjectPageSection = forwardRef((props: ObjectPageSectionPropTypes, ref: RefObject<any>) => {
  const { title, id, children, titleUppercase, className, style, tooltip } = props;
  const classes = useStyles();

  if (!id) {
    throw new EmptyIdPropException('ObjectPageSection requires a unique ID property!');
  }

  const titleClasses = StyleClassHelper.of(classes.title);
  if (titleUppercase) {
    titleClasses.put(classes.uppercase);
  }

  return (
    <section ref={ref} id={`ObjectPageSection-${id}`} role="region" className={className} style={style} title={tooltip}>
      <div role="heading" className={classes.header}>
        <div className={titleClasses.valueOf()}>{title}</div>
      </div>
      {/* TODO Check for subsections as they should win over the children */}
      <div className={classes.sectionContent}>
        <div className={classes.sectionContentInner}>{children}</div>
      </div>
    </section>
  );
});

ObjectPageSection.defaultProps = {
  title: '',
  // @ts-ignore
  isSection: true,
  titleUppercase: true
};

ObjectPageSection.displayName = 'ObjectPageSection';

export { ObjectPageSection };
