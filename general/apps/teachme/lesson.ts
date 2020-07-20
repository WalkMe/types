import { CourseTask, BuildCourseTask, CourseTaskBase, NewCourseItemData } from './course';
import { TeachMeTypes } from '.';
import { TypeContainer } from '..';

export interface Lesson extends CourseTask {
  properties: {};
}

export interface BuildLesson extends CourseTaskBase {
  childNodes?: TypeContainer<BuildCourseTask, NewCourseItemData>;
}
