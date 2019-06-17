import styled from 'styled-components';

export const HeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Arrow = styled.img`
  height: 15px;
  margin: 0 15px 0;
`;

// Convert
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 30% 30%;
  grid-template-rows: 1fr;
  margin-bottom: 15px;
`;
export const ContainerLeft = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
`;
export const ContainerMiddle = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
`;
export const ContainerRight = styled.div`
  grid-column: 3;
  display: flex;
  flex-direction: column;
`;
export const HeaderElement = styled.p`
  margin: 0;
  text-decoration: underline;
`;
export const Element = styled.p`
  margin: 0;
`;
