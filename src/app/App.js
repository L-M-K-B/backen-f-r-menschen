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
  const [filterSection, setFilterSection] = useState(
    getLocal('filterSection') || false
  );
  const [favFilterStatus, setFavFilterStatus] = useState(
    getLocal('favFilterStatus') || false
  );
  const [tagFilter, setTagFilter] = useState(getLocal('tagFilter') || '');
  const [projectContainer, setProjectContainer] = useState(
    getLocal('projectContainer') || false
  );
  const [conversionContainer, setConversionContainer] = useState(
    getLocal('conversionContainer') || false
  );

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
  useEffect(() => {
    setLocal('filterSection', filterSection);
  }, [filterSection]);
  useEffect(() => {
    setLocal('favFilterStatus', favFilterStatus);
  }, [favFilterStatus]);
  useEffect(() => {
    setLocal('tagFilter', tagFilter);
  }, [tagFilter]);
  useEffect(() => {
    setLocal('projectContainer', projectContainer);
  }, [projectContainer]);
  useEffect(() => {
    setLocal('conversionContainer', conversionContainer);
  }, [conversionContainer]);

  function handleToggleFilterSection(newFilterSectionStatus) {
    setFilterSection(newFilterSectionStatus);
  }

  function handleFavFilterStatus(newfavFilterStatus) {
    setFavFilterStatus(newfavFilterStatus);
  }

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

  const dropdownTagList = createTagList();

  function createTagList() {
    const everyTag = recipesList
      .map(recipe => recipe.tags)
      .join(',')
      .split(',');
    return getUniqueTags(everyTag);
  }

  function getUniqueTags(everyTag) {
    const uniqueTags = ['no tag selected'];
    everyTag.map(
      element => !uniqueTags.includes(element) && uniqueTags.push(element)
    );
    return uniqueTags;
  }

  function handleTagFilterChange(event) {
    setTagFilter(event.value);
  }

  function getRecipe(id, recipesList) {
    const index = recipesList.map(recipe => recipe._id).indexOf(id);
    const recipe = recipesList[index];
    return recipe;
  }

  function handleToggleProjectContainer(newStatus) {
    setProjectContainer(newStatus);
  }

  function handleToggleConversionContainer(newStatus) {
    setConversionContainer(newStatus);
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Route
          exact
          path="/"
          render={props => (
            <RecipesOverviewPage
              history={props.history}
              recipesList={recipesList}
              favoritesList={favorites}
              filterSection={filterSection}
              favFilterStatus={favFilterStatus}
              tagFilter={tagFilter}
              dropdownTagList={dropdownTagList}
              onToggleFilterSection={handleToggleFilterSection}
              onToggleFavFilterStatus={handleFavFilterStatus}
              onHandleChange={handleTagFilterChange}
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
          render={props => (
            <AboutPage
              history={props.history}
              onToggleProjectContainer={handleToggleProjectContainer}
              projectContainer={projectContainer}
              onToggleConversionContainer={handleToggleConversionContainer}
              conversionContainer={conversionContainer}
            />
          )}
        />
      </Grid>
    </Router>
  );
}

//  <MainArea> </MainArea>
