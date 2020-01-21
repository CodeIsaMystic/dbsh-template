const path = require('path');
const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
];

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader?url=false',
        {
          loader: 'postcss-loader',
          options: {
            plugins: postCSSPlugins
          }
        }
      ]
    }]
  }
};
// add this short code on the rules:use:
//            'css-loader?url=false',
//right after 'style-loader',  and before [loader:]
// to manage ourself our bg-img on a css file