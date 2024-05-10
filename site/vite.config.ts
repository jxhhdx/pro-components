import path from 'path';
import vue from '@vitejs/plugin-vue';
import md from './plugin/md';
import docs from './plugin/docs';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { additionalData } from './themeConfig';
/**
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      // 'ant-design-vue/es': path.resolve(__dirname, '../components'),
      // 'ant-design-vue': path.resolve(__dirname, '../components'),
      '@ant-design-vue/pro-utils': path.resolve(__dirname, "../packages/utils/src"),
      '@ant-design-vue/pro-table': path.resolve(__dirname, "../packages/pro-table/src"),
      '@ant-design-vue/pro-layout': path.resolve(__dirname, "../packages/pro-layout/src"),
      '@ant-design-vue/pro-form': path.resolve(__dirname, "../packages/pro-form/src"),
      '@ant-design-vue/pro-field': path.resolve(__dirname, "../packages/pro-field/src"),
    },
  },
  server: {
    host: true,
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      mergeProps: false,
      enableObjectSlots: false,
    }),
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  optimizeDeps: {
    include: [
      'fetch-jsonp',
      '@ant-design/icons-vue',
      'lodash-es',
      'dayjs',
      'ant-design-vue',
      'vue',
      'vue-router',
      'vue-i18n',
      'async-validator',
    ],
  },
  css: {
    postcss: {},
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true;@import "${require.resolve('ant-design-vue/es/style/color/colorPalette.less')}";`,
          'root-entry-name': 'variable',
        },
        javascriptEnabled: true,
        additionalData,
      },
    },
  },
};
