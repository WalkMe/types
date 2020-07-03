import { GroupType, WalkMeDataCollectionItem } from './collection';
import { WalkMeLink } from './link';
import { WalkMeDataCondition } from './condition';

export interface WalkMeDataTag extends WalkMeDataCollectionItem {
  GroupType: GroupType.Tag;
  OrderIndex: 0;
  ResourceId: 'a605bb3b-5624-11ea-ac5f-029f90d1a4ea';
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
