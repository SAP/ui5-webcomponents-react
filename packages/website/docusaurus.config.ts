import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const LATEST_URL_PARTH = '/ui5-webcomponents-react/';
const NIGHTLY_URL_PARTH = '/ui5-webcomponents-react/nightly/';

const NIGHTLY_DEPLOYMENT = process.env.DEPLOYMENT_TYPE === 'nightly';
const DEVELOPMENT_ENVIRONMENT = process.env.NODE_ENV === 'development';

const getBaseURL = () => {
  // localhost
  if (DEVELOPMENT_ENVIRONMENT) {
    return '/';
  }

  // latest deployment or nightly deployment
  return NIGHTLY_DEPLOYMENT ? NIGHTLY_URL_PARTH : LATEST_URL_PARTH;
};

const BASE_URL = getBaseURL();

const getFullURL = () => {
  return DEVELOPMENT_ENVIRONMENT ? `${BASE_URL}` : `https://sap.github.io${BASE_URL}`;
};

const config: Config = {
  title: 'UI5 Web Components for React',
  tagline: 'An open-source UI components library for building enterprise-ready applications!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sap.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SAP', // Usually your GitHub org/user name.
  projectName: 'ui5-webcomponents-react', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],
  plugins: ['docusaurus-lunr-search'],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'UI5 Web Components for React',
      logo: {
        alt: 'UI5 Web Components Logo',
        src: 'img/logos/LogoWater.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial'
        },

        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'custom-versionsNavbarItem',
          position: 'right'
        },
        {
          type: 'custom-GitHubNavbarItem',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `© Copyright ${new Date().getFullYear()}, SAP SE and UI5 Web Components Contributors`,
      logo: {
        alt: 'SAP Logo',
        src: 'https://sap.github.io/ui5-webcomponents-react/img/footer/sap-1920-1440.svg',
        width: 160,
        height: 51
      },
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              to: 'https://openui5.slack.com/'
            },
            {
              label: 'GitHub',
              to: 'https://github.com/SAP/ui5-webcomponents-react/'
            }
          ]
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/getting-started/first-steps'
            },
            {
              label: 'FAQ',
              to: 'docs/FAQ/'
            }
          ]
        },
        {
          title: 'Legal & Privacy',
          items: [
            {
              label: 'Privacy',
              href: `${getFullURL()}Privacy`
            },
            {
              label: 'Legal Disclosure',
              href: 'https://www.sap.com/impressum'
            },
            {
              label: 'Terms of Use',
              href: 'https://www.sap.com/terms-of-use'
            },
            {
              label: 'Trademark',
              href: 'https://www.sap.com/trademark'
            }
          ]
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Report Issue',
              to: 'https://github.com/SAP/ui5-webcomponents-react/issues/new'
            },
            {
              label: 'Technical Questions',
              to: 'https://openui5.slack.com/'
            }
          ]
        }
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
