/* eslint-disable @typescript-eslint/no-var-requires */
const globby = require('globby');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { ESLint } = require('eslint');

(async () => {
  const basePath = path.resolve(__dirname, '../src/docs')
  const paths = await globby(`${basePath}/*/index.*.md`);
  const components = {};

  paths.forEach(path => {
    const content = fs.readFileSync(path).toString();
    const componentName = path.replace(basePath, '').split('/')[1];

    if (componentName !== 'color-picker') {
      const { data } = matter(content);
      components[componentName] = { ...components[componentName], ...data };
    }
  });
  const TEMPLATE = `
export default [
  ${Object.keys(components).map(
    component => `
  {
    path: '${component}:lang(-cn)?',
    meta: ${JSON.stringify(components[component])},
    component: () => import('../docs/${component}/demos/index.vue'),
  }`,
  )}
];`;

  const engine = new ESLint({
    fix: true,
    useEslintrc: false,
    baseConfig: require(path.join(process.cwd(), '.eslintrc.js')),
  });

  const report = await engine.lintText(TEMPLATE);

  fs.writeFileSync(`${path.resolve(__dirname, '../src/router/demoRoutes.js')}`, report[0].output);
})();
