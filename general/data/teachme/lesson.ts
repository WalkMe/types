import { WalkMeLink, WalkMeNewLink } from '../link';
import { WalkMeDataCollection } from '../collection';
import { WalkMeDataCourseTask, WalkMeDataNewCourseTask } from './task';
import { WalkMeDataItem, WalkMeDataNewItem } from '..';
export interface WalkMeDataLesson extends WalkMeDataCollection, WalkMeDataItem {
  LinkedDeployables: Array<WalkMeDataCourseTask | WalkMeDataNewCourseTask>;
}

export interface WalkMeDataNewLesson extends WalkMeDataCollection, WalkMeDataNewItem {
  LinkedDeployables: Array<WalkMeDataCourseTask | WalkMeDataNewCourseTask>;
}

export interface WalkMeDataLessonLink extends WalkMeLink {}

export interface WalkMeDataNewLessonLink extends WalkMeNewLink {}
