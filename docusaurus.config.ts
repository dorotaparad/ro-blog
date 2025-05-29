import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Adventures in DevOps',
  tagline: "Ro's Blog",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dorotaparad.ch',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dorotaparad', // Usually your GitHub org/user name.
  projectName: 'ro-blog', // Usually your repo name.

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
      {
        pages: {
          // path: '/src/pages',
          // routeBasePath: '/'
        },
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dorotaparad/ro-blog/tree/main',
          showLastUpdateTime: true
        },
        blog: {
          blogTitle: "Ro's Blog - Blog Title",
          routeBasePath: 'posts',
          path: 'posts',
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            xslt: true,
            // title: '',
            // description: ''
          },
          editUrl: 'https://github.com/dorotaparad/ro-blog/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'throw',
          onUntruncatedBlogPosts: 'ignore',
          blogSidebarTitle: ' ',
          blogSidebarCount: 'ALL',
          postsPerPage: 26
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: ['./src/scripts/fontawesome.ts'],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    'docusaurus-plugin-sass'
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/media-banner.png',
    navbar: {
      title: "Ro's Blog",
      logo: {
        alt: "Ro's Blog",
        src: 'img/logo.jpg',
      },
      items: [
        {to: '/posts', label: 'Posts', position: 'left'}
        // {to: '/docs/guests', label: 'Request Appearance', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'Posts',
              to: '/posts',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://adventuresindevops.com/join/',
        //     },
        //     {
        //       label: 'RSS Feed',
        //       href: 'https://adventuresindevops.com/episodes/rss.xml',
        //     }
        //   ],
        // },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/dorota-parad',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/dorotaparad.bsky.social',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dorota Parad`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.okaidia
      // https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages
      // additionalLanguages: ['csharp', 'java', 'ruby', 'php', 'json', 'diff']
    },
    zoom: {
      selector: '.markdown p > img',
      background: {
        light: 'rgba(0,0,0,.5)',
        dark: 'rgba(0,0,0,.5)'
      },
      // https://github.com/francoischalifour/medium-zoom?tab=readme-ov-file#options
      config: {}
    }

  } satisfies Preset.ThemeConfig,
};

export default config;
