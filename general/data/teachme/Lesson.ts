import { BooleanNumberOption, ItemId } from './General';
import { WalkMeLink } from '../link';

export interface WalkMeDataLesson extends WalkMeLink {
  Id: number;
  LinkedDeployables: Array<WalkMeDataLessonItem>;
  Settings: any;
  Name: string;
}

export interface WalkMeDataLessonItem extends WalkMeLink {
  Id: ItemId;
  DeployableID: ItemId;
  DeployableType: number;
  RelatedObjectId: ItemId;
  groupId: ItemId;
  Settings: {
    cmplType: 0 | 1;
  };
}

export type WalkMeDataLessonItemSettings = {
  cmplType: BooleanNumberOption;
};
