/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: { process: 'process/browser' },
      fallback: {
        fs: false,
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
      },
    },
  });
};
