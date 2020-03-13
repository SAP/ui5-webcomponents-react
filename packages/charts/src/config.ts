import { defaults, pluginService } from 'chart.js';
import DataLabels from 'chartjs-plugin-datalabels';
import { Font } from 'chartjs-plugin-datalabels/types/options';
import { generateLegend } from './internal/ChartLegend';
import { getCssVariableValue } from './themes/Utils';

defaults.global.animation.duration = 0;
defaults.scale.ticks.fontStyle = 'bold';
defaults.global.layout.padding = {
  top: 32,
  left: 16,
  right: 16,
  bottom: 16
};

defaults.global.maintainAspectRatio = false;

// Legend Configuration
defaults.global.legend.display = false;
defaults.global.legendCallback = generateLegend;

// Chart Type Configuration
defaults.global.elements.line.fill = false;
defaults.doughnut.legendCallback = generateLegend;
defaults.pie.legendCallback = generateLegend;

// Data Labels Configuration
pluginService.register(DataLabels);
defaults.global.plugins.datalabels.align = 'top';
defaults.global.plugins.datalabels.display = 'auto';

export const defaultFont: Font = {
  family: getCssVariableValue('--sapFontFamily', '"72","72full",Arial,Helvetica,sans-serif'),
  size: 12
};
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
          color: getCssVariableValue('--sapTextColor', '#32363a'),
          fontColor: getCssVariableValue('--sapTextColor', '#32363a')
        }
      }
    ]
  }
};
