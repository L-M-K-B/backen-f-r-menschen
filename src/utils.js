export function getIndex(favoritesList, id) {
  const index = favoritesList.findIndex(favorite => id === favorite.id);
  return index;
}
