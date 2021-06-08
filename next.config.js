const path = require("path");
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: isProd ? '/JulianWeb/' : '',
  future: {
    webpack5: true,
  },
};