import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, RefObject } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';
import styles from './ObjectPageSection.jss';

export interface ObjectPageSectionPropTypes extends CommonProps {
  /**
   * Defines the title of the `ObjectPageSection`.
   */
  title?: string;
  /**
   * Defines the ID of the `ObjectPageSection`.<br />
   * __Note:__ The `id` is taken into account when the section selection changes.
   */
  id: string;
  /**
   * Defines whether the title is always displayed in uppercase.
   */
  titleUppercase?: boolean;
  /**
   * Defines the content of the `ObjectPageSection`.
   */
  children: ReactNode | ReactNodeArray;
}

const useStyles = createComponentStyles(styles, { name: 'ObjectPageSection' });
/**
 * Top-level information container of an `ObjectPage`.
 */
const ObjectPageSection: FC<ObjectPageSectionPropTypes> = forwardRef(
  (props: ObjectPageSectionPropTypes, ref: RefObject<any>) => {
    const { title, id, children, titleUppercase, className, style, tooltip } = props;
    const classes = useStyles();

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSection requires a unique ID property!');
    }

    const sectionRef: RefObject<HTMLElement> = useConsolidatedRef(ref);
    const htmlId = `ObjectPageSection-${id}`;

    const titleClasses = StyleClassHelper.of(classes.title);
    if (titleUppercase) {
      titleClasses.put(classes.uppercase);
    }

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
);

ObjectPageSection.defaultProps = {
  title: '',
  // @ts-ignore
  isSection: true,
  titleUppercase: true
};

ObjectPageSection.displayName = 'ObjectPageSection';

export { ObjectPageSection };
