import { DocsContext, Heading } from '@storybook/blocks';
import { Link } from '@ui5/webcomponents-react';
import type * as CEM from '@ui5/webcomponents-tools/lib/cem/types';
import { useContext } from 'react';
import cemFiori from '../custom-element-manifests/fiori.json';
import cemMain from '../custom-element-manifests/main.json';
import classes from './DomRefTable.module.css';

function Name(props) {
  if (props.returnValue) {
    return (
      <>
        {props.name}({props.parameters?.map((param) => `${param.name}${param.optional ? '?' : ''}`).join(', ')}):{' '}
        <code>{props.returnValue.type}</code>
      </>
    );
  }

  if (props.readonly) {
    return `${props.name} (readonly)`;
  }

  return props.name;
}

export function DomRefTable() {
  const docsContext = useContext(DocsContext);
  const storyTags: string[] = docsContext.attachedCSFFile?.meta?.tags;
  const packageAnnotation = storyTags?.find((tag) => tag.startsWith('package:'));
  const componentName = docsContext.componentStories().at(0).component.displayName;

  const cem = packageAnnotation === 'package:@ui5/webcomponents' ? cemMain : cemFiori;
  const componentMembers = cem.modules
    .find((m) => m.path === `dist/${componentName}.js`)
    ?.declarations.find((d) => d.customElement === true && d.name === componentName);

  console.log('-> componentMembers', componentMembers);

  const rows: CEM.ClassMember[] = componentMembers?.members ?? [];
  const cssParts: CEM.CssPart[] = componentMembers?.cssParts ?? [];

  return (
    <>
      <Heading>Attributes & Methods</Heading>
      <p>
        This component exposes public attributes and methods. You can use them directly on the instance of the
        component, e.g. by using React Refs.
      </p>
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
                  <b>
                    <Name {...row} />
                  </b>
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
                          {parameter.type ? (
                            <p className={classes.parameterDetails}>
                              <code>{parameter.type.text}</code>
                            </p>
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
