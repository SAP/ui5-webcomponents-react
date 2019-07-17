import { getOrLoadTheme } from '../themes/themeMap';

export const populateData = (labels, datasets, colors, theme, isPie = false) => {
  const colorPalette = resolveColors(colors, theme);
  return {
    labels,
    datasets: datasets.map((item, index) => ({
      backgroundColor: isPie ? colorPalette : colorPalette[index],
      borderColor: isPie ? colorPalette : colorPalette[index],
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
