const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const root = path.join(__dirname)
const src = path.join(root, '/src/')
const nodeModules = path.join(root, '/node_modules/')

module.exports = {
  entry: {
    main: path.resolve(src + '/main.js')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'svelte-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [src, path.join(nodeModules, '@material')],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 1
            }
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {}
          // },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              includePaths: [src, nodeModules]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].min.css'
    }),
    new CopyWebpackPlugin([
      {
        context: 'components/',
        from: '**/*',
        to: './',
        ignore: [ '*.js', '*.svelte', '*.css', '*.snap', '__tests__' ]
      }
    ])
  ],
  stats: {
    all: false,
    assets: true,
    chunkModules: true,
    chunkOrigins: true,
    errors: true,
    errorDetails: true,
    colors: true
  }
}
