import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Organization = () => {
  const { id } = useParams();

  React.useEffect(() => {
    console.log(id);
  }, []);

  return (
    <Row className='m-5'>
      <Col md='4'>
        <Card style={{ borderRadius: '30px' }}>
          <CardImg alt='Card image cap' src='https://picsum.photos/318/180' top width='100%' />
          <CardBody>
            <CardTitle tag='h5'>Card Title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <h2>Organization</h2>
      </Col>
    </Row>
  );
};

export default Organization;
