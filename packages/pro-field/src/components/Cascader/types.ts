import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldCascaderProps = {
  ...proFieldFC,
};

export type FieldCascaderProps = Partial<ExtractPropTypes<typeof fieldCascaderProps>>;
