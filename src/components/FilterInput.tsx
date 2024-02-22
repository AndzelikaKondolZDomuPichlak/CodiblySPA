import React, { useState, useEffect } from 'react';
import { FilterInputProps } from '../types/types';

const FilterInput: React.FC<FilterInputProps> = ({ onFilterChange, totalItems }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      const numericValue = Number(inputValue);
      if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= totalItems) {
        onFilterChange(numericValue);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue, onFilterChange, totalItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && (!value || (Number(value) >= 1 && Number(value) <= totalItems))) {
      setInputValue(value);
    }
  };

  return (
    <input
      className='list__filter'
      type="text"
      placeholder="Filter by ID"
      value={inputValue}
      onChange={handleChange}
      pattern="\d*"
      title="Please enter a number between 1 and the total number of items"
    />
  );
};

export default FilterInput;
