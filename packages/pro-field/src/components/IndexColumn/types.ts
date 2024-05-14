import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldIndexColumnProps = {
  ...proFieldFC,
};

export type FieldIndexColumnProps = Partial<ExtractPropTypes<typeof fieldIndexColumnProps>>;
