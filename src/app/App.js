import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setLocal /*, getLocal*/ } from '../services'

import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'

import mockdata from '../mockdata'
import RecipesOverviewPage from '../recipes-overview/RecipesOverviewPage'
import RecipeDetailedPage from '../recipes-detailed/RecipeDetailedPage'
import Header from '../header-footer/Header'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  height: 100vh;
`
const MainArea = styled.main`
  grid-row: 2;
  overflow: hidden;
  overflow-y: scroll;
`

export default function App() {
  const [recipesList, setRecipesList] = useState(
    /*getLocal('recipesList') ||*/ mockdata.recipesList || []
  )

  useEffect(() => {
    setLocal('recipesList', recipesList)
  }, [recipesList])

  function getRecipe(id, recipesList) {
    const index = recipesList.map(recipe => recipe.id).indexOf(id)
    const recipe = recipesList[index]
    return recipe
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header title="List of Recipes" />
              <MainArea>
                <RecipesOverviewPage recipesList={recipesList} />
              </MainArea>
            </>
          )}
        />
        <Route
          path="/recipe/:id"
          render={props => (
            <>
              <Header
                title={getRecipe(props.match.params.id, recipesList).recipeName}
              />
              <MainArea>
                <RecipeDetailedPage
                  recipe={getRecipe(props.match.params.id, recipesList)}
                  id={props.match.params.id}
                />
              </MainArea>
            </>
          )}
        />
      </Grid>
    </Router>
  )
}

//  <MainArea> </MainArea>
