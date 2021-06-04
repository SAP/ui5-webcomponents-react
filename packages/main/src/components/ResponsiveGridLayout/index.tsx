import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { CSSProperties, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { ResponsiveGridLayoutStyles } from './ResponsiveGridLayout.jss';

export interface ResponsiveGridLayoutPropTypes extends CommonProps {
  /**
   * Gap between two columns of the grid
   */
  columnGap: '0.5rem' | '1rem';

  /**
   * Gap between two rows of the grid
   */
  rowGap: '0.5rem' | '1rem';

  children: ReactNode | ReactNodeArray;
}

const useStyles = createUseStyles(ResponsiveGridLayoutStyles, { name: 'ResponsiveGridLayout' });

const ResponsiveGridLayout = forwardRef((props: ResponsiveGridLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, columnGap, rowGap, style } = props;
  const classes = useStyles();
  const className = StyleClassHelper.of(classes.container).putIfPresent(props.className);
  return (
    <div
      ref={ref}
      className={className.className}
      style={{
        gridRowGap: rowGap,
        gridColumnGap: columnGap,
        ...style
      }}
    >
      {children}
    </div>
  );
});

ResponsiveGridLayout.displayName = 'ResponsiveGridLayout';

ResponsiveGridLayout.defaultProps = {
  columnGap: '0.5rem',
  rowGap: '0.5rem'
};

export { ResponsiveGridLayout };
