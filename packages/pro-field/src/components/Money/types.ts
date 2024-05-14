import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldMoneyProps = {
  ...proFieldFC,
};

export type FieldMoneyProps = Partial<ExtractPropTypes<typeof fieldMoneyProps>>;
