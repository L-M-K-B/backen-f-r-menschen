import React from 'react'
import styled from 'styled-components'
import Header from '../header-footer/Header'
import RecipeStage from './RecipeStage'
import IngredientList from './IngredientsList'
import ShortDescription from './ShortDescription'
import Notes from './Notes'
import Footer from '../header-footer/Footer'
import IconPieList from '../images/IconPieList.png'

const MainArea = styled.main`
  grid-row: 2;
  overflow: hidden;
  overflow-y: scroll;
`
const RecipeContainer = styled.div``

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
