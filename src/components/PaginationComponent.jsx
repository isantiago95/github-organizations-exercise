import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationComponent = ({ page, pages, onChange }) => (
  <Pagination className='my-5' size='sm'>
    <PaginationItem disabled={page === 0}>
      <PaginationLink onClick={() => onChange(page - 1)} previous />
    </PaginationItem>

    {[...Array(pages).keys()].map(item => (
      <PaginationItem key={item} active={item === page}>
        <PaginationLink onClick={() => onChange(item)}>{item + 1}</PaginationLink>
      </PaginationItem>
    ))}

    <PaginationItem>
      <PaginationLink disabled={page === pages - 1} onClick={() => onChange(page + 1)} next />
    </PaginationItem>
  </Pagination>
);

export default PaginationComponent;
