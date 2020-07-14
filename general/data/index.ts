import { WalkMeLink } from './link';
import { PublishData, PublishStatus } from './publish';
import { TypeId } from './content';

export type WalkMeItemId = string | number;

export interface WalkMeDataItemBase {
  /** placeholder negative number */
  Id: number;
  Name: string;
  Description?: string;
  OrderIndex: number;
  IsModified: boolean;
  Settings: any;
  /** random 32 char base 64 string */
  Guid: string;
  /** random 32 char base 64 string */
  ResourceId: string;
  deployableType: TypeId;
}

export interface WalkMeDataNewItem extends WalkMeDataItemBase {
  PublishStatus: 0;
}

export interface WalkMeDataItem extends WalkMeDataItemBase {
  PublishDataByEnvs: { [environment_id: number]: PublishData };
  UserId: number;
}

export enum DISPLAYER_ID {
  POPUP_DISPLAYER_ID = 1,
}

export * from './teachme';
export * from './collection';
export * from './condition';
export * from './content';
export * from './link';
export * from './publish';
export * from './tag';
export * from './general';
