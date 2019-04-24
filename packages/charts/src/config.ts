import DataLabels from 'chartjs-plugin-datalabels';
import { defaults, pluginService } from 'chart.js';

export const defaultFont = {
  // family: "'72', Arial, Helvetica, sans-serif",
  family: '"72", Arial, Helvetica, sans-serif',
  size: '12'
};

pluginService.register(DataLabels);
defaults.global.plugins.datalabels.align = 'top';
defaults.global.legend.position = 'bottom';
defaults.global.legend.labels.fontFamily = defaultFont.family;
// @ts-ignore
defaults.global.plugins.datalabels.font = defaultFont;
defaults.global.animation.duration = 0;
defaults.global.plugins.datalabels.display = 'auto';
// defaults.global.maintainAspectRatio = false;

export const DEFAULT_OPTIONS = {
  scales: {
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
};
