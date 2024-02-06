import { DocsContext, Heading } from '@storybook/blocks';
import { Link, MessageStrip } from '@ui5/webcomponents-react';
import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types';
import type { ReactNode } from 'react';
import { Fragment, useContext } from 'react';
import cemFiori from '../custom-element-manifests/fiori.json';
import cemMain from '../custom-element-manifests/main.json';
import classes from './DomRefTable.module.css';

function CodeBlock(props: { children: ReactNode }) {
  return (
    <pre className={classes.domRefCodeBlock}>
      <code className={classes.domRefCode}>{props.children}</code>
    </pre>
  );
}

function Name(props: CEM.ClassMember) {
  if (props.kind === 'method') {
    return (
      <CodeBlock>
        <span style={{ color: 'rgb(64, 120, 242)' }}>{props.name}</span>
        <span style={{ color: 'rgb(56, 58, 66)' }}>(</span>
        {props.parameters?.map((param, index) => (
          <Fragment key={param.name}>
            <span style={{ color: 'rgb(56, 58, 66)' }}>{param.name}</span>
            {param.optional ? <span style={{ color: 'rgb(64, 120, 242)' }}>?</span> : null}
            <span style={{ color: 'rgb(64, 120, 242)' }}>: </span>
            <span style={{ color: 'rgb(80, 161, 79)' }}>{param.type.text}</span>
            {index < props.parameters.length - 1 ? <span style={{ color: 'rgb(56, 58, 66)' }}>, </span> : null}
          </Fragment>
        ))}
        <span style={{ color: 'rgb(56, 58, 66)' }}>)</span>
        <span style={{ color: 'rgb(64, 120, 242)' }}>: </span>
        <span style={{ color: 'rgb(80, 161, 79)' }}>{props.return.type.text}</span>
      </CodeBlock>
    );
  }
  return (
    <CodeBlock>
      {props.readonly ? <span style={{ color: 'rgb(166, 38, 164)' }}>readonly </span> : null}
      <span style={{ color: 'rgb(56, 58, 66)' }}>{props.name}</span>
      <span style={{ color: 'rgb(64, 120, 242)' }}>: </span>
      <span style={{ color: 'rgb(80, 161, 79)' }}>{props.type.text}</span>
    </CodeBlock>
  );
}

export function DomRefTable() {
  const docsContext = useContext(DocsContext);
  const storyTags: string[] = docsContext.attachedCSFFile?.meta?.tags;
  const packageAnnotation = storyTags?.find((tag) => tag.startsWith('package:'));
  const cemModuleName = storyTags?.find((tag) => tag.startsWith('cem-module:'));
  const componentName = docsContext.componentStories().at(0).component.displayName;

  const knownAttributes = new Set(Object.keys(docsContext.primaryStory.argTypes));

  let cem: CEM.CustomElementManifest;
  switch (packageAnnotation) {
    case 'package:@ui5/webcomponents':
      cem = cemMain;
      break;
    case 'package:@ui5/webcomponents-fiori':
      cem = cemFiori;
      break;
  }

  let moduleName = cemModuleName ? cemModuleName.split(':')[1] : componentName;

  const componentMembers =
    cem?.modules
      .find((m) => m.path === `dist/${moduleName}.js`)
      ?.declarations.find((d) => d.customElement === true && d.name === moduleName) ?? [];

  const rows: CEM.ClassMember[] =
    componentMembers?.members?.filter((row) => {
      return !(knownAttributes.has(row.name) && !row.type?.text?.includes('HTMLElement'));
    }) ?? [];
  const cssParts: CEM.CssPart[] = componentMembers?.cssParts ?? [];

  return (
    <>
      {rows.length > 0 ? (
        <>
          <Heading>Attributes & Methods</Heading>
          <p>
            This component exposes public attributes and methods. You can use them directly on the instance of the
            component, e.g. by using React Refs.
          </p>
          <MessageStrip hideCloseButton style={{ marginBlockEnd: '10px' }}>
            This table is showing <bold>additional</bold> attributes and methods which are not available as props.{' '}
            <br />
            All props (without event handlers, children, and slots) are available as attributes on the DOM ref as well.
          </MessageStrip>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Parameters</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                return (
                  <tr key={row.name}>
                    <td>
                      <Name {...row} />
                    </td>
                    <td>
                      {!!row.parameters ? (
                        row.parameters.map((parameter) => {
                          return (
                            <div key={parameter.name} className={classes.parameters}>
                              <p className={classes.parameterName}>{parameter.name}</p>
                              {parameter.description ? (
                                <p
                                  className={classes.parameterDetails}
                                  dangerouslySetInnerHTML={{ __html: parameter.description }}
                                />
                              ) : null}
                            </div>
                          );
                        })
                      ) : (
                        <>&mdash;</>
                      )}
                    </td>
                    <td dangerouslySetInnerHTML={{ __html: row.description }}></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : null}

      {cssParts.length > 0 ? (
        <>
          <Heading>CSS Shadow Parts</Heading>
          <p>
            <Link target={'_blank'} href={'https://developer.mozilla.org/en-US/docs/Web/CSS/::part'}>
              CSS Shadow Parts
            </Link>{' '}
            allow developers to style elements inside the Shadow DOM.
          </p>
          <p>
            The <code>{componentName}</code> exposes the following CSS Shadow Parts:
          </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {cssParts.map((part) => (
                <tr key={part.name}>
                  <td>
                    <b>{part.name}</b>
                  </td>
                  <td>{part.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </>
  );
}
