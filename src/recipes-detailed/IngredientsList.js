import React from 'react'
import SingleIngredient from './SingleIngredient'

export default function IngredientList({ recipe }) {
  const { ingredients } = recipe
  return (
    <div>
      <p>Zutatenliste</p>
      {ingredients.map(ingredient => (
        <SingleIngredient
          key={ingredient[0] + ingredient[2]}
          ingredient={ingredient}
        />
      ))}
    </div>
  )
}
