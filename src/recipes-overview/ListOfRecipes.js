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

  const availabilityOfFavorites = favoritesList.some(
    favorite => favorite.status === true
  );

  const listRendering = (
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
  );

  function getFavoriteStatus(id) {
    const index = getIndex(favoritesList, id);
    return index === -1 ? false : favoritesList[index].status;
  }

  function getReturn() {
    if (filteredRecipeList.length > 0 && favFilterStatus === false) {
      return listRendering;
    } else if (
      filteredRecipeList.length > 0 &&
      availabilityOfFavorites === false &&
      favFilterStatus === true
    ) {
      return <p>You do not have any favorites yet.</p>;
    } else if (favFilterStatus === true && tagFilter === 'No tag selection') {
      return listRendering;
    } else {
      return <p>You do not have suitable favorites.</p>;
    }
  }

  return getReturn();
}
