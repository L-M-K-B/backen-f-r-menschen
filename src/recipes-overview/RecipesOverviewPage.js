import React /*useState, useEffect*/ from 'react';
//import { getLocal, setLocal } from '../services';
import { MainArea, ListContainer, FilterSection } from './recipesOverviewStyle';

import ListOfRecipes from './ListOfRecipes';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';
import FilterBtn from './FilterBtn';

import IconPieListActive from '../images/IconPieListActive.png';
import IconChef from '../images/IconChef.png';
//import IconFavoriteActive from '../images/IconFavoriteActive.png';

export default function RecipesOverviewPage({
  recipesList,
  favoritesList,
  onToggleFavorite,
}) {
  /*const favFilterOptions = [
    { id: 'all', label: 'All' },
    { id: 'favorite', label: 'Favorites' },
  ];

  const [favFilter, setFavFilter] = useState(
    getLocal(favFilterOptions) || 'all'
  );

  useEffect(() => {
    setLocal('favFilter', favFilter);
  }, [favFilter]);

  function handleFavFilter() {
    setFavFilter();
  }*/

  return (
    <>
      <Header title="List of Recipes" />
      <MainArea>
        <ListContainer>
          <FilterSection>
            <FilterBtn />
          </FilterSection>
          <ListOfRecipes
            recipesList={recipesList}
            favoritesList={favoritesList}
            onToggleFavorite={onToggleFavorite}
          />
        </ListContainer>
      </MainArea>
      <Footer srcIconPieList={IconPieListActive} srcIconChef={IconChef} />
    </>
  );
}
