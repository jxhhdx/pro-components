import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldStatusProps = {
  ...proFieldFC,
};

export type FieldStatusProps = Partial<ExtractPropTypes<typeof fieldStatusProps>>;
