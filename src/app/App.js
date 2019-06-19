import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setLocal, getLocal, getRecipes } from '../services';
import { getIndex } from '../utils';

import GlobalStyles from '../common/GlobalStyles';

import RecipesOverviewPage from '../recipes-overview/RecipesOverviewPage';
import RecipeDetailedPage from '../recipes-detailed/RecipeDetailedPage';
import AboutPage from '../about/AboutPage';
import StepByStepPage from '../step-by-step/StepByStepPage';
import Rechner from '../Rechner';

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
    const index = recipesList.map(recipe => recipe._id).indexOf(id);
    const recipe = recipesList[index];
    return recipe;
  }

  return (
    <Router>
      <GlobalStyles />
      <Route
        exact
        path="/"
        render={props => (
          <RecipesOverviewPage
            history={props.history}
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
            history={props.history}
            recipe={getRecipe(props.match.params.id, recipesList)}
            favoritesList={favorites}
            id={props.match.params.id}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      />
      <Route
        path="/about"
        render={props => <AboutPage history={props.history} />}
      />
      <Route
        path="/step-by-step/:id"
        render={props => (
          <StepByStepPage
            history={props.history}
            recipe={getRecipe(props.match.params.id, recipesList)}
          />
        )}
      />
    </Router>
  );
}
