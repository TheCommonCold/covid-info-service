import TopBar from './components/TopBar'
import Restrictions from './components/restrictions/Restrictions'
import Statistics from './components/statistics/Statistics'
import Landing from './components/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/restrictions">
          <Restrictions />
        </Route>
        <Route path="/statistics">
          {/* <Statistics /> */}
          <Landing />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
