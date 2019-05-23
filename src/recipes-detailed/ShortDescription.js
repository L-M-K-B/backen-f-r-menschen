import React from 'react'

export default function ShortDescription({ recipe }) {
  const { shortDescription } = recipe
  console.log(shortDescription)
  return (
    <div>
      {shortDescription.map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </div>
  )
}
