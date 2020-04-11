const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
  })
}