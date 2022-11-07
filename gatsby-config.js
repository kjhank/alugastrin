require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        rule: {
          omitKeys: [
            'width',
            'height',
          ],
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        id: process.env.GATSBY_GTM_ID,
      },
      resolve: 'gatsby-plugin-google-tagmanager',
    },
    {
      options: {
        alias: {
          '@components': 'src/components',
          '@containers': 'src/containers',
          '@icons': 'src/icons',
          '@pages': 'src/pages',
          '@src': 'src',
          '@static': 'src/static',
          '@theme': 'src/theme',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    {
      options: {
        background_color: '#bb181b',
        display: 'minimal-ui',
        icon: 'src/images/alu_www_favicon_512x512.png', // This path is relative to the root of the site.
        name: 'Alugastrin',
        short_name: 'alugastrin',
        start_url: '/',
        theme_color: '#bb181b', // TODO: set these up
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Strona produktów Alugastrin',
    siteUrl: 'http://alugastrin.pl',
    title: 'Alugastrin',
  },
};
