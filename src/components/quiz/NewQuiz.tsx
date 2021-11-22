import { useHistory } from "react-router";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { fetchQuestions } from "../../store/questions-actions";

import Button from "../UI/Button";

const NUMBER_OF_QUESTIONS = 10;

const NewQuiz: React.FC = (props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.questions);

  const beginQuiz = async () => {
    if (!loading) {
      await dispatch(fetchQuestions(NUMBER_OF_QUESTIONS));
      history.push("quiz");
    }
  };

  return <Button disabled={loading} onClickHandler={beginQuiz}>{props.children}</Button>;
};

export default NewQuiz;
