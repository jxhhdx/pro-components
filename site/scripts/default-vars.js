/**
 * convert default.less into js vars
 *
 * const darkVars = require('./default-vars');
 */
const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

// const stylePath = path.join(__dirname, '..', 'style');
const colorLessPath = require.resolve('ant-design-vue/es/style/color/colors.less')
const defaultLessPath = require.resolve('ant-design-vue/es/style/themes/default.less')
const colorLess = fs.readFileSync(colorLessPath, 'utf8');
const defaultLess = fs.readFileSync(defaultLessPath, 'utf8');

const defaultPaletteLess = lessToJs(`${colorLess}${defaultLess}`, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = defaultPaletteLess;
