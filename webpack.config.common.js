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
        test: /\.svelte$/,
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
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
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
          //   loader: 'postcss-loader'
          // },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              includePaths: [src, 'node_modules']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.svelte']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin([
      {
        context: 'src/',
        from: './index.html',
        to: './index.html'
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
