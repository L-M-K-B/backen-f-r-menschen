import React from 'react';

import {
  FilterAreaContainer,
  FilterAreaHeader,
  FilterAreaOpen,
  FavFilterButton,
  TagDropdown,
  Arrow,
  FilterIcon,
  Name,
  NameContainer,
} from './recipesOverviewStyle';

import IconFilter from '../images/IconFilter.svg';
import ArrowDown from '../images/ArrowDown.svg';
import ArrowUp from '../images/ArrowUp.svg';

export default function FilterArea({
  recipesList,
  filterSection,
  favFilterStatus,
  tagFilter,
  onToggleFilterSection,
  onToggleFavFilterStatus,
  onHandleChange,
}) {
  const dropdownTagList = createTagList();

  function createTagList() {
    const everyTag = recipesList
      .map(recipe => recipe.tags)
      .join(',')
      .split(',');
    return getUniqueTags(everyTag);
  }

  function getUniqueTags(everyTag) {
    const uniqueTags = ['no tag selected'];
    everyTag.map(
      element => !uniqueTags.includes(element) && uniqueTags.push(element)
    );
    return uniqueTags;
  }

  function getOpenFilterArea() {
    if (filterSection === true) {
      return (
        <FilterAreaOpen>
          <FavFilterButton
            onClick={() => {
              onToggleFavFilterStatus(!favFilterStatus);
            }}
          >
            {favFilterStatus ? 'All recipes' : 'Favorites only'}
          </FavFilterButton>
          <TagDropdown
            options={dropdownTagList}
            value={tagFilter}
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
        <NameContainer>
          <FilterIcon src={IconFilter} alt="icon filter" />
          <Name>Filters</Name>
        </NameContainer>
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
