import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setLocal /*, getLocal*/ } from '../services'

//import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'

import mockdata from '../mockdata'
import RecipesOverviewPage from '../recipes-overview/RecipesOverviewPage'
import RecipeDetailedPage from '../recipes-detailed/RecipeDetailedPage'

/*const Grid = styled.div`
  display: grid;
`*/

export default function App() {
  const [recipesList, setRecipesList] = useState(
    /*getLocal('recipesList') ||*/ mockdata.recipesList || []
  )

  useEffect(() => {
    setLocal('recipesList', recipesList)
  }, [recipesList])

  const handleSave = notes => {
    /* setLocal(`${id}Notes`, notes), [notes]*/
  }

  return (
    <Router>
      <div>
        <GlobalStyles />
        <main>
          <Route
            exact
            path="/"
            render={() => <RecipesOverviewPage recipesList={recipesList} />}
          />
          <Route
            path="/recipeDetailed/:id"
            render={props => (
              <RecipeDetailedPage
                recipesList={recipesList}
                id={props.match.params.id}
                onSave={notes => handleSave(notes)}
              />
            )}
          />
        </main>
      </div>
    </Router>
  )
}
