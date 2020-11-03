import ReactGA from 'react-ga';
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
  ReactGA.initialize('G-XKCGLLTPXT');
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  })
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/restrictions">
          <Restrictions />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
