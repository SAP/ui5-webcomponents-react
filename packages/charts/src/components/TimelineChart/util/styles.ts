import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { createUseStyles } from 'react-jss';

const solidOutline = `0.5px solid ${ThemingParameters.sapList_BorderColor}`;

const styles = {
  onlyOutline: { outline: solidOutline },

  main: {
    outline: solidOutline,
    backgroundColor: ThemingParameters.sapBaseColor,
    display: 'grid',
    gap: 0
  },

  bodyContainer: { overflow: 'hidden' },

  columnTitle: {
    position: 'absolute',
    borderBlockEnd: solidOutline,
    marginBlockEnd: '-0.5px',
    textAlign: 'center',
    fontSize: '13px',
    color: ThemingParameters.sapTitleColor
  },

  annotation: { position: 'absolute' },

  rowLabels: {
    outline: solidOutline,
    color: ThemingParameters.sapTitleColor
  },

  rowLabelsItem: {
    width: '100%',
    outline: solidOutline,
    fontSize: '10px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  columnLabel: {
    outline: solidOutline,
    color: ThemingParameters.sapTitleColor
  },

  columnTitlePlaceHolder: {
    textAlign: 'center',
    borderBlockEnd: solidOutline,
    fontSize: '13px'
  },

  columnLabelItems: {
    fontSize: '10px',
    display: 'grid',
    textAlign: 'center'
  },

  rowTitleTop: { height: '50%' },

  rowTitleBottom: {
    height: '50%',
    textAlign: 'center',
    fontSize: '13px'
  },

  chartBody: {
    position: 'relative',
    outline: `1px solid ${ThemingParameters.sapList_BorderColor}`
  },

  tooltipContainer: {
    width: '100%',
    height: '100%',
    fontSize: '10px',
    position: 'absolute',
    pointerEvents: 'none'
  },

  tooltip: {
    minWidth: 80,
    display: 'inline-grid',
    gap: 2,
    padding: 10,
    outline: `2px solid ${ThemingParameters.sapList_BorderColor}`,
    borderRadius: 8,
    color: ThemingParameters.sapTextColor,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    position: 'absolute'
  },

  tooltipLabel: { textAlign: 'center' },

  tooltipColorBar: {
    width: '100%',
    height: '4px'
  },

  layer: {
    width: '100%',
    height: '100%'
  }
};

export const useStyles = createUseStyles(styles, { name: 'TimelineChart' });
