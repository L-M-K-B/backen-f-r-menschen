import React from 'react'

export default function SingleIngredient({ ingredient }) {
  return <p>{ingredient.join(' ')}</p>
}
