import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldCodeProps = {
  ...proFieldFC,
};

export type FieldCodeProps = Partial<ExtractPropTypes<typeof fieldCodeProps>>;
