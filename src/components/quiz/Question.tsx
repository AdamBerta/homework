import htmlDecode from "../../utils/htmlDecode";

const Question: React.FC<{questionText: string | undefined, currentQuestion: number, totalQuestions: number}> = (props) => {
    
    const decodedQuestion = htmlDecode(props.questionText!);

    return (
        <div className="question">
            <div className="questionText">{decodedQuestion}</div>
            <div className="questionNumber">{props.currentQuestion} / {props.totalQuestions}</div>
        </div>
    );
};

export default Question;