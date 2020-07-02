import { CourseItem } from './course';
import { TeachMeTypes } from '.';

export interface Lesson extends CourseItem {
  type: TeachMeTypes.LESSON;
}
