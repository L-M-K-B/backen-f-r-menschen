import React from 'react';
import { getIndex } from '../utils';
import SingleRecipeOverview from './SingleRecipeOverview';

export default function ListOfRecipes({
  recipesList,
  favoritesList,
  favFilterStatus,
  onToggleFavorite,
}) {
  function filterFavRecipes() {
    if (favFilterStatus === true) {
      const actualFavorites = favoritesList.map(favorite => {
        if (favorite.status === true) {
          return favorite.id;
        }
      });
      const filteredRecipes = recipesList.filter(
        recipe => actualFavorites.includes(recipe._id) === true
      );
      if (filteredRecipes.length > 0) {
        return filteredRecipes.map(recipe => (
          <SingleRecipeOverview
            key={recipe._id}
            recipe={recipe}
            favoriteStatus={getFavoriteStatus(recipe._id)}
            onToggleFavorite={onToggleFavorite}
          />
        ));
      } else {
        return <p>You do not have any favorites yet.</p>;
      }
    } else {
      return recipesList.map(recipe => (
        <SingleRecipeOverview
          key={recipe._id}
          recipe={recipe}
          favoriteStatus={getFavoriteStatus(recipe._id)}
          onToggleFavorite={onToggleFavorite}
        />
      ));
    }
  }

  function getFavoriteStatus(id) {
    const index = getIndex(favoritesList, id);
    return index === -1 ? false : favoritesList[index].status;
  }
  return <div>{filterFavRecipes()}</div>;
}
