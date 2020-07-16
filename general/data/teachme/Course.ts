import { GroupType, WalkMeDataCollection } from '../collection';
import { BitBoolean } from '../General';
import { WalkMeDataLessonLink, WalkMeDataNewLessonLink } from './Lesson';
import { WalkMeDataQuiz } from './Quiz';
import { WalkMeLink, WalkMeNewLink } from '../link';
import { WalkMeDataNewItem, WalkMeDataItem } from '..';
import { WalkMeDataCourseTask, WalkMeDataNewCourseTask } from './Task';

export interface WalkMeDataBaseCourse<T extends WalkMeLink | WalkMeNewLink>
  extends WalkMeDataCollection {
  GroupType: GroupType.Course;
  Quiz: WalkMeDataQuiz;
  Settings: WalkMeDataCourseSettings;
  LinkedDeployables: Array<T>;
}

export type WalkMeDataCourseItem = WalkMeDataLessonLink | WalkMeDataCourseTask;
export type WalkMeDataCourseNewItem = WalkMeDataNewLessonLink | WalkMeDataNewCourseTask;

export type WalkMeDataCourse = WalkMeDataItem & WalkMeDataBaseCourse<WalkMeDataCourseItem>;

export type WalkMeDataNewCourse = WalkMeDataNewItem & WalkMeDataBaseCourse<WalkMeDataCourseNewItem>;

export type WalkMeDataEditedCourse = WalkMeDataItem & WalkMeDataBaseCourse<WalkMeDataCourseNewItem>;

export type WalkMeDataCourseSettings = {
  onlyPreviousDone?: BitBoolean;
  enforceOrder?: BitBoolean;
};
