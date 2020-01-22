import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { useScrollElement } from '@ui5/webcomponents-react-base/lib/useScrollElement';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, RefObject } from 'react';
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

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPageSection' });

/**
 * <code>import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';</code>
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

    useScrollElement(htmlId, sectionRef, {
      spy: true
    });

    const titleClasses = StyleClassHelper.of(classes.title);
    if (titleUppercase) {
      titleClasses.put(classes.uppercase);
    }

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <section
        ref={sectionRef}
        role="region"
        className={className}
        style={style}
        title={tooltip}
        {...passThroughProps}
        id={htmlId}
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
