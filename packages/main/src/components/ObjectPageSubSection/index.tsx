import { fonts, StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { forwardRef, ReactNode, ReactNodeArray, RefObject, FC } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { EmptyIdPropException } from '../ObjectPage/EmptyIdPropException';

export interface ObjectPageSubSectionPropTypes extends CommonProps {
  title?: string;
  id: string;
  children: ReactNode | ReactNodeArray;
}

const styles = ({ parameters }: JSSTheme) => ({
  objectPageSubSection: {
    padding: '1rem 0',
    '&:focus': {
      outline: `1px dotted ${parameters.sapUiContentFocusColor}`,
      outlineOffset: '-1px'
    }
  },
  objectPageSubSectionHeaderTitle: {
    fontSize: fonts.sapMFontHeader5Size,
    color: parameters.sapUiGroupTitleTextColor,
    marginBottom: '0.5rem'
  },
  subSectionContent: {
    padding: '1rem 2rem 3rem 0'
  }
});

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPageSubSection' });

const ObjectPageSubSection: FC<ObjectPageSubSectionPropTypes> = forwardRef(
  (props: ObjectPageSubSectionPropTypes, ref: RefObject<any>) => {
    const { children, id, title, className, style, tooltip } = props;

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSubSection requires a unique ID property!');
    }

    const classes = useStyles();
    const subSectionClassName = StyleClassHelper.of(classes.objectPageSubSection);
    if (className) {
      subSectionClassName.put(className);
    }

    return (
      <div
        ref={ref}
        className={subSectionClassName.toString()}
        id={`ObjectPageSubSection-${id}`}
        role="region"
        style={style}
        title={tooltip}
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
