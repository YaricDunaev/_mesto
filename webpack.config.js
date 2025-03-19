const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/scripts/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Итоговый JS файл
    clean: true, // Очистка папки dist перед каждой сборкой
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка для сервера разработки
    },
    compress: true,
    port: 9000, // Порт для dev-сервера
    open: true, // Автоматически открывать браузер
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Обработка CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Обработка изображений
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', // Сохранять изображения в папку images
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Обработка шрифтов
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // Сохранять шрифты в папку fonts
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Использовать index.html как шаблон
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Итоговый CSS файл
    }),
  ],
};