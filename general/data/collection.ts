import { WalkMeDataItem } from '.';
import { WalkMeLink, WalkMeNewLink } from './link';

export interface WalkMeDataCollection {
  LinkedDeployables: Array<WalkMeLink | WalkMeNewLink>;
  GroupType: GroupType;
}
export interface WalkMeDataCollectionItem extends WalkMeDataCollection, WalkMeDataItem {}

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
