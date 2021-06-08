import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { CSSProperties, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { ResponsiveGridLayoutStyles } from './ResponsiveGridLayout.jss';

export interface ResponsiveGridLayoutPropTypes extends CommonProps {
  /**
   * Number of columns to show on small screens (`max-width: 599px`)
   */
  columnsS: number;

  /**
   * Number of columns to show on medium screens (`width >= 600px and width <=1023px`)
   */
  columnsM: number;

  /**
   * Number of columns to show on large screens (`width >= 1024px and width <=1439px`)
   */
  columnsL: number;

  /**
   * Number of columns to show on extra large screens (`min-width: 1440px`)
   */
  columnsXL: number;

  /**
   * Defines how many columns a single child should cover on small screens.
   */
  columnSpanS: number;
  /**
   * Defines how many columns a single child should cover on medium screens.
   */
  columnSpanM: number;
  /**
   * Defines how many columns a single child should cover on large screens.
   */
  columnSpanL: number;
  /**
   * Defines how many columns a single child should cover on extra large.
   */
  columnSpanXL: number;
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

/**
 * @since 0.16.4
 */
const ResponsiveGridLayout = forwardRef((props: ResponsiveGridLayoutPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    columnGap,
    rowGap,
    style,
    columnsS,
    columnsM,
    columnsL,
    columnsXL,
    columnSpanS,
    columnSpanM,
    columnSpanL,
    columnSpanXL
  } = props;
  const classes = useStyles();
  const className = StyleClassHelper.of(classes.container).putIfPresent(props.className);
  return (
    <div
      ref={ref}
      className={className.className}
      style={
        {
          gridRowGap: rowGap,
          gridColumnGap: columnGap,
          '--_ui5wcr-rgl-columns-s': columnsS,
          '--_ui5wcr-rgl-columns-m': columnsM,
          '--_ui5wcr-rgl-columns-l': columnsL,
          '--_ui5wcr-rgl-columns-xl': columnsXL,
          '--_ui5wcr-rgl-column-span-s': columnSpanS,
          '--_ui5wcr-rgl-column-span-m': columnSpanM,
          '--_ui5wcr-rgl-column-span-l': columnSpanL,
          '--_ui5wcr-rgl-column-span-xl': columnSpanXL,
          ...style
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
});

ResponsiveGridLayout.displayName = 'ResponsiveGridLayout';

ResponsiveGridLayout.defaultProps = {
  columnGap: '0.5rem',
  rowGap: '0.5rem',
  columnsS: 4,
  columnsM: 8,
  columnsL: 12,
  columnsXL: 16,
  columnSpanS: 1,
  columnSpanM: 1,
  columnSpanL: 1,
  columnSpanXL: 1
};

export { ResponsiveGridLayout };
