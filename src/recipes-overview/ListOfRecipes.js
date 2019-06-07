import React from 'react';
import { getIndex } from '../utils';
import { Filters } from './Filters';
import SingleRecipeOverview from './SingleRecipeOverview';

export default function ListOfRecipes({
  recipesList,
  favoritesList,
  favFilterStatus,
  tagFilter,
  onToggleFavorite,
}) {
  const filteredRecipeList = Filters(
    recipesList,
    favoritesList,
    favFilterStatus,
    tagFilter
  );

  function getFavoriteStatus(id) {
    const index = getIndex(favoritesList, id);
    return index === -1 ? false : favoritesList[index].status;
  }

  return filteredRecipeList.length > 0 ? (
    <div>
      {filteredRecipeList.map(recipe => (
        <SingleRecipeOverview
          key={recipe._id}
          recipe={recipe}
          favoriteStatus={getFavoriteStatus(recipe._id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  ) : (
    <div>
      <p>You do not have suitable favorites.</p>
      {/*recipesList.map(recipe => (
        <SingleRecipeOverview
          key={recipe._id}
          recipe={recipe}
          favoriteStatus={getFavoriteStatus(recipe._id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))*/}
    </div>
  );
}
