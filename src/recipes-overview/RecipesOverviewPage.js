import React from 'react'
import ListOfRecipes from './ListOfRecipes'
import { MainArea, ListContainer } from './recipesOverviewStyle'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import IconPieListActive from '../images/IconPieListActive.png'

export default function RecipesOverviewPage({ recipesList, onToggleFavorite }) {
  return (
    <>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <ListOfRecipes
            recipesList={recipesList}
            onToggleFavorite={onToggleFavorite}
          />
        </ListContainer>
      </MainArea>
      <Footer srcIconPieList={IconPieListActive} />
    </>
  )
}
