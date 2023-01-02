// TimelineChart
export const DEFAULT_WIDTH = 'auto';
export const ROW_TITLE_WIDTH = 150;
export const COLUMN_HEADER_HEIGHT = 50;
export const DEFAULT_ROW_HEIGHT = 25;
export const DEFAULT_CHART_VERTICAL_COLS = 5;
export const INVALID_DISCRETE_LABELS_MESSAGE =
  'The "discreteLabels" prop length must be equal to the "totalDuration" prop value if supplied. \
  Please adjust the discreteLabel array or change the totalDuration.';
export const ILLEGAL_CONNECTION_MESSAGE =
  'Tasks or Milestones with connections must have a unique ID. \
  Please a unique "id" property to any Task or Milestone item with a connection';
export const MOUSE_CURSOR_AUTO = 'auto';
export const MOUSE_CURSOR_GRAB = 'grab';
export const MOUSE_CURSOR_GRABBING = 'grabbing';
export const TOLERANCE = 0.01;

// TimelineChartBody
export const SCALE_FACTOR = 1.1;
export const THROTTLE_INTERVAL = 300;
export const NORMAL_OPACITY = 1.0;
export const HOVER_OPACITY = 0.7;
export const ARROWHEAD_WIDTH = 8; // base of the arrow head triangle. Where the line joins the head
export const ARROWHEAD_HEIGHT = 5; // Distance from the pointy tip to where the arrow line joins the head
export const ARROW_CLEARANCE = ARROWHEAD_HEIGHT + 3;
export const MAX_BODY_WIDTH = 65500;
