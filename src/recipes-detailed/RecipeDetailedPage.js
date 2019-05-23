import React from 'react'
import RecipeStage from './RecipeStage'
import IngredientList from './IngredientsList'
import ShortDescription from './ShortDescription'
import Notes from './Notes'

export default function RecipeDetailedPage({ recipesList, id, onSave }) {
  function getRecipe() {
    const index = recipesList.map(recipe => recipe.id).indexOf(id)
    const recipe = recipesList[index]
    return recipe
  }

  return (
    <div>
      <h2>RecipeDetailedPage</h2>
      <RecipeStage recipe={getRecipe()} />
      <IngredientList recipe={getRecipe()} />
      <ShortDescription recipe={getRecipe()} />
      <Notes onSave={onSave} />
    </div>
  )
}
