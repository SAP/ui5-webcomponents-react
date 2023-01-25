import { clsx } from 'clsx';
import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { ResponsiveGridLayoutStyles } from './ResponsiveGridLayout.jss';

export interface ResponsiveGridLayoutPropTypes extends CommonProps {
  /**
   * Number of columns to show on small screens (`max-width: 599px`)
   */
  columnsS?: number;

  /**
   * Number of columns to show on medium screens (`width >= 600px and width <=1023px`)
   */
  columnsM?: number;

  /**
   * Number of columns to show on large screens (`width >= 1024px and width <=1439px`)
   */
  columnsL?: number;

  /**
   * Number of columns to show on extra large screens (`min-width: 1440px`)
   */
  columnsXL?: number;

  /**
   * Defines how many columns a single child should cover on small screens.
   */
  columnSpanS?: number;
  /**
   * Defines how many columns a single child should cover on medium screens.
   */
  columnSpanM?: number;
  /**
   * Defines how many columns a single child should cover on large screens.
   */
  columnSpanL?: number;
  /**
   * Defines how many columns a single child should cover on extra large.
   */
  columnSpanXL?: number;
  /**
   * Gap between two columns of the grid
   */
  columnGap?: '0.5rem' | '1rem';

  /**
   * Gap between two rows of the grid
   */
  rowGap?: '0.5rem' | '1rem';

  /**
   * Child elements to be placed inside of the grid. In case you want to control the column span of each child independently,
   * you can add an element style using the [gridColumn shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).
   *
   * Example: If you want one child to span across 4 columns, you can add this element style to the child element:
   * `style={{ gridColumn: 'span 4' }}`
   */
  children?: ReactNode | ReactNode[];
}

const useStyles = createUseStyles(ResponsiveGridLayoutStyles, { name: 'ResponsiveGridLayout' });

/**
 * The Responsive Grid Layout positions UI elements in a multi column flow layout.
 * They can be configured to display a variable number of columns depending on available screen size.
 * With these controls, it is possible to achieve flexible layouts and line breaks for large, medium,
 * and small-sized screens, such as desktop, tablet, and mobile.
 *
 * @since 0.16.4
 */
const ResponsiveGridLayout = forwardRef<HTMLDivElement, ResponsiveGridLayoutPropTypes>((props, ref) => {
  const {
    children,
    columnGap,
    rowGap,
    columnsS,
    columnsM,
    columnsL,
    columnsXL,
    columnSpanS,
    columnSpanM,
    columnSpanL,
    columnSpanXL,
    style,
    className,
    ...rest
  } = props;
  const classes = useStyles();
  const finalClassNames = clsx(classes.container, className);

  return (
    <div
      ref={ref}
      className={finalClassNames}
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
      {...rest}
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
