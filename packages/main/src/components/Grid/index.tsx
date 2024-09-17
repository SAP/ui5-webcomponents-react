'use client';

import { useStylesheet, useViewportRange } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import { forwardRef, isValidElement } from 'react';
import { GridPosition } from '../../enums/index.js';
import { flattenFragments } from '../../internal/utils.js';
import type { CommonProps } from '../../types/index.js';
import { classNames, styleData } from './Grid.module.css.js';

export interface GridPropTypes extends CommonProps {
  /**
   * Vertical spacing between the rows in the Grid. If not specified, then 1rem.
   *
   * @default `"1rem"`
   */
  vSpacing?: CSSProperties['height'];
  /**
   * Horizontal spacing between the content in the Grid. If not specified, then 1rem.
   *
   * @default `"1rem"`
   */
  hSpacing?: CSSProperties['width'];
  /**
   * Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
   */
  position?: GridPosition | keyof typeof GridPosition;
  /**
   * A string type that represents Grid's default span values for very large, large, medium and small screens for the whole Grid.
   * Allowed values are separated by space Letters XL, L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4".
   * Note that the parameters has to be provided in the order very large, large, medium, small.
   *
   * You can override this default span on each child element by setting the prop `data-layout-span`.
   *
   * @default `"XL3 L3 M6 S12"`
   */
  defaultSpan?: string;
  /**
   * Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for very large, large, medium and small screens.
   * Allowed values are separated by space Letters XL, L, M or S followed by number of columns from 0 to 12 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4".
   * Note that the parameters has to be provided in the order very-large, large, medium, small.
   *
   * You can override this default indent on each child element by setting the prop `data-layout-indent`.
   *
   * @default `"XL0 L0 M0 S0"`
   */
  defaultIndent?: string;
  /**
   * Components that are placed into Grid layout.
   */
  children?: ReactNode | ReactNode[];
}

type Range = 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop';

const INDENT_PATTERN =
  /^([X][L](?<LargeDesktop>[0-9]|1[0-2]))? ?([L](?<Desktop>[0-9]|1[0-2]))? ?([M](?<Tablet>[0-9]|1[0-2]))? ?([S](?<Phone>[0-9]|1[0-2]))?$/i;
const SPAN_PATTERN =
  /^([X][L](?<LargeDesktop>[1-9]|1[0-2]))? ?([L](?<Desktop>[1-9]|1[0-2]))? ?([M](?<Tablet>[1-9]|1[0-2]))? ?([S](?<Phone>[1-9]|1[0-2]))?$/i;

const DefaultSpanMap = new Map<Range, number>();
DefaultSpanMap.set('Phone', 1);
DefaultSpanMap.set('Tablet', 2);
DefaultSpanMap.set('Desktop', 4);
DefaultSpanMap.set('LargeDesktop', 4);

const DefaultIndentMap = new Map<Range, number>();
DefaultIndentMap.set('Phone', 0);
DefaultIndentMap.set('Tablet', 0);
DefaultIndentMap.set('Desktop', 0);
DefaultIndentMap.set('LargeDesktop', 0);

const getSpanFromString = (span: string, currentRange: Range) => {
  const spanConfig = SPAN_PATTERN.exec(span);
  return Number(spanConfig?.groups[currentRange] ?? DefaultSpanMap.get(currentRange));
};

const getIndentFromString = (indent: string, currentRange: Range) => {
  const indentConfig = INDENT_PATTERN.exec(indent);
  return Number(indentConfig?.groups[currentRange] ?? DefaultIndentMap.get(currentRange));
};

/**
 * A layout container component used for aligning items with various sizes in a simple grid.
 *
 * __Note:__ The `Grid` component is only applying grid styles only on the first level of its children. If you want to define a more complex grid, we recommend implementing a standard [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
 */
const Grid = forwardRef<HTMLDivElement, GridPropTypes>((props, ref) => {
  const {
    position,
    children,
    hSpacing = '1rem',
    vSpacing = '1rem',
    style,
    className,
    slot,
    defaultIndent = 'XL0 L0 M0 S0',
    defaultSpan = 'XL3 L3 M6 S12',
    ...rest
  } = props;

  useStylesheet(styleData, Grid.displayName);
  const currentRange = useViewportRange();
  const gridClasses = clsx(
    classNames.grid,
    GridPosition.Center === position && classNames.positionCenter,
    GridPosition.Right === position && classNames.positionRight,
    className
  );

  return (
    <div
      ref={ref}
      className={gridClasses}
      style={{ rowGap: vSpacing, columnGap: hSpacing, ...style }}
      slot={slot}
      {...rest}
    >
      {flattenFragments(children, Infinity).map((child) => {
        if (!isValidElement(child)) {
          return null;
        }

        const childSpan = getSpanFromString(child.props['data-layout-span'] ?? defaultSpan, currentRange);
        const childClass = classNames[`gridSpan${childSpan}`];

        const childrenWithGridLayout = [
          <div className={childClass} key={child.key}>
            {child}
          </div>
        ];

        const indentSpan = getIndentFromString(child.props['data-layout-indent'] ?? defaultIndent, currentRange);
        if (indentSpan && indentSpan > 0) {
          childrenWithGridLayout.unshift(
            <span
              className={classNames[`gridSpan${indentSpan}`]}
              key={`${child.key}-indent`}
              data-component-name="GridIndentSpacer"
              aria-hidden="true"
            />
          );
        }
        return childrenWithGridLayout;
      })}
    </div>
  );
});

Grid.displayName = 'Grid';

export { Grid };
