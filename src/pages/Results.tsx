import { useAppSelector } from "../hooks/hooks";
import { useHistory } from "react-router";
import htmlDecode from "../utils/htmlDecode";
import Headline from "../components/UI/Headline";
import Button from "../components/UI/Button";
import EmptyQuiz from "../components/quiz/EmptyQuiz";

const Results: React.FC = () => {
  const history = useHistory();
  const { correctAnswers, questionList, done, totalQuestions } = useAppSelector(
    (state) => state.questions
  );

  const playAgain = () => {
    history.push("/");
  };

  if (!questionList[0].question) {
    return (
          <EmptyQuiz />
    );
  }

  if (!done) {
    return <Headline>You have not answered all questions!</Headline>;
  }

  return (
    <div id="results">
      <Headline>
        You scored
        <br />
        {`${correctAnswers} / ${totalQuestions}`}
      </Headline>
      <ul>
        {questionList.map((item, index) => (
          <li
            key={index}
            className={item.correct ? "answer-correct" : "answer-incorrect"}
          >
            {htmlDecode(item.question!)} - {item.correct_answer}
          </li>
        ))}
      </ul>
      <Button disabled={false} onClickHandler={playAgain}> Play again? </Button>
    </div>
  );
};

export default Results;
