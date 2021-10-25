import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import React, { forwardRef, ReactNode, ReactNodeArray, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';
import styles from './ObjectPageSection.jss';
import clsx from 'clsx';

export interface ObjectPageSectionPropTypes extends CommonProps {
  /**
   * Defines the title of the `ObjectPageSection`.
   */
  titleText?: string;
  /**
   * Defines the ID of the `ObjectPageSection`.<br />
   * __Note:__ The `id` is taken into account when the section selection changes.
   */
  id: string;
  /**
   * Defines whether the title is always displayed in uppercase.
   */
  titleTextUppercase?: boolean;
  /**
   * Defines the content of the `ObjectPageSection`.
   */
  children: ReactNode | ReactNodeArray;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPageSection' });
/**
 * Top-level information container of an `ObjectPage`.
 */
const ObjectPageSection = forwardRef((props: ObjectPageSectionPropTypes, ref: RefObject<HTMLElement>) => {
  const { titleText, id, children, titleTextUppercase, className, style, tooltip } = props;
  const classes = useStyles();

  if (!id) {
    throw new EmptyIdPropException('ObjectPageSection requires a unique ID property!');
  }

  const sectionRef: RefObject<HTMLElement> = useConsolidatedRef(ref);
  const htmlId = `ObjectPageSection-${id}`;

  const titleClasses = clsx(classes.title, titleTextUppercase && classes.uppercase);

  const passThroughProps = usePassThroughHtmlProps(props, ['id']);
  return (
    <section
      ref={sectionRef}
      role="region"
      className={className}
      style={style}
      title={tooltip}
      {...passThroughProps}
      id={htmlId}
      data-component-name="ObjectPageSection"
    >
      <div role="heading" aria-level={3} className={classes.header} data-component-name="ObjectPageSectionTitleText">
        <div className={titleClasses}>{titleText}</div>
      </div>
      {/* TODO Check for subsections as they should win over the children */}
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
