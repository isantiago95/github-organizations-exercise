import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Envelope from '../assets/envelope-icon.svg';
import Whatsapp from '../assets/whatsapp-icon.svg';
import Github from '../assets/github-icon.svg';
import Linkedin from '../assets/linkedin-icon.svg';

const Footer = () => (
  <Container fluid className='footer text-center py-2'>
    <Row>
      <Col>
        <ul
          className='d-flex justify-content-around align-items-center m-0'
          style={{ listStyle: 'none' }}>
          <li>
            <a href='https://wa.link/skw3rt' target='_blank' rel='noopener noreferrer'>
              <img src={Whatsapp} alt='whatsapp' /> 664 176 4359
            </a>
          </li>
          <li>
            <a
              href='mailto:israel.santiago4359@gmail.com'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={Envelope} alt='mail' /> israel.santiago4359@gmail.com
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/isantiago95/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={Linkedin} alt='linkedin' /> /in/isantiago95/
            </a>
          </li>
          <li>
            <h6 className='mb-0'>
              <a href='https://github.com/isantiago95' target='_blank' rel='noopener noreferrer'>
                <img src={Github} alt='github' /> /isantiago95
              </a>
            </h6>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default Footer;
