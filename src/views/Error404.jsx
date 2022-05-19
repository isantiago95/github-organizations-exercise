import React from 'react';
import { Row, Col } from 'reactstrap';
import Meme from '../assets/meme-thinking.gif';

const Error404 = () => {
  return (
    <Row className='h-100 pt-5 m-auto'>
      <Col className='text-center mt-5'>
        <h1>Oops! Are you trying to break this?</h1>
        <img className='my-5 errorImage' src={Meme} alt="Did you think I wouldn't think this?" />
        <p>I don't think so... (or at least I don't hope so) 😂</p>
      </Col>
    </Row>
  );
};

export default Error404;
