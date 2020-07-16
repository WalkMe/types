import { Quiz, BuildQuiz } from './quiz';
import { ContentItem, ContentProperties } from '../../data/content';
import { WalkMeDataQuiz, CourseTaskCompletionType } from '../../data';
export class CourseBase<T> {
  id: number;
  title: string;
  items: Array<T>;
}

export class BuildCourse extends CourseBase<BuildCourseTask> {
  quiz: BuildQuiz;
  properties: BuildCourseProperties;
  index: number;
}

export type BuildCourseProperties = {
  /** If set to true, course will be enabled only if all previous courses are completed */
  enableIfPreviousDone: boolean;
  /** If set to true, course items will be enabled only if all previous items are completed */
  enforceOrder: boolean;
};

export class Course extends CourseBase<CourseTask> {
  quiz: Quiz;
  properties: CourseProperties;
}

export type CourseProperties = {
  isDisabled?: boolean;
  isCompleted: boolean;
};

export interface CourseTaskBase extends ContentItem {
  type: string;
}

export interface BuildCourseTask extends CourseTaskBase {
  properties: BuildCourseTaskProperties;
}
export interface CourseTask extends ContentItem {
  courseId: number;
  lessonId?: number;
  properties: CourseTaskProperties;
}
export interface BuildCourseTaskProperties extends ContentProperties {
  completionType: CourseTaskCompletionType;
}

export interface CourseTaskProperties extends ContentProperties {
  isDisabled?: boolean;
  isCompleted?: boolean;
}
