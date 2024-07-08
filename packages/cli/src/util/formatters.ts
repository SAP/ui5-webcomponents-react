let ui5TagNameToComponentNameMap: Record<string, string> = {};

export function setGlobalTagNameMap(map: typeof ui5TagNameToComponentNameMap) {
  ui5TagNameToComponentNameMap = map;
}

function replaceUi5TagNames(text: string) {
  let newText = text.replaceAll(/`([\w\d-]+)`/g, (match, tagName) => {
    if (ui5TagNameToComponentNameMap[tagName]) {
      return `\`${ui5TagNameToComponentNameMap[tagName]}\``;
    }
    return match;
  });

  newText = newText.replaceAll(/(<\/?)([\w\d]+-[\w\d-]+)([\s>])/g, (match, openingTag, tagName, closingTag) => {
    if (ui5TagNameToComponentNameMap[tagName]) {
      return `${openingTag}${ui5TagNameToComponentNameMap[tagName]}${closingTag}`;
    }
    return match;
  });
  return newText;
}

export function propDescriptionFormatter(html: string) {
  return replaceUi5TagNames(html).replaceAll('\n', '\n * ');
}

export function summaryFormatter(htmlDesc: string) {
  let summary = htmlDesc.replace(/###\s?Overview\n*/, '').replace(/### ES6 Module Import\n*`.+`/, '');
  summary = replaceUi5TagNames(summary);
  summary = summary.replaceAll('\n', '\n * ');

  return summary;
}

export function snakeCaseToCamelCase(str: string) {
  return str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function mapWebComponentTypeToPrimitive(type: string): string | null {
  switch (type) {
    case 'sap.ui.webc.base.types.Integer':
    case 'sap.ui.webc.base.types.Float':
    case 'number':
      return 'number';
    case 'string':
      return 'string';
    case 'Boolean':
    case 'boolean':
      return 'boolean';
    case 'unknown':
      return 'unknown';
    default:
      return null;
  }
}

export function sinceFilter(ui5since: string | undefined) {
  return ui5since && !ui5since.startsWith('0') && !ui5since.includes('-rc');
}
