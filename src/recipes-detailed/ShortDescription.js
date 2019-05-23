import React from 'react'

export default function ShortDescription({ recipe }) {
  const { shortDescription } = recipe
  return (
    <div>
      {shortDescription.map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </div>
  )
}
