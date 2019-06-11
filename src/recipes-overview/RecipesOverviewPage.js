import React from 'react';

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
  filterSection,
  favFilterStatus,
  tagFilter,
  dropdownTagList,
  onToggleFilterSection,
  onToggleFavFilterStatus,
  onHandleChange,
  onToggleFavorite,
}) {
  return (
    <GridOverview>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <FilterAreaComponent
            filterSection={filterSection}
            favFilterStatus={favFilterStatus}
            tagFilter={tagFilter}
            dropdownTagList={dropdownTagList}
            onToggleFilterSection={onToggleFilterSection}
            onToggleFavFilterStatus={onToggleFavFilterStatus}
            onHandleChange={onHandleChange}
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
