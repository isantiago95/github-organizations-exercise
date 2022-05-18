import React from 'react';
import { ListGroupItem } from 'reactstrap';

const SingleItem = ({ item, selected, setSelected }) => {
  return (
    <ListGroupItem
      action
      tag='button'
      active={Boolean(selected && selected === item)}
      onClick={() => setSelected(item)}>
      <img style={{ width: '2.5em' }} src={item.avatar_url} alt={item.login} />{' '}
      <strong>{item.login}</strong>
    </ListGroupItem>
  );
};

export default SingleItem;
