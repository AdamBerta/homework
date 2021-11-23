import { useAppDispatch } from "../../hooks/hooks";
import { questionsActions } from "../../store/questions-slice";
import classes from './QuizButtons.module.scss';
import Button from "../UI/Button";

const QuizButtons:React.FC = () => {
    const dispatch = useAppDispatch();
    const quizButtonClickHandler = (answer : string ) => {
        dispatch(questionsActions.validateQuestion({answer}));
    };

    return (
        <div className={classes.QuizButtons}>
            <Button disabled={false} onClickHandler={quizButtonClickHandler.bind(this, "True")}>True</Button>
            <Button disabled={false} onClickHandler={quizButtonClickHandler.bind(this, "False")}>False</Button>
        </div>
    )
};

export default QuizButtons