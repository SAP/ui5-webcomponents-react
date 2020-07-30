import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout';
import { FCLLayout } from '@ui5/webcomponents-react/lib/FCLLayout';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';

export interface FlexibleColumnLayoutPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the columns layout and their proportion. <br><br> <b>Note:</b> The layout also depends on the screen size - one column for screens smaller than 900px, two columns between 900px and 1280px and three columns for sizes bigger than 1280px. <br><br> Available options are: <ul> <li><code>OneColumn</code></li> <li><code>TwoColumnsStartExpanded</code></li> <li><code>TwoColumnsMidExpanded</code></li> <li><code>ThreeColumnsMidExpanded</code></li> <li><code>ThreeColumnsEndExpanded</code></li> <li><code>ThreeColumnsStartExpandedEndHidden</code></li> <li><code>ThreeColumnsMidExpandedEndHidden</code></li> <li><code>MidColumnFullScreen</code></li> <li><code>EndColumnFullScreen</code></li> </ul> <br><br> <b>For example:</b> layout=<code>TwoColumnsStartExpanded</code> means the layout will display up to two columns in 67%/33% proportion.
   */
  layout?: FCLLayout;
  /**
   * Defines the visibility of the arrows, used for expanding and shrinking the columns.
   */
  noArrows?: boolean;
  /**
   * Defines the content in the end column.
   */
  endColumn?: ReactNode;
  /**
   * Defines the content in the middle column.
   */
  midColumn?: ReactNode;
  /**
   * Defines the content in the start column.
   */
  startColumn?: ReactNode;
  /**
   * Fired when the layout changes via user interaction by clicking the arrows or by changing the component size due to resizing.
   */
  onLayoutChange?: (
    event: CustomEvent<{
      layout: FCLLayout;
      columnLayout: unknown[];
      startColumnVisible: boolean;
      midColumnVisible: boolean;
      endColumnVisible: boolean;
      arrowsUsed: boolean;
      resize: boolean;
    }>
  ) => void;
}

/**
 * <code>import { FlexibleColumnLayout } from '@ui5/webcomponents-react/lib/FlexibleColumnLayout';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/FlexibleColumnLayout" target="_blank">UI5 Web Components Playground</a>
 */
const FlexibleColumnLayout: FC<FlexibleColumnLayoutPropTypes> = withWebComponent<FlexibleColumnLayoutPropTypes>(
  'ui5-flexible-column-layout',
  ['layout'],
  ['noArrows'],
  ['endColumn', 'midColumn', 'startColumn'],
  ['layout-change']
);

FlexibleColumnLayout.displayName = 'FlexibleColumnLayout';

FlexibleColumnLayout.defaultProps = {
  layout: FCLLayout.OneColumn,
  noArrows: false
};

export { FlexibleColumnLayout };
