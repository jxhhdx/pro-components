import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldOptionsProps = {
  ...proFieldFC,
};

export type FieldOptionsProps = Partial<ExtractPropTypes<typeof fieldOptionsProps>>;
