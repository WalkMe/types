import { WalkMeLink } from './link';

export type WalkMeItemId = string | number;

export interface WalkMeDataItem {
  LinkedDeployables?: Array<WalkMeLink>;
}

export * from './teachme';
export * from './content';
export * from './link';
