<template>
  <template v-if="iframeName === 'basic'">
    <basic />
  </template>
  <demo-sort v-else :cols="1">
    <basic />
  </demo-sort>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import Basic from './basic.vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
  },
  props: {
    iframeName: String,
  },
  setup(props) {
    provide(
      'iframeDemo',
      !props.iframeName
        ? {
            basic: '/iframe/layout/#basic',
          }
        : {},
    );
  },
});
</script>
