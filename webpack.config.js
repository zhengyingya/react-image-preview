const devConfig = require("./webpack.dev.config");
const prodConfig = require("./webpack.prod.config");

module.exports = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
