import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldRateProps = {
  ...proFieldFC,
};

export type FieldRateProps = Partial<ExtractPropTypes<typeof fieldRateProps>>;
