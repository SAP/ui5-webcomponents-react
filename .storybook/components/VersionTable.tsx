import { Button, MessageStrip } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { Fragment, useState } from 'react';
import versionInfo from '../../config/version-info.json';
import iconArrowRight from '@ui5/webcomponents-icons/dist/slim-arrow-right.js';
import iconArrowDown from '@ui5/webcomponents-icons/dist/slim-arrow-down.js';

const allWCRVersions: string[] = Object.values(versionInfo);

export function VersionTable() {
  const [expanded, setExpanded] = useState(false);
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
            const lastV1 = currentMajor === 1 && currentMinor === 27;
            const wcrVersions = [lastV1 ? wcrVersion : `~${wcrVersion}`];
            if (nextVersion) {
              let minor = parseInt(nextVersion.split('.')[1]);
              for (let i = currentMinor + 1; i < minor; i++) {
                wcrVersions.push(`~${currentMajor}.${i}.0`);
              }
            }

            return (
              <Fragment key={wcrVersion}>
                {wcrVersion === '1.0.1' && (
                  <tr>
                    <td colSpan={2}>
                      <Button
                        data-ui5-compact-size
                        icon={expanded ? iconArrowDown : iconArrowRight}
                        design="Transparent"
                        onClick={() => {
                          setExpanded((prev) => !prev);
                        }}
                      />
                      <span
                        style={{
                          fontSize: ThemingParameters.sapFontLargeSize,
                          fontFamily: ThemingParameters.sapFontBoldFamily,
                          marginInlineStart: '0.5rem'
                        }}
                      >
                        Version 1
                      </span>
                    </td>
                  </tr>
                )}
                {currentMajor === 1 && expanded && (
                  <tr>
                    <td>
                      {lastV1 ? '^' : ''}
                      {wcrVersions.join(', ')}
                    </td>
                    <td>~{wcVersion}</td>
                  </tr>
                )}
                {wcrVersion === '2.0.0' && (
                  <tr>
                    <td colSpan={2}>
                      <span
                        style={{
                          fontSize: ThemingParameters.sapFontLargeSize,
                          fontFamily: ThemingParameters.sapFontBoldFamily,
                          marginInlineEnd: '0.5rem'
                        }}
                      >
                        Version 2
                      </span>
                    </td>
                  </tr>
                )}
                {currentMajor === 2 && (
                  <tr>
                    <td>
                      {lastEntry ? '>= ' : ''}
                      {wcrVersions.join(', ')}
                    </td>
                    <td>~{wcVersion}</td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
