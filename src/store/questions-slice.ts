import { createSlice } from "@reduxjs/toolkit";

export type QuestionListType = {
  category?: string;
  type?: string;
  difficulty?: string;
  question?: string;
  correct_answer?: string;
  correct?: boolean | null;
}[];
type SliceState = {
  totalQuestions: number;
  correctAnswers: number;
  currentQuestionIndex: number;
  questionList: QuestionListType;
  done: boolean;
  loading: boolean;
};

const initialState: SliceState = {
  totalQuestions: 1,
  correctAnswers: 0,
  currentQuestionIndex: 0,
  questionList: [{}],
  done: false,
  loading: false,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, action) {
      return {
        questionList: action.payload.questionList,
        totalQuestions: action.payload.questionList.length,
        currentQuestionIndex: 0,
        done: false,
        correctAnswers: 0,
        loading: state.loading,
      };
    },
    validateQuestion(state, action) {
      const currentIndex = state.currentQuestionIndex;
      const currentQuestion = state.questionList[currentIndex];
      if (action.payload.answer === currentQuestion.correct_answer) {
        currentQuestion.correct = true;
        state.correctAnswers++;
      } else {
        currentQuestion.correct = false;
      }
      if (state.currentQuestionIndex < state.totalQuestions - 1) {
        state.currentQuestionIndex++;
      } else {
        state.done = true;
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice;
