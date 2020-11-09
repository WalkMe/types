import { Quiz, BuildQuiz } from './quiz';
import { ContentItem, ContentProperties, TypeName } from '../../data/content';
import { WalkMeDataQuiz, CourseTaskCompletionType } from '../../data';
import { TypeContainer } from '..';
export class CourseBase {
  id: number;
  title: string;
}

export class BuildCourse extends CourseBase {
  quiz?: BuildQuiz;
  properties: BuildCourseProperties;
  index: number;
  items: TypeContainer<CourseTaskBase, NewCourseItemData | NewCourseLessonData>;
}

export type BuildCourseProperties = {
  /** If set to true, course will be enabled only if all previous courses are completed */
  enableIfPreviousDone: boolean;
  /** If set to true, course items will be enabled only if all previous items are completed */
  enforceOrder: boolean;

  hasQuiz: boolean;

  baseCoverImage?: string;
  squareCoverImage?: string;
  rectangleCoverImage?: string;
};

export class Course extends CourseBase {
  quiz: Quiz;
  properties: CourseProperties;
  items: Array<CourseTask>;
}

export type CourseProperties = {
  isDisabled?: boolean;
  isCompleted: boolean;
};

export interface CourseTaskBase extends ContentItem {
  type: string;
}

export type NewCourseItemData = {
  id: number;
  type: TypeName;
};

export type NewCourseLessonData = {
  index: number;
};

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
