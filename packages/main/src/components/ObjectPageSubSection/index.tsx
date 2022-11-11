import { ThemingParameters } from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { Toolbar, ToolbarSpacer } from '../..';
import { ToolbarDesign, ToolbarStyle } from '../../enums';
import { CommonProps } from '../../interfaces';
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
  /**
   * Actions available for this subsection.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use simple input components like `Button` or `Switch` to preserve the intended design.
   */
  actions?: ReactNode | ReactNode[];
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
const ObjectPageSubSection = forwardRef<HTMLDivElement, ObjectPageSubSectionPropTypes>((props, ref) => {
  const { children, id, titleText, className, style, actions, ...rest } = props;

  const htmlId = `ObjectPageSubSection-${id}`;

  const classes = useStyles();
  const subSectionClassName = clsx(classes.objectPageSubSection, className);
  console.log(actions);

  return (
    <div ref={ref} role="region" style={style} tabIndex={-1} {...rest} className={subSectionClassName} id={htmlId}>
      {/*todo fix transparent style*/}
      <Toolbar
        numberOfAlwaysVisibleItems={1}
        design={ToolbarDesign.Transparent}
        toolbarStyle={ToolbarStyle.Clear}
        style={{ background: 'transparent' }}
      >
        <div
          role="heading"
          aria-level={4}
          className={classes.subSectionTitle}
          data-component-name="ObjectPageSubSectionTitleText"
        >
          {titleText}
        </div>
        {actions && (
          <>
            <ToolbarSpacer />
            {actions}
          </>
        )}
      </Toolbar>
      <div className={classes.subSectionContent} data-component-name="ObjectPageSubSectionContent">
        {children}
      </div>
    </div>
  );
});

ObjectPageSubSection.displayName = 'ObjectPageSubSection';

export { ObjectPageSubSection };
