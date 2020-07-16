import { CourseTask, BuildCourseTask } from './course';
import { TeachMeTypes } from '.';

export interface Lesson extends CourseTask {
  properties: {};
}

export interface BuildLesson extends BuildCourseTask {}
