import { BooleanNumberOption, ItemId } from '../General';
import { WalkMeLink, WalkMeNewLink } from '../link';
import { GroupType, WalkMeDataCollection } from '../collection';
import { WalkMeDataCourseTask, WalkMeDataNewCourseTask } from './Task';
import { WalkMeDataItem } from '..';
export interface WalkMeDataLesson extends WalkMeDataCollection, WalkMeDataItem {
  LinkedDeployables: Array<WalkMeDataCourseTask | WalkMeDataNewCourseTask>;
}

export interface WalkMeDataLessonLink extends WalkMeLink {}

export interface WalkMeDataNewLessonLink extends WalkMeNewLink {}
