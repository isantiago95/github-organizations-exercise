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
import { useImmerReducer } from 'use-immer';
import { get } from '../utils/apiClient';
import { sortByName } from '../utils/helpers';
import SingleItem from '../components/SingleItem';
import PaginationComponent from '../components/PaginationComponent';

const ORGANIZATIONS = 100;
const PER_PAGE = 10;

const initialState = {
  orgs: [],
  page: 0,
  selected: null,
};

function reducer(draft, action) {
  switch (action.type) {
    case 'retrieveOrgs': {
      draft.orgs = action.payload;
      return;
    }
    case 'selectOrg': {
      draft.selected = action.payload;
      return;
    }
    case 'changePage': {
      draft.page = action.payload;
      return;
    }
    default:
      return;
  }
}

const Home = () => {
  const [{ orgs, page, selected }, dispatch] = useImmerReducer(reducer, initialState);

  React.useEffect(() => {
    retrieveOrgs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function retrieveOrgs() {
    const { data } = await get(`/organizations?per_page=${ORGANIZATIONS}`);
    const result = new Array(Math.ceil(sortByName(data).length / PER_PAGE))
      .fill()
      .map(_ => sortByName(data).splice(0, PER_PAGE));
    dispatch({ type: 'retrieveOrgs', payload: result });
  }

  const setSelected = item =>
    dispatch({
      type: 'selectOrg',
      payload: item,
    });

  const changePage = page => dispatch({ type: 'changePage', payload: page });

  const renderListGroup = React.useCallback(() => {
    return (
      <ListGroup className='home-list'>
        {orgs.length > 0 &&
          orgs[page].map(org => (
            <SingleItem item={org} key={org.id} selected={selected} setSelected={setSelected} />
          ))}
      </ListGroup>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orgs.length, page]);

  return (
    <Container className='my-5'>
      <Row>
        <Col md='4'>
          <h2>GitHub REST API</h2>
          {renderListGroup()}
          <PaginationComponent page={page} pages={orgs.length} onChange={changePage} />
        </Col>
        <Col className='centering'>
          <Card className='home-card'>
            <img
              alt='user avatar'
              src={selected ? selected.avatar_url : 'https://picsum.photos/350'}
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
