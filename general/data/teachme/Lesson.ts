import { BooleanNumberOption, ItemId } from '../General';
import { WalkMeLink, WalkMeNewLink } from '../link';
import { GroupType } from '../collection';

export interface WalkMeDataLesson extends WalkMeLink {
  Id: number;
  LinkedDeployables: Array<WalkMeDataLessonItem | WalkMeDataNewLessonItem>;
  Settings: any;
  Name: string;
  groupId: GroupType.Lesson;
}

export interface WalkMeDataNewLesson extends WalkMeDataLesson {
  LinkedDeployables: Array<WalkMeDataNewLessonItem>;
}

export interface WalkMeDataLessonItemBase {
  Settings: {
    cmplType: 0 | 1;
  };
}

export interface WalkMeDataLessonItem extends WalkMeLink, WalkMeDataLessonItemBase {
  Settings: {
    cmplType: 0 | 1;
  };
}

export interface WalkMeDataNewLessonItem extends WalkMeNewLink, WalkMeDataLessonItemBase {
  Settings: {
    cmplType: 0 | 1;
  };
}

export interface WalkMeDataNewLessonItem extends WalkMeDataLessonItem {}

export type WalkMeDataLessonItemSettings = {
  cmplType: BooleanNumberOption;
};
