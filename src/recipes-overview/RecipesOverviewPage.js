import React from 'react';

import {
  MainArea,
  ListContainer,
  FilterSection,
  FavFilterButton,
  TagDropdown,
} from './recipesOverviewStyle';

import ListOfRecipes from './ListOfRecipes';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

import IconPieListActive from '../images/IconPieListActive.png';
import IconChef from '../images/IconChef.png';
//import IconFavoriteActive from '../images/IconFavoriteActive.png';

export default function RecipesOverviewPage({
  recipesList,
  favoritesList,
  favFilterStatus,
  onToggleFavFilterStatus,
  onToggleFavorite,
}) {
  //const exampleOptions = ['vegan', 'sweet', 'hearty'];
  const dropdownTagList = createTagList();

  function createTagList() {
    const everyTagArray = recipesList.map(recipe => recipe.tags);
    const everyTagString = everyTagArray.join(',');
    const everyTag = everyTagString.split(',');
    return getUniqueTags(everyTag);
  }

  function getUniqueTags(arr) {
    const uniqueTags = [];
    arr.map(element => {
      !uniqueTags.includes(element) && uniqueTags.push(element);
    });
    return uniqueTags;
  }

  return (
    <>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <FilterSection>
            <FavFilterButton
              onClick={() => {
                onToggleFavFilterStatus(!favFilterStatus);
              }}
            >
              {favFilterStatus
                ? 'These are your favorites'
                : 'This is a general list'}
            </FavFilterButton>
            <TagDropdown options={dropdownTagList} />
          </FilterSection>
          <ListOfRecipes
            recipesList={recipesList}
            favoritesList={favoritesList}
            favFilterStatus={favFilterStatus}
            onToggleFavorite={onToggleFavorite}
          />
        </ListContainer>
      </MainArea>
      <Footer srcIconPieList={IconPieListActive} srcIconChef={IconChef} />
    </>
  );
}
/*btnLabel={
 */
