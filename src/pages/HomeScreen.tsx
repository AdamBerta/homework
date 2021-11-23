import { Fragment } from "react";
import NewQuiz from "../components/quiz/NewQuiz";
import CenterBox from "../components/UI/CenterBox";
import Headline from "../components/UI/Headline";
import classes from './HomeScreen.module.scss';

const HomeScreen: React.FC = () => {
  return (
    <Fragment>
      <Headline>Welcome to the Trivia Challenge!</Headline>
      <CenterBox>
        <div className={classes.upperText}>You will be presented with 10 True of False questions.</div>
        <div>Can you score 100%?</div>
      </CenterBox>
      <NewQuiz>BEGIN</NewQuiz>
    </Fragment>
  );
};

export default HomeScreen;
