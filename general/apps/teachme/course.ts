import { Quiz } from './quiz';
import { ContentItem, ContentProperties } from '../../data/content';
import { WalkMeDataQuiz } from '../../data';
export class CourseBase {
  id: number;
  title: string;
  items: Array<CourseItem>;
}

export class BuildCourse extends CourseBase {
  quiz: WalkMeDataQuiz;
}

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
