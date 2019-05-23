import React, { useState, useEffect } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setLocal, getLocal } from '../services'

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

  return (
    <div>
      <GlobalStyles />
      <main>
        <RecipeDetailedPage recipesList={recipesList} />
        <RecipesOverviewPage recipesList={recipesList} />
      </main>
    </div>
  )
}

// <Route exact path="/" render={() => <h1>Home</h1>} />
/* //<Router>
     
        
    //</Router> */
