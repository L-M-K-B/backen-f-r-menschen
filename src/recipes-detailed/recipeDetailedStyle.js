import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { borderRadius, defaultFontSize } from '../misc/styleVariables';
import { font, orange, white } from '../misc/colors';

// Stage
export const Favorite = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;
export const TitleImage = styled.img`
  width: 100%;
  margin-top: 15px;
  border-radius: ${borderRadius};
`;
export const BasicDataGrid = styled.div`
  @media (max-width: 374px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: repeat(3, 58px);
    align-items: center;
  }
`;
export const YieldKey = styled.p`
  margin: 0;
  @media (min-width: 375px) {
    grid-column: 1;
    grid-row: 1;
  }
`;
export const YieldValueDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 374px) {
    margin-bottom: 15px;
  }

  @media (min-width: 375px) {
    grid-column: 2;
    grid-row: 1;
  }
`;
export const YieldValueP = styled.p`
  margin: 0 0 0 5px;
`;
export const TimeKey = styled.p`
  margin: 0;

  @media (min-width: 375px) {
    grid-column: 1;
    grid-row: 2;
  }
`;
export const TimeValueDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 374px) {
    margin-bottom: 15px;
  }
  @media (min-width: 375px) {
    grid-column: 2;
    grid-row: 2;
  }
`;
export const TimeValueP = styled.p`
  margin: 0 0 0 5px;
`;
export const DifficultyKey = styled.p`
  margin: 0;
  @media (min-width: 375px) {
    grid-column: 1;
    grid-row: 3;
  }
`;
export const DifficultyValue = styled.div`
  @media (min-width: 375px) {
    grid-column: 2;
    grid-row: 3;
  }
`;
export const StyledTagList = styled.div`
  align-self: center;

  @media (min-width: 375px) {
    grid-column: 1 / span 12;
    grid-row: 7 / span 1;
  }
`;

export const TagsDiv = styled.div`
  padding: 10px 0 5px 0;
`;

// List of ingredients, Short Description
export const LinkButton = styled(Link)`
  position: relative;
  top: 30px;
  text-decoration: none;

  @media (min-width: 375px) {
    left: 150px;
  }
`;
export const ButtonLabel = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  height: 57px;
  width: 130px;
  border: none;
  border-radius: ${borderRadius};
  background-color: ${orange};
  color: ${white};
  font-size: ${defaultFontSize};
  text-align: center;
`;

// Notes Area
export const NotesForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadius};
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
  border-radius: ${borderRadius};
  font-size: ${defaultFontSize};
  color: ${font};
  &::placeholder {
    color: ${font};
    font-family: 'Roboto', sans-serif;
    font-size: ${defaultFontSize};
  }
  &:focus {
    outline: none;
    border: 1px solid ${orange};
    border-radius: ${borderRadius};
  }
`;
export const Button = styled.button`
  position: relative;
  top: 30px;
  height: 57px;
  width: 130px;
  border: none;
  border-radius: ${borderRadius};
  background-color: ${orange};
  color: ${white};
  font-size: ${defaultFontSize};

  @media (min-width: 375px) {
    left: 150px;
  }

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
