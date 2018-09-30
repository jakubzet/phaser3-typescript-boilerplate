const mergeWith = require("lodash.mergewith");

const mergeCustomizer = (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

module.exports = (env = "dev") => {
  const commonConfig = require("./webpack.common.js");
  const envConfig = require(`./webpack.${env}.js`);
  return Object.assign({}, mergeWith(commonConfig, envConfig, mergeCustomizer));
};
