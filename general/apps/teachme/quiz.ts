import { QuestionType } from '../../data/teachme/Quiz';

export type Quiz = {
  id: number;
  welcomeScreen: QuizScreen;
  failScreen: QuizScreen;
  successScreen: QuizScreen;
  questions: Array<QuizQuestion>;
  properties: QuizProperties;
};

export type QuizProperties = {
  /** number between 0-100 */
  passmark: number;
  /** true if the quiz was completed */
  isCompleted: boolean;
  /** should allow to review results */
  showSummary: boolean;
  /** Courses can be disabled until course items are completed */
  isDisabled: boolean;
};

export type QuizScreen = {
  title: string;
  description: string;
  buttons: Array<Button>;
};

export type Button = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: number;
  title: string;
  description: string;
  type: QuestionType;
  explanation: string;
  answers: Array<QuizAnswer>;
};

export type QuizAnswer = {
  id: number;
  text: string;
  isCorrect: boolean;
};

export interface IQuizSDK {
  id: number;
  data: Quiz;
  submit: (questionId: number, answers: Array<number>) => Promise<void>;
  questions: AsyncIterator<QuizQuestion>;
  getSummary: () => Promise<QuizSummary>;
}

export type QuizSummary = Array<QuestionSummary>;

export type QuestionSummary = {
  question: QuizQuestion;
  answerIds: Array<number>;
};
