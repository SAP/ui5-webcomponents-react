import React, { Children, Component, CSSProperties, ReactElement, ReactNode, ReactNodeArray } from 'react';
import { withStyles } from '../../utils/withStyles';
import { styles } from './Grid.jss';
import { ClassProps } from '../../types';
import { StyleClassHelper } from '@fiori-for-react/utils';
import { Device } from '../../utils/Device';
import { CommonProps } from '../../interfaces';

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

interface GridPropsInternal extends GridPropTypes, ClassProps {}

interface GridState {
  update: boolean;
}

class GridComponent extends Component<GridPropTypes, GridState> {
  private static INDENT_PATTERN = /^([X][L](?:[0-9]|1[0-1]))? ?([L](?:[0-9]|1[0-1]))? ?([M](?:[0-9]|1[0-1]))? ?([S](?:[0-9]|1[0-1]))?$/i;
  private static SPAN_PATTERN = /^([X][L](?:[1-9]|1[0-2]))? ?([L](?:[1-9]|1[0-2]))? ?([M](?:[1-9]|1[0-2]))? ?([S](?:[1-9]|1[0-2]))?$/i;

  private resizeTimeout: number;

  static defaultProps = {
    width: '100%',
    vSpacing: 1,
    hSpacing: 1,
    position: 'Left',
    defaultSpan: 'XL3 L3 M6 S12',
    defaultIndent: 'XL0 L0 M0 S0',
    containerQuery: false
  };

  state = {
    update: false
  };

  componentDidMount(): void {
    Device.resize.attachHandler(this.handleResize, this);
    this.handleResize();
  }

  componentWillUnmount(): void {
    Device.resize.detachHandler(this.handleResize, this);
  }

  private handleResize = () => {
    if (this.resizeTimeout) {
      window.clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = window.setTimeout(() => {
      this.setState({ update: !this.state.update });
    }, 50);
  };

  private static getCurrentSpan = () => {
    const classList = document.querySelector('html').classList;
    const isXL = classList.contains('sapUiMedia-StdExt-LargeDesktop');
    const isL = !isXL && classList.contains('sapUiMedia-Std-Desktop');
    const isM = !isL && classList.contains('sapUiMedia-Std-Tablet');
    const isS = !isM && classList.contains('sapUiMedia-Std-Phone');
    return [false, isXL, isL, isM, isS].indexOf(true);
  };

  private static getSpanFromString = (span) => {
    const currentSpan = GridComponent.getCurrentSpan();
    const spanConfig = GridComponent.SPAN_PATTERN.exec(span);
    return spanConfig[currentSpan]
      ? parseInt(spanConfig[currentSpan].replace(/[XLMS]{0,2}/g, ''), 10)
      : [undefined, 3, 3, 6, 12][currentSpan];
  };

  private static getIndentFromString = (indent) => {
    const currentSpan = GridComponent.getCurrentSpan();
    const indentConfig = GridComponent.INDENT_PATTERN.exec(indent);
    return indentConfig[currentSpan]
      ? parseInt(indentConfig[currentSpan].replace(/[XLMS]{0,2}/g, ''), 10)
      : [undefined, 0, 0, 0, 0][currentSpan];
  };

  private renderGridElements = (child: ReactElement<any>) => {
    const { defaultIndent, defaultSpan, classes } = this.props as GridPropsInternal;

    const span = GridComponent.getSpanFromString(defaultSpan);
    const indentSpan = GridComponent.getIndentFromString(defaultIndent);

    const gridSpanClasses = StyleClassHelper.of(classes.gridSpan);
    if (child.props['data-layout'] && child.props['data-layout'].span) {
      const childSpan = GridComponent.getSpanFromString(child.props['data-layout'].span);
      gridSpanClasses.put(classes[`gridSpan${childSpan}`]);
    } else {
      gridSpanClasses.put(classes[`gridSpan${span}`]);
    }

    if (child.props['data-layout'] && child.props['data-layout'].indent) {
      const childIndent = GridComponent.getIndentFromString(child.props['data-layout'].indent);
      if (childIndent && childIndent > 0) {
        gridSpanClasses.put(classes[`gridIndent${childIndent}`]);
      }
    } else if (indentSpan && indentSpan > 0) {
      gridSpanClasses.put(classes[`gridIndent${indentSpan}`]);
    }
    return <div className={gridSpanClasses.valueOf()}>{child}</div>;
  };

  render() {
    const { children, classes, hSpacing, vSpacing, position, width, style, className, tooltip } = this
      .props as GridPropsInternal;

    const gridClasses = StyleClassHelper.of(classes.grid);
    gridClasses.put(classes[`gridHSpace${hSpacing === 0.5 ? '05' : hSpacing}`]);
    gridClasses.put(classes[`gridVSpace${vSpacing === 0.5 ? '05' : vSpacing}`]);

    if (GridPosition.Center === position) {
      gridClasses.put(classes.gridPositionCenter);
    }

    if (GridPosition.Right === position) {
      gridClasses.put(classes.gridPositionRight);
    }

    const gridStyle: CSSProperties = {};
    if (width !== '100%' && width !== 'auto' && width !== 'inherit') {
      if (hSpacing === 0) {
        gridStyle.width = width;
      } else {
        gridStyle.width = `calc(${width} - ${hSpacing}rem)`;
      }
    }

    if (style) {
      Object.assign(gridStyle, style);
    }

    if (className) {
      gridClasses.put(className);
    }

    return (
      <div
        className={gridClasses.valueOf()}
        style={gridStyle}
        title={tooltip}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        {Children.map(children, this.renderGridElements)}
      </div>
    );
  }
}

export const Grid = withStyles(styles)(GridComponent);
