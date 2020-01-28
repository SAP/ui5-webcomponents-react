import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { useScrollElement } from '@ui5/webcomponents-react-base/lib/useScrollElement';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, RefObject } from 'react';
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
    fontSize: parameters.sapMFontHeader5Size,
    color: parameters.sapUiGroupTitleTextColor,
    marginBottom: '0.5rem'
  },
  subSectionContent: {
    padding: '1rem 2rem 3rem 0'
  }
});

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPageSubSection' });

/**
 * <code>import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';</code>
 */
const ObjectPageSubSection: FC<ObjectPageSubSectionPropTypes> = forwardRef(
  (props: ObjectPageSubSectionPropTypes, ref: RefObject<any>) => {
    const { children, id, title, className, style, tooltip } = props;

    if (!id) {
      throw new EmptyIdPropException('ObjectPageSubSection requires a unique ID property!');
    }

    const htmlRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
    const htmlId = `ObjectPageSubSection-${id}`;

    useScrollElement(htmlId, htmlRef, {
      spy: false
    });

    const classes = useStyles();
    const subSectionClassName = StyleClassHelper.of(classes.objectPageSubSection);
    if (className) {
      subSectionClassName.put(className);
    }

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <div
        ref={htmlRef}
        className={subSectionClassName.toString()}
        role="region"
        style={style}
        title={tooltip}
        {...passThroughProps}
        id={htmlId}
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
