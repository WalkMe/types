import { BooleanStringOption } from './General';

export type WalkMeDataQuiz = {
  Id: number;
  Passmark: number;
  IsEnabled: boolean;
  WelcomePage: WalkMeDataQuizScreen;
  FailSummeryPage: WalkMeDataQuizScreen;
  SuccessSummeryPage: WalkMeDataQuizScreen;
  Questions: Array<WalkMeDataQuizQuestion>;
  Settings: {
    isQuizResults: BooleanStringOption;
    // check data type
    isLimited: BooleanStringOption;
    randQuestions: BooleanStringOption;
    randAnswers: BooleanStringOption;
  };
};

export type WalkMeDataQuizScreen = {
  Id: number;
  Title: string;
  Description: string;
  ButtonText: string;
};

export type WalkMeDataQuizQuestion = {
  Id: 9941;
  /**
   * The question text
   */
  Question: string;
  Description: string;
  QuestionType: QuestionType;
  Answers: Array<WalkMeDataQuizAnswer>;
  Explanation?: string;
  Settings: {
    hasExplanation: BooleanStringOption;
  };
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
