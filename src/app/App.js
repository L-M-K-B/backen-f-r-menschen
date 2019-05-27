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
  grid-template-rows: 55px 1fr 65px;
  height: 100vh;
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
          render={() => <RecipesOverviewPage recipesList={recipesList} />}
        />
        <Route
          path="/recipe/:id"
          render={props => (
            <RecipeDetailedPage
              recipe={getRecipe(props.match.params.id, recipesList)}
              id={props.match.params.id}
            />
          )}
        />
      </Grid>
    </Router>
  )
}

//  <MainArea> </MainArea>
