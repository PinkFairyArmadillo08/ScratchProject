const htmlWebPackPlugIns = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  //entry point to create the bundle
  entry: [
    path.join(__dirname, 'client/index.js') 
  ],
  //switch production and dev
  mode: process.env.NODE_ENV, 
  //create a bundle.js file in build folder for production
  output: {
    fileName: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  plugins:[new htmlWebPackPlugIns({template:'index.html'})],
  devServer: {
    port:8888,
    static: {
      directory:path.join(__dirname, 'build'),
      publicPath:'/build/',
    },
    proxy:{
      '/**': 'http://localhost:3000'
    }
  },
  modules:{
    rules:[
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              //transpile es6+ to es5
              ["@babel/preset-env", { target:'defaults'}],
               //transpile jsx to js
              ['@babel/preset-react', {target:'defaults'}]
            ]
          }
        }
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }

}