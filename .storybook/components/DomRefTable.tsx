import { Heading } from '@storybook/blocks';
import React from 'react';

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
                        <div key={parameter.name}>
                          <p style={{ fontWeight: 'bold' }}>{parameter.name}</p>
                          {parameter.description ? (
                            <p
                              style={{ paddingInline: '1rem' }}
                              dangerouslySetInnerHTML={{ __html: parameter.description }}
                            />
                          ) : null}
                          {parameter.type ? (
                            <p style={{ paddingInline: '1rem' }}>
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
