import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { useViewportRange } from '@ui5/webcomponents-react-base/lib/useViewportRange';
import { GridPosition } from '@ui5/webcomponents-react/lib/GridPosition';
import React, {
  Children,
  CSSProperties,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useMemo
} from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { GridClasses } from './Grid.jss';

export interface GridPropTypes extends CommonProps {
  /**
   * Width of the Grid. If not specified, then 100%.
   */
  width?: CSSProperties['width'];
  /**
   * Vertical spacing between the rows in the Grid. In rem, allowed values are 0, 0.5, 1 and 2.
   */
  vSpacing?: 0 | 0.5 | 1 | 2;
  /**
   * Horizontal spacing between the content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.
   */
  hSpacing?: 0 | 0.5 | 1 | 2;
  /**
   * Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
   */
  position?: GridPosition;
  /**
   * A string type that represents Grid's default span values for large, medium and small screens for the whole Grid.
   * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4".
   * Note that the parameters has to be provided in the order large medium small.
   */
  defaultSpan?: string;
  /**
   * Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens.
   * Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4".
   * Note that the parameters has to be provided in the order large medium small.
   */
  defaultIndent?: string;
  /**
   * Components that are placed into Grid layout.
   */
  children: ReactNode | ReactNodeArray;
}

const INDENT_PATTERN = /^([X][L](?<LargeDesktop>[0-9]|1[0-1]))? ?([L](?<Desktop>[0-9]|1[0-1]))? ?([M](?<Tablet>[0-9]|1[0-1]))? ?([S](?<Phone>[0-9]|1[0-1]))?$/i;
const SPAN_PATTERN = /^([X][L](?<LargeDesktop>[1-9]|1[0-2]))? ?([L](?<Desktop>[1-9]|1[0-2]))? ?([M](?<Tablet>[1-9]|1[0-2]))? ?([S](?<Phone>[1-9]|1[0-2]))?$/i;

const DefaultSpanMap = new Map();
DefaultSpanMap.set('Phone', 12);
DefaultSpanMap.set('Tablet', 6);
DefaultSpanMap.set('Desktop', 3);
DefaultSpanMap.set('LargeDesktop', 3);

const DefaultIndentMap = new Map();
DefaultIndentMap.set('Phone', 0);
DefaultIndentMap.set('Tablet', 0);
DefaultIndentMap.set('Desktop', 0);
DefaultIndentMap.set('LargeDesktop', 0);

const getSpanFromString = (span, currentRange) => {
  const spanConfig = SPAN_PATTERN.exec(span);
  return spanConfig.groups[currentRange] ?? DefaultSpanMap.get(currentRange);
};

const getIndentFromString = (indent, currentRange) => {
  const indentConfig = INDENT_PATTERN.exec(indent);
  return indentConfig.groups[currentRange] ?? DefaultIndentMap.get(currentRange);
};

const useStyles = createComponentStyles(GridClasses, { name: 'Grid' });

/**
 * <code>import { Grid } from '@ui5/webcomponents-react/lib/Grid';</code>
 */
const Grid: FC<GridPropTypes> = forwardRef((props: GridPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    hSpacing,
    vSpacing,
    position,
    width,
    style,
    className,
    tooltip,
    slot,
    defaultIndent,
    defaultSpan
  } = props;

  const classes = useStyles();
  const gridClasses = StyleClassHelper.of(classes.grid);
  gridClasses.put(classes[`gridHSpace${hSpacing === 0.5 ? '05' : hSpacing}`]);
  gridClasses.put(classes[`gridVSpace${vSpacing === 0.5 ? '05' : vSpacing}`]);

  const currentRange = useViewportRange('StdExt');

  if (GridPosition.Center === position) {
    gridClasses.put(classes.gridPositionCenter);
  }

  if (GridPosition.Right === position) {
    gridClasses.put(classes.gridPositionRight);
  }

  const gridStyle: CSSProperties = useMemo(() => {
    const styles: CSSProperties = {};
    if (width !== '100%' && width !== 'auto' && width !== 'inherit') {
      if (hSpacing === 0) {
        styles.width = width;
      } else {
        styles.width = `calc(${width} - ${hSpacing}rem)`;
      }
    }
    if (style) {
      Object.assign(styles, style);
    }

    return styles;
  }, [width, hSpacing, style]);

  if (className) {
    gridClasses.put(className);
  }

  const renderGridElements = (child: ReactElement<any>) => {
    const gridSpanClasses = StyleClassHelper.of(classes.gridSpan);
    if (child.props['data-layout'] && child.props['data-layout'].span) {
      const childSpan = getSpanFromString(child.props['data-layout'].span, currentRange);
      gridSpanClasses.put(classes[`gridSpan${childSpan}`]);
    } else {
      const span = getSpanFromString(defaultSpan, currentRange);
      gridSpanClasses.put(classes[`gridSpan${span}`]);
    }

    const indentSpan = getIndentFromString(defaultIndent, currentRange);
    if (child.props['data-layout'] && child.props['data-layout'].indent) {
      const childIndent = getIndentFromString(child.props['data-layout'].indent, currentRange);
      if (childIndent && childIndent > 0) {
        gridSpanClasses.put(classes[`gridIndent${childIndent}`]);
      }
    } else if (indentSpan && indentSpan > 0) {
      gridSpanClasses.put(classes[`gridIndent${indentSpan}`]);
    }
    return <div className={gridSpanClasses.valueOf()}>{child}</div>;
  };

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div
      ref={ref}
      className={gridClasses.valueOf()}
      style={gridStyle}
      title={tooltip}
      slot={slot}
      {...passThroughProps}
    >
      {Children.map(children, renderGridElements)}
    </div>
  );
});

Grid.displayName = 'Grid';
Grid.defaultProps = {
  width: '100%',
  vSpacing: 1,
  hSpacing: 1,
  position: GridPosition.Left,
  defaultSpan: 'XL3 L3 M6 S12',
  defaultIndent: 'XL0 L0 M0 S0'
};

export { Grid };
