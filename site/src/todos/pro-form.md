---
category: Components
subtitle: 高级表单
type: 数据录入
cols: 2
title: ProForm
cover: https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg
---

ProForm 在原来的 Form 的基础上增加了一些语法糖和更多的布局设置，帮助我们快速地开发一个表单，同时添加了一些默认行为，让我们的表单默认好用。

## 何时使用

当你想快速实现一个表单但不想花太多时间去布局时 ProForm 是最好的选择。

ProForm 是基于 antd Form 的可降级封装，与 antd 功能完全对齐，但是在其之上还增加一些预设行为和多种布局。这些布局之间可以无缝切换，并且拥有公共的 API。

| **布局**              | **使用场景**                                                     |
| --------------------- | ------------------------------------------------------------ |
| ProForm               | 标准 Form，增加了 `onFinish` 中自动 `loading` 和根据 `request` 自动获取默认值的功能。 |
| QueryFilter           | 一般用于作为筛选表单，需要配合其他数据展示组件使用。         |

## API

### ProForm

ProForm 是对 antd Form 的再封装，如果你想要自定义表单元素，ProForm 与 antd 的方法是相同的，你仍然可以用 FormItem + 自定义组件的方式来自定义。当然这样不会影响到别的组件，QueryFilter 等组件同理。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 提交表单且数据验证成功后回调事件，同 ant-design-vue 3 `Form` 组件 API | `(values)=>Promise<void> ｜ void` | - |
| onReset | 点击重置按钮的回调 | `(e)=>void` | - |
| submitter | 提交按钮相关配置 | `boolean` \| `SubmitterProps` | `true` |
| syncToUrl | 同步参数到 url 上，url 只支持 string，在使用之前最好读一下[url 中的参数类型](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) | `true` \| `(values,type)=>values` | - |
| syncToInitialValues | 同步结果到 initialValues，默认为 true，如果为 false，form.reset 的时候将会忽略从 url 上获取的数据 | `boolean` | `true` |
| dateFormatter | 自动格式化数据，主要是 moment 的表单，支持 string 和 number 两种模式，此外还支持指定函数进行格式化。 | `string\| number \| ((value: Moment, valueType: string) => string \| number) \| false` | `string` |
| omitNil | ProForm 会自动清空 null 和 undefined 的数数据，如果你约定了 nil 代表某种数据，可以设置为 false 关闭此功能 | `boolean` | `true` |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| request | 发起网络请求的参数，返回值会覆盖给 initialValues | `(params)=>Promise<data>` | - |
| isKeyPressSubmit | 是否使用回车提交 | `boolean` | - |
| formRef | 获取表单所使用的 form | `MutableRefObject<Instance<T>>` | - |
| autoFocusFirstInput | 自动 focus 表单第一个输入框 | `boolean` | `true` |
| grid | 开启栅格化模式，宽度默认百分比，请使用 `colProps` 控制宽度 [查看示例](/components/form#栅格化布局) | `boolean` | - |
| rowProps | 开启 `grid` 模式时传递给 `Row`, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 | [RowProps](https://ant.design/components/grid/#Row) | { gutter: 8 } |
| [(...)](https://ant.design/components/form-cn/) | 注意 `LightFilter` 和 `QueryFilter` 仅支持除 `wrapperCol` \| `labelCol` \| `layout` 外的其他 antd `Form` 组件参数 | - | - |                   | SubmitterProps               | undefined |
| autoFocusFirstInput | 自动 focus 表单第一个输入框                                  | (collapsed: boolean) => void | undefined |
| `grid`              | 开启栅格化模式，宽度默认百分比，请使用 `colProps` 控制宽度 [查看示例](https://procomponents.ant.design/components/form#栅格化布局) | (fromModel: any) => void     | undefined |
| rowProps            | 开启 `grid` 模式时传递给 `Row`, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 | (fromModel: any) => void     | undefined |
