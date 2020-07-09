import { WalkMeDataItem } from '../../data';
import { ResourceType } from '.';

export interface VideoData extends WalkMeDataItem {
  Description: string;
  Url: string;
  Type: ResourceType.Video;
}
