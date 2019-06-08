import React from 'react';

import {
  FilterAreaContainer,
  FilterAreaHeader,
  FilterAreaOpen,
  FavFilterButton,
  TagDropdown,
  Arrow,
} from './recipesOverviewStyle';

import ArrowDown from '../images/ArrowDown.svg';
import ArrowUp from '../images/ArrowUp.svg';
//import IconFavoriteActive from '../images/IconFavoriteActive.png';

export default function FilterArea({
  filterSection,
  favFilterStatus,
  dropdownTagList,
  onToggleFilterSection,
  onToggleFavFilterStatus,
  onHandleChange,
}) {
  function getOpenFilterArea() {
    if (filterSection === true) {
      return (
        <FilterAreaOpen>
          <FavFilterButton
            onClick={() => {
              onToggleFavFilterStatus(!favFilterStatus);
            }}
          >
            {favFilterStatus
              ? 'These are your favorites'
              : 'This is a general list'}
          </FavFilterButton>
          <TagDropdown
            options={dropdownTagList}
            onChange={onHandleChange}
            placeholder="Select a tag ..."
          />
        </FilterAreaOpen>
      );
    }
  }
  return (
    <FilterAreaContainer>
      <FilterAreaHeader
        onClick={() => {
          onToggleFilterSection(!filterSection);
        }}
      >
        {filterSection ? (
          <Arrow src={ArrowUp} alt="icon arrow up" />
        ) : (
          <Arrow src={ArrowDown} alt="icon arrow down" />
        )}
      </FilterAreaHeader>
      {getOpenFilterArea()}
    </FilterAreaContainer>
  );
}
