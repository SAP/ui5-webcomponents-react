import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './ObjectPageSection.jss';

export interface ObjectPageSectionPropTypes extends CommonProps {
  /**
   * Defines the ID of the `ObjectPageSection`.<br />
   * __Note:__ The `id` is taken into account when the section selection changes.
   */
  id: string;
  /**
   * Defines the content of the `ObjectPageSection`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the title of the `ObjectPageSection`.
   */
  titleText?: string;
  /**
   * Defines whether the title is always displayed in uppercase.
   */
  titleTextUppercase?: boolean;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPageSection' });
/**
 * Top-level information container of an `ObjectPage`.
 */
const ObjectPageSection = forwardRef<HTMLElement, ObjectPageSectionPropTypes>((props, ref) => {
  const { titleText, id, children, titleTextUppercase, className, style, ...rest } = props;

  const classes = useStyles();

  const htmlId = `ObjectPageSection-${id}`;

  const titleClasses = clsx(classes.title, titleTextUppercase && classes.uppercase);

  return (
    <section
      ref={ref}
      role="region"
      className={className}
      style={style}
      {...rest}
      id={htmlId}
      data-component-name="ObjectPageSection"
    >
      <div role="heading" aria-level={3} className={classes.header} data-component-name="ObjectPageSectionTitleText">
        <div className={titleClasses}>{titleText}</div>
      </div>
      <div className={classes.sectionContent}>
        <div className={classes.sectionContentInner} data-component-name="ObjectPageSectionContent">
          {children}
        </div>
      </div>
    </section>
  );
});

ObjectPageSection.defaultProps = {
  titleText: '',
  titleTextUppercase: true
};

ObjectPageSection.displayName = 'ObjectPageSection';

export { ObjectPageSection };
