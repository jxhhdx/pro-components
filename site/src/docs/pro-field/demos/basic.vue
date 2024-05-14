<docs>
---
order: 0
iframe: 400
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本使用方式

## en-US

Basic usage methods
</docs>

<template>
  <Space>
    <RadioGroup @change="handleRadioGroup" :value="state">
      <Radio value="read">只读</Radio>
      <Radio value="edit">编辑</Radio>
    </RadioGroup>
    简约模式
    <Switch :checked="plain" @change="handleSwitch" />
  </Space>
  <br />
  <br />
  <Descriptions :column="2">
    <DescriptionsItem label="空字符串">
      <ProFieldFC text="" mode="read" />
    </DescriptionsItem>
  </Descriptions>
</template>

<script lang="ts" setup>
import { Descriptions, DescriptionsItem, Radio, RadioGroup, Space, Switch } from 'ant-design-vue';
import type { ProFieldFCMode } from '@ant-design-vue/pro-utils';
import { ProFieldFC } from '@ant-design-vue/pro-field';
import { ref } from 'vue';
const state = ref<ProFieldFCMode>('read');
const plain = ref<boolean>(false);
const handleRadioGroup = (event) => {
  state.value = event.target.value as ProFieldFCMode
}
const handleSwitch = (checked: boolean) => {
  plain.value = checked
}
</script>