import React from 'react'
import { StyledTagList } from './SingleRecipeOverview-style'

export default function Tags({ tags }) {
  return <StyledTagList>{tags.join('  ●  ')}</StyledTagList>
}
