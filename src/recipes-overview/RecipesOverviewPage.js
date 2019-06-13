import React, { useState, useEffect } from 'react';
import { setLocal, getLocal } from '../services';
import { GridOverview, MainArea, ListContainer } from './recipesOverviewStyle';

import FilterAreaComponent from './FilterArea';
import ListOfRecipes from './ListOfRecipes';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

import IconPieListActive from '../images/IconPieListActive.svg';
import IconChef from '../images/IconChef.svg';

export default function RecipesOverviewPage({
  history,
  recipesList,
  favoritesList,
  onToggleFavorite,
}) {
  const [filterSection, setFilterSection] = useState(
    getLocal('filterSection') || false
  );
  const [favFilterStatus, setFavFilterStatus] = useState(
    getLocal('favFilterStatus') || false
  );
  const [tagFilter, setTagFilter] = useState(getLocal('tagFilter') || '');

  useEffect(() => {
    setLocal('filterSection', filterSection);
  }, [filterSection]);
  useEffect(() => {
    setLocal('favFilterStatus', favFilterStatus);
  }, [favFilterStatus]);
  useEffect(() => {
    setLocal('tagFilter', tagFilter);
  }, [tagFilter]);

  function handleToggleFilterSection(newFilterSectionStatus) {
    setFilterSection(newFilterSectionStatus);
  }
  function handleFavFilterStatus(newfavFilterStatus) {
    setFavFilterStatus(newfavFilterStatus);
  }
  function handleTagFilterChange(event) {
    setTagFilter(event.value);
  }

  return (
    <GridOverview>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <FilterAreaComponent
            recipesList={recipesList}
            filterSection={filterSection}
            favFilterStatus={favFilterStatus}
            tagFilter={tagFilter}
            onToggleFilterSection={handleToggleFilterSection}
            onToggleFavFilterStatus={handleFavFilterStatus}
            onHandleChange={handleTagFilterChange}
          />
          <ListOfRecipes
            recipesList={recipesList}
            favoritesList={favoritesList}
            favFilterStatus={favFilterStatus}
            tagFilter={tagFilter}
            onToggleFavorite={onToggleFavorite}
          />
        </ListContainer>
      </MainArea>
      <Footer
        history={history}
        srcIconPieList={IconPieListActive}
        srcIconChef={IconChef}
      />
    </GridOverview>
  );
}
