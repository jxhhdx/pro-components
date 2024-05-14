import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldFromNowProps = {
  ...proFieldFC,
};

export type FieldFromNowProps = Partial<ExtractPropTypes<typeof fieldFromNowProps>>;
