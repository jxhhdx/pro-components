import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldPercentProps = {
  ...proFieldFC,
};

export type FieldPercentProps = Partial<ExtractPropTypes<typeof fieldPercentProps>>;
