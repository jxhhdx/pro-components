import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldImageProps = {
  ...proFieldFC,
};

export type FieldImageProps = Partial<ExtractPropTypes<typeof fieldImageProps>>;
