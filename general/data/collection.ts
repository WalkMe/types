import { WalkMeDataItem } from '.';
import { WalkMeLink } from './link';

export interface WalkMeDataCollectionItem extends WalkMeDataItem {
  LinkedDeployables: Array<WalkMeLink>;
  GroupType: GroupType;
}

export enum GroupType {
  Label = 0,
  Category = 1,
  Collection = 2,
  Tag = 3,
  Course = 4,
  Lesson = 5,
  Space = 6,
  Folder = 7,
}
