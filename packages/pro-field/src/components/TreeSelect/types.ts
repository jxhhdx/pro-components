import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldTreeSelectProps = {
  ...proFieldFC,
};

export type FieldTreeSelectProps = Partial<ExtractPropTypes<typeof fieldTreeSelectProps>>;
