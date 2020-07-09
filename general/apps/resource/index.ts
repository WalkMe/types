import { WalkMeDataItem } from '../../data';

export interface ResourceDataItem extends WalkMeDataItem {
  Description: string;
  Url: string;
  Type: ResourceType;
}

export enum ResourceType {
  Article = 0,
  Video = 1,
}

export * from './article';
export * from './video';
