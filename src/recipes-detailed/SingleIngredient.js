import React from 'react';
import { IngredientP } from './recipeDetailedStyle';

export default function SingleIngredient({ ingredient }) {
  return <IngredientP>{ingredient.slice(0, 3).join(' ')}</IngredientP>;
}
