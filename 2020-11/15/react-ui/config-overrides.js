const { fixBabelImports, override } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', { libraryName: 'antd-mobile', style: 'css' })
);