import { Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  return (
    <div className='game'>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="*">
          <p>Not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
