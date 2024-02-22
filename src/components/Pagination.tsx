import React from 'react';
import { PaginationProps } from '../types/types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='list__pagination'>
      <button className='list__button' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
        Prev
      </button>
      <span> {currentPage} / {totalPages} </span>
      <button className='list__button' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
