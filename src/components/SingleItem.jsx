import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';

const SingleItem = ({ item, key }) => {
  return (
    <Link to={`/organization/${item.login}`}>
      <ListGroupItem key={key} action tag='button'>
        <ListGroupItemHeading>
          <img style={{ width: '2em' }} src={item.avatar_url} alt={item.login} />
        </ListGroupItemHeading>
        <ListGroupItemText tag='div'>
          <h5>{item.login}</h5>
          {item.description}
        </ListGroupItemText>
      </ListGroupItem>
    </Link>
  );
};

export default SingleItem;
