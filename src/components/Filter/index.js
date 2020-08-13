import React from "react";
import { FilterWrapper, FilterButton } from "./styled";

const Filter = ({ selectedFilter, onFilter = () => {} }) => {
  return (
    <FilterWrapper>
      <FilterButton
        enable={selectedFilter.filterValue === "hot" ? true : false}
        onClick={() => onFilter({ filterValue: "hot", force: true })}
      >
        <div>HOT</div>
      </FilterButton>
      <FilterButton
        enable={selectedFilter.filterValue === "new" ? true : false}
        onClick={() => onFilter({ filterValue: "new" , force: true})}
      >
        <div>NEW</div>
      </FilterButton>
      <FilterButton
        enable={selectedFilter.filterValue === "rising" ? true : false}
        onClick={() => onFilter({ filterValue: "rising", force: true })}
      >
        <div>RISING</div>
      </FilterButton>
    </FilterWrapper>
  );
};

export default Filter;
