import React from 'react';
import { getIndex } from '../utils';
import SingleRecipeOverview from './SingleRecipeOverview';

export default function ListOfRecipes({
  recipesList,
  favoritesList,
  favFilterStatus,
  tagFilter,
  onToggleFavorite,
}) {
  function filterFavRecipes() {
    if (favFilterStatus === true) {
      const actualFavorites = favoritesList.map(favorite => {
        if (favorite.status === true) {
          return favorite.id;
        }
      });
      const filteredFavRecipes = recipesList.filter(
        recipe => actualFavorites.includes(recipe._id) === true
      );
      if (filteredFavRecipes.length > 0) {
        return filteredFavRecipes.map(recipe => (
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
      if (tagFilter !== 'No tag selection') {
        const filteredTagRecipes = [];
        recipesList.map(recipe => {
          if (recipe.tags.includes(tagFilter) === true) {
            filteredTagRecipes.push(recipe);
          }
        });
        return filteredTagRecipes.map(recipe => (
          <SingleRecipeOverview
            key={recipe._id}
            recipe={recipe}
            favoriteStatus={getFavoriteStatus(recipe._id)}
            onToggleFavorite={onToggleFavorite}
          />
        ));
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
  }

  function getFavoriteStatus(id) {
    const index = getIndex(favoritesList, id);
    return index === -1 ? false : favoritesList[index].status;
  }
  return <div>{filterFavRecipes()}</div>;
}
