import React from 'react'
import ListOfRecipes from './ListOfRecipes'
import { MainArea, ListContainer } from './RecipesOverviewStyle'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import IconPieListActive from '../images/IconPieListActive.png'

export default function RecipesOverviewPage({ recipesList }) {
  return (
    <>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <ListOfRecipes recipesList={recipesList} />
        </ListContainer>
      </MainArea>
      <Footer srcPieList={IconPieListActive} />
    </>
  )
}
