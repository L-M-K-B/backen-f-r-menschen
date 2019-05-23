import React from 'react'
import ListOfRecipes from './ListOfRecipes'

export default function RecipesOverviewPage({ recipesList }) {
  return <ListOfRecipes recipesList={recipesList} />
}
