import React from 'react'
import { MainArea, RecipeContainer } from './recipeDetailedStyle'

import Header from '../header-footer/Header'
import RecipeStage from './RecipeStage'
import IngredientList from './IngredientsList'
import ShortDescription from './ShortDescription'
import Notes from './Notes'
import Footer from '../header-footer/Footer'

import IconPieList from '../images/IconPieList.png'

export default function RecipeDetailedPage({ recipe, id }) {
  return (
    <>
      <Header title={recipe.recipeName} />
      <MainArea>
        <RecipeContainer>
          <RecipeStage recipe={recipe} />
          <IngredientList recipe={recipe} />
          <ShortDescription recipe={recipe} />
          <Notes id={id} />
        </RecipeContainer>
      </MainArea>
      <Footer srcPieList={IconPieList} />
    </>
  )
}
