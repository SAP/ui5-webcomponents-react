import { MessageStrip } from '@ui5/webcomponents-react';
import versionInfo from '../../config/version-info.json';

const allWCRVersions = Object.values(versionInfo);

export function VersionTable() {
  return (
    <>
      <MessageStrip hideCloseButton>
        In order to allow patching releases of UI5 Web Components by yourself, <code>@ui5/webcomponents</code> and
        &nbsp;
        <code>@ui5/webcomponents-fiori</code> are peer dependencies of <code>@ui5/webcomponents-react</code>. The
        following table gives an overview of the required peer dependencies per version:
      </MessageStrip>
      <table>
        <thead>
          <tr>
            <th>
              <code>@ui5/webcomponents-react</code> version
            </th>
            <th>
              <code>@ui5/webcomponents</code> & <code>@ui5/webcomponents-fiori</code> version
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(versionInfo).map(([wcVersion, wcrVersion], index, arr) => {
            const lastEntry = index + 1 === arr.length;
            if (wcrVersion.startsWith('0')) {
              return null;
            }

            const currentWCRIndex = allWCRVersions.findIndex((val) => val === wcrVersion);
            const nextVersion = allWCRVersions[currentWCRIndex + 1];
            const currentMajor = parseInt(wcrVersion.split('.')[0]);
            const currentMinor = parseInt(wcrVersion.split('.')[1]);
            const wcrVersions = [`${lastEntry ? '' : '~'}${wcrVersion}`];
            if (nextVersion) {
              let minor = parseInt(nextVersion.split('.')[1]);
              for (let i = currentMinor + 1; i < minor; i++) {
                wcrVersions.push(`~${currentMajor}.${i}.0`);
              }
            }

            return (
              <tr key={wcrVersion}>
                <td>
                  {lastEntry ? '^' : ''}
                  {wcrVersions.join(', ')}
                </td>
                <td>~{wcVersion}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
