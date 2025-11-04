// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TEE Wiki',
  tagline: 'tee.fyi knowledge base for trusted execution environments',
  favicon: 'img/favicon-1.png',

  // Set the production url of your site here
  url: 'https://tee.fyi/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TEE-Wiki', // Usually your GitHub org/user name.
  projectName: 'tee-wiki', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TEE-Wiki/tee-wiki/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/tee-wiki-social-card.webp',
      metadata: [
        {
          name: 'description',
          content:
            'TEE Wiki at tee.fyi is a collaborative resource curated by leading projects to accelerate trusted execution adoption with practical guides, research, and community updates.',
        },
        {
          property: 'og:description',
          content:
            'Explore tee.fyi to access TEE architecture primers, real-world applications, security reviews, and contributor insights from across the ecosystem.',
        },
        {property: 'og:url', content: 'https://tee.fyi'},
      ],
      navbar: {
        title: 'TEE Wiki',
        logo: {
          alt: 'TEE Wiki Logo',
          src: 'img/logo-1.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/TEE-Wiki/tee-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
