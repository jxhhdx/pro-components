import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldTextAreaProps = {
  ...proFieldFC,
};

export type FieldTextAreaProps = Partial<ExtractPropTypes<typeof fieldTextAreaProps>>;
