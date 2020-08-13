/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'components/Button';
import { FilterWrapper } from './styled';

const Filter = ({ selectedFilter, onFilter = () => {} }) => (
  <FilterWrapper>
    <Button
      width="128px"
      enable={selectedFilter.filterValue === 'hot'}
      onClick={() => onFilter({ filterValue: 'hot', force: true })}
    >
      <div>HOT</div>
    </Button>
    <Button
      width="128px"
      enable={selectedFilter.filterValue === 'new'}
      onClick={() => onFilter({ filterValue: 'new', force: true })}
    >
      <div>NEW</div>
    </Button>
    <Button
      width="128px"
      enable={selectedFilter.filterValue === 'rising'}
      onClick={() => onFilter({ filterValue: 'rising', force: true })}
    >
      <div>RISING</div>
    </Button>
  </FilterWrapper>
);

export default Filter;
