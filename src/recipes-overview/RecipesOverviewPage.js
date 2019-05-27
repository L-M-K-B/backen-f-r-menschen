import React from 'react'
import ListOfRecipes from './ListOfRecipes'
import { RecipesOverviewPageStyle } from './RecipesOverviewStyle'

export default function RecipesOverviewPage({ recipesList }) {
  return (
    <RecipesOverviewPageStyle>
      <ListOfRecipes recipesList={recipesList} />
    </RecipesOverviewPageStyle>
  )
}
