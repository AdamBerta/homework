import { questionsActions } from "./questions-slice";
import type { QuestionListType } from "./questions-slice";
import type { AppDispatch } from "./store";

export const fetchQuestions = (numberOfQuestions: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(questionsActions.setLoading(true));
    const fetchData = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=hard&type=boolean`
      );

      if (!response.ok) {
        throw new Error("Could not fetch questions");
      }

      const data = await response.json();

      return data;
    };

    try {
      const response = await fetchData();
      const questionList: QuestionListType = Object.values(response.results);
      console.log(questionList);
      dispatch(questionsActions.setQuestions({ questionList }));
      dispatch(questionsActions.setLoading(false));
    } catch (error) {
      dispatch(questionsActions.setLoading(false));
      console.log("Error");
    }
  };
};
