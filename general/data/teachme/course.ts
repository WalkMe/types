import { GroupType, WalkMeDataCollection } from '../collection';
import { BitBoolean } from '../general';
import { WalkMeDataLessonLink, WalkMeDataNewLessonLink } from './lesson';
import { WalkMeDataQuiz } from './quiz';
import { WalkMeLink, WalkMeNewLink } from '../link';
import { WalkMeDataNewItem, WalkMeDataItem } from '..';
import { WalkMeDataCourseTask, WalkMeDataNewCourseTask } from './task';

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
  hasQuiz?: BitBoolean;
  baseCoverImage?: string;
  squareCoverImage?: string;
  rectangleCoverImage?: string;
};
