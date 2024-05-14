import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldSwitchProps = {
  ...proFieldFC,
};

export type FieldSwitchProps = Partial<ExtractPropTypes<typeof fieldSwitchProps>>;
