/**
 * convert dark.less into js vars
 *
 * const darkVars = require('./dark-vars');
 */
const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');
const lessPath = require.resolve('ant-design-vue/es/style/themes/dark.less')
const darkLess = fs.readFileSync(lessPath, 'utf8');

const darkPaletteLess = lessToJs(darkLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = darkPaletteLess;
