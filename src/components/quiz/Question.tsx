import { Fragment } from "react";
import htmlDecode from "../../utils/htmlDecode";
import classes from './Question.module.scss';

const Question: React.FC<{questionText: string | undefined, currentQuestion: number, totalQuestions: number}> = (props) => {
    
    const decodedQuestion = htmlDecode(props.questionText!);

    return (
        <Fragment>
            <div className={classes.questionText}>{decodedQuestion}</div>
            <div className={classes.numbers}>{props.currentQuestion} / {props.totalQuestions}</div>
        </Fragment>
    );
};

export default Question;