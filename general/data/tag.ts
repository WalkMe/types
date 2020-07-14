import { GroupType, WalkMeDataCollectionItem } from './collection';
import { WalkMeLink } from './link';
import { WalkMeDataCondition } from './condition';

export interface WalkMeDataTag extends WalkMeDataCollectionItem {
  OrderIndex: 0;
  ResourceId: string;
  Settings: TagSettings;
}

export interface TagSettings {
  /**
   * A string representing an rgb color
   * Example - "4a75e6"
   */
  Color: '4a75e6';
  Condition: WalkMeDataCondition;
}
