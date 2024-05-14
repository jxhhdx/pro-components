import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldSliderProps = {
  ...proFieldFC,
};

export type FieldSliderProps = Partial<ExtractPropTypes<typeof fieldSliderProps>>;
