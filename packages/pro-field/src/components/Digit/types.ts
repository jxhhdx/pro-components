import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldDigitProps = {
  ...proFieldFC,
};

export type FieldDigitProps = Partial<ExtractPropTypes<typeof fieldDigitProps>>;
