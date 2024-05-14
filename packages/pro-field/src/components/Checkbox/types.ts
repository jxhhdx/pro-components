import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldCheckboxProps = {
  ...proFieldFC,
};

export type FieldCheckboxProps = Partial<ExtractPropTypes<typeof fieldCheckboxProps>>;
