import { ThemingParameters } from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, { forwardRef, ReactNode, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { CustomThemingParameters } from '../../themes/CustomVariables';

export interface ObjectPageSubSectionPropTypes extends CommonProps {
  /**
   * Defines the ID of the `ObjectPageSubSection`.
   */
  id: string;
  /**
   * Defines the content of the `ObjectPageSubSection`.
   */
  children: ReactNode | ReactNode[];
  /**
   * Defines the title of the `ObjectPageSubSection`.
   */
  titleText?: string;
}

const styles = {
  objectPageSubSection: {
    padding: '1rem 0',
    '&:focus': {
      outline: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`,
      outlineOffset: `calc(-1 * ${ThemingParameters.sapContent_FocusWidth})`
    }
  },
  subSectionTitle: {
    fontFamily: CustomThemingParameters.ObjectPageSectionTitleFontFamily,
    fontSize: ThemingParameters.sapFontHeader5Size,
    color: ThemingParameters.sapGroup_TitleTextColor,
    marginBottom: '0.5rem'
  },
  subSectionContent: {
    backgroundColor: CustomThemingParameters.ObjectPageSubSectionBackgroundColor,
    borderRadius: CustomThemingParameters.ObjectPageSubSectionBorderRadius,
    padding: '0 0.5rem'
  }
};

const useStyles = createUseStyles(styles, { name: 'ObjectPageSubSection' });
/**
 * Second-level information container of an `ObjectPage`.<br />
 * __Note:__ This component should only be used inside an `ObjectPageSection` component.
 */
const ObjectPageSubSection = forwardRef((props: ObjectPageSubSectionPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, id, titleText, className, style, ...rest } = props;

  const htmlId = `ObjectPageSubSection-${id}`;

  const classes = useStyles();
  const subSectionClassName = clsx(classes.objectPageSubSection, className);

  return (
    <div ref={ref} role="region" style={style} tabIndex={-1} {...rest} className={subSectionClassName} id={htmlId}>
      <div
        role="heading"
        aria-level={4}
        className={classes.subSectionTitle}
        data-component-name="ObjectPageSubSectionTitleText"
      >
        {titleText}
      </div>
      <div className={classes.subSectionContent} data-component-name="ObjectPageSubSectionContent">
        {children}
      </div>
    </div>
  );
});

ObjectPageSubSection.displayName = 'ObjectPageSubSection';

export { ObjectPageSubSection };
