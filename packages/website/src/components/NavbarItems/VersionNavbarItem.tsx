import './index.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { Collapsible } from '@docusaurus/theme-common';
import NavbarItem from '@theme/NavbarItem';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import clsx from 'clsx';
import { useState } from 'react';
import packageJson from '../../../package.json';

const packageJsonVersion = packageJson.version;

function getVersion() {
  if (ExecutionEnvironment.canUseDOM) {
    if (location.pathname.includes('v1')) {
      return 'v1';
    }

    if (location.pathname.includes('nightly')) {
      return 'Nightly';
    }

    return 'v2';
  }
}

function getLabel(version: string) {
  const currVersion = getVersion();
  if (version === currVersion) {
    return packageJsonVersion;
  }
  return version;
}

function VersionNavbarItemDesktop() {
  const [version, setVersion] = useState<string>(getVersion());
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', 'dropdown--right', {
        'dropdown--show': showDropdown
      })}
    >
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href="#"
        label={getLabel(version)}
        className="navbar__link"
        onClick={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
      ></NavbarNavLink>
      <ul className="dropdown__menu">
        <NavbarItem
          label="Nightly 🚧"
          isDropdownItem
          target="_self"
          href="/nightly"
          onClick={() => {
            setVersion('Nightly');
          }}
          className={clsx({ 'menu__link--active': version === 'Nightly' })}
        />
        <NavbarItem
          label="Version 2"
          isDropdownItem
          target="_self"
          href="/v2"
          onClick={() => {
            setVersion('v2');
          }}
          className={clsx({ 'menu__link--active': version === 'v2' })}
        />
        <NavbarItem
          label="Version 1"
          isDropdownItem
          target="_self"
          href="/v1"
          onClick={() => {
            setVersion('v1');
          }}
          className={clsx({ 'menu__link--active': version === 'v1' })}
        />
      </ul>
    </div>
  );
}

function VersionNavbarItemMobile() {
  const [version, setVersion] = useState(getVersion());
  const [collapsed, setCollapsed] = useState(false);

  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed
      })}
    >
      <NavbarNavLink
        role="button"
        label="Versions"
        className={clsx('menu__link menu__link--sublist menu__link--sublist-caret')}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <NavbarItem
          label="Nightly 🚧"
          mobile
          href="https://sap.github.io/ui5-webcomponents-react/nightly"
          isDropdownItem
          onClick={() => {
            setVersion('nightly');
          }}
          className={clsx({ 'menu__link--active': version === 'nightly' })}
        />
        <NavbarItem
          label="v1"
          mobile
          href="https://sap.github.io/ui5-webcomponents-react"
          isDropdownItem
          onClick={() => {
            setVersion('v1');
          }}
          className={clsx({ 'menu__link--active': version === 'v1' })}
        />
      </Collapsible>
    </li>
  );
}

export default function VersionNavbarItem({ mobile = false, ...props }: { mobile: boolean }) {
  const Comp = mobile ? VersionNavbarItemMobile : VersionNavbarItemDesktop;
  return <Comp {...props} />;
}
