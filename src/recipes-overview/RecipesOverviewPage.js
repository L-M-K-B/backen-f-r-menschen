import React from 'react';
import {
  MainArea,
  ListContainer,
  FilterSection,
  FButton,
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
  favFilterStatus,
  onToggleFavFilterStatus,
  onToggleFavorite,
}) {
  return (
    <>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <FilterSection>
            <FButton
              onClick={() => {
                onToggleFavFilterStatus(!favFilterStatus);
              }}
            >
              {favFilterStatus
                ? 'These are your favorites'
                : 'This is a general list'}
            </FButton>
          </FilterSection>
          <ListOfRecipes
            recipesList={recipesList}
            favoritesList={favoritesList}
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
