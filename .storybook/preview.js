import '@ui5/webcomponents-base/dist/features/F6Navigation.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import 'tocbot/dist/tocbot.css';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { makeDecorator } from '@storybook/addons';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection.js';
import { ContentDensity, ThemeProvider, Themes } from '@ui5/webcomponents-react';
import React, { useEffect, useRef } from 'react';
import languages from './components/languageCodes.json';

const argTypesCategoryCommonProps = {
  table: { category: 'Common props' }
};

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on.*' },
  controls: {
    sort: 'requiredFirst'
  },
  backgrounds: { disable: true },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting Started', 'Change Log', 'Migration Guide', 'Knowledge Base']
    }
  },
  chromatic: { pauseAnimationAtEnd: true }
};

export const argTypes = {
  style: argTypesCategoryCommonProps,
  className: argTypesCategoryCommonProps,
  slot: {
    table: { disable: true }
  },
  ref: {
    table: { disable: true }
  }
};

const ThemeProviderDecorator = makeDecorator({
  name: 'ThemeProvider',
  parameterName: 'ThemeProvider',
  wrapper: (Story, context) => {
    const { theme, contentDensity, direction, language } = context.globals;
    const svgRef = useRef();

    useEffect(() => {
      setLanguage(language);
    }, [language]);

    // todo remove this once mdx anchors are working again (https://github.com/storybookjs/storybook/issues/18395)
    useEffect(() => {
      const onAnchorClick = (e) => {
        const { hash } = e.currentTarget;
        const { href, hash: prevHash } = window.parent.location;
        if (prevHash) {
          const updatedHref = href.replace(/#(.*)/, hash);
          window.parent.location.replace(updatedHref);
        } else {
          window.parent.location.replace(`${href}${hash}`);
        }
      };
      const toKebabCase = (str) =>
        str &&
        str
          .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map((x) => x.toLowerCase())
          .join('-');

      const toc = document.getElementById('toc-container');

      if (toc?.querySelector('ul')?.children.length) {
        Array.from(toc?.querySelector('ul').querySelectorAll('a')).forEach((item) => {
          item.setAttribute('href', `#${toKebabCase(item.textContent)}`);
        });
      }

      const headings = [
        ...Array.from(document.querySelectorAll('h2:not([id])')),
        ...Array.from(document.querySelectorAll('h3:not([id])')),
        ...Array.from(document.querySelectorAll('h4:not([id])'))
      ];

      headings.forEach((item) => {
        const ae = document.createElement('a');
        ae.setAttribute('target', '_self');
        ae.setAttribute('aria-hidden', 'true');
        ae.setAttribute('class', 'md-anchor');
        ae.setAttribute('tab-index', '-1');
        ae.setAttribute('href', `#${toKebabCase(item.textContent)}`);
        ae.addEventListener('click', onAnchorClick);
        const clonedSvg = svgRef.current.cloneNode(true);
        clonedSvg.removeAttribute('style');
        ae.append(clonedSvg);
        item.setAttribute('id', toKebabCase(item.textContent));
        item.appendChild(ae);
      });
    }, []);

    useEffect(() => {
      if (contentDensity === ContentDensity.Compact) {
        document.body.classList.add('ui5-content-density-compact');
      } else {
        document.body.classList.remove('ui5-content-density-compact');
      }
    }, [contentDensity]);

    useEffect(() => {
      document.querySelector('html').setAttribute('dir', direction);
      applyDirection();
    }, [direction]);

    useEffect(() => {
      setTheme(theme);
    }, [theme]);

    return (
      <ThemeProvider>
        <svg
          ref={svgRef}
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          fill="currentColor"
          style={{ display: 'none' }}
          id="temporary-svg"
        >
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
          />
        </svg>
        <Story />
      </ThemeProvider>
    );
  }
});

export const decorators = [ThemeProviderDecorator];

const DEPRECATED_THEMES = new Set(['sap_belize_hcb', 'sap_belize_hcw']);

export const globalTypes = {
  theme: {
    title: 'Theme',
    description: 'Fiori Theme',
    defaultValue: Themes.sap_fiori_3,
    toolbar: {
      title: 'Theme',
      items: Object.keys(Themes)
        .filter((key) => !DEPRECATED_THEMES.has(key))
        .map((themeKey) => ({
          value: themeKey,
          title: themeKey
        }))
    }
  },
  contentDensity: {
    title: 'Content Density',
    description: 'Content Density',
    defaultValue: ContentDensity.Cozy,
    toolbar: {
      title: 'Content Density',
      items: [
        {
          value: ContentDensity.Cozy,
          title: ContentDensity.Cozy
        },
        {
          value: ContentDensity.Compact,
          title: ContentDensity.Compact
        }
      ]
    }
  },
  direction: {
    title: 'Direction',
    description: 'Text Direction',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'transfer',
      items: [
        {
          value: 'ltr',
          title: 'LTR'
        },
        {
          value: 'rtl',
          title: 'RTL'
        }
      ]
    }
  },
  language: {
    title: 'Languages',
    description: 'Languages',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: languages.map((item) => ({ value: item.id, title: item.language }))
    }
  }
};
