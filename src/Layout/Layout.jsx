import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col className='p-0'>
          <Header />
          {children}
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
