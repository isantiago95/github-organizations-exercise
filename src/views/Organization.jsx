import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { get } from '../utils/apiClient';
import { parseDate, parseName, isURL, parseValue } from '../utils/helpers';

const Organization = () => {
  const { name } = useParams();
  const [org, setOrg] = React.useState(null);

  React.useEffect(() => {
    getOrganization(name);
  }, []);

  const getOrganization = async name => {
    const { data } = await get(`/orgs/${name}`);
    setOrg(data);
  };

  return (
    <Row className='m-5'>
      <Col md='4'>
        {org && (
          <React.Fragment>
            <img src={org.avatar_url} alt={org.login} style={{ width: '100%' }} />
            <Card style={{ borderRadius: '30px' }} className='mt-3'>
              <CardBody>
                <CardTitle tag='h5'>{org.name}</CardTitle>
                <CardText>{org.description}</CardText>
                <CardText>{org.blog}</CardText>
                <CardText>Last updated at: {parseDate(org.updated_at)}</CardText>
                <h6>Followers: {org.followers}</h6>
                <h6>Following: {org.following}</h6>
              </CardBody>
            </Card>
          </React.Fragment>
        )}
      </Col>
      <Col>
        <h2>Organization Details</h2>

        {org && (
          <ListGroup>
            {Object.entries(org)
              .map(([name, value]) => ({ name, value }))
              .filter(
                ({ name }) =>
                  name !== 'login' &&
                  name !== 'id' &&
                  name !== 'blog' &&
                  name !== 'node_id' &&
                  name !== 'avatar_url' &&
                  name !== 'description' &&
                  name !== 'name' &&
                  name !== 'followers' &&
                  name !== 'following' &&
                  name !== 'updated_at'
              )
              .map(item => (
                <ListGroupItem>
                  <span className='fw-bold'>{parseName(item.name)}</span>:{' '}
                  {isURL(item.value) ? (
                    <a href={item.value} target='_blank' rel='noopener noreferrer'>
                      {item.value}
                    </a>
                  ) : (
                    parseValue(item.value)
                  )}
                </ListGroupItem>
              ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default Organization;
