import React from 'react'
import RecipeStage from './RecipeStage'
import IngredientList from './IngredientsList'
import ShortDescription from './ShortDescription'
import Notes from './Notes'

export default function RecipeDetailedPage({ recipe, id }) {
  return (
    <div>
      <RecipeStage recipe={recipe} />
      <IngredientList recipe={recipe} />
      <ShortDescription recipe={recipe} />
      <Notes id={id} />
    </div>
  )
}
