let canvas;
let textHeight;

export const getTextWidth = (text) => {
  const font = `normal 12pt "72","72full",Arial,Helvetica,sans-serif`;
  // re-use canvas object for better performance
  canvas = canvas || (canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};

export const getTextHeight = (text = 'M', font = `normal 12pt "72","72full",Arial,Helvetica,sans-serif`) => {
  // re-use canvas object for better performance
  canvas = canvas || (canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text); // should be around 90% accurate...
  return textHeight || (textHeight = metrics.width);
};

export const truncateLongLabel = (value: string, length = 13) => {
  if (value?.length > length) {
    return `${value.slice(0, length - 2)}...`;
  }
  return value;
};
