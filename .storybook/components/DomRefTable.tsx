import React from 'react';
import { Heading } from '@storybook/blocks';

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
                    {row.name}
                    {row.readonly ? ` (readonly)` : ''}
                  </b>
                </td>
                <td>
                  {!!row.parameters ? (
                    row.parameters.map((parameter) => {
                      return (
                        <dl key={parameter.name}>
                          <dt>{parameter.name}</dt>
                          {parameter.description ? (
                            <dd dangerouslySetInnerHTML={{ __html: parameter.description }} />
                          ) : null}
                          {parameter.type ? (
                            <dd>
                              <code>{parameter.type}</code>
                            </dd>
                          ) : null}
                        </dl>
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
