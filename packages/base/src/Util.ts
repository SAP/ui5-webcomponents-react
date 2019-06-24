export const deprecationNotice = (component: string, message: string) => {
  const value = `* ui5-webcomponents-react Deprecation Notice - ${component}`;
  const dots = '*'.padStart(value.length, '*');
  // eslint-disable-next-line no-console
  console.warn(`${dots}${value}${dots}${message}`);
};

export const pushElementBackInScreen = (elementRef, margin = 5) => {
  if (elementRef) {
    const viewportHeight = document.documentElement.clientHeight;
    const viewportWidth = document.documentElement.clientWidth;

    const boundingClientRect = elementRef.getBoundingClientRect();
    if (boundingClientRect.left < 0) {
      const offSet = boundingClientRect.left * -1 + margin;
      const left = parseInt(elementRef.style.left, 10) + offSet;
      elementRef.style.left = `${left}px`;
    }

    if (boundingClientRect.right > viewportWidth) {
      const offSet = boundingClientRect.right - viewportWidth;
      const left = parseInt(elementRef.style.left, 10) - offSet - margin;
      elementRef.style.left = `${left}px`;
    }

    if (boundingClientRect.top < 0) {
      const offSet = boundingClientRect.top * -1 + margin;
      const top = parseInt(elementRef.style.top, 10) + offSet;
      elementRef.style.top = `${top}px`;
    }

    if (boundingClientRect.bottom > viewportHeight) {
      const offSet = boundingClientRect.bottom - viewportHeight;
      const top = parseInt(elementRef.style.top, 10) - offSet;
      elementRef.style.top = `${top}px`;
    }
  }
};
