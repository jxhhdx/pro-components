---
category: Components
subtitle: 高级布局
type: 布局
cols: 2
title: ProLayout
cover: https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg
---

ProLayout 可以提供一个标准又不失灵活的中后台标准布局，同时提供一键切换布局形态、自动生成菜单等功能。与 PageContainer 配合使用可以自动生成面包屑、页面标题，并且提供低成本方案接入页脚工具栏。

## 何时使用

页面中需要承载内容时，可以使用 ProLayout 来减少布局成本。

## API
### ProLayout

| Property                | Description                                                           | Type                                                                   | Default Value      |
| ----------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------ |
| title                   | layout in the upper left corner title                                 | VNode \| String                                                        | `'Ant Design Pro'` |
| logo                    | layout top left logo url                                              | VNode \| render                                                        | -                  |
| loading                 | layout loading status                                                 | boolean                                                                | -                  |
| layout                  | layout menu mode, sidemenu: right navigation, topmenu: top navigation | 'side' \| 'top' \| 'mix'                                               | `'side'`           |
| contentWidth            | content mode of layout, Fluid: adaptive, Fixed: fixed width 1200px    | 'Fixed' \| 'Fluid'                                                     | `Fluid`            |
| navTheme                | Navigation theme                                                      | 'light' \|'dark'                                                       | `'light'`          |
| headerTheme             | Header Bar theme                                                      | 'light' \|'dark'                                                       | `'light'`          |
| menuData                | Vue-router `routes` prop                                              | Object                                                                 | `[{}]`             |
| collapsed               | control menu's collapse and expansion                                 | boolean                                                                | true               |
| selectedKeys            | menu selected keys                                                    | string[]                                                               | `[]`               |
| openKeys                | menu openKeys                                                         | string[]                                                               | `[]`               |
| isMobile                | is mobile                                                             | boolean                                                                | false              |
| onCollapse \| @collapse | folding collapse event of menu                                        | (collapsed: boolean) => void                                           | -                  |
| menuHeaderRender        | render header logo and title                                          | v-slot \| VNode \| (logo,title)=>VNode \| false                        | -                  |
| menuExtraRender         | render extra menu item                                                | v-slot \| VNode \| (props)=>VNode \| false                             | -                  |
| menuFooterRender        | render footer menu item                                               | v-slot \| VNode \| (props)=>VNode \| false                             | -                  |
| menuItemRender          | custom render Menu.Item                                               | v-slot#menuItemRender="{ item, icon }" \| ({ item, icon }) => VNode    | null               |
| subMenuItemRender       | custom render Menu.SubItem                                            | v-slot#subMenuItemRender="{ item, icon }" \| ({ item, icon }) => VNode | null               |
| collapsedButtonRender   | custom collapsed button method                                        | `slot` \| (collapsed: boolean) => VNode                                | -                  |
| headerRender            | custom header render method                                           | `slot` \| (props: BasicLayoutProps) => VNode                           | -                  |
| headerContentRender     | header content render method only layout side                         | `slot` \| (props: BasicLayoutProps) => VNode                           | -                  |
| rightContentRender      | header right content render method                                    | `slot` \| (props: BasicLayoutProps) => VNode                           | -                  |
| footerRender            | custom footer render method                                           | `slot` \| (props: BasicLayoutProps) => VNode                           | `false`            |
| tabRender               | custom tab render method                                              | `slot` \| ({ width, ...BasicLayoutProps }) => VNode                    | `false`            |
| breadcrumbRender        | custom breadcrumb render method                                       | `slot` \| ({ route, params, routes, paths, h }) => VNode[]             | -                  |
| locale                  | i18n                                                                  | Function (key: string) => string \| `false`                            | `false`            |

> Menu generation requires `getMenuData` and `clearMenuItem` function
> e.g. `const { menuData } = getMenuData(clearMenuItem(routes))`

### PageContainer

| Property       | Description                                      | Type                               | Default Value |
| -------------- | ------------------------------------------------ | ---------------------------------- | ------------- |
| content        | Content area                                     | VNode \| v-slot                    | -             |
| extra          | Extra content area, on the right side of content | VNode \| v-slot                    | -             |
| extraContent   | Extra content area, on the right side of content | VNode \| v-slot                    | -             |
| tabList        | Tabs title list                                  | `Array<{key: string, tab: sting}>` | -             |
| tab-change     | Switch panel callback                            | (key) => void                      | -             |
| tab-active-key | The currently highlighted tab item               | string                             | -             |

### WaterMark

| Property      | Description                           | Type             | Default Value          |
| ------------- | ------------------------------------- | ---------------- | ---------------------- |
| markStyle     | mark style                            | CSSProperties    | -                      |
| markClassName | mark class                            | string           | -                      |
| gapX          | Horizontal spacing between water-mark | number           | 212                    |
| gapY          | Vertical spacing between watermark    | number           | 222                    |
| offsetLeft    | Horizontal offset                     | number           | `offsetTop = gapX / 2` |
| offsetTop     | Vertical offset                       | number           | `offsetTop = gapY / 2` |
|               |                                       |                  |                        |
| width         |                                       | number           | 120                    |
| height        |                                       | number           | 64                     |
| rotate        | Angle of rotation, unit °             | number           | -22                    |
| image         | image src                             | string           | -                      |
| zIndex        | water-mark z-index                    | number           | 9                      |
| content       | water-mark Content                    | string           | -                      |
| fontColor     | font-color                            | string           | `rgba(0,0,0,.15)`      |
| fontSize      | font-size                             | string`\|`number | 16                     |
