import styled from 'styled-components'
import { oShadow } from '../misc/colors'

export const MainArea = styled.main`
  grid-row: 2;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 26px;
  padding-bottom: 55px;
`
export const RecipeContainer = styled.div`
  margin: 30px 20px 0;
`

// Stage
export const StageContainer = styled.div`
  margin-bottom: 30px;
  border-radius: 14px;
  box-shadow: 0 5px 4px 2px ${oShadow};
`
export const StageInnerContainer = styled.div`
  border-radius: 14px;
  margin: 8px;
`
export const TitleImage = styled.img`
  width: 100%;
  margin-top: 15px;
`
export const BasicDataGrid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(3, 58px);
  align-items: center;
`
export const YieldKey = styled.p`
  grid-column: 1;
  grid-row: 1;
  margin: 0;
`
export const YieldValueDiv = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: center;
`
export const YieldValueP = styled.p`
  margin: 0 0 0 5px;
`
export const TimeKey = styled.p`
  grid-column: 1;
  grid-row: 2;
  margin: 0;
`
export const TimeValueDiv = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
`
export const TimeValueP = styled.p`
  margin: 0 0 0 5px;
`
export const DifficultyKey = styled.p`
  grid-column: 1;
  grid-row: 3;
  margin: 0;
`
export const DifficultyValue = styled.div`
  grid-column: 2;
  grid-row: 3;
`
export const TagsDiv = styled.div`
  padding: 10px 0 5px 0;
`
