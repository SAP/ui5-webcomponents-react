import { Heading, Markdown } from '@storybook/addon-docs/blocks';
import { Tag as WCRTag } from '@ui5/webcomponents-react';
import dedent from 'dedent';
import { Fragment } from 'react';

// Note: these types may be incomplete or faulty. If an error is thrown, first check if the interfaces have to be extended.
interface TextNode {
  type: 'text';
  value: string;
}

interface StrongNode {
  type: 'strong';
  children: TextNode[];
}

interface InlineCodeNode {
  type: 'inlineCode';
  value: string;
}

interface ParagraphNode {
  type: 'paragraph';
  children: Array<TextNode | StrongNode | InlineCodeNode>;
}

interface RootNode {
  type: 'root';
  children: ParagraphNode[];
}

interface TypeExpression {
  type: 'NameExpression' | 'OptionalType' | 'TypeApplication';
  name?: string;
  expression?: TypeExpression;
  applications?: TypeExpression[];
}

interface Tag {
  title: string;
  description?: string | RootNode;
  lineNumber: number;
  type?: TypeExpression;
  name?: string;
  default?: string;
}

interface Loc {
  start: {
    line: number;
    column: number;
    index: number;
  };
  end: {
    line: number;
    column: number;
    index: number;
  };
}

interface Context {
  loc: Loc;
  file: string;
}

interface Example {
  description: string;
}

interface Param {
  title: string;
  name: string;
  lineNumber: number;
  description: RootNode;
  type: TypeExpression;
  default?: string;
}

interface Return {
  title: string;
  type: TypeExpression;
}

interface Path {
  name: string;
  kind: string;
  scope: string;
}

interface Members {
  global: any[];
  inner: any[];
  instance: any[];
  events: any[];
  static: any[];
}

interface FunctionMetadata {
  description: RootNode;
  tags: Tag[];
  loc: Loc;
  context: Context;
  augments: any[];
  examples: Example[];
  implements: any[];
  params: Param[];
  properties: any[];
  returns: Return[];
  sees: any[];
  throws: any[];
  todos: any[];
  yields: any[];
  name: string;
  kind: 'function';
  memberof: string;
  scope: 'instance';
  members: Members;
  path: Path[];
  namespace: string;
  deprecated: Record<string, any>;
}

function generateMdCodeBlock(codeStr: string) {
  return dedent`
\`\`\`ts
${codeStr}
\`\`\`
    
`;
}

function generateGenericType(typeExpression: TypeExpression) {
  if (typeExpression) {
    const { expression, applications } = typeExpression;

    if (typeof typeExpression?.name === 'string') {
      return typeExpression.name;
    }
    return `${expression.name}<${applications
      ?.map((app) => {
        return app.name;
      })
      .join(', ')}>`;
  }
  return '';
}

function generateParamTypes(type: Param['type']) {
  if (type?.name) {
    return type.name;
  }
  return generateGenericType(type.expression);
}

function generateExample(tags: FunctionMetadata['tags']) {
  const example = tags.find((tag) => tag.title === 'example');
  if (example && typeof example.description === 'string') {
    return (
      <>
        <Markdown>### Example</Markdown>
        <Markdown>{generateMdCodeBlock(example.description)}</Markdown>
      </>
    );
  }
  return null;
}

function formatText(text: ParagraphNode['children'][0]) {
  switch (text.type) {
    case 'text':
      return text.value;
    case 'strong':
      return `**${text.children.reduce((acc, cur) => {
        acc += cur.value;
        return acc;
      }, '')}**`;
    case 'inlineCode':
      return `\`${text.value}\``;
    default:
      if (typeof text.value === 'string') {
        return text.value;
      }
      console.warn('Unknown text type!');
      return '';
  }
}

function generateDescription(description: RootNode) {
  return description.children.reduce((acc, descriptionNode) => {
    if (descriptionNode.type === 'paragraph') {
      acc += descriptionNode.children.reduce((acc, p) => {
        acc += formatText(p);
        return acc;
      }, '');
      acc += '\n\n';
      return acc;
    }
  }, '');
}

function formatHtmlFromNode(node: any): string {
  if (!node) return '';

  switch (node.type) {
    case 'root':
      return node.children.map(formatHtmlFromNode).join('');
    case 'paragraph':
      return `<p>${node.children.map(formatHtmlFromNode).join('')}</p>`;
    case 'text':
      return node.value;
    case 'inlineCode':
      return `<code>${node.value}</code>`;
    default:
      return '';
  }
}

export const CommandsAndQueries = ({ api }: { api: FunctionMetadata[] }) => {
  return api
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => {
      return (
        <Fragment key={item.name}>
          <Heading>
            {item.name}
            {!!item.deprecated && (
              <WCRTag style={{ marginInlineStart: '1rem' }} design="Critical">
                deprecated
              </WCRTag>
            )}
          </Heading>
          <code>
            {item.name}(
            {item.params
              ?.map((param) => {
                return `${param.name}${param.type.type === 'OptionalType' ? '?' : ''}:${generateParamTypes(param.type)}`;
              })
              .join(', ')}
            ):
            {item.returns.map(({ type }) => {
              return generateGenericType(type);
            })}
          </code>
          {!!item.deprecated && (
            <>
              <br />
              {<b dangerouslySetInnerHTML={{ __html: formatHtmlFromNode(item.deprecated) }} />}
            </>
          )}
          <Markdown>{generateDescription(item.description)}</Markdown>
          {generateExample(item.tags)}
          {!!item.params.length && (
            <>
              <Markdown>### Parameters</Markdown>
              <table>
                <thead>
                  <tr>
                    <td>
                      <b>Name</b>
                    </td>
                    <td>
                      <b>Type</b>
                    </td>
                    <td>
                      <b>Description</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {item.params.map((param) => {
                    return (
                      <tr key={param.name}>
                        <td>{param.type.type === 'OptionalType' ? <i>{param.name}?</i> : param.name}</td>
                        <td>{generateParamTypes(param.type)}</td>
                        <td>{param?.description ? generateDescription(param.description) : '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          )}
        </Fragment>
      );
    });
};

CommandsAndQueries.displayName = 'CommandsAndQueries';
