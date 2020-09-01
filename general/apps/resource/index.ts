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

export type ResourceSettings {
  ContentPlayMode: ResourcePlayMode;
  LightboxWidth: number;
  widthUnit:LightBoxSizeType;
  LightboxHeight: number;
  heightUnit:LightBoxSizeType;
}

export enum ResourcePlayMode {
  NewTab = "0",
  LightBox = "1"
}

export enum LightBoxSizeType {
  Percentage = "%",
  Pixels = "px"
}

export * from './article';
export * from './video';
