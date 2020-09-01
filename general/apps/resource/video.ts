import { WalkMeDataItem } from '../../data';
import { ResourceType, ResourceDataItem } from '.';

export interface VideoData extends ResourceDataItem {
  Type: ResourceType.Video;
}
