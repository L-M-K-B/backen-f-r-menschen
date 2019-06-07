import React from 'react';

import {
  MainArea,
  ListContainer,
  FilterSection,
  FavFilterButton,
  TagDropdown,
} from './recipesOverviewStyle';

import ListOfRecipes from './ListOfRecipes';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

import IconPieListActive from '../images/IconPieListActive.png';
import IconChef from '../images/IconChef.png';
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
          <div
            onClick={() => {
              onToggleFilterSection(!filterSection);
            }}
          >
            <FilterSection>
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
                placeholder="Select a tag name"
              />
            </FilterSection>
          </div>
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
