import Headline from "../UI/Headline";
import NewQuiz from "./NewQuiz";
const EmptyQuiz: React.FC = () => {
  return (
    <div>
      <Headline>You have not started the quiz yet!</Headline>
      <NewQuiz>Start the quiz</NewQuiz>
    </div>
  );
};

export default EmptyQuiz;
