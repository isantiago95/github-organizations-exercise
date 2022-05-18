import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './views/Home';
import Organization from './views/Organization';

function App() {
  return (
    <Router>
      <Navbar color='dark' dark expand='md' full light>
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
