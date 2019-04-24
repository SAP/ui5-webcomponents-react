export const isNumeric = (n: any) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
