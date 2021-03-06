import { WalkMeLink, WalkMeNewLink } from '../link';

export interface WalkMeDataCourseTask extends WalkMeLink {
  Settings: WalkMeDataCourseTaskSettings;
}

export interface WalkMeDataNewCourseTask extends WalkMeNewLink {
  Settings: WalkMeDataCourseTaskSettings;
}

export type WalkMeDataCourseTaskSettings = {
  cmplType: CourseTaskCompletionType;
};

export enum CourseTaskCompletionType {
  Completed = 0,
  Goal = 1,
}
