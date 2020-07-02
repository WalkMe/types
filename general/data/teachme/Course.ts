import { WalkMeDataItem } from '../.';
import { ItemId, BooleanStringOption } from './General';
import { WalkMeDataLesson } from './Lesson';
import { WalkMeDataQuiz } from './Quiz';

export interface WalkMeDataCourse extends WalkMeDataItem {
  Id: ItemId;
  GroupType: 4;
  LinkedDeployables: Array<WalkMeDataLesson>;
  Settings: WalkMeDataQuizCourseSettings;
  Quiz: WalkMeDataQuiz;
  Name: string;
  Guid?: string;
  ResourceId: string;
}

export type WalkMeDataQuizCourseSettings = {
  onlyPreviousDone: BooleanStringOption;
  enforceOrder: BooleanStringOption;
};
