module.exports = {
  entry: './src/index.js',
  output: {
    library: '',
    libraryTarget: 'umd',
    path: './dist', 
    filename: '' 
  },
  externals: {
    vue: 'Vue'
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer'
      }, 
      {
        test: /\.scss$/,
        loader: 'style!css!scss!autoprefixer'
      }
    ]
  },
  vue: {
    postcss: [
      require('autoprefixer')()
    ],
  }
}