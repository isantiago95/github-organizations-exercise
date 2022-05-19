import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import Home from './views/Home';
import Organization from './views/Organization';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar color='dark' dark expand='md' light>
        <Link to='/' className='text-white text-decoration-none fs-4'>
          Home
        </Link>
      </Navbar>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/organization/:name'>
          <Organization />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
