import styled from 'styled-components';
import { font, oShadow, orange, white } from '../misc/colors';

export const MainArea = styled.main`
  grid-row: 2;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 26px;
  padding-bottom: 55px;
`;
export const RecipeContainer = styled.div`
  width: 335px;
  margin: 30px 20px 0;
`;
export const BoxContainer = styled.div`
  margin-bottom: 30px;
  padding: 1px 0;
  border-radius: 14px;
  box-shadow: 0 5px 4px 2px ${oShadow};
`;
export const BoxInnerContainer = styled.div`
  border-radius: 14px;
  margin: 8px;
`;
export const Button = styled.button`
  position: relative;
  top: 38px;
  left: 150px;
  height: 65px;
  width: 145px;
  border: none;
  border-radius: 14px;
  background-color: ${orange};
  color: ${white};
  font-size: 16px;

  &:active {
    border: 2px solid ${orange};
    background-color: ${white};
    color: ${orange};
    transform: scale(0.95);
  }

  &:focus {
    border: 2px solid ${orange};
    background-color: ${white};
    color: ${orange};
    outline: none;
  }
`;

// Stage
export const Favorite = styled.div`
  position: relative;
  left: 275px;
  margin: 0;
`;
export const TitleImage = styled.img`
  width: 100%;
  margin-top: 15px;
`;
export const BasicDataGrid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(3, 58px);
  align-items: center;
`;
export const YieldKey = styled.p`
  grid-column: 1;
  grid-row: 1;
  margin: 0;
`;
export const YieldValueDiv = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: center;
`;
export const YieldValueP = styled.p`
  margin: 0 0 0 5px;
`;
export const TimeKey = styled.p`
  grid-column: 1;
  grid-row: 2;
  margin: 0;
`;
export const TimeValueDiv = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
`;
export const TimeValueP = styled.p`
  margin: 0 0 0 5px;
`;
export const DifficultyKey = styled.p`
  grid-column: 1;
  grid-row: 3;
  margin: 0;
`;
export const DifficultyValue = styled.div`
  grid-column: 2;
  grid-row: 3;
`;
export const TagsDiv = styled.div`
  padding: 10px 0 5px 0;
`;

// List of ingredients, Short Description
export const Headline = styled.p`
  font-family: 'Domine', serif;
  font-size: 24px;
`;

// Notes Area
export const NotesForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  margin: 8px;
`;
export const NotesLabel = styled.label`
  margin: 1em 0;
  font-family: 'Domine', serif;
  font-size: 24px;
`;
export const NotesArea = styled.textarea`
  min-height: 200px;
  margin: 0 5px 0;
  padding: 8px;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  color: ${font};

  &:focus {
    outline: none;
    border: 1px solid ${orange};
    border-radius: 14px;
  }
`;
