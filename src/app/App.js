import React from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
//import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import RecipesOverviewPage from '../recipes-overview/RecipesOverviewPage'

/*const Grid = styled.div`
  display: grid;
`*/

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <h1>Liste</h1>
      <main>
        <RecipesOverviewPage />
      </main>
    </div>
  )
}

// <Route exact path="/" render={() => <h1>Home</h1>} />
/* //<Router>
     
        
    //</Router> */
