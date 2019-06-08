function filterFavRecipes(recipesList, favoritesList, favFilterStatus) {
  if (favFilterStatus === true) {
    const actualFavorites = favoritesList.map(favorite => {
      if (favorite.status === true) {
        return favorite.id;
      }
    });
    const filteredFavRecipes = recipesList.filter(
      recipe => actualFavorites.includes(recipe._id) === true
    );
    return filteredFavRecipes.length > 0 ? filteredFavRecipes : recipesList;
  } else {
    return recipesList;
  }
}

function filterTagRecipes(recipesList, favRecipesList, tagFilter) {
  if (tagFilter !== 'no tag selected' && tagFilter !== '') {
    const filteredTagRecipes = [];
    favRecipesList.map(recipe => {
      if (recipe.tags.includes(tagFilter) === true) {
        filteredTagRecipes.push(recipe);
      }
    });
    return filteredTagRecipes;
  } else {
    return favRecipesList.length > 0 ? favRecipesList : recipesList;
  }
}

export function Filters(
  recipesList,
  favoritesList,
  favFilterStatus,
  tagFilter
) {
  const favRecipesList = filterFavRecipes(
    recipesList,
    favoritesList,
    favFilterStatus
  );
  const tagRecipesList = filterTagRecipes(
    recipesList,
    favRecipesList,
    tagFilter
  );
  return tagRecipesList;
}
