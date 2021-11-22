import NewQuiz from "../components/quiz/NewQuiz";
import Headline from "../components/UI/Headline";

const HomeScreen: React.FC = () => {

    return (
        <div id='homescreen'>
            <Headline>Welcome to the Trivia Challenge!</Headline>
            <div>You will be presented with 10 True of False questions.</div>
            <div>Can you score 100%?</div>
            <NewQuiz >BEGIN</NewQuiz>
        </div>
    );
};

export default HomeScreen;