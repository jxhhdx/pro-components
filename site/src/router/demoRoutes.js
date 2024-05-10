
export default [
  
  {
    path: 'pro-field:lang(-cn)?',
    meta: {"category":"Components","subtitle":"原子组件","type":"通用","cols":2,"title":"ProField","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../docs/pro-field/demos/index.vue'),
  },
  {
    path: 'pro-form:lang(-cn)?',
    meta: {"category":"Components","subtitle":"高级表单","type":"数据录入","cols":2,"title":"ProForm","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../docs/pro-form/demos/index.vue'),
  },
  {
    path: 'pro-layout:lang(-cn)?',
    meta: {"category":"Components","subtitle":"高级布局","type":"布局","cols":2,"title":"ProLayout","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../docs/pro-layout/demos/index.vue'),
  },
  {
    path: 'pro-table:lang(-cn)?',
    meta: {"category":"Components","subtitle":"高级表格","type":"数据展示","cols":2,"title":"ProTable","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../docs/pro-table/demos/index.vue'),
  },
];