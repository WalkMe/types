import { Quiz } from './quiz';
import { ContentItem, ContentProperties } from '../../data/content';

export class Course {
  id: number;
  title: string;
  items: Array<CourseItem>;
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
