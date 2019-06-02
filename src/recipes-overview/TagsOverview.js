import React from 'react'
import { StyledTagList } from './recipesOverviewStyle'

export default function Tags({ tags }) {
  return <StyledTagList>{tags.join('  ●  ')}</StyledTagList>
}
