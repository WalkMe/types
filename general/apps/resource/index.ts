import { WalkMeDataItem, WalkMeDataNewItem } from '../../data';

export interface ResourceDataItem extends ResourceDataItemBase, WalkMeDataItem {}
export interface ResourceNewDataItem extends ResourceDataItemBase, WalkMeDataNewItem {}

export interface ResourceDataItemBase {
  Description?: string;
  Url: string;
  Type: ResourceType;
}

export enum ResourceType {
  Article = 0,
  Video = 1,
}

export type ResourceSettings = {
  ContentPlayMode: ResourcePlayMode;
  LightboxWidth: number;
  widthUnit: LightBoxSizeType;
  LightboxHeight: number;
  heightUnit: LightBoxSizeType;
};

export enum ResourcePlayMode {
  Widget = 0,
  LightBox = 1,
  NewTab = 2,
  SameTab = 3,
}

export enum LightBoxSizeType {
  Percentage = '%',
  Pixels = 'px',
}

export * from './article';
export * from './video';
