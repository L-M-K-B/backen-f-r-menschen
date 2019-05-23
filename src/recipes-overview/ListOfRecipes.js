import React from 'react'
import SingleRecipeOverview from './SingleRecipeOverview'

export default function ListOfRecipes({ recipesList }) {
  return (
    <div>
      {recipesList.map(recipe => (
        <SingleRecipeOverview key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
