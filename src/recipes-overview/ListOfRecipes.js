import React from 'react';
import { getIndex } from '../utils';
import SingleRecipeOverview from './SingleRecipeOverview';

/*function filterFavorites(filter, recipesList){
  const rIdList = recipesList.map(recipe => recipe._id);
  const 
  return filter==='favorite'? 
}*/

export default function ListOfRecipes({
  recipesList,
  favoritesList,
  onToggleFavorite,
}) {
  function getFavoriteStatus(id) {
    const index = getIndex(favoritesList, id);
    console.log('2', index);
    return favoritesList[index].status;
  }
  return (
    <div>
      {recipesList.map(recipe => (
        <SingleRecipeOverview
          key={recipe._id}
          recipe={recipe}
          favoriteStatus={getFavoriteStatus(recipe._id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
