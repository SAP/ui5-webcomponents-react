import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, RefObject } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './DynamicPageContentArea.jss';

export interface DynamicPageContentAreaPropTypes extends CommonProps {
  title?: string;
  children?: ReactNode | ReactNodeArray;
}

const useStyles = createComponentStyles(styles, { name: 'DynamicPageContentArea' });

const DynamicPageContentArea: FC<DynamicPageContentAreaPropTypes> = forwardRef(
  (props: DynamicPageContentAreaPropTypes, ref: RefObject<any>) => {
    const { title, children, style } = props;
    const classes = useStyles();
    const divRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <div
        ref={divRef}
        title={title}
        className={classes.container}
        style={style}
        data-component-name="DynamicPageContentArea"
        {...passThroughProps}
      >
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
);

DynamicPageContentArea.defaultProps = {
  title: ''
};

DynamicPageContentArea.displayName = 'DynamicPageContentArea';

export { DynamicPageContentArea };
