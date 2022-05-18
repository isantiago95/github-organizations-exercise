import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'reactstrap';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { get } from '../utils/apiClient';
import SingleItem from '../components/SingleItem';

const Home = () => {
  const [orgs, setOrgs] = React.useState([]);
  const [current, setCurrent] = React.useState(10);

  React.useEffect(() => {
    retrieveOrgs();
  }, [current]);

  async function retrieveOrgs() {
    const { data } = await get(`/organizations?per_page=${current}`);
    console.log(data);
    setOrgs(data.sort((a, b) => (a.login > b.login ? 1 : -1)));
  }

  const loadMoreData = () => setCurrent(current + 10);

  return (
    <Container className='my-5'>
      <Row>
        <Col>
          <h2>GitHub REST API</h2>
          <ListGroup>{orgs && orgs.map(org => <SingleItem item={org} key={org.id} />)}</ListGroup>
          <Button color='primary' className='my-3' onClick={loadMoreData}>
            Load More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
