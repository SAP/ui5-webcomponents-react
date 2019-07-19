import DataLabels from 'chartjs-plugin-datalabels';
import { defaults, pluginService } from 'chart.js';
import { generateLegend } from './internal/ChartLegend';

export const defaultFont = {
  family: '"72", Arial, Helvetica, sans-serif',
  size: '12'
};

defaults.global.animation.duration = 0;
defaults.scale.ticks.fontStyle = 'bold';
defaults.global.layout.padding = 16;

// Legend Configuration
defaults.global.legend.display = false;
defaults.global.legendCallback = generateLegend;

// defaults.global.legend.position = 'bottom';
// defaults.global.legend.labels.fontFamily = defaultFont.family;
// defaults.global.legend.labels.fontColor = '#6a6d70'; /* sapUiContentLabelColor */

// Chart Type Configuration
defaults.global.elements.line.fill = false;
defaults.doughnut.legendCallback = generateLegend;
defaults.pie.legendCallback = generateLegend;

// Data Labels Configuration
pluginService.register(DataLabels);
defaults.global.plugins.datalabels.align = 'top';
defaults.global.plugins.datalabels.display = 'auto';
// @ts-ignore
defaults.global.plugins.datalabels.font = defaultFont;

export const DEFAULT_OPTIONS = {
  scales: {
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 6
        },
        gridLines: {
          display: true
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
          lineWidth: 2,
          color: '#32363a' /* sapUiBaseText */,
          fontColor: '#32363a' /* sapUiBaseText */
        }
      }
    ]
  }
};
