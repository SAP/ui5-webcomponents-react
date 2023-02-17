import { Heading } from '@storybook/blocks';
import React from 'react';
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

export function DomRefTable({ rows }: { rows: any[] }) {
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
                              <code>{parameter.type}</code>
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
    </>
  );
}
