import React from 'react';
import SingleRecipeOverview from './SingleRecipeOverview';

export default function ListOfRecipes({ recipesList, onToggleFavorite }) {
  return (
    <div>
      {recipesList.map(recipe => (
        <SingleRecipeOverview
          key={recipe._id}
          recipe={recipe}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
