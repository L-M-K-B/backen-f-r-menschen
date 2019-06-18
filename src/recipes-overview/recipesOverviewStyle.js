import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import {
  font,
  pink,
  oShadow,
  pShadow,
  white,
  pinkBoxShadow,
  orangeBoxShadow,
  borderRadius,
  defaultFontSize,
} from '../common/styleVariables';

// FilterArea
export const FilterAreaContainer = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
  margin: 10px 0 30px;
  box-shadow: ${pinkBoxShadow} ${pShadow};
`;
export const FilterAreaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
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

  @media (max-width: 374px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 375px) {
    justify-content: space-evenly;
  }
`;
export const FavFilterButton = styled.button`
  height: 40px;
  width: 150px;
  margin: 5px 10px;
  border: 2px solid ${pink};
  border-radius: ${borderRadius};
  background-color: ${white};
  font-size: ${defaultFontSize};

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
  margin: 5px 10px;
  padding: 8px;
  border: 2px solid ${pink};
  border-radius: ${borderRadius};
  background-color: ${white};
  font-size: ${defaultFontSize};
  text-align: center;
`;

// SingleRecipeOverview
export const OverviewContainer = styled.div`
  margin: 0 0 20px 0;
  border-radius: ${borderRadius};
  box-shadow: ${orangeBoxShadow} ${oShadow};

  @media (min-width: 375px) {
    height: 235px;
  }
`;
export const GridContainer = styled.div`
  @media (max-width: 374px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 5px;
  }
  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(7, 1fr);
    border-radius: ${borderRadius};
    margin: 8px;
  }
`;

export const LinkToSingleRecipe1 = styled(Link)`
  text-decoration: none;

  @media (min-width: 375px) {
    grid-column: 1 / span 10;
    grid-row: 1 / span 2;
    align-self: center;
  }
`;
export const LinkToSingleRecipe2 = styled(Link)`
  @media (min-width: 375px) {
    grid-column: 1 / span 6;
    grid-row: 3 / span 5;
  }
`;
export const Favorite = styled.div`
  @media (min-width: 375px) {
    grid-column: 11 / span 2;
    grid-row: 1 / span 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Image = styled.img`
  width: 125px;
`;
export const Name = styled.p`
  margin: 0;
  font-family: 'Domine', serif;
  font-size: 24px;
  color: ${font};
`;
export const TimeEfford = styled.div`
  @media (max-width: 374px) {
    display: flex;
  }
  @media (min-width: 375px) {
    grid-column: 7 / span 6;
    grid-row: 3 / span 4;
  }
`;
export const Label = styled.p`
  margin: 0 0 2px;
`;
export const Time = styled.div`
  @media (max-width: 374px) {
    margin: 0 10px 15px 0;
  }
  @media (min-width: 375px) {
    margin-bottom: 15px;
  }
`;
export const WatchMinutes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Stopwatch = styled.img`
  margin: 0 5px 0 0;
  @media (min-width: 375px) {
    width: 15%;
  }
`;
export const Difficulty = styled.div`
  margin: 0 0 15px 0;
`;
export const Cookie = styled.img`
  margin: 0 3px 0 0;
  @media (min-width: 375px) {
    height: 18%;
    width: 18%;
  }
`;
export const StyledTagList = styled.div`
  @media (min-width: 375px) {
    margin-bottom: 5px;
  }
  @media (min-width: 375px) {
    grid-column: 1 / span 12;
    grid-row: 7 / span 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-self: center;
  }
`;
