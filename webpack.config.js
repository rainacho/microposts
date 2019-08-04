const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      minify: {
       collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
     })
  ],
  module: {    
    rules: [
      {      
        // Babel Loader
        test: /\.js?$/,        
        exclude: /node_modules/,        
        loader: 'babel-loader',        
        query: {           
          presets: ['env']        
        }
      },
      {
        // CSS Loader
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    port: 8080
  },
}