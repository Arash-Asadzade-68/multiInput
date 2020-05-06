const withSass = require("@zeit/next-sass");
const path = require("path");


module.exports = withSass(
  {
    cssModules: true,
    distDir: 'build',
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    webpack(config, options) {
      config.resolve.alias["components"] = path.join(__dirname, "components");
      config.resolve.alias["public"] = path.join(__dirname, "public");
      return config;
    },


  }
);