const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, '../auth_microservice/static'), // Location of built files
  publicPath: '/static/', // URL Django will use to serve assets
  devServer: {
    port: 8080, // For Cloud9 or local dev
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
});
