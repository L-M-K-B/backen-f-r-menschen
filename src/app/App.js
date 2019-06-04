import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setLocal, getLocal, getRecipes } from '../services';
import { getIndex } from '../utils';

import styled from 'styled-components';
import GlobalStyles from '../misc/GlobalStyles';

import RecipesOverviewPage from '../recipes-overview/RecipesOverviewPage';
import RecipeDetailedPage from '../recipes-detailed/RecipeDetailedPage';
import AboutPage from '../about/AboutPage';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  height: 100vh;
`;

export default function App() {
  const [recipesList, setRecipesList] = useState(getLocal('recipesList') || []);
  const [favorites, setFavorites] = useState(getLocal('favoritesList') || []);

  useEffect(() => {
    getRecipes()
      .then(data => {
        setRecipesList(data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setLocal('recipesList', recipesList);
  }, [recipesList]);

  useEffect(() => {
    setLocal('favoritesList', favorites);
    setFavorites(favorites);
  }, [favorites]);

  function handleToggleFavorite(id, favoriteStatus) {
    const index = getIndex(favorites, id);
    if (index === -1) {
      setFavorites(() => [...favorites, { id: id, status: favoriteStatus }]);
    } else {
      setFavorites(() => [
        ...favorites.slice(0, index),
        { id: id, status: favoriteStatus },
        ...favorites.slice(index + 1),
      ]);
      setLocal('favoritesList', favorites);
    }
  }

  function getRecipe(id, recipesList) {
    const indexArray = recipesList.map(recipe => recipe._id);
    const index = indexArray.indexOf(id);
    const recipe = recipesList[index];
    return recipe;
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Route
          exact
          path="/"
          render={() => (
            <RecipesOverviewPage
              recipesList={recipesList}
              favoritesList={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        />
        <Route
          path="/recipe/:id"
          render={props => (
            <RecipeDetailedPage
              recipe={getRecipe(props.match.params.id, recipesList)}
              favoritesList={favorites}
              id={props.match.params.id}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        />
        <Route path="/about" component={AboutPage} />
      </Grid>
    </Router>
  );
}

//  <MainArea> </MainArea>
