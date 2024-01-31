import TurndownService from 'turndown';

let ui5TagNameToComponentNameMap: Record<string, string> = {};

export function setGlobalTagNameMap(map: typeof ui5TagNameToComponentNameMap) {
  ui5TagNameToComponentNameMap = map;
}

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

turndownService.addRule('ui5-link', {
  filter: (node) => node.nodeName === 'UI5-LINK' && !!node.getAttribute('href'),
  replacement: (content, node) => {
    // @ts-expect-error: types seem to be incorrect
    const href = node.getAttribute('href');
    // @ts-expect-error: types seem to be incorrect
    let title = node.getAttribute('title') ?? '';
    if (title) {
      title = ` "${title}"`;
    }
    return `[${content}](${href}${title})`;
  }
});

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
  let summary = turndownService.turndown(html);
  summary = replaceUi5TagNames(summary);
  summary = summary.replaceAll('\n', '\n * ');
  return summary;
}

export function summaryFormatter(htmlDesc: string) {
  let description = htmlDesc.replace(/<h3 class="comment-api-title">Overview<\/h3>\n*/, '');
  description = description.replace(/<h3>ES6 Module Import<\/h3>\n*<code>.+<\/code>/, '');

  let summary = turndownService.turndown(description);
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
