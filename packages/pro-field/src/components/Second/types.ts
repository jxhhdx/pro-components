import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldSecondProps = {
  ...proFieldFC,
};

export type FieldSecondProps = Partial<ExtractPropTypes<typeof fieldSecondProps>>;
