import iconArrowDown from '@ui5/webcomponents-icons/dist/slim-arrow-down.js';
import iconArrowRight from '@ui5/webcomponents-icons/dist/slim-arrow-right.js';
import { Button, MessageStrip, Link } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { Fragment, useState } from 'react';
import versionInfo from '../../config/version-info.json';

const allWCRVersions: string[] = Object.values(versionInfo);

export function VersionTable() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <MessageStrip hideCloseButton>
        Starting with version <code>2.4.0</code> of <code>@ui5/webcomponents-react</code>, all packages now align their{' '}
        <b>minor</b> version with <code>@ui5/webcomponents</code>!
      </MessageStrip>
      <p>
        <b>
          In order to allow patching releases of UI5 Web Components by yourself, packages from{' '}
          <Link href={'https://github.com/SAP/ui5-webcomponents'} target={'_blank'}>
            ui5-webcomponents
          </Link>{' '}
          are peer dependencies of{' '}
          <Link href={'https://github.com/SAP/ui5-webcomponents-react'}>ui5-webcomponents-react</Link> packages.
        </b>
      </p>
      <p>If you&apos;re not clear which package is developed in which repo, expand the table below.</p>

      <details>
        <summary>Show Package to Repository Mapping</summary>

        <table>
          <thead>
            <tr>
              <th>Repository</th>
              <th>Packages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link href={'https://github.com/SAP/ui5-webcomponents'} target={'_blank'}>
                  ui5-webcomponents
                </Link>
              </td>
              <td>
                <ul>
                  <li>
                    <code>@ui5/webcomponents</code> — main components (buttons, inputs, popups, tables, etc.)
                  </li>
                  <li>
                    <code>@ui5/webcomponents-fiori</code> — Fiori-specific / semantic components
                  </li>
                  <li>
                    <code>@ui5/webcomponents-ai</code> — AI-specific components
                  </li>
                  <li>
                    <code>@ui5/webcomponents-base</code> — the framework/base utilities
                  </li>
                  <li>
                    <code>@ui5/webcomponents-icons</code> — SAP Icons collection
                  </li>
                  <li>
                    <code>@ui5/webcomponents-icons-tnt</code> — TNT icons collection
                  </li>
                  <li>
                    <code>@ui5/webcomponents-icons-business-suite</code> — Business Suite icons collection
                  </li>
                  <li>
                    <code>@ui5/webcomponents-theming</code> — theming assets
                  </li>
                  <li>
                    <code>@ui5/webcomponents-localization</code> — i18n / CLDR assets
                  </li>
                  <li>
                    <code>@ui5/webcomponents-tools</code> — libraries, configuration files and build artifacts
                  </li>
                  <li>
                    <code>@ui5/create-package</code> — helper to create new UI5 Web Components packages
                  </li>
                  <li>
                    <code>@ui5/webcomponents-compat</code> — legacy / v1 compatibility package
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <Link href={'https://github.com/SAP/ui5-webcomponents-react'} target={'_blank'}>
                  ui5-webcomponents-react
                </Link>
              </td>
              <td>
                <ul>
                  <li>
                    <code>@ui5/webcomponents-react</code> — main React wrapper package
                  </li>
                  <li>
                    <code>@ui5/webcomponents-react-base</code> — utility / base helpers for the React wrappers
                  </li>
                  <li>
                    <code>@ui5/webcomponents-react-charts</code> — chart components
                  </li>
                  <li>
                    <code>@ui5/webcomponents-react-cli</code> — wrapper generation & codemod tooling
                  </li>
                  <li>
                    <code>@ui5/webcomponents-cypress-commands</code> — custom Cypress commands & queries
                  </li>
                  <li>
                    <code>@ui5/webcomponents-ai-react</code> — React wrapper for the <code>@ui5/webcomponents-ai</code>{' '}
                    package
                  </li>
                  <li>
                    <code>@ui5/webcomponents-react-compat</code> — legacy / v1 compatibility package
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </details>

      <table>
        <thead>
          <tr>
            <th>
              <Link href={'https://github.com/SAP/ui5-webcomponents-react'} target={'_blank'}>
                ui5-webcomponents-react
              </Link>{' '}
              Versions
            </th>
            <th>
              <Link href={'https://github.com/SAP/ui5-webcomponents'} target={'_blank'}>
                ui5-webcomponents
              </Link>{' '}
              Versions
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(versionInfo).map(([wcVersion, wcrVersion]: [string, string]) => {
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
              const minor = parseInt(nextVersion.split('.')[1]);
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
                          marginInlineStart: '0.5rem',
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
                          marginInlineEnd: '0.5rem',
                        }}
                      >
                        Version 2
                      </span>
                    </td>
                  </tr>
                )}
                {currentMajor === 2 && (
                  <tr>
                    <td>{wcrVersions.join(', ')}</td>
                    <td>~{wcVersion}</td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>

      <MessageStrip hideCloseButton>
        Please note that if a version doesn&apos;t start with a patch-version of 0 (e.g. <code>~1.10.3</code>), only the
        specified version is supported and the previous patch-versions will most likely not work with{' '}
        <code>@ui5/webcomponents-react</code>.
      </MessageStrip>
    </>
  );
}
