const htmlWebPackPlugIns = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  //entry point to create the bundle
  entry: [path.join(__dirname, './client/index.js')],
  //switch production and dev
  mode: process.env.NODE_ENV,
  //create a bundle.js file in 'build' folder for production
  output: {
    filename: 'bundle.js',
    publicPath: '/build/',
    path: path.join(__dirname, 'build'),
  },
  //generates the production html file using our index.html as a template
  plugins: [new htmlWebPackPlugIns({ template: 'index.html' })],
  //developments server is listening at HTTP://Localhost:8888 & serving the static files in a 'build' folder
  devServer: {
    port: 8888,
    static: {
      directory: path.join(__dirname, 'build'),
    },
    //proxies for our development server to route all requests to HTTP://Localhost:3000
    proxy: {
      '/**': 'http://localhost:3000',
    },
  },
  //loaders to use
  module: {
    rules: [
      //transpile js and jsx files
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              //transpile es6+ to es5
              ['@babel/preset-env', { targets: 'defaults' }],
              //transpile jsx to js
              ['@babel/preset-react', { targets: 'defaults' }],
            ],
          },
        },
      },
      //transpile sass and css files
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
