import belize from './../themes/sap_belize';
import belizePlus from './../themes/sap_belize_plus';

const getMapForTheme = (theme) => {
  switch (theme) {
    case 'sap_belize':
    case 'sap_fiori_3': // TODO This needs to change as soon there is a Fiori3 Color Map Available
      return belize;
    case 'sap_belize_plus':
      return belizePlus;
    default:
      throw new Error('Unsupported Theme');
  }
};

const getQualitativePaletteForTheme = (theme) =>
  Object.entries(theme)
    .filter(([key]) => /^sapUiChartPaletteQualitativeHue/.test(key))
    .map(([key, value]) => value); // eslint-disable-line no-unused-vars

export const populateData = (labels, datasets, colors, theme, isPie = false) => {
  let colorPalette = [];
  const themeMap = getMapForTheme(theme);

  if (colors && colors.length > 0) {
    colorPalette = colors.map((key) => themeMap[key] || key);
  } else {
    colorPalette = getQualitativePaletteForTheme(themeMap);
  }

  return {
    labels,
    datasets: datasets.map((item, index) => ({
      backgroundColor: isPie ? colorPalette : colorPalette[index],
      borderColor: isPie ? colorPalette : colorPalette[index],
      ...item
    }))
  };
};

export const populateDataMicroChart = (colors, theme) => {
  let colorPalette = [];
  const themeMap = getMapForTheme(theme);

  if (colors && colors.length > 0) {
    colorPalette = colors.map((key) => themeMap[key] || key);
  } else {
    colorPalette = getQualitativePaletteForTheme(themeMap);
  }

  return colorPalette;
};
