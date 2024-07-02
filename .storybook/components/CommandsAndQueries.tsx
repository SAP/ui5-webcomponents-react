import { Heading, Markdown } from '@storybook/blocks';
import { Fragment } from 'react';

interface CommandsAndQueries {
  id: number;
  name: string;
  kind: number;
  kindString: string;
  flags: CommandsAndQueriesFlags;
  sources: Source[];
  signatures: Signature[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CommandsAndQueriesFlags {}

interface Signature {
  id: number;
  name: string;
  kind: number;
  kindString: string;
  flags: CommandsAndQueriesFlags;
  comment: SignatureComment;
  parameters: Parameter[];
  type: Type;
}

interface SignatureComment {
  summary: Summary[];
  blockTags: BlockTag[];
}

interface BlockTag {
  tag: string;
  content: Summary[];
}

interface Summary {
  kind: string;
  text: string;
}

interface Parameter {
  id: number;
  name: string;
  kind: number;
  kindString: string;
  flags: ParameterFlags;
  comment?: ParameterComment;
  type: Type;
}

interface ParameterComment {
  summary: Summary[];
}

interface ParameterFlags {
  isOptional?: boolean;
}

interface Type {
  type: string;
  name: string;
  typeArguments?: Type[];
  qualifiedName?: string;
  package?: string;
}

interface Source {
  fileName: string;
  line: number;
  character: number;
  url: string;
}

function typeArgumentsString(typeArguments: Type[] | undefined) {
  if (!typeArguments) {
    return '';
  }
  return typeArguments.map((args, index, arr) => {
    let str = args.name;
    if (arr.length > 1 && index + 1 !== arr.length) {
      str += ', ';
    }
    return str;
  });
}

export const CommandsAndQueries = ({ api }: { api: CommandsAndQueries[] }) => {
  return api.map((item) => {
    const { signatures } = item;
    const { parameters } = signatures[0];
    return (
      <Fragment key={item.name}>
        <Heading>{item.name}</Heading>
        <code>
          {item.name}(
          {parameters
            ?.map(
              (param) =>
                `${param.name}:${param.type.name}${
                  param.type?.typeArguments?.length ? `<${typeArgumentsString(param.type.typeArguments)}>` : ''
                }`
            )
            .join(', ')}
          ):
          {signatures[0]?.type?.name}
          {`<${typeArgumentsString(signatures[0].type?.typeArguments)}>`}
        </code>
        <div>
          <Markdown>
            {signatures[0]?.comment.summary.reduce((acc, cur) => `${acc}${cur.text.replaceAll('\n', '<br>')}`, '')}
          </Markdown>
          {signatures[0]?.comment?.blockTags
            ?.filter((blockTag) => {
              return blockTag.tag === '@example';
            })
            .map((example, index) => {
              return (
                <Fragment key={`${example.tag}${index}`}>
                  {index === 0 && <b>Example</b>}
                  <Markdown>{example.content.reduce((acc, cur) => `${acc}${cur.text}`, '')}</Markdown>
                </Fragment>
              );
            })}
          {parameters?.length && (
            <>
              <b>Parameters</b>
              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Description</td>
                  </tr>
                </thead>
                <tbody>
                  {parameters?.map((param) => (
                    <tr key={param.name}>
                      <td>
                        {param.name}
                        {param.flags?.isOptional && '?'}
                      </td>
                      <td>
                        <code>
                          {param.type?.name}
                          {param.type?.typeArguments &&
                            `<${param.type?.typeArguments && typeArgumentsString(param.type.typeArguments)}>`}
                        </code>
                      </td>
                      <td>
                        {param.comment?.summary.reduce((acc, cur) => `${acc}${cur.text.replaceAll('\n', '<br>')}`, '')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <p>
            <b>Source:</b> <a href={item.sources[0].url}>{`${item.sources[0].fileName}:${item.sources[0].line}`}</a>
          </p>
        </div>
        <br />
        <br />
      </Fragment>
    );
  });
};

CommandsAndQueries.displayName = 'CommandsAndQueries';
