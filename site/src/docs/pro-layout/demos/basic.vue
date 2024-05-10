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
  <PageContainer fixed-header title="Example">
    <template #tags>
      <Tag>tag1</Tag>
      <Tag color="pink">tag2</Tag>
    </template>
    <Result
      status="404"
      :style="{
        height: '100%',
      }"
      title="Hello World"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <Button type="primary">Back Home</Button>
      </template>
    </Result>
  </PageContainer>
</template>

<script lang="ts" setup>
import { Button, Tag, Result } from 'ant-design-vue';
import { PageContainer } from '@ant-design-vue/pro-layout';
</script>