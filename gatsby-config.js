module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        aliases: {
          '@components': './components',
          '@containers': './containers',
          '@layouts': './layouts',
          '@utils': './utils',
        },
        root: './src',
      },
      resolve: 'gatsby-plugin-module-resolver',
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        background_color: '#000',
        display: 'standalone',
        icon: 'src/images/rickie.png',
        name: 'Justice for Rickie Slaughter',
        short_name: 'Justice for Rickie Slaughter',
        start_url: '/',
        theme_color: '#3B27BA',
        /* eslint-enable @typescript-eslint/camelcase */
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-react-helmet',
    {
      options: {
        component: require.resolve('./src/layouts/base.tsx'),
      },
      resolve: 'gatsby-plugin-layout',
    },
    {
      options: {
        defaultLanguage: 'en',
        languages: ['en', 'es'],
        path: `${__dirname}/src/intl`,
      },
      resolve: 'gatsby-plugin-intl',
    },
    {
      options: {
        fieldName: 'cms',
        typeName: 'CMS',
        url: 'https://api-uswest.graphcms.com/v1/ck5aaurfb6svw01h9f7b82c2n/master',
      },
      resolve: 'gatsby-source-graphql',
    },
    {
      options: {
        bucketName: 'www.justiceforrickieslaughter.com',
      },
      resolve: 'gatsby-plugin-s3',
    },
    {
      options: {
        id: 1665739,
        includeInDevelopment: true,
        sv: 6
      },
      resolve: 'gatsby-plugin-hotjar-tracking'
    },
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    author: '@shicholas',
    description: 'Rickie Slaughter is an innocent man who is serving time for a crime he did not commit - demand justice today!',
    title: 'Justice for Rickie Slaughter',
  },
};
