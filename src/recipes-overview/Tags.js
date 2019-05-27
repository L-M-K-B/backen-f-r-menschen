import React from 'react'
import { StyledTagList } from './RecipesOverviewStyle'

export default function Tags({ tags }) {
  return <StyledTagList>{tags.join('  ●  ')}</StyledTagList>
}
