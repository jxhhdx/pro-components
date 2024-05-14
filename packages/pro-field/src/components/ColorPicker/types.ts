import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldColorPickerProps = {
  ...proFieldFC,
};

export type FieldColorPickerProps = Partial<ExtractPropTypes<typeof fieldColorPickerProps>>;
