import { useMemo } from 'react';
import { getOrLoadTheme } from '../themes/themeMap';

export const populateData = (labels, datasets, colors, theme, isPie = false) => {
  const colorPalette = resolveColors(colors, theme);
  return {
    labels,
    datasets: datasets.map((item, index) => ({
      backgroundColor: isPie ? colorPalette : colorPalette[index % colorPalette.length],
      borderColor: isPie ? colorPalette : colorPalette[index % colorPalette.length],
      ...item
    }))
  };
};

export const resolveColors = (colors, theme) => {
  const { semanticColors, sequentialColors } = getOrLoadTheme(theme);

  if (colors && colors.length > 0) {
    return colors.map((key) => semanticColors[key] || sequentialColors[key] || key);
  }
  return Object.values(sequentialColors);
};

export const useChartData = (labels, datasets, colors, theme, isPie = false) => {
  return useMemo(() => populateData(labels, datasets, colors, theme, isPie), [labels, datasets, colors, theme, isPie]);
};
