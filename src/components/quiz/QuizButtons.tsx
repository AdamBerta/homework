import { useAppDispatch } from "../../hooks/hooks";
import { questionsActions } from "../../store/questions-slice";
import Button from "../UI/Button";

const QuizButtons:React.FC = () => {
    const dispatch = useAppDispatch();
    const quizButtonClickHandler = (answer : string ) => {
        dispatch(questionsActions.validateQuestion({answer}));
    };

    return (
        <div>
            <Button disabled={false} onClickHandler={quizButtonClickHandler.bind(this, "True")}>True</Button>
            <Button disabled={false} onClickHandler={quizButtonClickHandler.bind(this, "False")}>False</Button>
        </div>
    )
};

export default QuizButtons