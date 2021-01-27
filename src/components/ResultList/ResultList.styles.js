import styled from 'styled-components';

export const TopBar = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 95%;
    max-width: 95%;
  }
`;

export const CountText = styled.h3`
  font-size: 20px;
`;

export const StyledResultListContainer = styled.div`
  box-sizing: padding-box;
  margin: auto;
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`

`;