import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarText } from 'reactstrap';
import { parseDate } from '../utils/helpers';

const Header = () => {
  return (
    <Navbar color='dark' dark expand='md' light>
      <Link to='/' className='text-white text-decoration-none fs-4'>
        Home
      </Link>
      <NavbarText>{parseDate()}</NavbarText>
    </Navbar>
  );
};

export default Header;
