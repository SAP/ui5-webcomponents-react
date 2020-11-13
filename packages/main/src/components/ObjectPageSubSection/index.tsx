import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, RefObject } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';

export interface ObjectPageSubSectionPropTypes extends CommonProps {
  /**
   * Defines the title of the `ObjectPageSubSection`.
   */
  title?: string;
  /**
   * Defines the ID of the `ObjectPageSubSection`.
   */
  id: string;
  /**
   * Defines the content of the `ObjectPageSubSection`.
   */
  children: ReactNode | ReactNodeArray;
}

const styles = {
  objectPageSubSection: {
    padding: '1rem 0',
    '&:focus': {
      outline: `1px dotted ${ThemingParameters.sapContent_FocusColor}`,
      outlineOffset: '-1px'
    }
  },
  objectPageSubSectionHeaderTitle: {
    fontSize: ThemingParameters.sapFontHeader5Size,
    color: ThemingParameters.sapGroup_TitleTextColor,
    marginBottom: '0.5rem'
  },
  subSectionContent: {
    padding: '1rem 2rem 3rem 0'
  }
};

const useStyles = createComponentStyles(styles, { name: 'ObjectPageSubSection' });
/**
 * Second-level information container of an `ObjectPage`.<br />
 * __Note:__ This component should only be used inside an `ObjectPageSection` component.
 */
const ObjectPageSubSection: FC<ObjectPageSubSectionPropTypes> = forwardRef(
  (props: ObjectPageSubSectionPropTypes, ref: RefObject<any>) => {
    const { children, id, title, className, style, tooltip } = props;

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSubSection requires a unique ID property!');
    }

    const htmlRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
    const htmlId = `ObjectPageSubSection-${id}`;

    const classes = useStyles();
    const subSectionClassName = StyleClassHelper.of(classes.objectPageSubSection);
    if (className) {
      subSectionClassName.put(className);
    }

    const passThroughProps = usePassThroughHtmlProps(props, ['id']);

    return (
      <div
        ref={htmlRef}
        className={subSectionClassName.toString()}
        role="region"
        style={style}
        title={tooltip}
        {...passThroughProps}
        id={htmlId}
        data-component-name="ObjectPageSubSection"
      >
        <div className={classes.objectPageSubSectionHeaderTitle}>{title}</div>
        <div className={classes.subSectionContent}>{children}</div>
      </div>
    );
  }
);

ObjectPageSubSection.defaultProps = {
  title: null,
  // @ts-ignore
  isSubSection: true
};

ObjectPageSubSection.displayName = 'ObjectPageSubSection';

export { ObjectPageSubSection };
