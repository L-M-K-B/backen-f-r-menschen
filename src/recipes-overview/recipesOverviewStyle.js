import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { font, oShadow, pShadow, white } from '../misc/colors';

export const MainArea = styled.main`
  grid-row: 2;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 26px;
  padding-bottom: 55px;
`;
export const ListContainer = styled.div`
  width: 335px;
  margin: 25px 20px 0;
`;

// Filtersection
export const FilterSection = styled.section`
  background-color: ${pShadow};
`;
export const FButton = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 14px;
  box-shadow: 0 5px 4px 2px ${oShadow};
  background-color: ${white};
`;

// SingleRecipeOverview
export const OverviewContainer = styled.div`
  height: 235px;
  margin: 0 0 20px 0;
  border-radius: 14px;
  box-shadow: 0 5px 4px 2px ${oShadow};
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);
  border-radius: 14px;
  margin: 8px;
`;

export const LinkToSingleRecipe1 = styled(Link)`
  grid-column: 1 / span 10;
  grid-row: 1 / span 2;
  align-self: center;
  text-decoration: none;
`;
export const LinkToSingleRecipe2 = styled(Link)`
  grid-column: 1 / span 6;
  grid-row: 3 / span 5;
`;
export const Favorite = styled.div`
  grid-column: 11 / span 2;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 125px;
  border-radius: 14px;
`;
export const Name = styled.p`
  margin: 0;
  font-family: 'Domine', serif;
  font-size: 24px;
  color: ${font};
`;
export const TimeEfford = styled.div`
  grid-column: 7 / span 6;
  grid-row: 3 / span 4;
`;
export const Label = styled.p`
  margin: 0 0 2px;
`;
export const Time = styled.div`
  margin: 0 0 15px 0;
`;
export const WatchMinutes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Stopwatch = styled.img`
  margin: 0 5px 0 0;
  width: 15%;
`;
export const Difficulty = styled.div`
  margin: 0 0 15px 0;
`;
export const Cookie = styled.img`
  margin: 0 3px 0 0;
  height: 18%;
  width: 18%;
`;
export const StyledTagList = styled.div`
  grid-column: 1 / span 12;
  grid-row: 7 / span 1;
  align-self: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
