import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldProgressProps = {
  ...proFieldFC,
};

export type FieldProgressProps = Partial<ExtractPropTypes<typeof fieldProgressProps>>;
