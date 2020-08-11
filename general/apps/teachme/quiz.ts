import { QuestionType } from '../../data/teachme/quiz';
import { TypeContainer } from '..';

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
  questions: TypeContainer<BuildQuizQuestion, any>;
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
  /** If set to true the quiz will be available in the runtime environment */
  isEnabled: boolean;
};

export type QuizProperties = BaseQuizProperties & {
  /** true if the quiz was completed */
  isCompleted: boolean;
  /** Courses can be disabled until course items are completed */
  isDisabled: boolean;
};

export type QuizScreen = {
  id?: number;
  title: string;
  description: string;
  buttons: Array<Button>;
};

export type Button = {
  id: string;
  text: string;
};

export type BaseQuizQuestion = {
  id: number;
  title: string;
  description: string;
  type: QuestionType;
  explanation?: string;
};

export type QuizQuestion = BaseQuizQuestion & {
  answers: Array<QuizAnswer>;
};

export type NewAnswerData = {
  text?: string;
  isCorrect?: boolean;
};

export type NewQuestionData = {
  text?: string;
  description?: boolean;
};

export type BuildQuizQuestion = BaseQuizQuestion & {
  answers: TypeContainer<QuizAnswer, NewQuestionData>;
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
