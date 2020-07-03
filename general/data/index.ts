import { WalkMeLink } from './link';
import { PublishData } from './publish';

export type WalkMeItemId = string | number;

export interface WalkMeDataItem {
  Id: number;
  Name: string;
  PublishDataByEnvs: { [environment_id: number]: PublishData };
  OrderIndex: number;
  ResourceId: string;
  Settings: any;
  UserId: number;
  Description?: string;
}

export * from './teachme';
export * from './collection';
export * from './condition';
export * from './content';
export * from './link';
export * from './publish';
export * from './tag';
