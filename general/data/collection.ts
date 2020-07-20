import { WalkMeDataItem, WalkMeDataItemBase } from '.';
import { WalkMeLink, WalkMeNewLink } from './link';
import { TypeId } from './content';

export interface WalkMeDataCollection extends WalkMeDataItemBase {
  Name: string;
  LinkedDeployables: Array<WalkMeLink | WalkMeNewLink>;
  GroupType: GroupType;
  Settings: any;
  deployableType: TypeId;
  Id: number;
  Description?: string;
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
