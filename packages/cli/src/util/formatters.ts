import TurndownService from 'turndown';

let ui5TagNameToComponentNameMap: Record<string, string> = {};

export function setGlobalTagNameMap(map: typeof ui5TagNameToComponentNameMap) {
  ui5TagNameToComponentNameMap = map;
}

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

function replaceUi5TagNames(text: string) {
  return text.replaceAll(/(<code>)([\w\d-]+)(<\/code>)/g, (match, openingTag, tagName, closingTag) => {
    if (ui5TagNameToComponentNameMap[tagName]) {
      return `${openingTag}${ui5TagNameToComponentNameMap[tagName]}${closingTag}`;
    }
    return match;
  });
}

export function formatters(html: string) {
  return turndownService.turndown(html);
}

export function summaryFormatter(htmlDesc: string) {
  let description = htmlDesc.replace(/<h3 class="comment-api-title">Overview<\/h3>\n*/, '');
  description = description.replace(/<h3>ES6 Module Import<\/h3>\n*<code>.+<\/code>/, '');

  let summary = description.split(/(?=<h3>)/).at(0) ?? '';

  summary = replaceUi5TagNames(summary);
  summary = turndownService.turndown(summary);
  summary = summary.replaceAll('\n', '\n * ');

  return summary;
}
