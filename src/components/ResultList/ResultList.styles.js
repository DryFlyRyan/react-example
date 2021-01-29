import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  flex: 70% 1 1;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 30% 1 1;
`;

export const PaginationButton = styled.button`
  min-height: 50px;
  height: 50px;
  max-width: 50px;
  width: 50px;
  border-radius: 0 10px 10px 0;
  border: 2px solid #65696c;
  background: #65696c;

  transition: all 0.2s;

  :hover {
    background: #fff;
    border-color: #000;
    cursor: pointer;
    > * {
      color: #000;
    }
  }

  :first-child {
    margin-right: 3px;
    border-radius: 10px 0 0 10px;
  }

  :disabled {
    background: #cacaca;
    border-color: #cacaca;
    cursor: initial;
    > * {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const PaginationButtonIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  transition: all 0.2s;
  color: rgba(255, 255, 255, 0.7)
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