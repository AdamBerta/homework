import { Fragment } from "react";
import { useAppSelector } from "../hooks/hooks";
import { Redirect } from "react-router";
import Headline from "../components/UI/Headline";
import Question from "../components/quiz/Question";
import QuizButtons from "../components/quiz/QuizButtons";
import EmptyQuiz from "../components/quiz/EmptyQuiz";
import CenterBox from "../components/UI/CenterBox";

const Quiz: React.FC = () => {
  const { currentQuestionIndex, totalQuestions, done } = useAppSelector(
    (state) => state.questions
  );
  const question = useAppSelector(
    (state) => state.questions.questionList[currentQuestionIndex]
  );

  if (!question.question) {
    return <EmptyQuiz />;
  }

  if (done) {
    return <Redirect to="results" />;
  }

  return (
    <Fragment>
      <Headline>{question.category}</Headline>
      <CenterBox>
        <Question
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          questionText={question.question}
        />
      </CenterBox>
      <QuizButtons />
    </Fragment>
  );
};

export default Quiz;
