import less from 'less';
import defaultVars from './scripts/default-vars';
import dark from './scripts/dark-vars';
import path from 'path';

const themeConfig = [
  {
    theme: 'dark',
    htmlThemeAttr: 'dark',
    modifyVars: {
      hack: `true;@import "${require.resolve('ant-design-vue/es/style/color/colorPalette.less')}";`,
      ...defaultVars,
      ...dark,
      'text-color': 'fade(@white, 65%)',
      'gray-8': '@text-color',
      'background-color-base': '#555',
      'skeleton-color': 'rgba(0,0,0,0.8)',
      'root-entry-name': 'dark',
    },
  },
];
const additionalData = async (content: string, filename: string): Promise<string> => {
  const excludePrefix = path.resolve(__dirname, "../packages")
  if (filename.startsWith(excludePrefix)) {
    return content;
  }
  const themePromises = themeConfig.map(async t => {
    const { htmlThemeAttr, modifyVars = {} } = t;
    const options = {
      javascriptEnabled: true,
      modifyVars,
      relativeUrls: true,
      filename,
    };
    try {
      const { css } = await less.render(content, options);
      let res = '';
      if (htmlThemeAttr && css) {
        res = `
        [data-doc-theme=${htmlThemeAttr}] {
          ${css}
        }
        `;
      }
      return Promise.resolve(res);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return Promise.reject(content);
    }
  });
  let res = content;
  for (const themePromise of themePromises) {
    const theme = await themePromise;
    res += theme;
  }
  return res;
};

export default themeConfig;
export { themeConfig, additionalData };
