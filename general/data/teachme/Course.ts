import { GroupType, WalkMeDataCollection } from '../collection';
import { BooleanStringOption } from '../General';
import { WalkMeDataLesson, WalkMeDataNewLesson } from './Lesson';
import { WalkMeDataQuiz } from './Quiz';
import { WalkMeLink, WalkMeNewLink } from '../link';
import { WalkMeDataNewItem, WalkMeDataItem } from '..';

export interface WalkMeDataBaseCourse<T extends WalkMeLink | WalkMeNewLink>
  extends WalkMeDataCollection {
  GroupType: GroupType.Course;
  Quiz: WalkMeDataQuiz;
  Settings: WalkMeDataCourseSettings;
  LinkedDeployables: Array<T>;
}

export type WalkMeDataCourse = WalkMeDataItem & WalkMeDataBaseCourse<WalkMeDataLesson | WalkMeLink>;

export type WalkMeDataEditedCourse = WalkMeDataNewItem &
  WalkMeDataBaseCourse<WalkMeDataNewLesson | WalkMeNewLink>;

export type WalkMeDataCourseSettings = {
  onlyPreviousDone?: BooleanStringOption;
  enforceOrder?: BooleanStringOption;
};
