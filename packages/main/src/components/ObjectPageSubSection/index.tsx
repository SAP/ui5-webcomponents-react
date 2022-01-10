import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import React, { forwardRef, ReactNode, RefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';
import clsx from 'clsx';

export interface ObjectPageSubSectionPropTypes extends CommonProps {
  /**
   * Defines the title of the `ObjectPageSubSection`.
   */
  titleText?: string;
  /**
   * Defines the ID of the `ObjectPageSubSection`.
   */
  id: string;
  /**
   * Defines the content of the `ObjectPageSubSection`.
   */
  children: ReactNode | ReactNode[];
}

const styles = {
  objectPageSubSection: {
    '&:focus': {
      outline: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`,
      outlineOffset: `calc(-1 * ${ThemingParameters.sapContent_FocusWidth})`
    }
  },
  objectPageSubSectionHeaderTitle: {
    fontSize: ThemingParameters.sapFontHeader5Size,
    color: ThemingParameters.sapGroup_TitleTextColor,
    marginBottom: '0.5rem'
  },
  subSectionContent: {
    padding: '1rem 0 3rem 0'
  }
};

const useStyles = createUseStyles(styles, { name: 'ObjectPageSubSection' });
/**
 * Second-level information container of an `ObjectPage`.<br />
 * __Note:__ This component should only be used inside an `ObjectPageSection` component.
 */
const ObjectPageSubSection = forwardRef((props: ObjectPageSubSectionPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { children, id, titleText, className, style, tooltip, ...rest } = props;

  useDeprecationNoticeForTooltip('ObjectPageSubSection', props.tooltip);

  if (!id) {
    throw new EmptyIdPropException('ObjectPageSubSection requires a unique ID property!');
  }

  const htmlId = `ObjectPageSubSection-${id}`;

  const classes = useStyles();
  const subSectionClassName = clsx(classes.objectPageSubSection, className);

  return (
    <div
      ref={ref}
      role="region"
      style={style}
      title={tooltip}
      tabIndex={-1}
      {...rest}
      className={subSectionClassName}
      id={htmlId}
    >
      <div
        role="heading"
        aria-level={4}
        className={classes.objectPageSubSectionHeaderTitle}
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
