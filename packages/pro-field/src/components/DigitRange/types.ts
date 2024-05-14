import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldDigitRangeProps = {
  ...proFieldFC,
};

export type FieldDigitRangeProps = Partial<ExtractPropTypes<typeof fieldDigitRangeProps>>;
