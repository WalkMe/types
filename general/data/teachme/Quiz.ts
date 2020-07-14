import { BooleanStringOption } from '../General';
import { DISPLAYER_ID } from '..';

export type WalkMeDataQuiz = {
  Id: number;
  Passmark: number;
  IsEnabled: boolean;
  WelcomePage: WalkMeDataQuizScreen;
  FailSummeryPage: WalkMeDataQuizScreen;
  SuccessSummeryPage: WalkMeDataQuizScreen;
  Questions: Array<WalkMeDataQuizQuestion>;
  Settings: WalkMeDataQuizSettings;
  UITemplateId: QUIZ_TEMPLATE_IDS.Quiz;
  UiComponentId: QUIZ_COMPONENTS_IDS.Quiz;
  DisplayerId: DISPLAYER_ID.POPUP_DISPLAYER_ID;
  UITemplateVersion: 1;
  UiComponentVersion: 1;
};

export type WalkMeDataQuizSettings = {
  isQuizResults: BooleanStringOption;
  // check data type
  isLimited?: BooleanStringOption;
  randQuestions?: BooleanStringOption;
  randAnswers?: BooleanStringOption;
  overlay: any;
  position: number;
};

export type WalkMeDataQuizScreen = {
  Id: number;
  Title: string;
  Description: string;
  ButtonText: string;
  Type: QUIZ_ITEM_TYPES;
  UITemplateId: QUIZ_TEMPLATE_IDS;
  UiComponentId: QUIZ_COMPONENTS_IDS;
  DisplayerId: DISPLAYER_ID.POPUP_DISPLAYER_ID;
  UITemplateVersion: 1;
  UiComponentVersion: 1;
};

export type WalkMeDataQuizQuestion = {
  Id: number;
  /**
   * The question text
   */
  Question: string;
  Description: string;
  QuestionType: QuestionType;
  Answers: Array<WalkMeDataQuizAnswer>;
  Explanation?: string;
  Settings?: WalkMeDataQuizQuestionSettings;
  OrderIndex: number;
};

export type WalkMeDataQuizQuestionSettings = {
  hasExplanation?: BooleanStringOption;
};

export type WalkMeDataQuizAnswer = {
  Id: number;
  Text: string;
  IsCorrect: boolean;
  OrderIndex: number;
};

export enum QuestionType {
  Single = 0,
  Multiple = 1,
}

export enum QUIZ_ITEM_TYPES {
  Question = 0,
  WelcomePage = 1,
  SuccessSummeryPage = 2,
  FailSummeryPage = 3,
}

export enum QUIZ_TEMPLATE_IDS {
  Quiz = 20,
  WelcomePage = 21,
  SuccessSummeryPage = 22,
  FailSummeryPage = 22,
}

export enum QUIZ_COMPONENTS_IDS {
  Quiz = 3,
  QuizAnnouncement = 4,
}
