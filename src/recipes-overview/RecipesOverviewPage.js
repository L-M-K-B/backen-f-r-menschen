import React from 'react'
import ListOfRecipes from './ListOfRecipes'

export default function RecipesOverviewPage({ recipesList }) {
  return (
    <div>
      <h2>Liste</h2>
      <ListOfRecipes recipesList={recipesList} />
    </div>
  )
}
