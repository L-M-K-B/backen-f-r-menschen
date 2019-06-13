import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import { font, pink, oShadow, pShadow, white } from '../misc/colors';

export const GridOverview = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  height: 100vh;
`;
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

// FilterArea
export const FilterAreaContainer = styled.div`
  border-radius: 14px;
  margin: 30px 0 20px;
  box-shadow: 0 4px 4px 0px ${pShadow};
`;
export const FilterAreaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 335px;
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterIcon = styled.img`
  height: 50px;
  margin: 0 10px 0 15px;
`;
export const Arrow = styled.img`
  height: 15px;
  margin-right: 15px;
`;
export const FilterAreaOpen = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const FavFilterButton = styled.button`
  height: 40px;
  width: 150px;
  margin: 10px 0;
  border: 2px solid ${pink};
  border-radius: 14px;
  background-color: ${white};
  font-size: 16px;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const TagDropdown = styled(Dropdown)`
  width: 150px;
  max-height: 100px;
  overflow-y: scroll;
  margin: 10px 0;
  padding: 8px;
  border: 2px solid ${pink};
  border-radius: 14px;
  background-color: ${white};
  font-size: 16px;
  text-align: center;
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
