import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Organization from './views/Organization';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/organization/:id'>
            <Organization />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
