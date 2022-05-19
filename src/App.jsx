import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './views/Home';
import Organization from './views/Organization';
import './assets/styles.css';
import Error404 from './views/Error404';

function App() {
  return (
    <Router basename='/github-organizations'>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/organization/:name'>
            <Organization />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
