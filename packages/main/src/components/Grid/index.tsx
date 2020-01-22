import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { useViewportRange } from '@ui5/webcomponents-react-base/lib/useViewportRange';
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
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Grid.jss';

export enum GridPosition {
  Left = 'Left',
  Center = 'Center',
  Right = 'Right'
}

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
   * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
   */
  containerQuery?: boolean;
  /**
   * Components that are placed into Grid layout.
   */
  children: ReactNode | ReactNodeArray;
}

const INDENT_PATTERN = /^([X][L](?:[0-9]|1[0-1]))? ?([L](?:[0-9]|1[0-1]))? ?([M](?:[0-9]|1[0-1]))? ?([S](?:[0-9]|1[0-1]))?$/i;
const SPAN_PATTERN = /^([X][L](?:[1-9]|1[0-2]))? ?([L](?:[1-9]|1[0-2]))? ?([M](?:[1-9]|1[0-2]))? ?([S](?:[1-9]|1[0-2]))?$/i;

const getCurrentSpan = () => {
  const classList = document.querySelector('html').classList;
  const isXL = classList.contains('sapUiMedia-StdExt-LargeDesktop');
  const isL = !isXL && classList.contains('sapUiMedia-Std-Desktop');
  const isM = !isL && classList.contains('sapUiMedia-Std-Tablet');
  const isS = !isM && classList.contains('sapUiMedia-Std-Phone');
  return [false, isXL, isL, isM, isS].indexOf(true);
};

const getSpanFromString = (span) => {
  const currentSpan = getCurrentSpan();
  const spanConfig = SPAN_PATTERN.exec(span);
  return spanConfig[currentSpan]
    ? parseInt(spanConfig[currentSpan].replace(/[XLMS]{0,2}/g, ''), 10)
    : [undefined, 3, 3, 6, 12][currentSpan];
};

const getIndentFromString = (indent) => {
  const currentSpan = getCurrentSpan();
  const indentConfig = INDENT_PATTERN.exec(indent);
  return indentConfig[currentSpan]
    ? parseInt(indentConfig[currentSpan].replace(/[XLMS]{0,2}/g, ''), 10)
    : [undefined, 0, 0, 0, 0][currentSpan];
};

const useStyles = createUseStyles(styles, { name: 'Grid' });

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

  const currentRange = useViewportRange('StdExt');

  const classes = useStyles();
  const gridClasses = StyleClassHelper.of(classes.grid);
  gridClasses.put(classes[`gridHSpace${hSpacing === 0.5 ? '05' : hSpacing}`]);
  gridClasses.put(classes[`gridVSpace${vSpacing === 0.5 ? '05' : vSpacing}`]);

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
    const span = getSpanFromString(defaultSpan);
    const indentSpan = getIndentFromString(defaultIndent);

    const gridSpanClasses = StyleClassHelper.of(classes.gridSpan);
    if (child.props['data-layout'] && child.props['data-layout'].span) {
      const childSpan = getSpanFromString(child.props['data-layout'].span);
      gridSpanClasses.put(classes[`gridSpan${childSpan}`]);
    } else {
      gridSpanClasses.put(classes[`gridSpan${span}`]);
    }

    if (child.props['data-layout'] && child.props['data-layout'].indent) {
      const childIndent = getIndentFromString(child.props['data-layout'].indent);
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
  defaultIndent: 'XL0 L0 M0 S0',
  containerQuery: false
};

export { Grid };
