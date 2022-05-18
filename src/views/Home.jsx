import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { get } from '../utils/apiClient';
import { sortByName } from '../utils/helpers';
import SingleItem from '../components/SingleItem';

const Home = () => {
  const [orgs, setOrgs] = React.useState([]);
  const [current, setCurrent] = React.useState(10);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    retrieveOrgs();
  }, [current]);

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  async function retrieveOrgs() {
    const { data } = await get(`/organizations?per_page=${current}`);
    setOrgs(sortByName(data));
  }

  const loadMoreData = () => setCurrent(current + 10);

  return (
    <Container className='my-5'>
      <Row>
        <Col md='4'>
          <h2>GitHub REST API</h2>
          <ListGroup className='home-list'>
            {orgs &&
              orgs.map(org => (
                <SingleItem item={org} key={org.id} selected={selected} setSelected={setSelected} />
              ))}
          </ListGroup>
        </Col>
        <Col className='centering'>
          <Card className='home-card'>
            <img
              alt='Card image cap'
              src={selected ? selected.avatar_url : 'https://picsum.photos/350'}
              top
            />
            {selected && (
              <CardBody>
                <CardTitle tag='h5'>{selected.login}</CardTitle>
                <CardText>{selected.description}</CardText>
                <Link to={`/organization/${selected.login}`}>
                  <Button>More Details</Button>
                </Link>
              </CardBody>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
