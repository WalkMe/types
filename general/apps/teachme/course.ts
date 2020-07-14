import { Quiz, BuildQuiz } from './quiz';
import { ContentItem, ContentProperties } from '../../data/content';
import { WalkMeDataQuiz } from '../../data';
export class CourseBase {
  id: number;
  title: string;
  items: Array<CourseItem>;
}

export class BuildCourse extends CourseBase {
  quiz: BuildQuiz;
  properties: BuildCourseProperties;
}

export type BuildCourseProperties = {
  /** If set to true, course will be enabled only if all previous courses are completed */
  enableIfPreviousDone: boolean;
  /** If set to true, course items will be enabled only if all previous items are completed */
  enforceOrder: boolean;
};

export class Course extends CourseBase {
  quiz: Quiz;
  properties: CourseProperties;
}

export type CourseProperties = {
  isDisabled?: boolean;
  isCompleted: boolean;
};

export interface CourseItem extends ContentItem {
  type: string;
  courseId: number;
  lessonId?: number;
  properties: CourseItemProperties;
}

export interface CourseItemProperties extends ContentProperties {
  isDisabled?: boolean;
  isCompleted?: boolean;
}
