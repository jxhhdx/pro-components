import { defineComponent, type App, DefineComponent, Plugin } from 'vue';
import { fieldTextAreaProps, FieldTextAreaProps } from './types';
import { getSlot } from '@ant-design-vue/pro-utils';
import type { VueNode } from 'ant-design-vue/lib/_util/type';

export const slots = [
  'suffixIcon',
  'prevIcon',
  'nextIcon',
  'superPrevIcon',
  'superNextIcon',
  'renderExtraFooter',
  'dateRender',
  'monthCellRender',
];

const FieldTextArea = defineComponent({
  name: 'FieldTextArea',
  inheritAttrs: false,
  props: fieldTextAreaProps,
  slots,
  setup(props, { slots }) {
    const suffixIcon = getSlot<() => VueNode>(slots, props.fieldProps as Record<string, any>, 'suffixIcon');
    const prevIcon = getSlot<() => VueNode>(slots, props.fieldProps as Record<string, any>, 'prevIcon');
    const nextIcon = getSlot<() => VueNode>(slots, props.fieldProps as Record<string, any>, 'nextIcon');
    const superPrevIcon = getSlot<() => VueNode>(slots, props.fieldProps as Record<string, any>, 'superPrevIcon');
    const superNextIcon = getSlot<() => VueNode>(slots, props.fieldProps as Record<string, any>, 'superNextIcon');
    const renderExtraFooter = getSlot<() => VueNode>(
      slots,
      props.fieldProps as Record<string, any>,
      'renderExtraFooter'
    );
    const dateRender = getSlot<() => VueNode>(slots, props.fieldProps as Record<string, any>, 'dateRender');
    const monthCellRender = getSlot<() => VueNode>(slots, props.fieldProps as Record<string, any>, 'monthCellRender');

    const render = getSlot(slots, props.fieldProps as Record<string, any>, 'render') as any;
    const renderFormItem = getSlot(slots, props.fieldProps as Record<string, any>, 'renderFormItem') as any;

    return () => {
      const { mode, text, fieldProps } = props;
      const { placeholder, format } = fieldProps || {};

      if (mode === 'read') {
        const dom = "";
        if (render) {
          return render(text, { mode, ...fieldProps }, <>{dom}</>);
        }
        return <>{dom}</>;
      }
      if (mode === 'edit' || mode === 'update') {
        const dom = ""
        if (renderFormItem) {
          return renderFormItem(text, { mode, ...fieldProps }, dom);
        }
        return dom;
      }
      return null;
    };
  },
});

FieldTextArea.install = (app: App) => {
  app.component(FieldTextArea.name as string, FieldTextArea);
  return app;
};

export default FieldTextArea as DefineComponent<FieldTextAreaProps> & Plugin;
