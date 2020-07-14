import { QuestionType } from '../../data/teachme/Quiz';

export type BaseQuiz = {
  id: number;
  welcomeScreen: QuizScreen;
  failScreen: QuizScreen;
  successScreen: QuizScreen;
};

export type Quiz = {
  questions: Array<QuizQuestion>;
  properties: QuizProperties;
};

export type BuildQuiz = BaseQuiz & {
  questions: Array<BuildQuizQuestion>;
  properties: BuildQuizProperties;
};

export type BaseQuizProperties = {
  /** number between 0-100 */
  passmark: number;
  /** should allow to review results */
  showSummary: boolean;
};

export type BuildQuizProperties = BaseQuizProperties & {
  /** If set to true, questions will be shuffled */
  randQuestions: boolean;
  /** If set to true, answers will be shuffled */
  randAnswers: boolean;
  /** If set to true, quiz is only accessible after all course items are completed */
  forceCourseCompletion: boolean;
};

export type QuizProperties = BaseQuizProperties & {
  /** true if the quiz was completed */
  isCompleted: boolean;
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
  explanation?: string;
  answers: Array<QuizAnswer>;
};

export type BuildQuizQuestion = QuizQuestion & {
  properties?: BuildQuizQuestionSettings;
};

export type BuildQuizQuestionSettings = { hasExplanation?: boolean };

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
