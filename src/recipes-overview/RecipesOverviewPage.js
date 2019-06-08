import React from 'react';

import {
  MainArea,
  ListContainer,
  FilterArea,
  FilterAreaOpen,
  FavFilterButton,
  TagDropdown,
  ArrowDown,
} from './recipesOverviewStyle';

import ListOfRecipes from './ListOfRecipes';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

import IconPieListActive from '../images/IconPieListActive.svg';
import IconChef from '../images/IconChef.svg';
//import IconFavoriteActive from '../images/IconFavoriteActive.png';

export default function RecipesOverviewPage({
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
    <>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <FilterArea
            onClick={() => {
              onToggleFilterSection(!filterSection);
            }}
          >
            <ArrowDown>￬</ArrowDown>
          </FilterArea>
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

          <ListOfRecipes
            recipesList={recipesList}
            favoritesList={favoritesList}
            favFilterStatus={favFilterStatus}
            tagFilter={tagFilter}
            onToggleFavorite={onToggleFavorite}
          />
        </ListContainer>
      </MainArea>
      <Footer srcIconPieList={IconPieListActive} srcIconChef={IconChef} />
    </>
  );
}
/*btnLabel={
 */
