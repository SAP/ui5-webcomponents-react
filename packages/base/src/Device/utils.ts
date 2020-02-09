export const windowSize = () => {
  return [window.innerWidth, window.innerHeight];
};

export const changeRootCSSClass = (sClassName, bRemove, sPrefix?) => {
  const oRoot = document.documentElement;
  if (oRoot.className.length === 0) {
    if (!bRemove) {
      oRoot.className = sClassName;
    }
  } else {
    const aCurrentClasses = oRoot.className.split(' ');
    let sNewClasses = '';
    aCurrentClasses.forEach((currentClass) => {
      // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
      if ((sPrefix && currentClass.indexOf(sPrefix) !== 0) || (!sPrefix && currentClass !== sClassName)) {
        sNewClasses = `${sNewClasses + currentClass} `;
      }
    });
    if (!bRemove) {
      sNewClasses += sClassName;
    }
    oRoot.className = sNewClasses;
  }
};

export const getQuery = (from, to, unit) => {
  unit = unit || 'px';
  let q = 'all';
  if (from > 0) {
    q = `${q} and (min-width:${from}${unit})`;
  }
  if (to > 0) {
    q = `${q} and (max-width:${to}${unit})`;
  }
  return q;
};

export const convertToPx = (val, unit?) => {
  if (unit === 'em' || unit === 'rem') {
    const s = window.getComputedStyle ?? ((element: any) => element.currentStyle);
    const x = s(document.documentElement).fontSize;
    const f = x && x.indexOf('px') >= 0 ? parseFloat(x) : 16;
    return val * f;
  }
  return val;
};

export const matchLegacyBySize = (from, to, unit, size) => {
  from = convertToPx(from, unit);
  to = convertToPx(to, unit);

  const width = size[0];
  const a = from < 0 || from <= width;
  const b = to < 0 || width <= to;
  return a && b;
};
