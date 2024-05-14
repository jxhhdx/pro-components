import type { ExtractPropTypes } from 'vue';
import { proFieldFC } from '../typings';

export const fieldSegmentedProps = {
  ...proFieldFC,
};

export type FieldSegmentedProps = Partial<ExtractPropTypes<typeof fieldSegmentedProps>>;
