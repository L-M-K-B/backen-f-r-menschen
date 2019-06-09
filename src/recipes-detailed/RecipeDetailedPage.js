import React from 'react';
import { MainArea, RecipeContainer } from './recipeDetailedStyle';
import { getIndex } from '../utils';

import Header from '../header-footer/Header';
import RecipeStage from './RecipeStage';
import IngredientList from './IngredientsList';
import ShortDescription from './ShortDescription';
import Notes from './Notes';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChef from '../images/IconChef.svg';

export default function RecipeDetailedPage({
  history,
  recipe,
  favoritesList,
  id,
  onToggleFavorite,
}) {
  function getFavoriteStatus(id) {
    const index = getIndex(favoritesList, id);
    return index === -1 ? false : favoritesList[index].status;
  }

  return (
    <>
      <Header title={recipe.recipeName} />
      <MainArea>
        <RecipeContainer>
          <RecipeStage
            recipe={recipe}
            favoriteStatus={getFavoriteStatus(recipe._id)}
            onToggleFavorite={onToggleFavorite}
          />
          <IngredientList recipe={recipe} />
          <ShortDescription recipe={recipe} />
          <Notes id={id} />
        </RecipeContainer>
      </MainArea>
      <Footer
        history={history}
        srcIconPieList={IconPieList}
        srcIconChef={IconChef}
      />
    </>
  );
}
