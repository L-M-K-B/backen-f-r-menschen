import React from 'react'
import styled from 'styled-components'

const StyledTagList = styled.div`
  margin: 10px 0 0;
  padding: 5px 0 0;
`

export default function Tags({ tags }) {
  return <StyledTagList>{tags.join('  ●  ')}</StyledTagList>
}
